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

var RawRender = function(url) {
	this.url = url;
};

RawRender.prototype.render = function() {
	console.log("redering");
};
