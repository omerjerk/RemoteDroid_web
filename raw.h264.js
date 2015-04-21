'use strict';

var toUint8Array = function(data){
  // var raw = window.atob(parStr);
  var rawLength = data.length;
  // var array = new Uint8Array(new ArrayBuffer(rawLength));
  var array = new Uint8Array(data);

  var i;
  for(i = 0; i < rawLength; i++) {
    array[i] = data.charCodeAt(i);
  }
  return array;
};

var RawRenderer = function(_useWorker) {
	// this.url = url;
	
	this.player = new Player({
		useWorker : _useWorker,
		workerFile : "Decoder.js"
	});
	/*
    this.player = new Decoder({
        "rgb" : "false"
    });*/
/*
    this.onPictureDecoded = function(buffer, width, height) {
    	console.log("on picture decoded");
    };*/
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
	this.fileReader.readAsArrayBuffer(data);
};

RawRenderer.prototype.onDecodeMessage = function(data) {
	var array = new Uint8Array(data);
	console.log(array);
	this.player.decode(array);
};
