(function(){

	function Display( virtualgrid, queue )
	{
		this.Container_constructor();
		this.virtualgrid = virtualgrid;
		this.queue = queue;
		this.setup();
	}
	
	var p = createjs.extend( Display, createjs.Container );

		p.setup = function()
		{
			this.drawing = new createjs.Shape();
			this.addChild( this.drawing );

			this.on("added", this.added );
		}

		p.added = function( event )
		{			
			this.stage.on("pressup", this.update, this);	
		}

		p.update = function( event )
		{
			// console.log("update");
			this.drawing.graphics.clear();


			var points = this.queue.drawingPoints;

			if(points.length <= 0)
				return;

			var point = points[0];
			var start = point.startPosition.getCenteredPosition();
			var end = point.endPosition.getCenteredPosition();

			this.drawing.graphics.
				setStrokeStyle(3,"round").
				beginStroke(point.color).
				moveTo(start.x,start.y);

			for(var i = 1; i < points.length; i++)
			{
				point = points[i];
				start = point.startPosition.getCenteredPosition();
				end = point.endPosition.getCenteredPosition();

				
				lineTo(end.x,end.y).
				endStroke();
			}
		}

	window.Display = createjs.promote( Display, "Container" );

} () );

