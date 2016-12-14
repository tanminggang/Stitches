(function(){

	function Background( virtualGrid )
	{
		this.Shape_constructor();
		this.virtualGrid = virtualGrid;
		this.setup();
	}

	var p = createjs.extend( Background, createjs.Shape );
        p.setup = function()
        {
			this.x = canvas.width * -.5;
			this.y = canvas.height * -.5;
			this.graphics.clear();
			this.graphics.beginFill( colors.foreground );

			for( var x = 0; x < canvas.width / spacing; x++ )
			{
				for(var y = 0; y < canvas.height / spacing; y++ )
				{
					var point = this.virtualGrid.GridToCenterPosition (x,y);
					this.graphics.moveTo( point.x, point.y );
					this.graphics.drawCircle( point.x,point.y, 1 );
				}
			}

			this.cache(0,0,canvas.width,canvas.height);
        }

    window.Background = createjs.promote( Background, "Shape" );

} () );
