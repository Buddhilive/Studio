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

function musicGenerate() {
    new mm.urlToNoteSequence(midiUrl).then((seq) => {
        //console.log(JSON.stringify(seq));
        //new mm.Player().start(seq);
        if (music_rnn.isInitialized() == true) {
            console.log("Generating!");
            const qns = mm.sequences.quantizeNoteSequence(seq, 1);

            music_rnn
                .continueSequence(qns, genSteps, genTemp)
                .then((sample) => {
                console.log(JSON.stringify(sample));
                const midiB = mm.sequenceProtoToMidi(sample);
                const fileB = new Blob([midiB], {type: 'audio/midi'});
                saveAs(fileB, 'trio.mid');
                console.log("Done!");
            });

        } else {
            console.log("not initialized")
        }
    });
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

var music_rnn = new mm.MusicRNN('https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/melody_rnn');
music_rnn.initialize();