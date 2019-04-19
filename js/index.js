//Loading Checkpoints
var drum_machine = new mm.MusicRNN('https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/drum_kit_rnn');
drum_machine.initialize();
var music_machine = new mm.MusicRNN('https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/melody_rnn');
music_machine.initialize();


//Initializing UI Components
var seqWidth = window.innerWidth - 400;
var seqHeight = window.innerHeight - 150;

var grandSequencer = new Nexus.Sequencer('#grandMatrix', {
    'size': [seqWidth, seqHeight],
    'mode': 'toggle',
    'rows': 45,
    'columns': 32
});
grandSequencer.colorize("accent","#FF6F00");
grandSequencer.colorize("fill","#37474F");

var dialerVar = new Nexus.Dial('#dialerVar' ,{
  'size': [50,50],
  'interaction': 'radial',
  'mode': 'relative', 
  'min': 0.5,
  'max': 2,
  'step': 0.1,
'value': 1
});
dialerVar.colorize("accent","#FF6F00");
var numberVar= new Nexus.Number('#numberVar');
numberVar.link(dialerVar);

var dialerTemp = new Nexus.Dial('#dialerTemp' ,{
  'size': [50,50],
  'interaction': 'radial', 
  'mode': 'relative', 
  'min': 100,
  'max': 400,
  'step': 20,
'value': 200
});
dialerTemp.colorize("accent","#FFA800");
var numberTemp = new Nexus.Number('#numberTemp');
numberTemp.link(dialerTemp);

//button functions declaration
document.getElementById("btnPlay").onclick = function() {playSequence()};
document.getElementById("btnStop").onclick = function() {stopSequence()};
document.getElementById("btnGenerate").onclick = function() {generateMusic()};

//initialize sounds
var drum_kick = new Tone.Player("sounds/kick.mp3").toMaster();
var drum_snare = new Tone.Player("sounds/snare.mp3").toMaster();

var drum_tom_high = new Tone.Player("sounds/tom-high.mp3").toMaster();
var drum_tom_mid = new Tone.Player("sounds/tom-mid.mp3").toMaster();
var drum_tom_low = new Tone.Player("sounds/tom-low.mp3").toMaster();

var drum_hihat_open = new Tone.Player("sounds/hihat-open.mp3").toMaster();
var drum_hihat_closed = new Tone.Player("sounds/hihat-closed.mp3").toMaster();

var drum_clap = new Tone.Player("sounds/clap.mp3").toMaster();
var drum_ride = new Tone.Player("sounds/ride.ogg").toMaster();

var toneynth = new Tone.Synth().toMaster();


//initializing variables

function playSequence() {
	grandSequencer.start(200);
	document.getElementById("btnStop").disabled = false;
	document.getElementById("btnPlay").disabled = true;
}

function stopSequence() {
	grandSequencer.stop();
	document.getElementById("btnPlay").disabled = false;
	document.getElementById("btnStop").disabled = true;
}

async function generateMusic() {
	if (drum_machine.isInitialized() == true) {
		/*let drumSeq = await drum_machine.sample(1, 0.5);
		mm.Player().start(drumseq);
		console.log(JSON.stringify(drumSeq));*/
		grandSequencer.matrix.populate.all([0, 0]);
		
		var music_qns = mm.sequences.quantizeNoteSequence(Melody5, 1);
		
		var drumSeq = await drum_machine.continueSequence(Drumkit1, 32, 1);
		var melodySeq = await music_machine.continueSequence(music_qns, 32, 1);
		
		console.log(JSON.stringify(melodySeq));
			
			for (var i = 0; drumSeq.notes.length > i; i++) {
                    var counters = drumSeq.notes[i].quantizedStartStep;
                    var pitch = drumSeq.notes[i].pitch;
                    var rowCell = 0;

                    switch (pitch) {
                        case 36:
                            rowCell = 0;
                            break;
                        case 38:
                            rowCell = 1;
                            break;
                        case 50:
                            rowCell = 2;
                            break;
                        case 48:
                            rowCell = 3;
                            break;
                        case 45:
                            rowCell = 4;
                            break;
                        case 46:
                            rowCell = 5;
                            break;
                        case 42:
                            rowCell = 6;
                            break;
                        case 39:
                            rowCell = 7;
                            break;
                        case 51:
                            rowCell = 8;
                            break;
                    }
					//new mm.Player().start(drumSeq);

                    grandSequencer.matrix.set.cell(counters, rowCell, 1);
					//console.log("Column:"+counters+" Row:" + rowCell);
                }
				
				
				for (var i = 0; melodySeq.notes.length > i; i++) {
                    var counters = melodySeq.notes[i].quantizedStartStep;
                    var pitch = melodySeq.notes[i].pitch;
                    var rowCell = pitch - 48;
					
					//new mm.Player().start(drumSeq);

                    grandSequencer.matrix.set.cell(counters, rowCell, 1);
					console.log("Column:"+counters+" Row:" + rowCell);
                }
				
				

		
		/*const teapot = await mm.urlToNoteSequence("midi/DRUM1.mid");
		const drums_qns = mm.sequences.quantizeNoteSequence(teapot, 4);
		drum_machine.continueSequence(drums_qns, 32, 0.5).then((drumSeq) => {
			console.log("in");
			new mm.Player().start(drumSeq);
		console.log(JSON.stringify(drumSeq));
		});*/
	}
}

grandSequencer.on('step', function(v) {
    //console.log(v);
    if (v[45] == 1) {
        drum_kick.start();
    }
	if (v[44] == 1) {
        drum_snare.start();
    }
	if (v[43] == 1) {
        drum_tom_high.start();
    }
	if (v[42] == 1) {
        drum_tom_mid.start();
    }
	if (v[41] == 1) {
        drum_tom_low.start();
    }
	if (v[40] == 1) {
        drum_hihat_open.start();
    }
	if (v[39] == 1) {
        drum_hihat_closed.start();
    }
	if (v[38] == 1) {
        drum_clap.start();
    }
	if (v[37] == 1) {
        drum_ride.start();
    }
	if (v[0] == 1) {
        toneynth.triggerAttackRelease('A#3', '8n');
    }

});