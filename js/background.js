(function(){

	function Background( virtualGrid )
	{
		this.Container_constructor();
		this.virtualGrid = virtualGrid;
		this.setup();
	}

	var p = createjs.extend( Background, createjs.Container );
        p.setup = function()
        {
			this.x = canvas.width * -.5;
			this.y = canvas.height * -.5;
			this.display = new createjs.Shape();
			this.display.graphics.clear();
			this.display.graphics.beginFill( colors.foreground );

			for( var x = 0; x < canvas.width / spacing; x++ )
			{
				for(var y = 0; y < canvas.height / spacing; y++ )
				{
					var point = this.virtualGrid.GridToCenterPosition (x,y);
					this.display.graphics.moveTo( point.x, point.y );
					this.display.graphics.drawCircle( point.x,point.y, 1 );
				}
			}

			this.display.cache(0,0,canvas.width,canvas.height);
			this.addChild( this.display );
        }

        p.updatePanDelta = function()
		{
			var wX = Math.floor(this.parent.x / this.virtualGrid.spacing) * this.virtualGrid.spacing;
			var wY = Math.floor(this.parent.y / this.virtualGrid.spacing) * this.virtualGrid.spacing;

			this.display.x = -wX;
			this.display.y = -wY;
		}

    window.Background = createjs.promote( Background, "Container" );

} () );
