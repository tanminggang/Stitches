(function(){

	var id = 0;
	var pointerSize = 6;

	function Cursor( virtualGrid )
	{
		this.Container_constructor();

		this.virtualGrid = virtualGrid;
		this.id = id++;

		this.outline = null;
		this.pointer = null;
		this.display = null;
		this.lastTool = null;
		this.position = new Point(0,0);

		this.setup();
		this.drawCursor();
	}
	
	var p = createjs.extend( Cursor, createjs.Container );

	p.setup = function()
	{
		this.outline = new createjs.Shape();
		this.pointer = new createjs.Shape();
		this.display = new createjs.Text("test", "15px Arial", "black");

		this.addChild( this.outline, this.pointer );
		this.on("tick", this.ontick);
	}

	p.drawCursor = function()
	{
		var size = this.virtualGrid.spacing;
		var color = "#292A25";

		var outlineGraphics = new createjs.Graphics();
			outlineGraphics.clear();
			outlineGraphics.setStrokeStyle(size * .03,"round");
			outlineGraphics.setStrokeDash([size * .1,size *.05],0);
			outlineGraphics.beginStroke( color );
			outlineGraphics.drawRect(0,0,size,size);

		var pointerGraphics = new createjs.Graphics();
			pointerGraphics.clear();
			pointerGraphics.beginFill( color );
			pointerGraphics.drawCircle(0,0,size * .06);

		this.outline.graphics = outlineGraphics;
		this.pointer.graphics = pointerGraphics;
	}

	p.ontick = function( event )
	{
		if(!this.stage)
			return;

		var pt = container.globalToLocal(this.stage.mouseX , this.stage.mouseY);
			// pt.x += this.game.gameContainer.x;
			// pt.y += this.game.gameContainer.y;

		this.pointer.x = pt.x;// + this.app.gameContainer.x;
		this.pointer.y = pt.y;// + this.app.gameContainer.y;

		this.display.x = this.pointer.x;
		this.display.y = this.pointer.y + 20;


		this.position = this.virtualGrid.PositionToGrid( pt.x, pt.y )
		var pos = this.virtualGrid.GridToPosition( this.position.x, this.position.y );
			//pos.x += this.app.gameContainer.x;
			//pos.y += this.app.gameContainer.y;
			// pos = this.game.gameContainer.localToGlobal( pos.x, pos.y );

		this.outline.x = pos.x;
		this.outline.y = pos.y;

		this.display.text = pt.x + "x"+pt.y +"\r\n("+this.position.x+","+this.position.y+")";


		//console.log(objs);
	}

	window.Cursor = createjs.promote( Cursor, "Container" );

} () );
