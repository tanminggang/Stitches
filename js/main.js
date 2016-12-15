var spacing = 10;
var colors = {
	background : "#edecea",
	foreground : "#dbd9d6",
	primary : "#3a62a3",
	secondary : "#64a33a"
}
var threadColors =
[
	"#3a62a3",
	"#64a33a"
];
var threadId = 1;

function main()
{
	// Setup
	setup();

	// Virtual Grid
	var virtualgrid = new VirtualGrid( spacing );

	// Queue and Thread
	var queue = new Queue( virtualgrid );
	var thread = new Thread( virtualgrid );

	// Display
	var background = new Background( virtualgrid );	
	var cursor = new Cursor( virtualgrid );
	var drawing = new createjs.Container();

	// Input
	var input = new Input( virtualgrid, drawing, background, queue, thread);

	// Add Children
	container.addChild( drawing );	
	drawing.addChild( background, queue, thread, cursor );	
}

/*

	TODO
	- link stitch color to 'styleId' so weights and images can be applied
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
