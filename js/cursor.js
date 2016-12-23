(function(){

	var pointerSize = 6;

	function Cursor( virtualGrid )
	{
		this.Container_constructor();

		this.virtualGrid = virtualGrid;
		this.setup();		
	}
	
	var p = createjs.extend( Cursor, createjs.Container );

	p.setup = function()	
	{
		this.cursor = new createjs.Shape();
		this.cursor.graphics.clear().
			beginFill( "#292A25" ).
			drawCircle(0,0,this.virtualGrid.spacing * .15);

		this.display = new createjs.Shape();
		this.display.graphics.clear().
			beginFill( colors.foreground ).
			drawCircle(0,0,this.virtualGrid.spacing * 0.5);

		this.addChild( this.display );

		this.on("added", this.added );
	}

	p.added = function( event )
	{		
		this.on("tick", this.update, this);		
	}

	p.update = function( event )
	{
		var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);
		var pos = this.virtualGrid.PositionToCenterPosition( pt.x, pt.y );
		var d = Math.sqrt( (pt.x-pos.x)*(pt.x-pos.x) + (pt.y-pos.y)*(pt.y-pos.y) );
		var alpha = 1 - (d / (this.virtualGrid.spacing * 0.5));

		this.cursor.x = pt.x;
		this.cursor.y = pt.y;

		this.display.x = pos.x;
		this.display.y = pos.y;
		this.display.alpha = alpha;
	}

	window.Cursor = createjs.promote( Cursor, "Container" );

} () );
