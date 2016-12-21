
var spacing = 10;
var colors = {
	background : "#edecea",
	foreground : "#d6d4d1",
	primary : "#3a62a3",
	secondary : "#64a33a"
}
var threadStyle =
[
	"#000000",
	"#3a62a3",
	"#64a33a",
	"#ce0a38"

];
var threadId = 1;

function main()
{
	// Setup
	setup();

	// Virtual Grid
	var virtualgrid = new VirtualGrid( spacing );

	// Queue and Thread
	var display = new Display( virtualgrid );
	//var thread = new Thread( virtualgrid );


	/*

		Thread is a data object for a particular thread.
			- has start, end
			- has drawing points

		Queue stores threads.

		Display displays the output of thread.

	*/

	// Display
	var background = new Background( virtualgrid );
	var cursor = new Cursor( virtualgrid );
	var drawing = new createjs.Container();

	// Input
	var input = new Input( virtualgrid, drawing, background, display );

	// Add Children
	container.addChild( drawing );
	drawing.addChild( background, display, cursor );

	// Demo Data Load
	var data = '{"styleId":1,"stitchData":[{"startGridPosition":{"x":-3,"y":-8},"endGridPosition":{"x":-3,"y":-7}},{"startGridPosition":{"x":-1,"y":-8},"endGridPosition":{"x":-1,"y":-7}},{"startGridPosition":{"x":-6,"y":-6},"endGridPosition":{"x":-5,"y":-5}},{"startGridPosition":{"x":-5,"y":-5},"endGridPosition":{"x":-4,"y":-4}},{"startGridPosition":{"x":-4,"y":-4},"endGridPosition":{"x":-3,"y":-4}},{"startGridPosition":{"x":-3,"y":-4},"endGridPosition":{"x":-2,"y":-4}},{"startGridPosition":{"x":-2,"y":-4},"endGridPosition":{"x":-1,"y":-4}},{"startGridPosition":{"x":-1,"y":-4},"endGridPosition":{"x":0,"y":-4}},{"startGridPosition":{"x":0,"y":-4},"endGridPosition":{"x":1,"y":-5}},{"startGridPosition":{"x":1,"y":-5},"endGridPosition":{"x":2,"y":-6}}]}';
	input.load( data );
}

/*

	TODO
	- need delete
	- need seperate lines
	- fix background being off
	- fix colors and line rendering
	- add additional colors
	- animate thread removal
	- try random thread weighting to make it more realistic
	- add insert/exit points
	- add thread 'drop shadow'
	- tweak colors
	- show backing threads
	- cut thread
	- design initial dealyo
	- load initial dealyo
	- save
	- load

*/
