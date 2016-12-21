function Input( virtualgrid, drawing, background, display )
{
	this.virtualgrid = virtualgrid;
	this.drawing = drawing;
	this.background = background;
	this.display = display;

	this.spacebarDown = false;
	this.lastPosition = new Point();
	// Listeners
	window.addEventListener("keydown", this.keyDown.bind(this), false );
	window.addEventListener("keyup", this.keyUp.bind(this), false );
	canvas.addEventListener("wheel", this.mouseWheel.bind(this), false );
	stage.addEventListener("stagemousemove", this.mouseMove.bind(this), false );
}

Input.prototype.updateLastPosition = function()
{
	this.lastPosition.x = stage.mouseX;
this.lastPosition.y = stage.mouseY;
}

Input.prototype.mouseMove = function ( event )
{
	if(!this.spacebarDown)
		return;

	var position = new Point(stage.mouseX, stage.mouseY );
	var deltaPosition = new Point( position.x - this.lastPosition.x, position.y - this.lastPosition.y);

	this.drawing.x += deltaPosition.x;
	this.drawing.y += deltaPosition.y;

	this.background.updatePanDelta();

	this.updateLastPosition();
}

Input.prototype.keyDown = function ( event )
{
	switch( event.keyCode )		// http://keycode.info
	{
		case 76: 	// 'l'
			this.loadFile();
			break;
		case 83: 	// 's'
			this.save();
			break;
		case 32: 	// 'space'
			this.updateLastPosition();
			this.spacebarDown = true;
			break;
		case 67: 	// 'c'
			this.display.clear();
			break;
		case 90: 	// 'z'
			this.display.undo();
			break;
		case 13: 	// 'enter'
			container.scaleX = container.scaleY = 1;
			this.drawing.x = this.drawing.y = 0;
			break;
		default:
			//console.log( event.keyCode);
	}

	if(event.keyCode >= 49 && event.keyCode <= 57 )
	{
		var id = event.keyCode - 48;

		if(id < threadStyle.length)
			threadId = id;
	}
}

Input.prototype.keyUp = function ( event )
{
	this.spacebarDown = false;
}

Input.prototype.mouseWheel = function ( event )
{
	var zoom = 1/1.1;

	if(Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)))>0)
        zoom=1.1;

    var scale = container.scaleX * zoom;
	scale = Math.max(1, Math.min(scale, 10) );

	container.scaleX = container.scaleY = scale;
}

Input.prototype.save = function()
{
	var data = this.display.thread.getData();
	var blob = new Blob([ JSON.stringify( data )], {type:"text/json"});
	saveAs( blob, "stitch.json" );
	//console.log( JSON.stringify( data ) )
	//console.log(data );
}

Input.prototype.load = function( data )
{
	this.display.thread.loadData( JSON.parse(data) );
	this.display.updateThread();
}

Input.prototype.loadFile = function()
{
	var self = this;
	var browser = document.createElement("input");
		browser.type = "file";
		browser.accept = "text/json";

		function cleanup()
		{
			document.body.removeChild( browser );
		}

		browser.onchange = function(event)
		{
			var file = event.target.files[0];

			if( file != null )
			{
				var reader = new FileReader();
					reader.onload = function(event)
					{
						var contents = event.target.result;

						self.load( contents );

						cleanup();
					}

					reader.readAsText( file );

			} else {
				cleanup();
			}
	}

	document.body.appendChild( browser );
	browser.click();
}
