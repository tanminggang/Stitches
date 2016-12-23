
var spacing = 10;

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

// // Country Home
// var threadStyle =
// [
// 	"#5f7180",
// 	"#8f9d93",
// 	"#ce6179",
// 	"#4b4c53",
// 	"#d7ad99",
// 	"#d5d5d3"
// ];

// // This jawn means, I love you.
// var threadStyle =
// [
// 	"#0e63b4",
// 	"#99bed9",
// 	"#96f179",
// 	"#a0d3c2",
// 	"#383d41",
// 	"#ec4e45"
// ];

// // Melon Suprise
// var threadStyle =
// [
// 	"#D1F2A5",
// 	"#EFFAB4",
// 	"#FFC48C",
// 	"#FF9F80",
// 	"#F56991"
// ];

// // Cheer up emo kid
// var threadStyle =
// [
// 	"#556270",
// 	"#4ECDC4",
// 	"#C7F464",
// 	"#FF6B6B",
// 	"#C44D58"
// ];

// // Winter Home
// var threadStyle =
// [
// 	"#99B898",
// 	"#FECEA8",
// 	"#FF847C",
// 	"#E84A5F",
// 	"#2A363B"
// ];

// // Blue blast orange
// var threadStyle =
// [
// 	"#FF9900",
// 	"#424242",
// 	"#E9E9E9",
// 	"#BCBCBC",
// 	"#3299BB"
// ];

// // Sunshine
// var threadStyle =
// [
// 	"#fff5e4",
// 	"#FAD089",
// 	"#FF9C5B",
// 	"#F5634A",
// 	"#ED303C",
// 	"#219a9d",
// 	"#3d4b48"
// ];

// // LOVE// LOVE// LOVE// LOVE// LOVE// LOVE// LOVE// LOVE// LOVE// LOVE// LOVE// LOVE
// // 1001 Stories 
// var threadStyle =
// [
// 	"#fff5e4",
// 	"#F8B195",
// 	"#F67280",
// 	"#C06C84",
// 	"#6C5B7B",
// 	"#355C7D",
// 	"#3d4b48"
// ];

// // red blue ----- MEH
// var threadStyle =
// [
// 	"#FC354C",
// 	"#29221F",
// 	"#13747D",
// 	"#0ABFBC",
// 	"#FCF7C5"
// ];

// // LOVE// LOVE// LOVE// LOVE// LOVE/
// // Royal 
// var threadStyle =
// [
// 	"#6D9788",
// 	"#1E2528",
// 	"#7E1C13",
// 	"#BF0A0D",
// 	"#E6E1C2"
// ];

// // // LOVE// LOVE// LOVE// LOVE// LOVE/
// // The Way You Love Me
// var threadStyle =
// [
// 	"#1C2130",
// 	"#028F76",
// 	"#B3E099",
// 	"#FFEAAD",
// 	"#D14334"
// ];

// // // LOVE// LOVE// LOVE// LOVE// LOVE/
// // More Pastel Playground
// var threadStyle =
// [
// 	"#A7C5BD",
// 	"#E5DDCB",
// 	"#EB7B59",
// 	"#CF4647",
// 	"#524656",
// 	"#61544c"
// ];

// // // // LOVE// LOVE// LOVE// LOVE// LOVE/
// // Neon Fantasy
// var threadStyle =
// [
// 	"#4E395D",
// 	"#827085",
// 	"#8EBE94",
// 	"#CCFC8E",
// 	"#DC5B3E",
// 	"#61544c"
// ];

// // More Pastel Crap
// var threadStyle =
// [
//"#EE0B5B",
// 	"#E65540",
// 	"#F8ECC2",
// 	"#65A8A6",
// 	"#79896D",
// 	"#61544c"
// ];

// Final
var threadStyle =
[
	"#282828",
	"#e63359",
	"#4E395D",
	"#827085",
	"#65A8A6",
	"#8EBE94",
	"#CCFC8E",
	"#61544c"
];


