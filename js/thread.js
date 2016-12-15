(function(){

	function Thread( virtualgrid )
	{
		this.Container_constructor();
		this.virtualgrid = virtualgrid;
		this.setup();
	}
	
	var p = createjs.extend( Thread, createjs.Container );

		p.setup = function()
		{
			this.points = [];
			this.isDown = false;
			this.pressPoint = null;			
			this.display = new createjs.Shape();
			this.addChild( this.display );
			this.on("added", this.added );			
		}

		p.added = function( event )
		{	
			this.on("tick", this.update, this);		
			this.stage.on("pressup", this.pressUp, this);
			this.stage.on("stagemousedown", this.pressDown, this);
			this.stage.on("pressmove", this.pressmove, this);				
		}

		p.update = function( event )
		{
			if(this.isDown)
				return;

			if(!this.pressPoint)
				return;
			
			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);
			var pressPosition = this.pressPoint.getCenteredPosition();

			this.display.graphics.clear().
				setStrokeStyle(3,"round").
				beginStroke(colors.foreground).
				moveTo(pressPosition.x,pressPosition.y).
				lineTo(pt.x,pt.y);
		}

		p.pressmove = function( event )
		{	
			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);
			this.points.push(pt);

			if(this.points.length <= 0)
				return;

			this.display.graphics.clear().
				setStrokeStyle(3,"round").
				beginStroke(colors.primary).
				moveTo(this.points[0].x,this.points[0].y);

			for(var i = 1; i < this.points.length; i++)
			{
				var point = this.points[i];
				this.display.graphics.lineTo(point.x,point.y);
			}			
		}

		p.pressDown = function( event )
		{
			this.isDown = true;
			this.points = [];

			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);
			this.points.push(pt);
		}

		p.pressUp = function( event )
		{
			this.isDown = false;
			this.display.graphics.clear();

			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);
			this.pressPoint = this.virtualgrid.GetVirtualPosition(pt.x,pt.y);
		}

	window.Thread = createjs.promote( Thread, "Container" );

} () );
