function main()
{
	// Setup
	setup();

	// Keyboard Test
	document.onkeydown = keyPressed;

	// Display Test
	var testing = new createjs.Shape();
		//testing.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
		testing.graphics.beginFill("DeepSkyBlue").rect(0,0,50,50);
		testing.originX = testing.x;
		testing.counter = 0;
		testing.increment = .1;
		testing.amplitude = 50;
		testing.on("tick", update);

	// Virtual Grid
	var virtualGrid = new VirtualGrid(30);
	var virtualGridDisplay = new VirtualGridDisplay( virtualGrid );

	// cursor
	var cursor = new Cursor( virtualGrid );

	container.addChild( virtualGridDisplay, cursor);
	// Extension Test
  	var extend_test = new ExtendedContainer();
		extend_test.output();
}

function keyPressed( event )
{
	//Keycodes found at http://keycode.info
	if( event.keyCode == 32 )
	{
		console.log("testing");
	}
}

function update( event )
{
	event.target.x = event.target.originX + Math.sin( event.target.counter ) * event.target.amplitude;
	event.target.counter += event.target.increment;
}
