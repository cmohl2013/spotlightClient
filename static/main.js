//manages all user input callbacks of index.html

$( document ).ready(function() {
	resizeCanvasElement($('#mainStage'));

	$('#selectFileButton').change(function(e) {
        var file = e.target.files[0];
        
        dataUrlFromFile(file,drawFromDatUrl);

        


    });


	

   

});

drawFromDatUrl = function(datUrl){
  var canvas = document.getElementById('mainStage');
  var context = canvas.getContext('2d');
  var imageObj = new Image();

  imageObj.onload = function() {
    context.drawImage(imageObj, 69, 50);
  };
  imageObj.src = datUrl;
}