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

			//this.shadowDisplay = new createjs.Shape();

			this.threadDisplay = new createjs.Shape();
			this.accentThreadDisplay = new createjs.Shape();
			this.accentThreadDisplay.compositeOperation = 'lighter';
			this.accentThreadDisplay.alpha = 0.5;

			this.accentThreadDisplay2 = new createjs.Shape();
			this.accentThreadDisplay2.compositeOperation = 'screen';
			this.accentThreadDisplay2.alpha = 0.3;

			this.pointsDisplay = new createjs.Shape();
			this.addChild( this.threadDisplay, this.pointsDisplay, this.accentThreadDisplay, this.divotDisplay, this.accentThreadDisplay2 );


			this.on("added", this.added );

			// TESTING
			this.image = new Image();
        	this.image.src = "imgs/cheap_diagonal_fabric.png";
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

		//	this.divotDisplay.graphics.clear();

			this.accentThreadDisplay2.graphics.clear();
			this.accentThreadDisplay2.graphics.setStrokeStyle(5, "round");
			this.accentThreadDisplay2.graphics.beginBitmapStroke ( this.image , "repeat" ).drawRect(0,0,20,20);

			var offset = (this.thread.points.length > 0) ? (1) : (0);
			var stitches = this.thread.stitches;

			for( var i = 0; i < stitches.length-offset; i++)
			{
				var stitch = stitches[i];
				var start = stitch.startPosition.getCenteredPosition();
				var end = stitch.endPosition.getCenteredPosition();



				this.accentThreadDisplay2.graphics
					.moveTo(start.x,start.y)
					.lineTo(end.x,end.y);



				//SHADOW
				this.threadDisplay.graphics
					.setStrokeStyle(7,"round")
					.setStrokeDash()
					.beginStroke( tinycolor(this.thread.getColor()).darken(20).desaturate(50).setAlpha(.3).toRgbString() );

				this.threadDisplay.graphics
					.moveTo(start.x,start.y)
					.lineTo(end.x,end.y)
					.endStroke();


				//shade
				// this.threadDisplay.graphics
				// 	.setStrokeStyle(6,"round")
				// 	.beginStroke( tinycolor( this.thread.getColor() ).darken(12).toHexString() );

				// this.threadDisplay.graphics
				// 	.moveTo(start.x,start.y)
				// 	.lineTo(end.x,end.y)
				// 	.endStroke();


				//body
				this.threadDisplay.graphics
					.setStrokeStyle(5,"round")
					.beginStroke(this.thread.getColor());

				this.threadDisplay.graphics
					.moveTo(start.x,start.y)
					.lineTo(end.x,end.y)
					.endStroke();


				//highlight
				this.threadDisplay.graphics
					.setStrokeStyle(3,"round")
					.beginStroke( tinycolor( this.thread.getColor() ).lighten(20).saturate(5).toHexString() );

				this.threadDisplay.graphics
					.moveTo(start.x,start.y)
					.lineTo(end.x,end.y)
					.endStroke();

				// this.threadDisplay.graphics
				// 	.moveTo(start.x,start.y + 2)
				// 	.lineTo(end.x,end.y +2)

				// this.threadDisplay.graphics
				// 	.moveTo(start.x,start.y - 3)
				// 	.lineTo(end.x,end.y - 2)
				// 	.endStroke();

			}
		}

		p.updatePoints = function()
		{
			this.pointsDisplay.graphics.clear();
			this.pointsDisplay.graphics.setStrokeStyle(7, "round");
			this.pointsDisplay.graphics.beginStroke(this.thread.getColor());
			//console.log(this.image );
			//if(this.image )
			//this.pointsDisplay.graphics.beginStroke("rgba(255,255,255,0.1)");

			this.accentThreadDisplay.graphics.clear();
			this.accentThreadDisplay.graphics.setStrokeStyle(7, "round");
			this.accentThreadDisplay.graphics.beginBitmapStroke ( this.image , "repeat" ).drawRect(0,0,20,20);

			if(this.thread.points.length <=  0)
			return;

			this.pointsDisplay.graphics.moveTo( this.thread.points[0].x, this.thread.points[0].y);
			this.accentThreadDisplay.graphics.moveTo( this.thread.points[0].x, this.thread.points[0].y);

			var lastPoint = this.thread.points[0];
			var lastMidPoint = lastPoint;
			for( var i = 1; i < this.thread.points.length; i++)
			{
				var point = this.thread.points[i];
				var midPoint = point.add( lastPoint ).scale( .5 );
				this.pointsDisplay.graphics.moveTo( midPoint.x, midPoint.y )
					.curveTo(lastPoint.x, lastPoint.y, lastMidPoint.x, lastMidPoint.y );

				this.accentThreadDisplay.graphics.moveTo( midPoint.x, midPoint.y )
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

	window.Display = createjs.promote( Display, "Container" );

} () );
