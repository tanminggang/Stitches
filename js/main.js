
var spacing = 10;
var colors = {
	background : "#edecea",
	foreground : "#d6d4d1",
	primary : "#3a62a3",
	secondary : "#64a33a"
}
// var threadStyle =
// [
// 	"#000000",
// 	"#3a62a3",
// 	"#64a33a",
// 	"#ce0a38",
// 	"#29cecc"
// ];

// // Pastel
// var threadStyle =
// [
// 	"#EA3556",
// 	"#61D2D6",
// 	"#EDE5E2",
// 	"#ED146F",
// 	"#EDDE45",
// 	"#9BF0E9"
// ];

// // Which Way
// var threadStyle =
// [
// 	"#29221f",
// 	"#f83350",
// 	"#1c747b",
// 	"#27bfbb",
// 	"#fcf5c8"
// ];

// // Pink Pastel
// var threadStyle =
// [
// 	"#FE4365",
// 	"#FC9D9A",
// 	"#F9CDAD",
// 	"#C8C8A9",
// 	"#83AF9B",
// 	"#1c747b"
// ];

// Country Home
var threadStyle =
[
	"#5f7180",
	"#8f9d93",
	"#ce6179",
	"#4b4c53",
	"#d7ad99",
	"#d5d5d3"
];

var threadId = 0;
var applicationData;

function main()
{
	// Setup
	setup();

	// Load Data
	applicationData = new createjs.LoadQueue( false );
	applicationData.on("complete", applicationReady, this);
	applicationData.on("error", applicationError, this);
	applicationData.loadManifest([
		{id: "background", src:"imgs/aida.png"},
		{id: "thread", src:"imgs/cheap_diagonal_fabric.png"}
	]);

	// Demo Data Load
	//var data = '{"styleId":1,"stitchData":[{"startGridPosition":{"x":-3,"y":-8},"endGridPosition":{"x":-3,"y":-7}},{"startGridPosition":{"x":-1,"y":-8},"endGridPosition":{"x":-1,"y":-7}},{"startGridPosition":{"x":-6,"y":-6},"endGridPosition":{"x":-5,"y":-5}},{"startGridPosition":{"x":-5,"y":-5},"endGridPosition":{"x":-4,"y":-4}},{"startGridPosition":{"x":-4,"y":-4},"endGridPosition":{"x":-3,"y":-4}},{"startGridPosition":{"x":-3,"y":-4},"endGridPosition":{"x":-2,"y":-4}},{"startGridPosition":{"x":-2,"y":-4},"endGridPosition":{"x":-1,"y":-4}},{"startGridPosition":{"x":-1,"y":-4},"endGridPosition":{"x":0,"y":-4}},{"startGridPosition":{"x":0,"y":-4},"endGridPosition":{"x":1,"y":-5}},{"startGridPosition":{"x":1,"y":-5},"endGridPosition":{"x":2,"y":-6}}]}';
}

function applicationError( event )
{
	console.log( event.data );
}

function applicationReady( event )
{
	// Virtual Grid
	var virtualgrid = new VirtualGrid( spacing );

	// Display
	var piece = new Piece( virtualgrid );
	var display = new Display( virtualgrid );
	var background = new Background( virtualgrid );
	var cursor = new Cursor( virtualgrid );
	var displayContainer = new createjs.Container();

	// Input
	var input = new Input( virtualgrid, displayContainer, background, display );

	// Add Children
	container.addChild( displayContainer );
	displayContainer.addChild( background, display, cursor );

	var data = "";
	if(data)
		input.load( data );	
}

/*

	TODO
	- add additional colors
	- tweak colors
	- help screen
	- welcome screen
	- need to rearchitect because of display bugs
		( add display objects for each thread, need to cache unactive threads )
		( add maximum number of stitches per thread to allow better caching )
	- look at CRUD display Architecture
	- fix thread going to final pointer position
	- need delete
	- add ability to add knots at a point or ignore the same end + start point when creating threads
	- show backing threads
	- design initial dealyo
	- could do active cacheing to make it run better

*/
