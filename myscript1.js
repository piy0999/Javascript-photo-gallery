
var size;
var imageUrls = ['images/image1.jpg','images/image2.jpg','images/image3.jpg','images/image4.jpg','images/image5.jpg','images/image6.jpg','images/image7.jpg','images/image8.jpg'];
function imageUrl (index) {
	var url = imageUrls[index];
	PhotoGalleryLib.openPresentationModal();
	PhotoGalleryLib.setModalImgSrc(url);

	PhotoGalleryLib.initModal(function() {
		PhotoGalleryLib.closePresentationModal ();
    console.log("Close button was clicked");
	}, function() {
		prevImage(index);
		if(index==0)
		{
			index = 7;
		}
		else
		{
			index = index - 1;
		}	
    console.log("Previous button was clicked");
	}, function() {
		nextImage(index);
		if(index==7)
		{
			index = 0;
		}
		else
		{
			index = index + 1;
		}	
    console.log("Next button was clicked");
	});

}

function prevImage(curindex)
{	
	var prevurl;
	previndex = curindex - 1;
	if(previndex>=0)
	{
		prevurl = imageUrls[previndex];	
	}
	else
	{
		prevurl = imageUrls[7];
	}

	PhotoGalleryLib.setModalImgSrc(prevurl);
}

function nextImage(curindex)
{	
	var nexturl;
	var nextindex = curindex+1;
	if(nextindex<=7)
	{
		nexturl = imageUrls[nextindex];
	}
	else
	{
		nexturl = imageUrls[0];
	}

	PhotoGalleryLib.setModalImgSrc(nexturl);
}

function slideshow () {

	var myVar = setInterval(function() { play() },1000);	

	var sindex = 0;

	function play () {
		PhotoGalleryLib.openPresentationModal();
		PhotoGalleryLib.setModalImgSrc(imageUrls[sindex]);
		PhotoGalleryLib.initModal(function() {
    	PhotoGalleryLib.closePresentationModal ();
    	clearInterval(myVar);
		}, function() {
    	console.log("Previous button was clicked");
		}, function() {
    	console.log("Next button was clicked");
		});

		sindex = (sindex + 1)%8;
	}


}


function checkSize(z) {
	
	size = z;
	console.log(z);
	var s = document.getElementById("mainBody");

	var child = document.getElementById("imagesGrid");
	
	if(child != null)
	{
	s.removeChild(child);
	}
	
	var tableobj = PhotoGalleryLib.generateGrid(imageUrls,size);

	s.appendChild(tableobj);

	PhotoGalleryLib.addImageClickHandlers(imageUrl);
	
}

window.onload = function myfunction(){

PhotoGalleryLib.onSizeClassChange(checkSize);

PhotoGalleryLib.createModal();

var b = document.getElementById("button1");
b.addEventListener("click", function() { slideshow() }, false);

}









