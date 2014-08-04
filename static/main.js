//manages all user input callbacks of index.html

$( document ).ready(function() {

	$('#selectFileButton').change(function(e) {
        var file = e.target.files[0];
        fileToImgElement(file,$('#testImage'));       
    });


	function fileToImgElement(file, img_element) {

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

   

});