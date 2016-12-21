
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
	//var data = '{"styleId":1,"stitchData":[{"startGridPosition":{"x":-3,"y":-8},"endGridPosition":{"x":-3,"y":-7}},{"startGridPosition":{"x":-1,"y":-8},"endGridPosition":{"x":-1,"y":-7}},{"startGridPosition":{"x":-6,"y":-6},"endGridPosition":{"x":-5,"y":-5}},{"startGridPosition":{"x":-5,"y":-5},"endGridPosition":{"x":-4,"y":-4}},{"startGridPosition":{"x":-4,"y":-4},"endGridPosition":{"x":-3,"y":-4}},{"startGridPosition":{"x":-3,"y":-4},"endGridPosition":{"x":-2,"y":-4}},{"startGridPosition":{"x":-2,"y":-4},"endGridPosition":{"x":-1,"y":-4}},{"startGridPosition":{"x":-1,"y":-4},"endGridPosition":{"x":0,"y":-4}},{"startGridPosition":{"x":0,"y":-4},"endGridPosition":{"x":1,"y":-5}},{"startGridPosition":{"x":1,"y":-5},"endGridPosition":{"x":2,"y":-6}}]}';

	var data='{"styleId":1,"stitchData":[{"startGridPosition":{"x":-12,"y":-10},"endGridPosition":{"x":-11,"y":-9}},{"startGridPosition":{"x":-12,"y":-11},"endGridPosition":{"x":-11,"y":-10}},{"startGridPosition":{"x":-11,"y":-12},"endGridPosition":{"x":-10,"y":-11}},{"startGridPosition":{"x":-10,"y":-12},"endGridPosition":{"x":-9,"y":-11}},{"startGridPosition":{"x":-9,"y":-12},"endGridPosition":{"x":-8,"y":-11}},{"startGridPosition":{"x":-8,"y":-12},"endGridPosition":{"x":-7,"y":-11}},{"startGridPosition":{"x":-7,"y":-12},"endGridPosition":{"x":-6,"y":-11}},{"startGridPosition":{"x":-6,"y":-12},"endGridPosition":{"x":-5,"y":-11}},{"startGridPosition":{"x":-5,"y":-12},"endGridPosition":{"x":-4,"y":-11}},{"startGridPosition":{"x":-4,"y":-12},"endGridPosition":{"x":-3,"y":-11}},{"startGridPosition":{"x":-4,"y":-11},"endGridPosition":{"x":-3,"y":-10}},{"startGridPosition":{"x":-3,"y":-11},"endGridPosition":{"x":-4,"y":-10}},{"startGridPosition":{"x":-3,"y":-12},"endGridPosition":{"x":-4,"y":-11}},{"startGridPosition":{"x":-4,"y":-12},"endGridPosition":{"x":-5,"y":-11}},{"startGridPosition":{"x":-5,"y":-12},"endGridPosition":{"x":-6,"y":-11}},{"startGridPosition":{"x":-6,"y":-12},"endGridPosition":{"x":-7,"y":-11}},{"startGridPosition":{"x":-7,"y":-12},"endGridPosition":{"x":-8,"y":-11}},{"startGridPosition":{"x":-8,"y":-12},"endGridPosition":{"x":-9,"y":-11}},{"startGridPosition":{"x":-9,"y":-12},"endGridPosition":{"x":-10,"y":-11}},{"startGridPosition":{"x":-10,"y":-12},"endGridPosition":{"x":-11,"y":-11}},{"startGridPosition":{"x":-11,"y":-11},"endGridPosition":{"x":-12,"y":-10}},{"startGridPosition":{"x":-11,"y":-10},"endGridPosition":{"x":-12,"y":-9}},{"startGridPosition":{"x":-9,"y":-13},"endGridPosition":{"x":-8,"y":-12}},{"startGridPosition":{"x":-8,"y":-13},"endGridPosition":{"x":-9,"y":-12}},{"startGridPosition":{"x":-9,"y":-11},"endGridPosition":{"x":-8,"y":-10}},{"startGridPosition":{"x":-9,"y":-10},"endGridPosition":{"x":-8,"y":-9}},{"startGridPosition":{"x":-9,"y":-9},"endGridPosition":{"x":-8,"y":-8}},{"startGridPosition":{"x":-9,"y":-8},"endGridPosition":{"x":-8,"y":-7}},{"startGridPosition":{"x":-8,"y":-8},"endGridPosition":{"x":-7,"y":-7}},{"startGridPosition":{"x":-9,"y":-7},"endGridPosition":{"x":-8,"y":-6}},{"startGridPosition":{"x":-9,"y":-6},"endGridPosition":{"x":-8,"y":-5}},{"startGridPosition":{"x":-9,"y":-5},"endGridPosition":{"x":-8,"y":-4}},{"startGridPosition":{"x":-9,"y":-4},"endGridPosition":{"x":-8,"y":-3}},{"startGridPosition":{"x":-10,"y":-3},"endGridPosition":{"x":-9,"y":-2}},{"startGridPosition":{"x":-11,"y":-3},"endGridPosition":{"x":-10,"y":-2}},{"startGridPosition":{"x":-12,"y":-3},"endGridPosition":{"x":-11,"y":-2}},{"startGridPosition":{"x":-10,"y":-11},"endGridPosition":{"x":-9,"y":-10}},{"startGridPosition":{"x":-10,"y":-10},"endGridPosition":{"x":-9,"y":-9}},{"startGridPosition":{"x":-10,"y":-9},"endGridPosition":{"x":-9,"y":-8}},{"startGridPosition":{"x":-10,"y":-8},"endGridPosition":{"x":-9,"y":-7}},{"startGridPosition":{"x":-10,"y":-7},"endGridPosition":{"x":-9,"y":-6}},{"startGridPosition":{"x":-10,"y":-6},"endGridPosition":{"x":-9,"y":-5}},{"startGridPosition":{"x":-10,"y":-5},"endGridPosition":{"x":-9,"y":-4}},{"startGridPosition":{"x":-10,"y":-4},"endGridPosition":{"x":-9,"y":-3}},{"startGridPosition":{"x":-12,"y":-2},"endGridPosition":{"x":-11,"y":-3}},{"startGridPosition":{"x":-11,"y":-2},"endGridPosition":{"x":-10,"y":-3}},{"startGridPosition":{"x":-10,"y":-2},"endGridPosition":{"x":-9,"y":-3}},{"startGridPosition":{"x":-10,"y":-3},"endGridPosition":{"x":-9,"y":-4}},{"startGridPosition":{"x":-9,"y":-3},"endGridPosition":{"x":-8,"y":-4}},{"startGridPosition":{"x":-10,"y":-4},"endGridPosition":{"x":-9,"y":-5}},{"startGridPosition":{"x":-9,"y":-4},"endGridPosition":{"x":-8,"y":-5}},{"startGridPosition":{"x":-10,"y":-5},"endGridPosition":{"x":-9,"y":-6}},{"startGridPosition":{"x":-9,"y":-5},"endGridPosition":{"x":-8,"y":-6}},{"startGridPosition":{"x":-10,"y":-6},"endGridPosition":{"x":-9,"y":-7}},{"startGridPosition":{"x":-9,"y":-6},"endGridPosition":{"x":-8,"y":-7}},{"startGridPosition":{"x":-10,"y":-7},"endGridPosition":{"x":-9,"y":-8}},{"startGridPosition":{"x":-9,"y":-7},"endGridPosition":{"x":-8,"y":-8}},{"startGridPosition":{"x":-10,"y":-8},"endGridPosition":{"x":-9,"y":-9}},{"startGridPosition":{"x":-9,"y":-8},"endGridPosition":{"x":-8,"y":-9}},{"startGridPosition":{"x":-10,"y":-9},"endGridPosition":{"x":-9,"y":-10}},{"startGridPosition":{"x":-9,"y":-9},"endGridPosition":{"x":-8,"y":-10}},{"startGridPosition":{"x":-10,"y":-10},"endGridPosition":{"x":-9,"y":-11}},{"startGridPosition":{"x":-9,"y":-10},"endGridPosition":{"x":-8,"y":-11}},{"startGridPosition":{"x":-7,"y":-8},"endGridPosition":{"x":-6,"y":-7}},{"startGridPosition":{"x":-6,"y":-8},"endGridPosition":{"x":-5,"y":-7}},{"startGridPosition":{"x":-5,"y":-8},"endGridPosition":{"x":-6,"y":-7}},{"startGridPosition":{"x":-6,"y":-8},"endGridPosition":{"x":-7,"y":-7}},{"startGridPosition":{"x":-7,"y":-8},"endGridPosition":{"x":-8,"y":-7}},{"startGridPosition":{"x":7,"y":0},"endGridPosition":{"x":7,"y":0}}]}'
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
