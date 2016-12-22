(function(){

	function Background( virtualGrid )
	{
		this.Container_constructor();
		this.virtualGrid = virtualGrid;

		this.backgroundStyle = document.getElementsByTagName("body")[0].style;
		this.bitmap = new createjs.Bitmap( applicationData.getResult("background") );
		//console.log( this.bitmap );
		//return;
		this.setup();
	}

	var p = createjs.extend( Background, createjs.Container );
        p.setup = function()
        {
        /*
			this.display = new createjs.Shape();
			this.display.graphics.clear();
			this.display.graphics.beginFill( colors.foreground );

			for( var x = 0; x < Math.ceil(canvas.width / this.virtualGrid.spacing); x++ )
			{
				for(var y = 0; y < Math.ceil(canvas.height / this.virtualGrid.spacing); y++ )
				{
					var point = this.virtualGrid.GridToCenterPosition (x,y);
					this.display.graphics.moveTo( point.x, point.y );
					this.display.graphics.drawCircle( point.x,point.y, 1 );
				}
			}

			this.display.cache(0,0,canvas.width,canvas.height);


*/

			var xy = this.virtualGrid.GetVirtualPosition(canvas.width * -.5,canvas.height * -.5).getCenteredPosition();
				this.x = xy.x + this.virtualGrid.spacing * 0.5;
				this.y = xy.y + this.virtualGrid.spacing * 0.5;//canvas.height * -.5;
				this.pattern = new createjs.Shape();
				this.pattern.graphics.clear();


			var matrix = new createjs.Matrix2D();
				matrix.scale(.1, .1);
				matrix.translate(-50,50);


			var padding = 50;

			this.pattern.graphics.beginBitmapFill(this.bitmap.image, "repeat", matrix)
				.drawRect(-padding, -padding, canvas.width + 2*padding, canvas.height + 2*padding)
				.endFill();


			this.addChild( this.pattern  );

		}

        p.updatePanDelta = function()
		{
			var wX = Math.floor(this.parent.x / this.virtualGrid.spacing) * this.virtualGrid.spacing;
			var wY = Math.floor(this.parent.y / this.virtualGrid.spacing) * this.virtualGrid.spacing;

			// this.display.x = -wX;
			// this.display.y = -wY;

			this.pattern.x = -wX;
			this.pattern.y = -wY;
		}

		p.updateZoom = function( zoom )
		{
			var zoomString = (140 * zoom) + "px";
			this.backgroundStyle.backgroundSize = zoomString + " " + zoomString;
		}

    window.Background = createjs.promote( Background, "Container" );

} () );
