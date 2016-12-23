function Input( virtualgrid, displayContainer, background, display )
{
	this.virtualgrid = virtualgrid;
	this.displayContainer = displayContainer;
	this.background = background;
	this.display = display;

	this.spacebarDown = false;
	this.lastPosition = new Point();

	// Menus
	this.createColorNav();
	this.createHelpNav();

	// Listeners
	window.addEventListener("keydown", this.keyDown.bind(this), false );
	window.addEventListener("keyup", this.keyUp.bind(this), false );
	canvas.addEventListener("wheel", this.mouseWheel.bind(this), false );
	stage.addEventListener("stagemousemove", this.mouseMove.bind(this), false );
}

Input.prototype.createHelpNav = function()
{
	//$('#center a').hide();

	var self = this;
	var helpBtn = $('#top a');
		helpBtn.click( function(){
			console.log("help btn pressed");
			self.display.visible = (self.display.visible)?(false):(true);
			$('#center a').fadeToggle();//slideToggle();		
		});

}

Input.prototype.createColorNav = function()
{
	// Create Interface    <li><a href="#" class="selected">color 1</a></li>
	var self = this;
	for(var i = 0; i < threadStyle.length; i++)
	{
		var keyId = i +1;
		var color = threadStyle[i];
		var thread = new Thread(null, i);
		var element = $('<li><a href="#" style="background-color:'+ thread.getColor() +'; border-color:' + thread.getColor() +'">'+keyId+'</a></li>');
			element.data("styleId", i );
			element.click( function(){
				self.changeThread( $(this).data("styleId") );
			});
		if(i == 0)
			element.find("a").attr("class","selected");
		$( "nav#colors ul" ).append( element );
	}
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

	this.displayContainer.x += deltaPosition.x;
	this.displayContainer.y += deltaPosition.y;

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
		// DON'T LIKE THE KEY. KEEP HITTING THIS WHEN TRYING TO HIT SPACE, SHOULD REQUIRE A MODIFIER KEY
		case 67: 	// 'c'
			var shouldClear = confirm("Clear Stiches?");
			if(shouldClear)
			{
				this.display.clear();
				this.resetView();
			}
			break;
		case 13: 	// 'enter'
			this.resetView();
			break;
		case 90: 	// 'z'
			this.display.undo();
			var thread = this.display.currentThread();
			if(thread)
				this.changeThreadUI( thread.styleId );		
			break;			
		default:
			//console.log( event.keyCode);
	}

	if(event.keyCode >= 48 && event.keyCode <= 57 )
	{
		var id = event.keyCode - 49;
		if(event.keyCode == 48)
			id = threadStyle.length - 1;

		this.changeThread( id );
	}
}

Input.prototype.resetView = function()
{
	container.scaleX = container.scaleY = 1;
	this.displayContainer.x = this.displayContainer.y = 0;	
}

Input.prototype.changeThread = function( id )
{
	if(id < threadStyle.length)
	{
		threadId = id;
		this.display.changeThread();
		this.changeThreadUI( id );
			//.append('<i class="fa fa-heart" aria-hidden="true"></i>');	
		return true;
		/*
			-webkit-transform: height .5s;
			transition: height .5s;
		*/

	}

	return false;
}

Input.prototype.changeThreadUI = function( id )
{
	$("nav#colors ul li a")
		.removeClass("selected")	
		.eq(id)
		.addClass("selected");
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
	scale = Math.max(1, Math.min(scale, 5) );

	container.scaleX = container.scaleY = scale;
}

Input.prototype.save = function()
{
	var threads = this.display.threads;
	var data = {};
		data.panPosition = new Point( this.displayContainer.x, this.displayContainer.y );
		data.threads = [];

	for(var i = 0; i < this.display.threads.length; i++)
	{
		data.threads[i] = this.display.threads[i].getData();
	}
	
	var blob = new Blob([ JSON.stringify( data )], {type:"text/json"});
	saveAs( blob, "stitch.json" );
	//console.log( JSON.stringify( data ) )
	//console.log(data );
}

Input.prototype.load = function( data )
{
	var nativeData = JSON.parse(data);


	this.display.threads = [];

	for(var i = 0; i < nativeData.threads.length; i++)
	{
		var threadData = nativeData.threads[i];
		var thread = this.display.createThread();
			thread.loadData( threadData );
	}

	this.display.updateThreads();

	if(nativeData.panPosition)
	{
		this.displayContainer.x = nativeData.panPosition.x;
		this.displayContainer.y = nativeData.panPosition.y;
	}

	this.background.resize();
	//this.resetView();

	this.changeThread( 0 );
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
