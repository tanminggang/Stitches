function VirtualGrid(spacing)
{
	this.spacing = spacing;
}

VirtualGrid.prototype.GridToPosition = function(x, y)
{
	return new Point( x * this.spacing, y * this.spacing );
}

VirtualGrid.prototype.GridToCenterPosition = function(x, y)
{
	return new Point(  (x+.5) * this.spacing, (y+.5) * this.spacing );
}

VirtualGrid.prototype.PositionToGrid = function(x, y)
{
	return new Point( Math.floor(x/this.spacing), Math.floor(y/this.spacing) );
}

VirtualGrid.prototype.PositionToPosition = function(x, y)
{
	var grid = this.PositionToGrid( x, y );
	return this.GridToPosition( grid.x, grid.y );
}
