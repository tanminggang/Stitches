(function(){

	function Display( virtualgrid )
	{
		this.Container_constructor();
		this.virtualgrid = virtualgrid;
		this.threads = [];
		this.setup();
	}

	var p = createjs.extend( Display, createjs.Container );

		p.setup = function()
		{
			this.createThread();

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
			var thread = this.currentThread();
			if(thread == null)
				thread = this.createThread();

			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);
			var stitch = thread.startStitch( pt.x, pt.y);
			var point = stitch.startPosition.getCenteredPosition();

			this.lastPoint = pt;
			thread.clearPoints();

			this.updateThread();


			thread.addPoint( point.x,point.y );
			thread.addPoint( point.x,point.y );

			this.isPressing = true;
		}

		p.pressUp = function( event )
		{
			var thread = this.currentThread();
			if(thread == null)
				return;

			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);
			var stitch = thread.endStitch( pt.x, pt.y);
			var point = stitch.endPosition.getCenteredPosition();

			thread.addPoint( point.x,point.y );

			//DISCO CODE
			//this.thread.styleId = (this.thread.styleId + 1 ) % 4;

			this.updateThread();
			this.animatePoints( thread );

			this.isPressing = false;
		}

		p.pressMove = function( event )
		{
			if( !this.isPressing )
				return;

			var thread = this.currentThread();
			if(thread == null)
				return;

			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);

			var sqrDistance = ( (pt.x - this.lastPoint.x) * (pt.x - this.lastPoint.x) +
			(pt.y - this.lastPoint.y) * (pt.y - this.lastPoint.y) )

			if( sqrDistance > 200 )
			{
				thread.addPoint( pt.x,pt.y );
				this.lastPoint = pt;
			} else {
				var point = thread.points[ thread.points.length - 1 ];
					point.x = pt.x;
					point.y = pt.y;
			}
		}

		p.updateThread = function()
		{
			this.threadDisplay.graphics.clear();
			this.threadTextureDisplay.graphics.clear();

			for(var i = 0; i < this.threads.length; i++)
			{
				this.drawThread( i );
			}
		}

		p.drawThread = function( id )
		{
			var thread = this.threads[id];
			if((thread == null) || (thread.length < 0))
				return;

			this.threadTextureDisplay.graphics.setStrokeStyle(5, "round");
			this.threadTextureDisplay.graphics.beginBitmapStroke ( applicationData.getResult("thread") , "repeat" );

			var offset = (thread.points.length > 0) ? (1) : (0);
			var stitches = thread.stitches;

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
						.lineTo(end.x,end.y)

					// Shadow 
					this.threadDisplay.graphics
						.setStrokeStyle(7,"round")
						.setStrokeDash()
						.beginStroke( tinycolor(thread.getColor()).darken(20).desaturate(50).setAlpha(.3).toRgbString() );

					this.threadDisplay.graphics
						.moveTo(start.x,start.y)
						.lineTo(end.x,end.y)
						.endStroke();

					// Body
					this.threadDisplay.graphics
						.setStrokeStyle(5,"round")
						.beginStroke(thread.getColor());

					this.threadDisplay.graphics
						.moveTo(start.x,start.y)
						.lineTo(end.x,end.y)
						.endStroke();


					// Highlight
					this.threadDisplay.graphics
						.setStrokeStyle(3,"round")
						.beginStroke( tinycolor( thread.getColor() ).lighten(20).saturate(5).toHexString() );

					this.threadDisplay.graphics
						.moveTo(start.x,start.y)
						.lineTo(end.x,end.y)
					.endStroke();
				// }
			}
			this.threadTextureDisplay.graphics.endStroke();			
		}

		p.updatePoints = function( id )
		{
			this.pointDisplay.graphics.clear();
			this.pointTextureDisplay.graphics.clear();

			for(var i = 0; i < this.threads.length; i++)
			{
				this.drawPoints( i );
			}
		}

		p.drawPoints = function( id )
		{
			var thread = this.threads[id];

			//console.log(thread);

			if((!thread) || (thread.points.length <=  0))
			return;

			//var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);
			var points = thread.points;
				//points.push( new Point(pt.x,pt.y) );

			this.pointDisplay.graphics.moveTo( points[0].x, points[0].y);
			this.pointTextureDisplay.graphics.moveTo( points[0].x, points[0].y);

			// Shadow
			var midpoints = [];
			var lastPoint = points[0];
			var lastMidPoint = lastPoint;

			this.pointDisplay.graphics.setStrokeStyle(7, "round");
			this.pointDisplay.graphics.beginStroke( tinycolor(thread.getColor()).darken(20).desaturate(50).setAlpha(.3).toRgbString() );	

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
			this.pointDisplay.graphics.beginStroke(thread.getColor());

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
			this.pointDisplay.graphics.beginStroke(tinycolor( thread.getColor() ).lighten(20).saturate(5).toHexString() );

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

		p.animatePoints = function( thread )
		{
			if(!thread)
				return;

			var start = thread.points[0];
			var end = thread.points[thread.points.length-1];

			for(var i = 1; i < thread.points.length-1; i++ )
			{
				var point = thread.points[i];
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
			if( this.isPressing )
				return;

			var thread = this.currentThread();
				thread.clearPoints();
				thread.undoStitch();

			if(thread.stitches.length <= 0)
				this.threads.pop();

			this.updateThread();
		}

		p.createThread = function()
		{
			var thread = new Thread( this.virtualgrid, threadId);
			this.threads.push( thread );
			return thread;
		}

		p.changeThread = function()
		{
			if( this.isPressing )
				return;

			var thread = this.currentThread();

			if((thread == null) || (this.threads.length <= 0) || (thread.stitches.length > 0))
			{
				if(thread.points.length > 0)
					thread.points = [];

				var thread = new Thread( this.virtualgrid, threadId );
				this.threads.push( thread );
			}else{
				thread.styleId = threadId;
			}

			this.updateThread();
			this.updatePoints();
		}

		p.currentThread = function()
		{
			var length = this.threads.length;
			if(length <= 0)
				return null

			return this.threads[length-1];			
		}

	window.Display = createjs.promote( Display, "Container" );

} () );
