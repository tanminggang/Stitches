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

VirtualGrid.prototype.PositionToCenterPosition = function(x, y)
{
	var grid = this.PositionToGrid( x, y );
	return this.GridToCenterPosition( grid.x, grid.y );
}

VirtualGrid.prototype.GetVirtualPosition = function( xPosition, yPosition)
{
	return new VirtualPosition(xPosition,yPosition,this);
}

function VirtualPosition( xPosition, yPosition, grid )
{
	this.grid = grid;
	this.rawPosition = new Point(xPosition,yPosition);
}

VirtualPosition.prototype.getRawPosition = function()
{
	return this.rawPosition;
}

VirtualPosition.prototype.getGridPosition = function()
{
	if(!this.gridPosition)
		this.gridPosition = this.grid.PositionToGrid(this.rawPosition.x,this.rawPosition.y);

	return this.gridPosition;
}

VirtualPosition.prototype.getCenteredPosition = function()
{
	if(!this.centeredPosition)
		this.centeredPosition = this.grid.PositionToCenterPosition(this.rawPosition.x,this.rawPosition.y);

	return this.centeredPosition;
}

VirtualPosition.prototype.getPosition = function()
{
	if(!this.position)
		this.position = this.grid.PositionToPosition(this.rawPosition.x,this.rawPosition.y);

	return this.rawPosition;
}

/*
function VirtualPoint( xPoint,yPoint, grid )
{
	this.x = x;
	this.y = y;
	this.grid = grid;
}
*/
