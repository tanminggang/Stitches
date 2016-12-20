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

Thread.prototype.startStitch = function(x,y)
{
	if(this.currentStitch != null)
		return;

	this.currentStitch = new Stitch( this.virtualgrid );
	this.currentStitch.setStartPosition( x,y );
}

Thread.prototype.endStitch = function(x,y)
{
	if(this.currentStitch)
	{
		this.currentStitch.setEndPosition(x,y);
		this.stitches.push( this.currentStitch );
		this.currentStitch = null;
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

