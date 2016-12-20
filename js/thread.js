function Thread( virtualgrid, styleId )
{
	this.virtualgrid = virtualgrid;
	this.styleId = styleId;
	this.points = [];
	this.stitches = [];
	this.currentStitch = null;
}

Thread.prototype.addPoint = function( x,y )
{
	var point = new Point(x,y);
	this.points.push( point );
}

Thread.prototype.clearPoints = function(  )
{
	this.points = [];
}

Thread.prototype.startStitch = function(x,y)
{
	if(this.currentStitch != null)
		return null;

	this.currentStitch = new Stitch( this.virtualgrid );
	this.currentStitch.setStartPosition( x,y );

	return this.currentStitch;
}

Thread.prototype.endStitch = function(x,y)
{
	if(this.currentStitch)
	{
		var stitch = this.currentStitch;
		stitch.setEndPosition(x,y);
		this.stitches.push( stitch );
		this.currentStitch = null;

		return stitch;
	}
}

Thread.prototype.clearStitches = function()
{
	this.currentStitch = null;
	this.stitches = [];
}

Thread.prototype.undoStitch = function()
{
	if(this.currentStitch)
		return;

	if(this.stitches.length > 0)
		this.stitches.pop();	
}

Thread.prototype.getColor = function()
{
	return threadStyle[this.styleId];
}

Thread.prototype.getData = function()
{
	var stitchData = [];
	for( var i = 0; i < this.stitches.length; i++)
	{
		stitchData[i] = this.stitches[i].getData();
	}
	var data = {
		styleId : this.styleId,
		stitchData : stitchData
	};
	return data;
}

Thread.prototype.loadData = function( data )
{
	this.clearPoints();
	this.clearStitches();
	this.styleId = data.styleId;
	for(var i = 0; i < data.stitchData.length; i++)
	{
		var stitch = new Stitch( this.virtualgrid ); 
			stitch.loadData( data.stitchData[i] );

		this.stitches[i] = stitch;
	}
}

// ----------------------------------------------------------------

function Stitch( virtualgrid )
{
	this.virtualgrid = virtualgrid;
}

Stitch.prototype.setStartPosition = function( x, y )
{
	this.startPosition = this.virtualgrid.GetVirtualPosition(x,y);
}

Stitch.prototype.setEndPosition = function( x, y )
{
	this.endPosition = this.virtualgrid.GetVirtualPosition(x,y);
}

Stitch.prototype.loadData = function( data )
{
	var startGridPosition = data.startGridPosition;
	var endGridPosition = data.endGridPosition;

	this.startPosition = this.virtualgrid.GetVirtualPosition(0,0);
	this.endPosition = this.virtualgrid.GetVirtualPosition(0,0);

	this.startPosition.setGridPosition( startGridPosition.x, startGridPosition.y );
	this.endPosition.setGridPosition( endGridPosition.x, endGridPosition.y );
}

Stitch.prototype.getData = function()
{
	var data = {
		startGridPosition : this.startPosition.getGridPosition(),
		endGridPosition : this.endPosition.getGridPosition()
	};
	return data;
}

