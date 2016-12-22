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
			this.threadTextureDisplay = new createjs.Shape();
			this.threadTextureDisplay.compositeOperation = 'screen';
			this.threadTextureDisplay.alpha = 0.3;

			this.pointDisplay = new createjs.Shape();
			this.pointTextureDisplay = new createjs.Shape();
			this.pointTextureDisplay.compositeOperation = 'screen';
			this.pointTextureDisplay.alpha = 0.3;

			this.mouseEnabled = false;
			this.mouseChildren = false;

			this.addChild( this.threadDisplay, this.pointDisplay, this.pointTextureDisplay, this.threadTextureDisplay );

			this.on("added", this.added );

			// TESTING
			//this.image = new Image();
        	//this.image.src = "imgs/cheap_diagonal_fabric.png";
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
			this.thread.styleId = (this.thread.styleId + 1 ) % 4;

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

			this.threadTextureDisplay.graphics.clear();
			this.threadTextureDisplay.graphics.setStrokeStyle(5, "round");
			this.threadTextureDisplay.graphics.beginBitmapStroke ( applicationData.getResult("thread") , "repeat" );

			var offset = (this.thread.points.length > 0) ? (1) : (0);
			var stitches = this.thread.stitches;

			for( var i = 0; i < stitches.length-offset; i++)
			{
				var stitch = stitches[i];
				var start = stitch.startPosition.getCenteredPosition();
				var end = stitch.endPosition.getCenteredPosition();

				// Draw French Knot or Thread
				// if((start.x == end.x)&&(start.y == end.y))
				// {
				// 	console.log("french knot");
				// }else{
					// Texture
					this.threadTextureDisplay.graphics
						.moveTo(start.x,start.y)
						.lineTo(end.x,end.y);

					// Shadow 
					this.threadDisplay.graphics
						.setStrokeStyle(7,"round")
						.setStrokeDash()
						.beginStroke( tinycolor(this.thread.getColor()).darken(20).desaturate(50).setAlpha(.3).toRgbString() );

					this.threadDisplay.graphics
						.moveTo(start.x,start.y)
						.lineTo(end.x,end.y)
						.endStroke();

					// Body
					this.threadDisplay.graphics
						.setStrokeStyle(5,"round")
						.beginStroke(this.thread.getColor());

					this.threadDisplay.graphics
						.moveTo(start.x,start.y)
						.lineTo(end.x,end.y)
						.endStroke();


					// Highlight
					this.threadDisplay.graphics
						.setStrokeStyle(3,"round")
						.beginStroke( tinycolor( this.thread.getColor() ).lighten(20).saturate(5).toHexString() );

					this.threadDisplay.graphics
						.moveTo(start.x,start.y)
						.lineTo(end.x,end.y)
					.endStroke();
				// }
			}
		}

		p.updatePoints = function()
		{
			this.pointDisplay.graphics.clear();
			this.pointTextureDisplay.graphics.clear();

			if(this.thread.points.length <  1)
			return;

			//var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);
			var points = this.thread.points;
				//points.push( new Point(pt.x,pt.y) );

			this.pointDisplay.graphics.moveTo( points[0].x, points[0].y);
			this.pointTextureDisplay.graphics.moveTo( points[0].x, points[0].y);

			// Shadow
			var midpoints = [];
			var lastPoint = points[0];
			var lastMidPoint = lastPoint;

			this.pointDisplay.graphics.setStrokeStyle(7, "round");
			this.pointDisplay.graphics.beginStroke( tinycolor(this.thread.getColor()).darken(20).desaturate(50).setAlpha(.3).toRgbString() );	

			for( var i = 1; i < points.length; i++)
			{
				var point = points[i];
				var midPoint = point.add( lastPoint ).scale( .5 );

				this.pointDisplay.graphics.moveTo( midPoint.x, midPoint.y )
					.curveTo(lastPoint.x, lastPoint.y, lastMidPoint.x, lastMidPoint.y );

				lastPoint = point;
				lastMidPoint = midPoint;
				midpoints[i] = midPoint;
			}
			this.pointDisplay.graphics.endStroke();


			// Fill
			lastPoint = points[0];
			lastMidPoint = lastPoint;

			this.pointDisplay.graphics.setStrokeStyle(5, "round");
			this.pointDisplay.graphics.beginStroke(this.thread.getColor());

			for( var i = 1; i < points.length; i++)
			{
				var point = points[i];
				var midPoint = midpoints[i];

				this.pointDisplay.graphics.moveTo( midPoint.x, midPoint.y )
					.curveTo(lastPoint.x, lastPoint.y, lastMidPoint.x, lastMidPoint.y );

				lastMidPoint = midPoint;
				lastPoint = point;
			}

			// Highlight
			lastPoint = points[0];
			lastMidPoint = lastPoint;

			this.pointDisplay.graphics.setStrokeStyle(3, "round");
			this.pointDisplay.graphics.beginStroke(tinycolor( this.thread.getColor() ).lighten(20).saturate(5).toHexString() );

			for( var i = 1; i < points.length; i++)
			{
				var point = points[i];
				var midPoint = midpoints[i];

				this.pointDisplay.graphics.moveTo( midPoint.x, midPoint.y )
					.curveTo(lastPoint.x, lastPoint.y, lastMidPoint.x, lastMidPoint.y );

				lastMidPoint = midPoint;
				lastPoint = point;
			}
			// Texture
			lastPoint = points[0];
			lastMidPoint = lastPoint;
			
			this.pointTextureDisplay.graphics.setStrokeStyle(5, "round");
			this.pointTextureDisplay.graphics.beginBitmapStroke ( applicationData.getResult("thread") , "repeat" );		

			for( var i = 1; i < points.length; i++)
			{
				var point = points[i];
				var midPoint = midpoints[i];

				this.pointTextureDisplay.graphics.moveTo( midPoint.x, midPoint.y )
					.curveTo(lastPoint.x, lastPoint.y, lastMidPoint.x, lastMidPoint.y );

				lastMidPoint = midPoint;
				lastPoint = point;
			}
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

	window.Display = createjs.promote( Display, "Container" );

} () );
