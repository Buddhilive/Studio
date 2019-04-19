var Melody1 = {
  notes: [
    {pitch: 60, startTime: 0.0, endTime: 0.5},
    {pitch: 60, startTime: 0.5, endTime: 1.0},
    {pitch: 67, startTime: 1.0, endTime: 1.5},
    {pitch: 67, startTime: 1.5, endTime: 2.0},
    {pitch: 69, startTime: 2.0, endTime: 2.5},
    {pitch: 69, startTime: 2.5, endTime: 3.0},
    {pitch: 67, startTime: 3.0, endTime: 4.0},
    {pitch: 65, startTime: 4.0, endTime: 4.5},
    {pitch: 65, startTime: 4.5, endTime: 5.0},
    {pitch: 64, startTime: 5.0, endTime: 5.5},
    {pitch: 64, startTime: 5.5, endTime: 6.0},
    {pitch: 62, startTime: 6.0, endTime: 6.5},
    {pitch: 62, startTime: 6.5, endTime: 7.0},
    {pitch: 60, startTime: 7.0, endTime: 8.0},  
  ],
  totalTime: 8
};

var Melody2 = {
  notes: [
    {pitch: 60, startTime: 0.0, endTime: 0.5},
    {pitch: 60, startTime: 0.5, endTime: 1.0},
    {pitch: 64, startTime: 1.0, endTime: 1.5},
    {pitch: 64, startTime: 1.5, endTime: 2.0},
    {pitch: 62, startTime: 2.0, endTime: 2.5},
    {pitch: 62, startTime: 2.5, endTime: 3.0},
    {pitch: 64, startTime: 3.0, endTime: 4.0},
    {pitch: 60, startTime: 4.0, endTime: 4.5},
    {pitch: 60, startTime: 4.5, endTime: 5.0},
    {pitch: 62, startTime: 5.0, endTime: 5.5},
    {pitch: 62, startTime: 5.5, endTime: 6.0},
    {pitch: 64, startTime: 6.0, endTime: 8.0}, 
  ],
  totalTime: 8
};

var Melody3 = {
  notes: [
    {pitch: 64, startTime: 0.0, endTime: 0.5},
    {pitch: 64, startTime: 0.5, endTime: 1.0},
    {pitch: 64, startTime: 1.0, endTime: 1.5},
    {pitch: 62, startTime: 1.5, endTime: 2.0},
    {pitch: 60, startTime: 2.0, endTime: 2.5},
    {pitch: 60, startTime: 2.5, endTime: 3.5},
    {pitch: 62, startTime: 3.5, endTime: 4.0},
    {pitch: 69, startTime: 4.0, endTime: 5.0},
    {pitch: 69, startTime: 5.0, endTime: 5.5},
    {pitch: 69, startTime: 5.5, endTime: 6.0},
    {pitch: 65, startTime: 6.0, endTime: 7.0},
    {pitch: 65, startTime: 7.0, endTime: 8.0},
    {pitch: 67, startTime: 8.0, endTime: 10.0},
 
  ],
  totalTime: 10
};

var Melody4 = {
  notes: [
  {pitch: 64, quantizedStartStep: 0, quantizedEndStep: 1},
            {pitch: 62, quantizedStartStep: 1, quantizedEndStep: 2},
            {pitch: 64, quantizedStartStep: 2, quantizedEndStep: 3},
            {pitch: 65, quantizedStartStep: 3, quantizedEndStep: 4},
            {pitch: 67, quantizedStartStep: 4, quantizedEndStep: 8},
            {pitch: 60, quantizedStartStep: 16, quantizedEndStep: 17},
            {pitch: 59, quantizedStartStep: 17, quantizedEndStep: 18},
            {pitch: 60, quantizedStartStep: 18, quantizedEndStep: 19},
            {pitch: 62, quantizedStartStep: 19, quantizedEndStep: 20},
            {pitch: 64, quantizedStartStep: 20, quantizedEndStep: 24},
 
  ],
  quantizationInfo: {stepsPerQuarter: 4},
  tempos: [{time: 0, qpm: 120}],
  totalQuantizedSteps: 24
};

