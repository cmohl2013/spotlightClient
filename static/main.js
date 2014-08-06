//manages all user input callbacks of index.html

$( document ).ready(function() {
	resizeCanvasElement($('#mainStage'));
	//$('#selectFileButton').change(function(e) {
    //    var file = e.target.files[0];
    //    fileToImgElement(file,$('#testImage'));       
    //});


	

   

});


fileToImgElement = function(file, img_element) {

		//check if file is an image
		imageType = /image.*/; //i guess this is a regex pattern
		if (!file.type.match(imageType)) {//if file is not an image...
			console.log('this file is not an image: ' + file.type);
			return
		}

		//read file and assign dataURL to src attribute of img_element
		var reader = new FileReader();
		reader.onloadend = function() { 
			//console.log(reader.result);
			img_element.attr('src', reader.result);//src attribute is set to dataURL
			//console.log(img_element.src);
		}
		//start reading content of file - when done loadend is triggered
		reader.readAsDataURL(file); 
	}



// size the content area
contentAreaDimensions = (function () {
  	var get = function () {
   		var isFirstPass = false,
       		isIPhone = (/iphone/gi).test(navigator.appVersion),
		
 		width = $(window).width(),
 		height = $(window).height() + (isIPhone ?  60 : 0),
 		hHeight = $('header').outerHeight() || 0,
 		fHeight = $('footer').outerHeight() || 0;
   		return {
    		width: width,
      		height: height - hHeight - fHeight
    	};
  	};
  	return {
    	get: get
  	};
}());

resizeCanvasElement = function (canvas_element) {
  var dims = contentAreaDimensions.get();
  canvas_element.attr({
    width: dims.width - 4,
    height: dims.height - 4
  });
  return dims;
};	