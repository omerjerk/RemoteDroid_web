'use strict';

var toUint8Array = function(parStr){
  var raw = window.atob(parStr);
  var rawLength = raw.length;
  var array = new Uint8Array(new ArrayBuffer(rawLength));

  var i;
  for(i = 0; i < rawLength; i++) {
    array[i] = raw.charCodeAt(i);
  }
  return array;
};

var RawRenderer = function(_useWorker) {
	// this.url = url;
	this.player = new Player({
		useWorker : _useWorker,
		workerFile : "Decoder.js"
	});
	this.fileReader = new FileReader();
	var that = this;
	this.fileReader.onload = function() {
		that.onDecodeMessage(that.fileReader.result);
	};
};

RawRenderer.prototype.getCanvas = function() {
	return this.player.canvas;
};

RawRenderer.prototype.render = function(data) {
	console.log("rendering");
	this.fileReader.readAsText(data);
};

RawRenderer.prototype.onDecodeMessage = function(data) {
	console.log(data);
};
