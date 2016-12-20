(function(){

	function Display( virtualgrid )
	{
		this.Container_constructor();
		this.virtualgrid = virtualgrid;
		this.setup();
	}
	
	var p = createjs.extend( Display, createjs.Container );

		p.setup = function()
		{	
			this.thread = new Thread( this.virtualgrid, 1);

			this.threadDisplay = new createjs.Shape();
			this.pointsDisplay = new createjs.Shape();
			this.addChild( this.threadDisplay, this.pointsDisplay );

			this.on("added", this.added );
		}

		p.added = function( event )
		{			
			this.stage.on("stagemousedown", this.pressDown, this);
			this.stage.on("stagemouseup", this.pressUp, this);
			this.stage.on("stagemousemove", this.pressMove, this);
			this.on("tick", this.update, this);							
		}

		p.update = function( event )
		{
			this.updatePoints();
		}

		p.pressDown = function( event )
		{
			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);
			var stitch = this.thread.startStitch( pt.x, pt.y);
			var point = stitch.startPosition.getCenteredPosition();

			this.lastPoint = pt;
			this.thread.clearPoints();

			this.updateThread();


			this.thread.addPoint( point.x,point.y );
			this.thread.addPoint( point.x,point.y );

			this.isPressing = true;
		}

		p.pressUp = function( event )
		{
			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);
			var stitch = this.thread.endStitch( pt.x, pt.y);
			var point = stitch.endPosition.getCenteredPosition();

			this.thread.addPoint( point.x,point.y );

			//DISCO CODE
			//this.thread.styleId = (this.thread.styleId + 1 ) % 4;

			this.updateThread();
			this.animatePoints();

			this.isPressing = false;
		}

		p.pressMove = function( event )
		{	

			if( !this.isPressing )
				return;

			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);
			
			var sqrDistance = ( (pt.x - this.lastPoint.x) * (pt.x - this.lastPoint.x) + 
			(pt.y - this.lastPoint.y) * (pt.y - this.lastPoint.y) )

			if( sqrDistance > 200 )
			{
				this.thread.addPoint( pt.x,pt.y );	
				this.lastPoint = pt;
			} else {
				var point = this.thread.points[ this.thread.points.length - 1 ];
					point.x = pt.x;
					point.y = pt.y;
			}
		}

		p.updateThread = function()
		{
			this.threadDisplay.graphics.clear();
			this.threadDisplay.graphics.setStrokeStyle(7,"round").beginStroke(this.thread.getColor());

			var offset = (this.thread.points.length > 0) ? (1) : (0);
			var stitches = this.thread.stitches;

			for( var i = 0; i < stitches.length-offset; i++)
			{
				var stitch = stitches[i];
				var start = stitch.startPosition.getCenteredPosition();
				var end = stitch.endPosition.getCenteredPosition();

				this.threadDisplay.graphics.
					moveTo(start.x,start.y).
					lineTo(end.x,end.y);
			}
		}

		p.updatePoints = function()
		{
			this.pointsDisplay.graphics.clear();
			this.pointsDisplay.graphics.setStrokeStyle(7, "round").beginStroke(this.thread.getColor());

			if(this.thread.points.length <=  0)
			return;

			this.pointsDisplay.graphics.moveTo( this.thread.points[0].x, this.thread.points[0].y);
			var lastPoint = this.thread.points[0];
			var lastMidPoint = lastPoint;
			for( var i = 1; i < this.thread.points.length; i++)
			{
				var point = this.thread.points[i];
				var midPoint = point.add( lastPoint ).scale( .5 );
				this.pointsDisplay.graphics.moveTo( midPoint.x, midPoint.y )
					.curveTo(lastPoint.x, lastPoint.y, lastMidPoint.x, lastMidPoint.y );

				lastPoint = point;
				lastMidPoint = midPoint;

			}

			this.pointsDisplay.graphics.endStroke();
		}

		p.animatePoints = function()
		{
			var start = this.thread.points[0];
			var end = this.thread.points[this.thread.points.length-1];

			for(var i = 1; i < this.thread.points.length-1; i++ )
			{
				var point = this.thread.points[i];
				var tween = createjs.Tween.get(point).to(
					{x: end.x, y: end.y},
					300 - ( 4 * i ),
					createjs.Ease.quadInOut);
			}
		}

		p.clear = function()
		{
			this.thread.clearAll();
			this.updateThread();
		}

		p.undo = function()
		{
			this.thread.clearPoints();
			this.thread.undoStitch();
			this.updateThread();
		}

		p.save = function()
		{
			var data = this.thread.getData();
			var blob = new Blob([ JSON.stringify( data )], {type:"text/json"});
			saveAs( blob, "stitch.json" );
			//console.log( JSON.stringify( data ) )
			//console.log(data );
		}

		p.load = function( data )
		{
			this.thread.loadData( JSON.parse(data) );
			this.updateThread();
		}

		p.loadFile = function()
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

	window.Display = createjs.promote( Display, "Container" );

} () );