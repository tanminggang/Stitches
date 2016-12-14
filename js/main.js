var spacing = 10;
var colors = {
	background : "#edecea",
	foreground : "#dbd9d6"
	//primary : ;
	//secondary : ;
	//tertiary : ;
}
function main()
{
	// Setup
	setup();

	// Keyboard Test
	document.onkeydown = keyPressed;

	// Virtual Grid
	var virtualGrid = new VirtualGrid( spacing );
	var background = new Background( virtualGrid );
	var drawing = new createjs.Shape();
	var cursor = new Cursor( virtualGrid );

	stage.on( "tick", update );
	stage.on("mouseDown", pressDown);
	stage.on("pressUp", pressUp);
	stage.on("pressMove", pressMove);

	stage.addChild( background );
	container.addChild( background, drawing, cursor );
}

function update( event )
{

}

function pressDown( event )
{

}

function pressUp( event )
{

}

function pressMove( event )
{

}

function keyPressed( event )
{
	//Keycodes found at http://keycode.info
	if( event.keyCode == 32 )
	{
		console.log("testing");
	}
}
