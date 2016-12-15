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
			this.points = [];

			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);
			this.points.push(pt);
		}

		p.pressUp = function( event )
		{
			this.display.graphics.clear();
		}

	window.Thread = createjs.promote( Thread, "Container" );

} () );
