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

	// Listeners
	container.addChild( background, queue, thread, cursor );
	canvas.addEventListener("wheel", this.mouseWheel.bind(this), false );
}

function keyPressed( event )
{
	//Keycodes found at http://keycode.info
	switch( event.keyCode )
	{
		case 32: 	// 'space'
			break;	
		case 90: 	// 'z'
			queue.undo();
			thread.clear();		
			break;
		case 13: 	// 'enter'
			container.scaleX = container.scaleY = 1;
			break;
	}
}

function mouseWheel( event )
{
	var zoom = 1/1.1;

	if(Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)))>0)
        zoom=1.1;

    container.scaleX = container.scaleY *= zoom;
}

/*

	TODO
	- animate thread after draw	
	- pan
	- zoom
	- add additional colors
	- tweak colors
	- save
	- load
	- show backing threads
	- cut thread
	- design initial dealyo
	- load initial dealyo

*/


/*

	Panning Code

	p.updatePanDelta = function()
	{

		var wX = Math.floor(this.parent.x / virtualGrid.spacing) * virtualGrid.spacing;
		var wY = Math.floor(this.parent.y / virtualGrid.spacing) * virtualGrid.spacing;

		this.display.x = -wX;
		this.display.y = -wY;

		this.vertical.y = -wY;
		this.horizontal.x = -wX;
	}

*/