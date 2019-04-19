
//Initializing UI Components
var seqWidth = window.innerWidth - 350;
var seqHeight = window.innerHeight - 90;

var grandSequencer = new Nexus.Sequencer('#grandMatrix', {
    'size': [seqWidth, seqHeight],
    'mode': 'toggle',
    'rows': 32,
    'columns': 16
});
grandSequencer.colorize("accent","#FF6F00");

var dialerVar = new Nexus.Dial('#dialerVar' ,{
  'size': [dialHeight,dialHeight],
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
  'size': [dialHeight,dialHeight],
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