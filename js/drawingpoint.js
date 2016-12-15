function DrawingPoint( virtualgrid, color )
{
	this.virtualgrid = virtualgrid;
	this.color = color;
}

DrawingPoint.prototype.SetStartPosition = function( x, y )
{
	this.startPosition = this.virtualgrid.GetVirtualPosition(x,y);
}

DrawingPoint.prototype.SetEndPosition = function( x, y )
{
	this.endPosition = this.virtualgrid.GetVirtualPosition(x,y);
}