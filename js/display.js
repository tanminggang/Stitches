(function(){

	function Display( virtualgrid )
	{
		this.Container_constructor();
		this.virtualgrid = virtualgrid;
		this.setup();
	}
	
	var p = createjs.extend( Display, createjs.Container );

		p.setup = function()
		{	
			this.thread = new Thread( this.virtualgrid, 1);

			this.threadDisplay = new createjs.Shape();
			this.pointsDisplay = new createjs.Shape();
			this.addChild( this.threadDisplay, this.pointsDisplay );

			this.on("added", this.added );
		}

		p.added = function( event )
		{			
			this.stage.on("stagemousedown", this.pressDown, this);
			this.stage.on("stagemouseup", this.pressUp, this);
			this.stage.on("pressmove", this.pressmove, this);
			this.on("tick", this.update, this);							
		}

		p.update = function( event )
		{
			this.updatePoints();
		}

		p.pressDown = function( event )
		{
			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);
			var stitch = this.thread.startStitch( pt.x, pt.y);
			var point = stitch.startPosition.getCenteredPosition();

			this.thread.clearPoints();

			this.updateThread();

			this.thread.addPoint( point.x,point.y );
		}

		p.pressUp = function( event )
		{
			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);
			var stitch = this.thread.endStitch( pt.x, pt.y);
			var point = stitch.endPosition.getCenteredPosition();

			this.thread.addPoint( point.x,point.y );

			this.updateThread();
			this.animatePoints();
		}

		p.pressmove = function( event )
		{	
			var pt = this.globalToLocal(this.stage.mouseX , this.stage.mouseY);
			this.thread.addPoint( pt.x,pt.y );	
		}

		p.updateThread = function()
		{
			this.threadDisplay.graphics.clear();
			this.threadDisplay.graphics.setStrokeStyle(7,"round").beginStroke(this.thread.getColor());

			var offset = (this.thread.points.length > 0) ? (1) : (0);
			var stitches = this.thread.stitches;

			for( var i = 0; i < stitches.length-offset; i++)
			{
				var stitch = stitches[i];
				var start = stitch.startPosition.getCenteredPosition();
				var end = stitch.endPosition.getCenteredPosition();

				this.threadDisplay.graphics.
					moveTo(start.x,start.y).
					lineTo(end.x,end.y);
			}
		}

		p.updatePoints = function()
		{
			this.pointsDisplay.graphics.clear();
			this.pointsDisplay.graphics.setStrokeStyle(7,"round").beginStroke(this.thread.getColor());

			if(this.thread.points.length <=  0)
			return;

			this.pointsDisplay.graphics.moveTo( this.thread.points[0].x, this.thread.points[0].y);
			for( var i = 0; i < this.thread.points.length; i++)
			{
				var point = this.thread.points[i];

				this.pointsDisplay.graphics.lineTo(point.x,point.y);

			}

			this.pointsDisplay.graphics.endStroke();
		}

		p.animatePoints = function()
		{
			var start = this.thread.points[0];
			var end = this.thread.points[this.thread.points.length-1];

			for(var i = 1; i < this.thread.points.length-1; i++ )
			{
				var point = this.thread.points[i];
				var tween = createjs.Tween.get(point).to(
					{x: end.x, y: end.y},
					300 - ( 4 * i ),
					createjs.Ease.quadInOut);
			}
		}

		p.undo = function()
		{
			this.thread.clearPoints();
			this.thread.undoStitch();
			this.updateThread();
		}

		p.save = function()
		{
			var data = this.thread.getData();
			console.log( JSON.stringify( data ) )
			//console.log(data );
		}

		p.load = function( data )
		{
			this.thread.loadData( JSON.parse(data) );
			this.updateThread();
		}

	window.Display = createjs.promote( Display, "Container" );

} () );