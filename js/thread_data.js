function ThreadData( virtualgrid, styleId )
{
	this.virtualgrid = virtualgrid;
	
	this.points = [];
	this.stitches = [];
	this.currentStitch = null;

	this.setColor( styleId );
}

ThreadData.prototype.setColor = function( styleId )
{
	var styleColor = threadStyle[styleId];
	
	// this.highlightColor = styleColor;
	// this.color = tinycolor(styleColor).darken(20).desaturate(5).toHexString();
	// this.shadowColor = tinycolor(styleColor).darken(20).desaturate(50).setAlpha(.3).toRgbString();

	this.highlightColor = tinycolor(styleColor).lighten(20).saturate(5).toHexString();
	this.color = styleColor;
	this.shadowColor = tinycolor(styleColor).darken(20).desaturate(50).setAlpha(.3).toRgbString();

	this.styleId = styleId;
}

ThreadData.prototype.addPoint = function( x,y )
{
	var point = new Point(x,y);
	this.points.push( point );
}

ThreadData.prototype.clearAll = function()
{
	this.clearPoints();
	this.clearStitches();	
}

ThreadData.prototype.clearPoints = function(  )
{
	this.points = [];
}

ThreadData.prototype.startStitch = function(x,y)
{
	if(this.currentStitch != null)
		return null;

	this.currentStitch = new Stitch( this.virtualgrid );
	this.currentStitch.setStartPosition( x,y );

	return this.currentStitch;
}

ThreadData.prototype.endStitch = function(x,y)
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

ThreadData.prototype.hasStitches = function()
{
	if(this.stitches.length > 0)
		return true;

	return false;
}

ThreadData.prototype.hasPoints= function()
{
	if(this.points.length > 0)
		return true;

	return false;
}

ThreadData.prototype.clearStitches = function()
{
	this.currentStitch = null;
	this.stitches = [];
}

ThreadData.prototype.undoStitch = function()
{
	if(this.currentStitch)
		return;

	if(this.stitches.length > 0)
		this.stitches.pop();	
}

ThreadData.prototype.getColor = function()
{
	return this.color;
}

ThreadData.prototype.getHighlightColor = function()
{
	//var color = tinycolor( this.getColor() ).lighten(20).saturate(5).toHexString() 
	return this.highlightColor;
}


ThreadData.prototype.getShadowColor = function()
{
	return this.shadowColor;
}

ThreadData.prototype.getData = function()
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

ThreadData.prototype.loadData = function( data )
{
	this.clearAll();
	this.setColor( data.styleId );
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

