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
			this.stage.on("pressup", this.pressUp, this);
			this.stage.on("pressmove", this.pressmove, this);					
		}

		p.pressDown = function( event )
		{
			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);
			this.thread.startStitch( pt.x, pt.y);

			var point = this.thread.currentStitch.startPosition.getCenteredPosition();
			this.thread.addPoint( point.x,point.y );
			
			this.updatePoints();
		}

		p.pressUp = function( event )
		{
			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);
			this.thread.endStitch( pt.x, pt.y);
	
			this.thread.points = [];

			this.updateThread();
			this.updatePoints();
		}

		p.pressmove = function( event )
		{	
			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);
			this.thread.addPoint( pt.x,pt.y );

			this.updatePoints();		
		}

		p.updatePoints = function()
		{
			this.pointsDisplay.graphics.clear();
			this.pointsDisplay.graphics.setStrokeStyle(7,"round").beginStroke(this.thread.getColor());

			if(this.thread.points.length <=  0)
			return;

			this.pointsDisplay.graphics.moveTo( this.thread.points[0].x, this.thread.points[0].y);
			for( var i = 0; i < this.thread.points.length; i++)
			{
				var point = this.thread.points[i];

				this.pointsDisplay.graphics.lineTo(point.x,point.y);

			}

			this.pointsDisplay.graphics.endStroke();
		}

		p.updateThread = function()
		{
			this.threadDisplay.graphics.clear();
			this.threadDisplay.graphics.setStrokeStyle(7,"round").beginStroke(this.thread.getColor());

			var stitches = this.thread.stitches;
			for( var i = 0; i < stitches.length; i++)
			{
				var stitch = stitches[i];
				var start = stitch.startPosition.getCenteredPosition();
				var end = stitch.endPosition.getCenteredPosition();

				this.threadDisplay.graphics.
					moveTo(start.x,start.y).
					lineTo(end.x,end.y);
			}
		}
		
		p.undo = function()
		{
			this.thread.undoStitch();
			this.updateThread();
		}

	window.Display = createjs.promote( Display, "Container" );

} () );