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
			// X coordinate is (x1 + x2) / 2
			// y coordinate is (y1 + y2) / 2
			this.updateThread();
		}

		p.pressmove = function( event )
		{	
			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);
			this.points.push(pt);

			if(this.points.length <= 0)
				return;

			//this.updateThread();		
		}

		p.updateThread = function()
		{
			if( this.points.length <= 0)
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
				pt = this.virtualgrid.PositionToCenterPosition( pt.x, pt.y );

			this.points.push(pt);
		}

		p.pressUp = function( event )
		{
			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);
				pt = this.virtualgrid.PositionToCenterPosition( pt.x, pt.y );

			this.points.push(pt);

			//this.display.graphics.clear();
			if( this.points.lenght < 1)
				return;

			// X coordinate is (x1 + x2) / 2
			// y coordinate is (y1 + y2) / 2

			// X coordinate is (x1 + x2) * .5
			// y coordinate is (y1 + y2) * .5

			var start = this.points[0];
			var end = this.points[this.points.length-1];


			for(var i = 1; i < this.points.length-1; i++ )
			{
				var point = this.points[i];
				var tween = createjs.Tween.get(point).to(
					{x: end.x, y: end.y},
					300 - ( 4 * i ),
					createjs.Ease.quadInOut);
			}

			p.clear = function()
			{				
				if( this.points.length < 1)
					return;

				// X coordinate is (x1 + x2) / 2
				// y coordinate is (y1 + y2) / 2

				// X coordinate is (x1 + x2) * .5
				// y coordinate is (y1 + y2) * .5

				var start = this.points[0];

				for(var i = 1; i < this.points.length; i++ )
				{
					var point = this.points[i];
					var tween = createjs.Tween.get(point).to(
						{x: start.x, y: start.y},
						300,
						createjs.Ease.quadInOut);
				}
			}

		}

	window.Thread = createjs.promote( Thread, "Container" );

} () );
