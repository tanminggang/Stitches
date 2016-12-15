var spacing = 10;
var colors = {
	background : "#edecea",
	foreground : "#dbd9d6",
	primary : "#3a62a3",
	secondary : "#64a33a"
}

var queue;
var thread;

function main()
{
	// Setup
	setup();

	// Keyboard
	document.onkeydown = keyPressed;

	// Virtual Grid
	var virtualgrid = new VirtualGrid( spacing );

	// Queue and Thread
	queue = new Queue( virtualgrid );
	thread = new Thread( virtualgrid );

	// Display
	var background = new Background( virtualgrid );	
	var cursor = new Cursor( virtualgrid );

	container.addChild( background, queue, thread, cursor );
}

function keyPressed( event )
{
	//Keycodes found at http://keycode.info
	if( event.keyCode == 32 )	// space
	{
		// clip string
	}

	if(event.keyCode == 90)		// z
	{
		queue.undo();
		thread.clear();
	}
}

/*

	TODO
	- animate thread after draw
	- pan
	- zoom
	- add additional colors
	- save
	- load
	- show backing threads
	- cut thread

*/