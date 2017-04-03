//show the percentage loaded text
	TweenMax.to([percentageContainer,percentageLoad], .5, {scale:1, opacity:1});
	
	for(var i = 0; i < imagesAmount; i++)
	{
		//this vars are for getting random images
		//for real case scenario this is not needed. different approach for that type
		var size = Math.random() * 3 + 1,
			width = Math.round( (Math.random() * 110 + 100) * size ),
			height = Math.round( 140 * size );
			imgString = '<img src="http://lorempixel.com/'+ width + '/' + height + '/" height="100" />';
		//add the image at the beggining of the container
		imgContainer.prepend(imgString);
	}
	imgContainer.imagesLoaded()//we set up the images loaded instance to work in the image container
		.progress(loadProgress);//we add the deferred call to the images loaded function
}

*/
//this function executes everytime an image is complete
function loadProgress(imgLoad, image)
{
	//one more image has been loaded. this counts even for the images already loaded
	loadedCount++;
	//we put the image in correct position
	TweenMax.to(image.img, .5, {top:0});
	
	//since there could be other images in the container we check that
	//with this the progress bar and percentage loaded are updated by the 
	//number of images being loaded and not the total in the container
	if( (loadedCount - currentImages.length) > 0 )
	{
		currentProgress = progressUnit * (loadedCount - currentImages.length);
		TweenLite.to(progressTl, .7, {progress:currentProgress, ease:Linear.easeNone});
	}
}

//progress animation instance. the instance's time is irrelevant, can be anything but 0 to void  immediate render
var progressTl = new TimelineMax({paused:true,onUpdate:progressUpdate,onComplete:loadComplete})

progressTl
	//tween the progress bar width
	.to(progressBar, 1, {width:progBarWidth,ease:Linear.easeNone})
	//tween the amount of circle segments to set the cricle new angle
	.to(segmentObj, 1, {seg:totalSegments,ease:Linear.easeNone,roundProps:'seg',},0);

//as the progress bar witdh updates and grows we put the precentage loaded in the screen
function progressUpdate()
{
	//the percentage loaded based on the tween's progress
	percentageLoaded = Math.round(progressTl.progress() * 100);
	//we put the percentage in the screen
	$("#percentageLoad").html(percentageLoaded + ' %');
	
	circleUpdate();
}

//this function resets progress bar width, set progress and percentage loaded to 0
function resetProgress()
{
	//set the progress bar to width 0, no progress
	TweenLite.set(progressBar, {width:0});
	progressTl.progress(0);
	percentageLoaded = 0;
	loadedCount = 0;
}
//------PROGRESS CODE END------------------------------------------//