var Melody5 = {
  notes: [
  {pitch: 48, quantizedStartStep: 0, quantizedEndStep: 2},
            {pitch: 52, quantizedStartStep: 2, quantizedEndStep: 4},
            {pitch: 55, quantizedStartStep: 4, quantizedEndStep: 6},
            {pitch: 60, quantizedStartStep: 6, quantizedEndStep: 8},
            {pitch: 64, quantizedStartStep: 8, quantizedEndStep: 10},
            {pitch: 67, quantizedStartStep: 10, quantizedEndStep: 12},
            {pitch: 64, quantizedStartStep: 12, quantizedEndStep: 14},
            {pitch: 60, quantizedStartStep: 14, quantizedEndStep: 16},
            {pitch: 57, quantizedStartStep: 16, quantizedEndStep: 18},
            {pitch: 60, quantizedStartStep: 18, quantizedEndStep: 20},
            {pitch: 64, quantizedStartStep: 20, quantizedEndStep: 22},
            {pitch: 69, quantizedStartStep: 22, quantizedEndStep: 24},
            {pitch: 72, quantizedStartStep: 24, quantizedEndStep: 26},
            {pitch: 76, quantizedStartStep: 26, quantizedEndStep: 28},
            {pitch: 72, quantizedStartStep: 28, quantizedEndStep: 30},
            {pitch: 69, quantizedStartStep: 30, quantizedEndStep: 32}
 
  ],
  quantizationInfo: {stepsPerQuarter: 4},
  tempos: [{time: 0, qpm: 120}],
  totalQuantizedSteps: 32
};



var Drumkit1 = {
  notes: [
    { pitch: 36, quantizedStartStep: 0, quantizedEndStep: 1, isDrum: true },
    { pitch: 38, quantizedStartStep: 0, quantizedEndStep: 1, isDrum: true },
    { pitch: 42, quantizedStartStep: 0, quantizedEndStep: 1, isDrum: true },
    { pitch: 46, quantizedStartStep: 0, quantizedEndStep: 1, isDrum: true },
    { pitch: 42, quantizedStartStep: 2, quantizedEndStep: 3, isDrum: true },
    { pitch: 42, quantizedStartStep: 3, quantizedEndStep: 4, isDrum: true },
    { pitch: 42, quantizedStartStep: 4, quantizedEndStep: 5, isDrum: true },
    { pitch: 50, quantizedStartStep: 4, quantizedEndStep: 5, isDrum: true },
    { pitch: 36, quantizedStartStep: 6, quantizedEndStep: 7, isDrum: true },
    { pitch: 38, quantizedStartStep: 6, quantizedEndStep: 7, isDrum: true },
    { pitch: 42, quantizedStartStep: 6, quantizedEndStep: 7, isDrum: true },
    { pitch: 45, quantizedStartStep: 6, quantizedEndStep: 7, isDrum: true },
    { pitch: 36, quantizedStartStep: 8, quantizedEndStep: 9, isDrum: true },
    { pitch: 42, quantizedStartStep: 8, quantizedEndStep: 9, isDrum: true },
    { pitch: 46, quantizedStartStep: 8, quantizedEndStep: 9, isDrum: true },
    { pitch: 42, quantizedStartStep: 10, quantizedEndStep: 11, isDrum: true },
    { pitch: 48, quantizedStartStep: 10, quantizedEndStep: 11, isDrum: true },
    { pitch: 50, quantizedStartStep: 10, quantizedEndStep: 11, isDrum: true },
  ],
  quantizationInfo: {stepsPerQuarter: 4},
  tempos: [{time: 0, qpm: 120}],
  totalQuantizedSteps: 11
};

