(function(){


	function VirtualGridDisplay( virtualGrid )
	{
		this.Container_constructor();
		this.virtualGrid = virtualGrid;
		this.setup();
	}


	var p = createjs.extend( VirtualGridDisplay, createjs.Container );

	p.setup = function()
	{
		this.display = new createjs.Shape();
		this.vertical = new createjs.Shape();
		this.horizontal = new createjs.Shape();
		this.addChild( this.display, this.vertical, this.horizontal );
		this.redraw();
	}

	p.redraw = function()
	{

		this.display.graphics.setStrokeStyle(1).beginStroke("#DDD");
		var span = 30;

		for(var y = -span; y < span; y++)
		{
			var pX = span * this.virtualGrid.spacing;
			var pY = y * this.virtualGrid.spacing;
			this.display.graphics.moveTo( -pX, pY ).lineTo(pX, pY );
		}

		for(var x = -span; x < span; x++)
		{
			var pX = x * this.virtualGrid.spacing;
			var pY = span * this.virtualGrid.spacing;
			this.display.graphics.moveTo( pX, -pY ).lineTo(pX, pY );
		}


		this.vertical.graphics.setStrokeStyle(3).beginStroke("#DDD");
		this.horizontal.graphics.setStrokeStyle(3).beginStroke("#DDD");

		var pX = span * this.virtualGrid.spacing;
		var pY = span * this.virtualGrid.spacing;

		this.vertical.graphics.moveTo( 0, -pY ).lineTo(0, pY);
		this.horizontal.graphics.moveTo( -pX, 0 ).lineTo(pX, 0 );

	}

	p.updatePanDelta = function()
	{

		var wX = Math.floor(this.parent.x / this.virtualGrid.spacing) * this.virtualGrid.spacing;
		var wY = Math.floor(this.parent.y / this.virtualGrid.spacing) * this.virtualGrid.spacing;

		this.display.x = -wX;
		this.display.y = -wY;

		this.vertical.y = -wY;
		this.horizontal.x = -wX;
	}

    window.VirtualGridDisplay = createjs.promote( VirtualGridDisplay, "Container" );

} () );


/// cross product: var c = (p.x-a.x)*(a.y-s.y)-(p.y-a.y)*(a.x-s.x);
