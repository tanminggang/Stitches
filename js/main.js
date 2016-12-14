var spacing = 10;
var colors = {
	background : "#edecea",
	foreground : "#dbd9d6",
	primary : "#3a62a3",
	secondary : "#64a33a"
	//tertiary : ;
}
var isDrawing = false;
var isDown = false;
var points = new Array();
var pressPoint;

var pointer;
var drawing;
var virtualgrid;

function main()
{
	// Setup
	setup();

	// Keyboard
	document.onkeydown = keyPressed;

	// Virtual Grid
	virtualGrid = new VirtualGrid( spacing );
	var background = new Background( virtualGrid );
	var cursor = new Cursor( virtualGrid );

	drawing = new createjs.Shape();
	pointer = new createjs.Shape();
	pointer.x = canvas.width * -.5;
	pointer.y = canvas.height * -.5;

	container.addChild( background, drawing, pointer, cursor );

	// Listeners
	stage.on( "tick", update );
	stage.on("mousedown", pressDown);
	stage.on("pressup", pressUp);
	stage.on("pressmove", pressMove);
}

function draw()
{

}

function update( event )
{
	if(!isDrawing)
		return;

	var color = (isDown) ? (colors.primary) : (colors.foreground);
	var startingPoint = pressPoint;
	//var startingPoint = pointer.globalToLocal(pressPoint.x, pressPoint.y);
	var endpoint = pointer.globalToLocal( stage.mouseX, stage.mouseY );

	pointer.graphics.clear().
	setStrokeStyle(3,"round").beginStroke(color).
	moveTo(startingPoint.x,startingPoint.y).
	lineTo(endpoint.x,endpoint.y).
	endStroke();
}

function pressDown( event )
{
	if(isDrawing == false)
	{
		isDrawing = true;
		isDown = true;
	}else{
		isDown = ( isDown ) ? ( false ) : ( true );
	}

	pressPoint = virtualGrid.PositionToCenterPosition(stage.mouseX,stage.mouseY);
}

function pressUp( event )
{
	draw();
}

function pressMove( event )
{
	//beginBitmapStroke
}

function keyPressed( event )
{
	//Keycodes found at http://keycode.info
	if( event.keyCode == 32 )
	{
		isDrawing = false;
		pointer.graphics.clear();
	}
}
