/*var midiSelector = new Nexus.Select('#midiSelector',{
    'size': [200,40],
    'options': ['Melody01', 'Melody02']
});*/

var numberSteps = new Nexus.Number('#numberSteps');
var numberTemp = new Nexus.Number('#numberTemp');

var dialerSteps = new Nexus.Dial('#dialerSteps',{
    'size': [75,75],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 4,
    'max': 32,
    'step': 1,
    'value': 16
});

numberSteps.link(dialerSteps);

var dialerTemp = new Nexus.Dial('#dialerTemp',{
    'size': [75,75],
    'interaction': 'radial',
    'mode': 'relative',
    'min': 0.5,
    'max': 2,
    'step': 0.1,
    'value': 1
});

numberTemp.link(dialerTemp);

document.getElementById("btnGenerate").onclick = function() {musicGenerate()};

var midiUrl = "";
var genSteps = numberSteps.value;
var genTemp = numberTemp.value;

/*midiSelector.on('change',function(v) {
    midiUrl = "../midi/melody/" + v.value + ".mid";
    console.log(midiUrl);
});*/

async function finco() {
  const teapot = await mm.urlToNoteSequence("../midi/melody/Barbie.midi");
  return teapot;
}

async function musicGenerate() {
	genSteps = numberSteps.value;
genTemp = numberTemp.value;

        if (music_rnn.isInitialized() == true) {
            console.log("Generating!");
            //const qns = mm.sequences.quantizeNoteSequence(seq, 1);
			const teapot = await mm.urlToNoteSequence("../midi/melody/Rolling.midi");
			const star = mm.sequences.quantizeNoteSequence(teapot, 4);
			const qns = await finco();
			//console.log(qns);
  
  const drums_qns = mm.sequences.quantizeNoteSequence(qns, 4);
  
   /*music_rnn
            .continueSequence(drums_qns, 16, 1)
            .then((sample) => {
				const midiA = mm.sequenceProtoToMidi(sample);
                const fileA = new Blob([midiA], {type: 'audio/midi'});
                saveAs(fileA, 'buddhilive1.mid');				
			});*/
			

            music_rnn
                .interpolate([star, drums_qns], 4, 1)
                .then((sample) => {
					const fullSample = mm.sequences.concatenate(sample);
                const midiB = mm.sequenceProtoToMidi(fullSample);
                const fileB = new Blob([midiB], {type: 'audio/midi'});
                saveAs(fileB, 'namobuddhaya.mid');
                console.log("Done!");
            });

        } else {
            console.log("not initialized")
        }
}

function previewFile() {
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
    console.log(file.name +  " is " + file.size/1024 + "kb");

    reader.addEventListener("load", function () {
        //var playFile = new mm.midiToSequenceProto(reader.result);
        //new mm.Player().start(playFile);
        midiUrl = reader.result;
        console.log(midiUrl);
    }, false);

    if (file) {
        //reader.readAsBinaryString(file);
        reader.readAsDataURL(file);
    }

}

/*var music_vae = new mm.MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/mel_16bar_small_q2');
music_vae.initialize();*/

var music_rnn = new mm.MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/mel_4bar_med_q2');
music_rnn.initialize();