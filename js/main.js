
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

	// Display
	var queue = new Queue( virtualgrid );
	var display = new Display( virtualgrid );
	var background = new Background( virtualgrid );	
	var cursor = new Cursor( virtualgrid );
	var displayContainer = new createjs.Container();

	// Input
	var input = new Input( virtualgrid, displayContainer, background, display );

	// Add Children
	container.addChild( displayContainer );	
	displayContainer.addChild( background, display, cursor );

	// Demo Data Load
	var data = '{"styleId":1,"stitchData":[{"startGridPosition":{"x":-3,"y":-8},"endGridPosition":{"x":-3,"y":-7}},{"startGridPosition":{"x":-1,"y":-8},"endGridPosition":{"x":-1,"y":-7}},{"startGridPosition":{"x":-6,"y":-6},"endGridPosition":{"x":-5,"y":-5}},{"startGridPosition":{"x":-5,"y":-5},"endGridPosition":{"x":-4,"y":-4}},{"startGridPosition":{"x":-4,"y":-4},"endGridPosition":{"x":-3,"y":-4}},{"startGridPosition":{"x":-3,"y":-4},"endGridPosition":{"x":-2,"y":-4}},{"startGridPosition":{"x":-2,"y":-4},"endGridPosition":{"x":-1,"y":-4}},{"startGridPosition":{"x":-1,"y":-4},"endGridPosition":{"x":0,"y":-4}},{"startGridPosition":{"x":0,"y":-4},"endGridPosition":{"x":1,"y":-5}},{"startGridPosition":{"x":1,"y":-5},"endGridPosition":{"x":2,"y":-6}}]}';
	input.load( data );
}

/*

	TODO
	- fix basic color selection with keyboard
	- set min/max zoom ( important for repeating patterns etc, background needs to know how much to sample)
	- need to CRUD Threads
	- need delete
	- need seperate lines
	- show backing threads
	- add additional colors
	- animate thread removal
	- add insert/exit points display like thread
	- add thread 'drop shadow'
	- tweak colors	
	- cut thread
	- design initial dealyo

*/
