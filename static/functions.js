dataUrlFromFile = function(file,callbackFn) {
  //read file and assign dataURL to src attribute of img_element
    var reader = new FileReader();
    reader.onloadend = function() { 
      callbackFn(reader.result);
    }
    //start reading content of file - when done loadend is triggered
    reader.readAsDataURL(file); 

}




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
			img_element.attr('src', reader.result);//src attribute is set to dataURL
		}
		//start reading content of file - when done loadend is triggered
		reader.readAsDataURL(file); 
	}



// get size of content area
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
    	
    	/*
    	return {
    		width: $('#contentDiv').outerWidth() || 0,
    		height: $('#contentDiv').outerHeight() || 0
    	}
      */
  	};
  	return {
    	get: get
  	};
}());

resizeCanvasElement = function (canvas_element) {
  var dims = contentAreaDimensions.get();
  console.log(dims);
  offset = 0;
  canvas_element.attr('width', dims.width - offset);
  canvas_element.attr('height', dims.height - offset +500);

  return dims;
};	