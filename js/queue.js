(function(){

	function Queue( virtualgrid )
	{
		this.Container_constructor();
		this.virtualgrid = virtualgrid;
		this.setup();
	}
	
	var p = createjs.extend( Queue, createjs.Container );

		p.setup = function()
		{
			this.drawingPoints = [];	
			this.on("added", this.added );
		}

		p.added = function( event )
		{			
			this.stage.on("stagemousedown", this.pressDown, this);
			this.stage.on("pressup", this.pressUp, this);	
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
			//this.update( event );
		}

		p.undo = function()
		{
			if(drawingPoints.length > 0)
				drawingPoints.pop();
		}

	window.Queue = createjs.promote( Queue, "Container" );

} () );