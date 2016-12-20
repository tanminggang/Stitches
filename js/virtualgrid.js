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
	// set our internal grid position. It will be used for all calculations
	this.gridPosition = this.grid.PositionToGrid(this.rawPosition.x,this.rawPosition.y)
}

VirtualPosition.prototype.setGridPosition = function(x,y)
{
	this.gridPosition = new Point(x,y);
	this.rawPosition = this.grid.GridToPosition(x,y);
	
	return this.gridPosition;
}

VirtualPosition.prototype.getRawPosition = function()
{
	return this.rawPosition;
}

VirtualPosition.prototype.getGridPosition = function()
{
	return this.gridPosition;
}

VirtualPosition.prototype.getCenteredPosition = function()
{
	this.centeredPosition = this.grid.GridToCenterPosition(this.gridPosition.x,this.gridPosition.y);
	return this.centeredPosition;
}

VirtualPosition.prototype.getPosition = function()
{
	this.position = this.grid.GridToPosition(this.gridPosition.x,this.gridPosition.y);
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