var Drumkit2 = {"tempos":[{"qpm":120}],"notes":[{"pitch":36,"isDrum":true,"quantizedStartStep":"1","quantizedEndStep":"2"},{"pitch":38,"isDrum":true,"quantizedStartStep":"1","quantizedEndStep":"2"},{"pitch":42,"isDrum":true,"quantizedStartStep":"1","quantizedEndStep":"2"},{"pitch":50,"isDrum":true,"quantizedStartStep":"1","quantizedEndStep":"2"},{"pitch":42,"isDrum":true,"quantizedStartStep":"3","quantizedEndStep":"4"},{"pitch":50,"isDrum":true,"quantizedStartStep":"3","quantizedEndStep":"4"},{"pitch":36,"isDrum":true,"quantizedStartStep":"5","quantizedEndStep":"6"},{"pitch":38,"isDrum":true,"quantizedStartStep":"5","quantizedEndStep":"6"},{"pitch":42,"isDrum":true,"quantizedStartStep":"5","quantizedEndStep":"6"},{"pitch":42,"isDrum":true,"quantizedStartStep":"7","quantizedEndStep":"8"},{"pitch":50,"isDrum":true,"quantizedStartStep":"7","quantizedEndStep":"8"},{"pitch":36,"isDrum":true,"quantizedStartStep":"9","quantizedEndStep":"10"},{"pitch":38,"isDrum":true,"quantizedStartStep":"9","quantizedEndStep":"10"},{"pitch":42,"isDrum":true,"quantizedStartStep":"9","quantizedEndStep":"10"},{"pitch":50,"isDrum":true,"quantizedStartStep":"9","quantizedEndStep":"10"},{"pitch":42,"isDrum":true,"quantizedStartStep":"11","quantizedEndStep":"12"},{"pitch":50,"isDrum":true,"quantizedStartStep":"11","quantizedEndStep":"12"},{"pitch":36,"isDrum":true,"quantizedStartStep":"13","quantizedEndStep":"14"},{"pitch":38,"isDrum":true,"quantizedStartStep":"13","quantizedEndStep":"14"},{"pitch":42,"isDrum":true,"quantizedStartStep":"13","quantizedEndStep":"14"},{"pitch":42,"isDrum":true,"quantizedStartStep":"15","quantizedEndStep":"16"},{"pitch":50,"isDrum":true,"quantizedStartStep":"15","quantizedEndStep":"16"},{"pitch":36,"isDrum":true,"quantizedStartStep":"17","quantizedEndStep":"18"},{"pitch":38,"isDrum":true,"quantizedStartStep":"17","quantizedEndStep":"18"},{"pitch":42,"isDrum":true,"quantizedStartStep":"17","quantizedEndStep":"18"},{"pitch":50,"isDrum":true,"quantizedStartStep":"17","quantizedEndStep":"18"},{"pitch":42,"isDrum":true,"quantizedStartStep":"19","quantizedEndStep":"20"},{"pitch":50,"isDrum":true,"quantizedStartStep":"19","quantizedEndStep":"20"},{"pitch":36,"isDrum":true,"quantizedStartStep":"21","quantizedEndStep":"22"},{"pitch":38,"isDrum":true,"quantizedStartStep":"21","quantizedEndStep":"22"},{"pitch":42,"isDrum":true,"quantizedStartStep":"21","quantizedEndStep":"22"},{"pitch":42,"isDrum":true,"quantizedStartStep":"23","quantizedEndStep":"24"},{"pitch":50,"isDrum":true,"quantizedStartStep":"23","quantizedEndStep":"24"},{"pitch":36,"isDrum":true,"quantizedStartStep":"25","quantizedEndStep":"26"},{"pitch":38,"isDrum":true,"quantizedStartStep":"25","quantizedEndStep":"26"},{"pitch":42,"isDrum":true,"quantizedStartStep":"25","quantizedEndStep":"26"},{"pitch":50,"isDrum":true,"quantizedStartStep":"25","quantizedEndStep":"26"},{"pitch":42,"isDrum":true,"quantizedStartStep":"27","quantizedEndStep":"28"},{"pitch":50,"isDrum":true,"quantizedStartStep":"27","quantizedEndStep":"28"},{"pitch":36,"isDrum":true,"quantizedStartStep":"29","quantizedEndStep":"30"},{"pitch":38,"isDrum":true,"quantizedStartStep":"29","quantizedEndStep":"30"},{"pitch":42,"isDrum":true,"quantizedStartStep":"29","quantizedEndStep":"30"},{"pitch":42,"isDrum":true,"quantizedStartStep":"31","quantizedEndStep":"32"},{"pitch":50,"isDrum":true,"quantizedStartStep":"31","quantizedEndStep":"32"}],"quantizationInfo":{"stepsPerQuarter":4},"totalQuantizedSteps":"32"}