(function(){

	function Pointer( virtualgrid )
	{
		this.Container_constructor();
		this.virtualgrid = virtualgrid;
		this.setup();
	}
	
	var p = createjs.extend( Pointer, createjs.Container );

		p.setup = function()
		{
			this.drawingPoints = [];	

			this.pointer = new createjs.Shape();
			this.drawing = new createjs.Shape();

			this.addChild( this.drawing, this.pointer );

			this.on("added", this.added );
		}

		p.added = function( event )
		{			
			this.stage.on("stagemousedown", this.pressDown, this);
			this.stage.on("pressup", this.pressUp, this);
			this.stage.on("pressmove", this.pressMove, this);		
		}

		p.update = function( event )
		{
			// console.log("update");
			this.drawing.graphics.clear();

			for(var i = 0; i< this.drawingPoints.length; i++)
			{
				var point = this.drawingPoints[i];
				var start = point.startPosition.getCenteredPosition();
				var end = point.endPosition.getCenteredPosition();

				this.drawing.graphics.
				setStrokeStyle(3,"round").
				beginStroke(point.color).
				moveTo(start.x,start.y).
				lineTo(end.x,end.y).
				endStroke();
			}
		}

		p.pressDown = function( event )
		{
			// console.log("pressdown");
			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);

			this.currentPoint = new DrawingPoint( this.virtualgrid, colors.primary );
			this.currentPoint.SetStartPosition( pt.x, pt.y );
		}

		p.pressUp = function( event )
		{
			// console.log("pressup");
			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);

			this.currentPoint.SetEndPosition( pt.x, pt.y );
			this.drawingPoints.push( this.currentPoint );
			this.update( event );
		}

		p.pressMove = function( event )
		{
			// console.log("pressmove");
		}

		p.getPosition = function()
		{
			var point = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);
				point = virtualgrid.PositionToCenterPosition( point.x, point.y);
		return point;		
		}

		p.undo = function()
		{
			
		}

	window.Pointer = createjs.promote( Pointer, "Container" );

} () );
