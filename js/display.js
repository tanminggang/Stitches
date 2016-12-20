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

			this.drawing = new createjs.Shape();
			this.addChild( this.drawing );

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
		}

		p.pressUp = function( event )
		{
			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);
			this.thread.endStitch( pt.x, pt.y);
	
			this.thread.points = [];
			this.updateThread();
		}

		p.pressmove = function( event )
		{	
			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);
			this.thread.addPoint( pt.x,pt.y );

			this.updateThread();		
		}

		p.updateThread = function()
		{
			this.drawing.graphics.clear();
			this.drawing.graphics.setStrokeStyle(7,"round").beginStroke(this.thread.getColor());

			var stitches = this.thread.stitches;
			for( var i = 0; i < stitches.length; i++)
			{
				var stitch = stitches[i];
				var start = stitch.startPosition.getCenteredPosition();
				var end = stitch.endPosition.getCenteredPosition();

				this.drawing.graphics.
					moveTo(start.x,start.y).
					lineTo(end.x,end.y);
			}

			if(this.thread.points.length <=  0)
				return;

			this.drawing.graphics.moveTo( this.thread.points[0].x, this.thread.points[0].y);
			for( var i = 0; i < this.thread.points.length; i++)
			{
				var point = this.thread.points[i];

				this.drawing.graphics.lineTo(point.x,point.y);

			}

			this.drawing.graphics.endStroke();
		}
		
		p.undo = function()
		{
			this.thread.undoStitch();
			this.updateThread();
		}

	window.Display = createjs.promote( Display, "Container" );

} () );