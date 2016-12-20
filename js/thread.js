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