// // Original
// var threadStyle =
// [
// 	"#282828",
// 	"#557ab1",
// 	"#d51846",
// 	"#82b461"
// ];

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

	var data = '{"panPosition":{"x":0,"y":0},"threads":[{"styleId":0,"stitchData":[{"startGridPosition":{"x":-26,"y":-24},"endGridPosition":{"x":-28,"y":5}},{"startGridPosition":{"x":-24,"y":-21},"endGridPosition":{"x":-26,"y":7}}]},{"styleId":1,"stitchData":[{"startGridPosition":{"x":-19,"y":-25},"endGridPosition":{"x":-21,"y":3}},{"startGridPosition":{"x":-15,"y":-23},"endGridPosition":{"x":-21,"y":1}}]},{"styleId":2,"stitchData":[{"startGridPosition":{"x":-9,"y":-23},"endGridPosition":{"x":-12,"y":-3}},{"startGridPosition":{"x":-5,"y":-23},"endGridPosition":{"x":-9,"y":-4}}]},{"styleId":3,"stitchData":[{"startGridPosition":{"x":0,"y":-22},"endGridPosition":{"x":-6,"y":-4}},{"startGridPosition":{"x":4,"y":-22},"endGridPosition":{"x":-4,"y":-4}}]},{"styleId":4,"stitchData":[{"startGridPosition":{"x":8,"y":-22},"endGridPosition":{"x":2,"y":-9}},{"startGridPosition":{"x":10,"y":-20},"endGridPosition":{"x":5,"y":-8}}]},{"styleId":5,"stitchData":[{"startGridPosition":{"x":13,"y":-21},"endGridPosition":{"x":9,"y":-7}},{"startGridPosition":{"x":16,"y":-22},"endGridPosition":{"x":11,"y":-7}}]},{"styleId":6,"stitchData":[{"startGridPosition":{"x":21,"y":-20},"endGridPosition":{"x":16,"y":-7}},{"startGridPosition":{"x":24,"y":-20},"endGridPosition":{"x":19,"y":-4}}]},{"styleId":0,"stitchData":[{"startGridPosition":{"x":-11,"y":13},"endGridPosition":{"x":0,"y":28}}]},{"styleId":1,"stitchData":[{"startGridPosition":{"x":-7,"y":13},"endGridPosition":{"x":8,"y":26}}]},{"styleId":2,"stitchData":[{"startGridPosition":{"x":0,"y":14},"endGridPosition":{"x":12,"y":26}}]},{"styleId":3,"stitchData":[{"startGridPosition":{"x":6,"y":11},"endGridPosition":{"x":19,"y":25}}]},{"styleId":4,"stitchData":[{"startGridPosition":{"x":11,"y":10},"endGridPosition":{"x":22,"y":23}}]},{"styleId":5,"stitchData":[{"startGridPosition":{"x":17,"y":13},"endGridPosition":{"x":23,"y":22}}]},{"styleId":6,"stitchData":[{"startGridPosition":{"x":21,"y":12},"endGridPosition":{"x":24,"y":21}}]},{"styleId":7,"stitchData":[{"startGridPosition":{"x":27,"y":12},"endGridPosition":{"x":29,"y":22}}]},{"styleId":7,"stitchData":[{"startGridPosition":{"x":29,"y":-17},"endGridPosition":{"x":26,"y":-5}},{"startGridPosition":{"x":31,"y":-17},"endGridPosition":{"x":28,"y":-7}}]},{"styleId":8,"stitchData":[{"startGridPosition":{"x":35,"y":-17},"endGridPosition":{"x":31,"y":-7}},{"startGridPosition":{"x":38,"y":-17},"endGridPosition":{"x":31,"y":-3}},{"startGridPosition":{"x":32,"y":10},"endGridPosition":{"x":35,"y":21}}]}]}';
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
