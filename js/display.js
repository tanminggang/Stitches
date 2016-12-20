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
			this.drawingPoints = [];	

			this.drawing = new createjs.Shape();
			this.addChild( this.drawing );

			this.on("added", this.added );
		}

		p.added = function( event )
		{			
			this.stage.on("stagemousedown", this.pressDown, this);
			this.stage.on("pressup", this.pressUp, this);	
		}

		p.pressDown = function( event )
		{
			this.updateThread();

			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);

			this.currentPoint = new DrawingPoint( this.virtualgrid, threadId );
			this.currentPoint.SetStartPosition( pt.x, pt.y );
		}

		p.pressUp = function( event )
		{
			// console.log("pressup");
			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);

			this.currentPoint.SetEndPosition( pt.x, pt.y );
			this.drawingPoints.push( this.currentPoint );
		}

		p.updateThread = function()
		{
			// console.log("update");
			this.drawing.graphics.clear();

			var points = this.drawingPoints;
			for(var i = 0; i < points.length; i++)
			{
				var point = points[i];
				var start = point.startPosition.getCenteredPosition();
				var end = point.endPosition.getCenteredPosition();

				this.drawing.graphics.
				setStrokeStyle(2,"round").
				beginStroke(point.GetColor()).
				moveTo(start.x,start.y).
				lineTo(end.x,end.y).
				endStroke();
			}
		}
		
		p.undo = function()
		{
			if(this.drawingPoints.length > 0)
				this.drawingPoints.pop();

			this.updateThread();
		}

	window.Display = createjs.promote( Display, "Container" );

} () );