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
			this.backgroundStyle = document.getElementsByTagName("body")[0].style;
			this.bitmap = new createjs.Bitmap( applicationData.getResult("background") );


			this.pattern = new createjs.Shape();

			this.updateBackgroundFill();
			this.center();

			this.addChild( this.pattern  );

			window.addEventListener('resize', this.resize.bind(this), false);
		}

		p.center = function()
		{
			var xy = this.virtualGrid.GetVirtualPosition(canvas.width * -.5,canvas.height * -.5).getCenteredPosition();

			this.x = xy.x + this.virtualGrid.spacing * 0.5;
			this.y = xy.y + this.virtualGrid.spacing * 0.5;//canvas.height * -.5;			
		}

		p.resize = function()
		{
			this.updateBackgroundFill();
			this.center();
		}

		p.updateBackgroundFill = function()
		{
			var matrix = new createjs.Matrix2D();
				matrix.scale(.1, .1);
				matrix.translate(-50,50);

			var padding = 50;

			this.pattern.graphics.clear();
			this.pattern.graphics.beginBitmapFill(this.bitmap.image, "repeat", matrix)
				.drawRect(-padding, -padding, canvas.width + 2*padding, canvas.height + 2*padding)
				.endFill();
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
