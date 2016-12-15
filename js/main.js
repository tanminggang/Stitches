var spacing = 10;
var colors = {
	background : "#edecea",
	foreground : "#dbd9d6",
	primary : "#3a62a3",
	secondary : "#64a33a"
}

function main()
{
	// Setup
	setup();

	// Virtual Grid
	var virtualgrid = new VirtualGrid( spacing );

	// Queue and Thread
	var queue = new Queue( virtualgrid );
	var thread = new Thread( virtualgrid );

	// Display
	var background = new Background( virtualgrid );	
	var cursor = new Cursor( virtualgrid );
	var drawing = new createjs.Container();

	// Input
	var input = new Input( virtualgrid, drawing, background, queue, thread);

	// Add Children
	container.addChild( drawing );	
	drawing.addChild( background, queue, thread, cursor );	
}

/*

	TODO
	- animate thread removal
	- try random thread weighting to make it more realistic
	- add insert/exit points
	- add thread 'drop shadow'
	- add additional colors
	- tweak colors
	- show backing threads
	- cut thread
	- design initial dealyo
	- load initial dealyo
	- save
	- load	

*/
