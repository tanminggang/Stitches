var spacing = 10;
var colors = {
	background : "#edecea",
	foreground : "#dbd9d6",
	primary : "#3a62a3",
	secondary : "#64a33a"
}

var queue;

function main()
{
	// Setup
	setup();

	// Keyboard
	document.onkeydown = keyPressed;

	// Virtual Grid
	var virtualgrid = new VirtualGrid( spacing );

	// Queue
	queue = new Queue( virtualgrid );

	// Display
	var background = new Background( virtualgrid );	
	//var display = new Display( virtualgrid, queue );
	var thread = new Thread( virtualgrid );
	var cursor = new Cursor( virtualgrid );
	//pointer = new createjs.Shape();
	//pointer.x = canvas.width * -.5;
	//pointer.y = canvas.height * -.5;

	container.addChild( background, queue, thread, cursor );

	// Listeners
	// stage.on("tick", update );
	// stage.on("mousedown", pressDown);
	// stage.on("pressup", pressUp);
	// stage.on("pressmove", pressMove);
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
	}
}

/*
function draw()
{
	drawing.graphics.clear().
	setStrokeStyle(5,"round").beginStroke(colors.primary);

	if(points.length <= 0)
		return;

	drawing.graphics.oveTo(points[0].x, points[0].y);

	for(var i = 1; i < points.length; i++)
	{
		drawing.graphics.lineTo(points[i].x,points[i].y);
	}
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
		points.push( getPosition() );
	}else{
		isDown = ( isDown ) ? ( false ) : ( true );
	}

	pressPoint = getPosition();
}

function getPosition()
{
	var point = pointer.globalToLocal(stage.mouseX , stage.mouseY);
		point = virtualgrid.PositionToCenterPosition( point.x, point.y);
	return point;
}

function pressUp( event )
{
	if(isDown)
	{
		points.push( getPosition() );
		draw();
	}
}

function pressMove( event )
{
	//beginBitmapStroke
}
*/