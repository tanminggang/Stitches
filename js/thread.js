(function(){

	function Thread( virtualgrid, data )
	{
		this.Container_constructor();
		this.virtualgrid = virtualgrid;
		this.data = data;

		this.setup();
	}

	var p = createjs.extend( Thread, createjs.Container );

		p.setup = function()
		{
			this.stitchDisplay = new createjs.Shape();
			this.stitchTextureDisplay = new createjs.Shape();
			this.stitchTextureDisplay.compositeOperation = 'screen';
			this.stitchTextureDisplay.alpha = 0.3;

			this.pointDisplay = new createjs.Shape();
			this.pointTextureDisplay = new createjs.Shape();
			this.pointTextureDisplay.compositeOperation = 'screen';
			this.pointTextureDisplay.alpha = 0.3;

			this.addChild( this.stitchDisplay, this.pointDisplay, this.pointTextureDisplay, this.stitchTextureDisplay );

			this.isPressing = false;

			stage.on("stagemousedown", this.pressDown, this);
			stage.on("stagemouseup", this.pressUp, this);
			stage.on("stagemousemove", this.pressMove, this);
			this.on("tick", this.update, this);
			this.on("removed", this.removed,this);
		}

		p.removed = function( event )
		{
			stage.off("stagemousedown", this.pressDown, this);
			stage.off("stagemouseup", this.pressUp, this);
			stage.off("stagemousemove", this.pressMove, this);
			this.off("tick", this.update, this);
			this.off("removed", this.removed,this);
		}

		p.update = function( event )
		{
			this.drawPoints();
		}

		p.pressDown = function( event )
		{
			console.log( this.stage );
			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);
			var stitch = this.data.startStitch( pt.x, pt.y);
			var point = stitch.startPosition.getCenteredPosition();

			this.lastPoint = pt;
			this.data.clearPoints();

			this.drawStitches();

			this.data.addPoint( point.x,point.y );
			this.data.addPoint( point.x,point.y );

			this.isPressing = true;
		}

		p.pressUp = function( event )
		{
			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);
			var stitch = this.data.endStitch( pt.x, pt.y);
			var point = stitch.endPosition.getCenteredPosition();

			this.data.addPoint( point.x,point.y );
			this.drawStitches();

			// Animation Stuff
			var start = this.data.points[0];
			var end = this.data.points[this.data.points.length-1];

			for(var i = 1; i < this.data.points.length-1; i++ )
			{
				var point = this.data.points[i];
				var tween = createjs.Tween.get(point).to(
					{x: end.x, y: end.y},
					300 - ( 4 * i ),
					createjs.Ease.quadInOut);
			}

			this.isPressing = false;
		}

		p.pressMove = function( event )
		{
			if(!this.isPressing)
				return;

			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);

			var sqrDistance = ( (pt.x - this.lastPoint.x) * (pt.x - this.lastPoint.x) +
			(pt.y - this.lastPoint.y) * (pt.y - this.lastPoint.y) )

			if( sqrDistance > 200 )
			{
				this.data.addPoint( pt.x,pt.y );
				this.lastPoint = pt;
			} else {
				var point = this.data.points[ this.data.points.length - 1 ];
					point.x = pt.x;
					point.y = pt.y;
			}
		}

		p.drawStitches = function()
		{
			this.stitchDisplay.graphics.clear();
			this.stitchTextureDisplay.graphics.clear();

			if(!this.data.hasStitches())
				return;

			this.stitchTextureDisplay.graphics.setStrokeStyle(5, "round");
			this.stitchTextureDisplay.graphics.beginBitmapStroke ( applicationData.getResult("thread") , "repeat" );

			var offset = (this.data.hasPoints() > 0) ? (1) : (0);
			var stitches = this.data.stitches;

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
					this.stitchTextureDisplay.graphics
						.moveTo(start.x,start.y)
						.lineTo(end.x,end.y)

					// Shadow 
					this.stitchDisplay.graphics
						.setStrokeStyle(7,"round")
						.setStrokeDash()
						.beginStroke( this.data.getShadowColor() );

					this.stitchDisplay.graphics
						.moveTo(start.x,start.y)
						.lineTo(end.x,end.y)
						.endStroke();

					// Body
					this.stitchDisplay.graphics
						.setStrokeStyle(5,"round")
						.beginStroke(this.data.getColor());

					this.stitchDisplay.graphics
						.moveTo(start.x,start.y)
						.lineTo(end.x,end.y)
						.endStroke();

					// Highlight
					this.stitchDisplay.graphics
						.setStrokeStyle(3,"round")
						.beginStroke( this.data.getHighlightColor() );

					this.stitchDisplay.graphics
						.moveTo(start.x,start.y)
						.lineTo(end.x,end.y)
					.endStroke();
				// }
			}
			this.stitchTextureDisplay.graphics.endStroke();		
		}

		p.drawPoints = function()
		{
			if(!this.data.hasPoints())
				return;

			this.pointDisplay.graphics.clear();
			this.pointTextureDisplay.graphics.clear();

			var points = this.data.points;

			this.pointDisplay.graphics.moveTo( points[0].x, points[0].y);
			this.pointTextureDisplay.graphics.moveTo( points[0].x, points[0].y);

			// Shadow
			var midpoints = [];
			var lastPoint = points[0];
			var lastMidPoint = lastPoint;

			this.pointDisplay.graphics.setStrokeStyle(7, "round");
			this.pointDisplay.graphics.beginStroke( this.data.getShadowColor() );	

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
			this.pointDisplay.graphics.beginStroke(this.data.getColor());

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
			this.pointDisplay.graphics.beginStroke( this.data.getHighlightColor() );

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

		p.undo = function()
		{
			this.data.clearPoints();
			this.data.undoStitch();
			this.drawStitches();
		}

		p.changeStyle = function( id )
		{
			this.data.setColor( id );
			this.drawStitches();
		}

	window.Thread= createjs.promote( Thread, "Container" );

} () );