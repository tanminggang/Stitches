function DrawingPoint( virtualgrid, threadStyle )
{
	this.virtualgrid = virtualgrid;
	this.style = threadStyle;
}

DrawingPoint.prototype.SetStartPosition = function( x, y )
{
	this.startPosition = this.virtualgrid.GetVirtualPosition(x,y);
}

DrawingPoint.prototype.SetEndPosition = function( x, y )
{
	this.endPosition = this.virtualgrid.GetVirtualPosition(x,y);
}

DrawingPoint.prototype.GetColor = function()
{
	return threadStyle[this.style];
}