
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

// // Final, TRY ONE
// var threadStyle =
// [
// 	"#282828",
// 	"#61544c",
// 	"#e63359",
// 	"#4E395D",
// 	"#827085",
// 	"#65A8A6",
// 	"#8EBE94",
// 	"#CCFC8E",
// 	"#DDDDDD"
// ];

// // Rainblow
// var threadStyle =
// [
// 	"#900101",
// 	"#905501",
// 	"#c6ad04",
// 	"#84c604",
// 	"#04c66d",
// 	"#04c4c6",
// 	"#044dc6",
// 	"#7604c6",
// 	"#c6045f"
// ];

// // Original
// var threadStyle =
// [
// 	"#282828",
// 	"#557ab1",
// 	"#d51846",
// 	"#82b461"
// ];

// seafoam green, 	"#74e1b4"

// Final
var threadStyle =
[
	"#1e1e1e",
	"#61544c",
	"#ff0054",
	"#4E395D",
	"#827085",
	"#65A8A6",
	"#8EBE94",
	"#bef38a",
	"#DDDDDD"
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

	var data = '{"panPosition":{"x":25,"y":-17},"threads":[{"styleId":1,"stitchData":[]},{"styleId":0,"stitchData":[]},{"styleId":1,"stitchData":[]},{"styleId":2,"stitchData":[]},{"styleId":5,"stitchData":[]},{"styleId":1,"stitchData":[]},{"styleId":0,"stitchData":[]},{"styleId":1,"stitchData":[{"startGridPosition":{"x":-4,"y":-4},"endGridPosition":{"x":-3,"y":-5}},{"startGridPosition":{"x":-3,"y":-5},"endGridPosition":{"x":-2,"y":-4}},{"startGridPosition":{"x":-2,"y":-4},"endGridPosition":{"x":-1,"y":-5}},{"startGridPosition":{"x":-1,"y":-5},"endGridPosition":{"x":1,"y":-6}},{"startGridPosition":{"x":-4,"y":-4},"endGridPosition":{"x":-5,"y":-5}},{"startGridPosition":{"x":-5,"y":-5},"endGridPosition":{"x":-7,"y":-6}},{"startGridPosition":{"x":-4,"y":-4},"endGridPosition":{"x":-4,"y":-3}},{"startGridPosition":{"x":-2,"y":-4},"endGridPosition":{"x":-2,"y":-3}},{"startGridPosition":{"x":-2,"y":-3},"endGridPosition":{"x":-1,"y":-2}},{"startGridPosition":{"x":-4,"y":-3},"endGridPosition":{"x":-5,"y":-2}},{"startGridPosition":{"x":-3,"y":-3},"endGridPosition":{"x":-3,"y":-2}},{"startGridPosition":{"x":-4,"y":-2},"endGridPosition":{"x":-3,"y":-2}},{"startGridPosition":{"x":-3,"y":-2},"endGridPosition":{"x":-3,"y":-1}},{"startGridPosition":{"x":-3,"y":-2},"endGridPosition":{"x":-2,"y":-2}},{"startGridPosition":{"x":-5,"y":-2},"endGridPosition":{"x":-6,"y":-1}},{"startGridPosition":{"x":-6,"y":-1},"endGridPosition":{"x":-7,"y":1}},{"startGridPosition":{"x":-7,"y":1},"endGridPosition":{"x":-6,"y":3}},{"startGridPosition":{"x":-1,"y":-2},"endGridPosition":{"x":0,"y":-1}},{"startGridPosition":{"x":0,"y":-1},"endGridPosition":{"x":1,"y":1}},{"startGridPosition":{"x":1,"y":1},"endGridPosition":{"x":0,"y":3}},{"startGridPosition":{"x":0,"y":3},"endGridPosition":{"x":-2,"y":4}},{"startGridPosition":{"x":-6,"y":3},"endGridPosition":{"x":-4,"y":4}},{"startGridPosition":{"x":-5,"y":4},"endGridPosition":{"x":-6,"y":6}},{"startGridPosition":{"x":-1,"y":4},"endGridPosition":{"x":0,"y":6}},{"startGridPosition":{"x":-6,"y":6},"endGridPosition":{"x":-5,"y":8}},{"startGridPosition":{"x":0,"y":6},"endGridPosition":{"x":-1,"y":8}},{"startGridPosition":{"x":-1,"y":8},"endGridPosition":{"x":-2,"y":9}},{"startGridPosition":{"x":-5,"y":8},"endGridPosition":{"x":-4,"y":9}},{"startGridPosition":{"x":-4,"y":9},"endGridPosition":{"x":-3,"y":11}},{"startGridPosition":{"x":-2,"y":9},"endGridPosition":{"x":-3,"y":11}},{"startGridPosition":{"x":-3,"y":11},"endGridPosition":{"x":-3,"y":12}},{"startGridPosition":{"x":-5,"y":7},"endGridPosition":{"x":-4,"y":8}},{"startGridPosition":{"x":-4,"y":8},"endGridPosition":{"x":-3,"y":8}},{"startGridPosition":{"x":-3,"y":8},"endGridPosition":{"x":-2,"y":8}},{"startGridPosition":{"x":-2,"y":8},"endGridPosition":{"x":-1,"y":7}},{"startGridPosition":{"x":-1,"y":7},"endGridPosition":{"x":0,"y":6}},{"startGridPosition":{"x":-5,"y":7},"endGridPosition":{"x":-6,"y":6}},{"startGridPosition":{"x":-5,"y":5},"endGridPosition":{"x":-4,"y":6}},{"startGridPosition":{"x":-4,"y":6},"endGridPosition":{"x":-3,"y":6}},{"startGridPosition":{"x":-3,"y":6},"endGridPosition":{"x":-2,"y":6}},{"startGridPosition":{"x":-2,"y":6},"endGridPosition":{"x":-1,"y":5}},{"startGridPosition":{"x":-5,"y":4},"endGridPosition":{"x":-4,"y":5}},{"startGridPosition":{"x":-4,"y":5},"endGridPosition":{"x":-3,"y":5}},{"startGridPosition":{"x":-3,"y":5},"endGridPosition":{"x":-2,"y":5}},{"startGridPosition":{"x":-2,"y":5},"endGridPosition":{"x":-1,"y":4}},{"startGridPosition":{"x":-4,"y":4},"endGridPosition":{"x":-3,"y":4}},{"startGridPosition":{"x":-3,"y":4},"endGridPosition":{"x":-2,"y":4}},{"startGridPosition":{"x":-6,"y":-1},"endGridPosition":{"x":-6,"y":0}},{"startGridPosition":{"x":-6,"y":0},"endGridPosition":{"x":-5,"y":2}},{"startGridPosition":{"x":-5,"y":2},"endGridPosition":{"x":-3,"y":3}},{"startGridPosition":{"x":-3,"y":3},"endGridPosition":{"x":-1,"y":2}},{"startGridPosition":{"x":-1,"y":2},"endGridPosition":{"x":0,"y":-1}},{"startGridPosition":{"x":-5,"y":-2},"endGridPosition":{"x":-4,"y":-1}},{"startGridPosition":{"x":-4,"y":-1},"endGridPosition":{"x":-3,"y":1}},{"startGridPosition":{"x":-3,"y":1},"endGridPosition":{"x":-2,"y":-1}},{"startGridPosition":{"x":-2,"y":-1},"endGridPosition":{"x":-1,"y":-2}},{"startGridPosition":{"x":-5,"y":8},"endGridPosition":{"x":-6,"y":10}},{"startGridPosition":{"x":-6,"y":10},"endGridPosition":{"x":-6,"y":11}},{"startGridPosition":{"x":-6,"y":11},"endGridPosition":{"x":-7,"y":12}},{"startGridPosition":{"x":-1,"y":8},"endGridPosition":{"x":0,"y":10}},{"startGridPosition":{"x":0,"y":10},"endGridPosition":{"x":0,"y":11}},{"startGridPosition":{"x":0,"y":11},"endGridPosition":{"x":1,"y":12}},{"startGridPosition":{"x":-6,"y":6},"endGridPosition":{"x":-7,"y":7}},{"startGridPosition":{"x":-7,"y":7},"endGridPosition":{"x":-9,"y":8}},{"startGridPosition":{"x":-9,"y":8},"endGridPosition":{"x":-10,"y":9}},{"startGridPosition":{"x":0,"y":6},"endGridPosition":{"x":1,"y":7}},{"startGridPosition":{"x":1,"y":7},"endGridPosition":{"x":3,"y":8}},{"startGridPosition":{"x":3,"y":8},"endGridPosition":{"x":4,"y":9}},{"startGridPosition":{"x":-1,"y":-3},"endGridPosition":{"x":-1,"y":-3}},{"startGridPosition":{"x":-1,"y":-3},"endGridPosition":{"x":-1,"y":-3}},{"startGridPosition":{"x":-1,"y":-2},"endGridPosition":{"x":0,"y":-3}},{"startGridPosition":{"x":0,"y":-3},"endGridPosition":{"x":2,"y":-4}},{"startGridPosition":{"x":2,"y":-4},"endGridPosition":{"x":1,"y":-3}},{"startGridPosition":{"x":1,"y":-3},"endGridPosition":{"x":0,"y":-1}},{"startGridPosition":{"x":-5,"y":-2},"endGridPosition":{"x":-6,"y":-3}},{"startGridPosition":{"x":-6,"y":-3},"endGridPosition":{"x":-8,"y":-4}},{"startGridPosition":{"x":-8,"y":-4},"endGridPosition":{"x":-7,"y":-3}},{"startGridPosition":{"x":-7,"y":-3},"endGridPosition":{"x":-6,"y":-1}},{"startGridPosition":{"x":0,"y":-1},"endGridPosition":{"x":2,"y":-2}},{"startGridPosition":{"x":2,"y":-2},"endGridPosition":{"x":4,"y":-3}},{"startGridPosition":{"x":4,"y":-3},"endGridPosition":{"x":6,"y":-4}},{"startGridPosition":{"x":6,"y":-4},"endGridPosition":{"x":7,"y":-3}},{"startGridPosition":{"x":7,"y":-3},"endGridPosition":{"x":8,"y":-4}},{"startGridPosition":{"x":8,"y":-4},"endGridPosition":{"x":9,"y":-3}},{"startGridPosition":{"x":9,"y":-3},"endGridPosition":{"x":10,"y":-2}},{"startGridPosition":{"x":10,"y":-2},"endGridPosition":{"x":10,"y":-1}},{"startGridPosition":{"x":10,"y":-1},"endGridPosition":{"x":9,"y":0}},{"startGridPosition":{"x":9,"y":0},"endGridPosition":{"x":8,"y":1}},{"startGridPosition":{"x":8,"y":1},"endGridPosition":{"x":8,"y":2}},{"startGridPosition":{"x":8,"y":2},"endGridPosition":{"x":7,"y":3}},{"startGridPosition":{"x":7,"y":3},"endGridPosition":{"x":5,"y":2}},{"startGridPosition":{"x":5,"y":2},"endGridPosition":{"x":3,"y":2}},{"startGridPosition":{"x":3,"y":2},"endGridPosition":{"x":2,"y":1}},{"startGridPosition":{"x":2,"y":1},"endGridPosition":{"x":1,"y":1}},{"startGridPosition":{"x":-6,"y":-1},"endGridPosition":{"x":-8,"y":-2}},{"startGridPosition":{"x":-8,"y":-2},"endGridPosition":{"x":-10,"y":-3}},{"startGridPosition":{"x":-10,"y":-3},"endGridPosition":{"x":-12,"y":-4}},{"startGridPosition":{"x":-12,"y":-4},"endGridPosition":{"x":-13,"y":-3}},{"startGridPosition":{"x":-13,"y":-3},"endGridPosition":{"x":-14,"y":-4}},{"startGridPosition":{"x":-14,"y":-4},"endGridPosition":{"x":-15,"y":-3}},{"startGridPosition":{"x":-15,"y":-3},"endGridPosition":{"x":-16,"y":-2}},{"startGridPosition":{"x":-16,"y":-2},"endGridPosition":{"x":-16,"y":-1}},{"startGridPosition":{"x":-16,"y":-1},"endGridPosition":{"x":-15,"y":0}},{"startGridPosition":{"x":-15,"y":0},"endGridPosition":{"x":-14,"y":1}},{"startGridPosition":{"x":-14,"y":1},"endGridPosition":{"x":-14,"y":2}},{"startGridPosition":{"x":-14,"y":2},"endGridPosition":{"x":-13,"y":3}},{"startGridPosition":{"x":-13,"y":3},"endGridPosition":{"x":-11,"y":2}},{"startGridPosition":{"x":-11,"y":2},"endGridPosition":{"x":-9,"y":2}},{"startGridPosition":{"x":-9,"y":2},"endGridPosition":{"x":-8,"y":1}},{"startGridPosition":{"x":-8,"y":1},"endGridPosition":{"x":-7,"y":1}},{"startGridPosition":{"x":-7,"y":2},"endGridPosition":{"x":-7,"y":3}},{"startGridPosition":{"x":-7,"y":3},"endGridPosition":{"x":-8,"y":5}},{"startGridPosition":{"x":-8,"y":5},"endGridPosition":{"x":-9,"y":6}},{"startGridPosition":{"x":-9,"y":6},"endGridPosition":{"x":-10,"y":6}},{"startGridPosition":{"x":-10,"y":6},"endGridPosition":{"x":-11,"y":7}},{"startGridPosition":{"x":-11,"y":7},"endGridPosition":{"x":-12,"y":7}},{"startGridPosition":{"x":-12,"y":7},"endGridPosition":{"x":-13,"y":8}},{"startGridPosition":{"x":-13,"y":8},"endGridPosition":{"x":-15,"y":7}},{"startGridPosition":{"x":-15,"y":7},"endGridPosition":{"x":-16,"y":6}},{"startGridPosition":{"x":-16,"y":6},"endGridPosition":{"x":-16,"y":5}},{"startGridPosition":{"x":-16,"y":5},"endGridPosition":{"x":-15,"y":4}},{"startGridPosition":{"x":-15,"y":4},"endGridPosition":{"x":-14,"y":4}},{"startGridPosition":{"x":-14,"y":4},"endGridPosition":{"x":-13,"y":3}},{"startGridPosition":{"x":7,"y":3},"endGridPosition":{"x":8,"y":4}},{"startGridPosition":{"x":8,"y":4},"endGridPosition":{"x":9,"y":4}},{"startGridPosition":{"x":9,"y":4},"endGridPosition":{"x":10,"y":5}},{"startGridPosition":{"x":10,"y":5},"endGridPosition":{"x":10,"y":6}},{"startGridPosition":{"x":10,"y":6},"endGridPosition":{"x":9,"y":7}},{"startGridPosition":{"x":9,"y":7},"endGridPosition":{"x":7,"y":8}},{"startGridPosition":{"x":7,"y":8},"endGridPosition":{"x":6,"y":7}},{"startGridPosition":{"x":6,"y":7},"endGridPosition":{"x":5,"y":7}},{"startGridPosition":{"x":5,"y":7},"endGridPosition":{"x":4,"y":6}},{"startGridPosition":{"x":4,"y":6},"endGridPosition":{"x":3,"y":6}},{"startGridPosition":{"x":3,"y":6},"endGridPosition":{"x":2,"y":5}},{"startGridPosition":{"x":2,"y":5},"endGridPosition":{"x":1,"y":3}},{"startGridPosition":{"x":1,"y":3},"endGridPosition":{"x":1,"y":2}},{"startGridPosition":{"x":1,"y":2},"endGridPosition":{"x":1,"y":1}},{"startGridPosition":{"x":-7,"y":2},"endGridPosition":{"x":-7,"y":1}},{"startGridPosition":{"x":-5,"y":6},"endGridPosition":{"x":-4,"y":7}},{"startGridPosition":{"x":-4,"y":7},"endGridPosition":{"x":-3,"y":7}},{"startGridPosition":{"x":-3,"y":7},"endGridPosition":{"x":-2,"y":7}},{"startGridPosition":{"x":-2,"y":7},"endGridPosition":{"x":-1,"y":6}},{"startGridPosition":{"x":-14,"y":1},"endGridPosition":{"x":-13,"y":2}},{"startGridPosition":{"x":-13,"y":2},"endGridPosition":{"x":-11,"y":2}},{"startGridPosition":{"x":8,"y":1},"endGridPosition":{"x":7,"y":2}},{"startGridPosition":{"x":7,"y":2},"endGridPosition":{"x":5,"y":2}},{"startGridPosition":{"x":-14,"y":-4},"endGridPosition":{"x":-14,"y":-3}},{"startGridPosition":{"x":-14,"y":-3},"endGridPosition":{"x":-13,"y":-2}},{"startGridPosition":{"x":-13,"y":-2},"endGridPosition":{"x":-13,"y":-1}},{"startGridPosition":{"x":-13,"y":-1},"endGridPosition":{"x":-12,"y":0}},{"startGridPosition":{"x":-12,"y":0},"endGridPosition":{"x":-10,"y":1}},{"startGridPosition":{"x":-10,"y":1},"endGridPosition":{"x":-9,"y":0}},{"startGridPosition":{"x":-9,"y":0},"endGridPosition":{"x":-8,"y":0}},{"startGridPosition":{"x":-8,"y":0},"endGridPosition":{"x":-7,"y":-1}},{"startGridPosition":{"x":-7,"y":-1},"endGridPosition":{"x":-6,"y":-1}},{"startGridPosition":{"x":-16,"y":-2},"endGridPosition":{"x":-15,"y":-2}},{"startGridPosition":{"x":-15,"y":-2},"endGridPosition":{"x":-14,"y":-1}},{"startGridPosition":{"x":-14,"y":-1},"endGridPosition":{"x":-13,"y":-1}},{"startGridPosition":{"x":-13,"y":2},"endGridPosition":{"x":-13,"y":1}},{"startGridPosition":{"x":-13,"y":1},"endGridPosition":{"x":-12,"y":0}},{"startGridPosition":{"x":7,"y":2},"endGridPosition":{"x":7,"y":1}},{"startGridPosition":{"x":7,"y":1},"endGridPosition":{"x":6,"y":0}},{"startGridPosition":{"x":6,"y":0},"endGridPosition":{"x":4,"y":1}},{"startGridPosition":{"x":4,"y":1},"endGridPosition":{"x":3,"y":0}},{"startGridPosition":{"x":3,"y":0},"endGridPosition":{"x":2,"y":0}},{"startGridPosition":{"x":2,"y":0},"endGridPosition":{"x":1,"y":-1}},{"startGridPosition":{"x":1,"y":-1},"endGridPosition":{"x":0,"y":-1}},{"startGridPosition":{"x":6,"y":0},"endGridPosition":{"x":7,"y":-1}},{"startGridPosition":{"x":7,"y":-1},"endGridPosition":{"x":7,"y":-2}},{"startGridPosition":{"x":7,"y":-2},"endGridPosition":{"x":8,"y":-3}},{"startGridPosition":{"x":8,"y":-3},"endGridPosition":{"x":8,"y":-4}},{"startGridPosition":{"x":7,"y":-1},"endGridPosition":{"x":8,"y":-1}},{"startGridPosition":{"x":8,"y":-1},"endGridPosition":{"x":9,"y":-2}},{"startGridPosition":{"x":9,"y":-2},"endGridPosition":{"x":10,"y":-2}},{"startGridPosition":{"x":-7,"y":1},"endGridPosition":{"x":-8,"y":2}},{"startGridPosition":{"x":-8,"y":2},"endGridPosition":{"x":-9,"y":3}},{"startGridPosition":{"x":-9,"y":3},"endGridPosition":{"x":-9,"y":4}},{"startGridPosition":{"x":-9,"y":4},"endGridPosition":{"x":-10,"y":5}},{"startGridPosition":{"x":-10,"y":5},"endGridPosition":{"x":-10,"y":6}},{"startGridPosition":{"x":-14,"y":4},"endGridPosition":{"x":-13,"y":5}},{"startGridPosition":{"x":-13,"y":5},"endGridPosition":{"x":-11,"y":4}},{"startGridPosition":{"x":-11,"y":4},"endGridPosition":{"x":-10,"y":4}},{"startGridPosition":{"x":-10,"y":4},"endGridPosition":{"x":-9,"y":3}},{"startGridPosition":{"x":1,"y":1},"endGridPosition":{"x":2,"y":2}},{"startGridPosition":{"x":2,"y":2},"endGridPosition":{"x":3,"y":3}},{"startGridPosition":{"x":3,"y":3},"endGridPosition":{"x":4,"y":4}},{"startGridPosition":{"x":4,"y":4},"endGridPosition":{"x":5,"y":4}},{"startGridPosition":{"x":5,"y":4},"endGridPosition":{"x":7,"y":5}},{"startGridPosition":{"x":7,"y":5},"endGridPosition":{"x":8,"y":4}},{"startGridPosition":{"x":4,"y":6},"endGridPosition":{"x":4,"y":5}},{"startGridPosition":{"x":4,"y":5},"endGridPosition":{"x":3,"y":4}},{"startGridPosition":{"x":3,"y":4},"endGridPosition":{"x":3,"y":3}},{"startGridPosition":{"x":4,"y":16},"endGridPosition":{"x":4,"y":16}}]},{"styleId":2,"stitchData":[{"startGridPosition":{"x":-3,"y":-7},"endGridPosition":{"x":-2,"y":-8}},{"startGridPosition":{"x":-2,"y":-8},"endGridPosition":{"x":0,"y":-9}},{"startGridPosition":{"x":0,"y":-9},"endGridPosition":{"x":1,"y":-10}},{"startGridPosition":{"x":1,"y":-10},"endGridPosition":{"x":2,"y":-11}},{"startGridPosition":{"x":2,"y":-11},"endGridPosition":{"x":3,"y":-13}},{"startGridPosition":{"x":3,"y":-13},"endGridPosition":{"x":3,"y":-14}},{"startGridPosition":{"x":3,"y":-14},"endGridPosition":{"x":3,"y":-15}},{"startGridPosition":{"x":3,"y":-15},"endGridPosition":{"x":2,"y":-16}},{"startGridPosition":{"x":2,"y":-16},"endGridPosition":{"x":1,"y":-17}},{"startGridPosition":{"x":1,"y":-17},"endGridPosition":{"x":0,"y":-17}},{"startGridPosition":{"x":0,"y":-17},"endGridPosition":{"x":-1,"y":-17}},{"startGridPosition":{"x":-1,"y":-17},"endGridPosition":{"x":-2,"y":-16}},{"startGridPosition":{"x":-2,"y":-16},"endGridPosition":{"x":-2,"y":-16}},{"startGridPosition":{"x":-2,"y":-16},"endGridPosition":{"x":-3,"y":-15}},{"startGridPosition":{"x":-3,"y":-15},"endGridPosition":{"x":-4,"y":-16}},{"startGridPosition":{"x":-4,"y":-16},"endGridPosition":{"x":-5,"y":-17}},{"startGridPosition":{"x":-5,"y":-17},"endGridPosition":{"x":-6,"y":-17}},{"startGridPosition":{"x":-6,"y":-17},"endGridPosition":{"x":-7,"y":-17}},{"startGridPosition":{"x":-7,"y":-17},"endGridPosition":{"x":-8,"y":-16}},{"startGridPosition":{"x":-8,"y":-16},"endGridPosition":{"x":-9,"y":-15}},{"startGridPosition":{"x":-9,"y":-15},"endGridPosition":{"x":-9,"y":-14}},{"startGridPosition":{"x":-9,"y":-14},"endGridPosition":{"x":-9,"y":-13}},{"startGridPosition":{"x":-9,"y":-13},"endGridPosition":{"x":-8,"y":-11}},{"startGridPosition":{"x":-8,"y":-11},"endGridPosition":{"x":-7,"y":-10}},{"startGridPosition":{"x":-7,"y":-10},"endGridPosition":{"x":-6,"y":-9}},{"startGridPosition":{"x":-6,"y":-9},"endGridPosition":{"x":-4,"y":-8}},{"startGridPosition":{"x":-4,"y":-8},"endGridPosition":{"x":-3,"y":-7}}]},{"styleId":7,"stitchData":[{"startGridPosition":{"x":-12,"y":-4},"endGridPosition":{"x":-12,"y":-4}}]},{"styleId":2,"stitchData":[{"startGridPosition":{"x":-3,"y":-13},"endGridPosition":{"x":-4,"y":-12}},{"startGridPosition":{"x":-4,"y":-12},"endGridPosition":{"x":-5,"y":-13}},{"startGridPosition":{"x":-5,"y":-13},"endGridPosition":{"x":-5,"y":-12}},{"startGridPosition":{"x":-5,"y":-12},"endGridPosition":{"x":-5,"y":-11}},{"startGridPosition":{"x":-5,"y":-11},"endGridPosition":{"x":-4,"y":-11}},{"startGridPosition":{"x":-4,"y":-11},"endGridPosition":{"x":-3,"y":-11}},{"startGridPosition":{"x":-3,"y":-11},"endGridPosition":{"x":-2,"y":-11}},{"startGridPosition":{"x":-2,"y":-11},"endGridPosition":{"x":-1,"y":-11}},{"startGridPosition":{"x":-1,"y":-11},"endGridPosition":{"x":-1,"y":-12}},{"startGridPosition":{"x":-1,"y":-12},"endGridPosition":{"x":-1,"y":-13}},{"startGridPosition":{"x":-1,"y":-13},"endGridPosition":{"x":-2,"y":-12}},{"startGridPosition":{"x":-2,"y":-12},"endGridPosition":{"x":-3,"y":-13}},{"startGridPosition":{"x":-5,"y":-10},"endGridPosition":{"x":-5,"y":-10}},{"startGridPosition":{"x":-4,"y":-10},"endGridPosition":{"x":-4,"y":-10}},{"startGridPosition":{"x":-5,"y":-10},"endGridPosition":{"x":-4,"y":-10}},{"startGridPosition":{"x":-4,"y":-10},"endGridPosition":{"x":-3,"y":-10}},{"startGridPosition":{"x":-3,"y":-10},"endGridPosition":{"x":-2,"y":-10}},{"startGridPosition":{"x":-2,"y":-10},"endGridPosition":{"x":-1,"y":-10}}]},{"styleId":3,"stitchData":[{"startGridPosition":{"x":12,"y":-4},"endGridPosition":{"x":13,"y":-3}},{"startGridPosition":{"x":13,"y":-3},"endGridPosition":{"x":14,"y":-1}},{"startGridPosition":{"x":14,"y":-1},"endGridPosition":{"x":14,"y":0}},{"startGridPosition":{"x":14,"y":0},"endGridPosition":{"x":14,"y":1}},{"startGridPosition":{"x":14,"y":1},"endGridPosition":{"x":14,"y":2}},{"startGridPosition":{"x":14,"y":2},"endGridPosition":{"x":14,"y":3}},{"startGridPosition":{"x":14,"y":3},"endGridPosition":{"x":14,"y":4}},{"startGridPosition":{"x":14,"y":4},"endGridPosition":{"x":14,"y":5}},{"startGridPosition":{"x":14,"y":5},"endGridPosition":{"x":14,"y":6}},{"startGridPosition":{"x":14,"y":6},"endGridPosition":{"x":13,"y":8}},{"startGridPosition":{"x":13,"y":8},"endGridPosition":{"x":12,"y":9}},{"startGridPosition":{"x":-18,"y":-4},"endGridPosition":{"x":-19,"y":-3}},{"startGridPosition":{"x":-19,"y":-3},"endGridPosition":{"x":-20,"y":-1}},{"startGridPosition":{"x":-20,"y":-1},"endGridPosition":{"x":-20,"y":0}},{"startGridPosition":{"x":-20,"y":0},"endGridPosition":{"x":-20,"y":1}},{"startGridPosition":{"x":-20,"y":1},"endGridPosition":{"x":-20,"y":2}},{"startGridPosition":{"x":-20,"y":2},"endGridPosition":{"x":-20,"y":3}},{"startGridPosition":{"x":-20,"y":3},"endGridPosition":{"x":-20,"y":4}},{"startGridPosition":{"x":-20,"y":4},"endGridPosition":{"x":-20,"y":5}},{"startGridPosition":{"x":-20,"y":5},"endGridPosition":{"x":-20,"y":6}},{"startGridPosition":{"x":-20,"y":6},"endGridPosition":{"x":-19,"y":8}},{"startGridPosition":{"x":-19,"y":8},"endGridPosition":{"x":-18,"y":9}},{"startGridPosition":{"x":15,"y":-3},"endGridPosition":{"x":16,"y":-2}},{"startGridPosition":{"x":16,"y":-2},"endGridPosition":{"x":17,"y":0}},{"startGridPosition":{"x":17,"y":0},"endGridPosition":{"x":17,"y":1}},{"startGridPosition":{"x":17,"y":1},"endGridPosition":{"x":17,"y":2}},{"startGridPosition":{"x":17,"y":2},"endGridPosition":{"x":17,"y":3}},{"startGridPosition":{"x":17,"y":3},"endGridPosition":{"x":17,"y":4}},{"startGridPosition":{"x":17,"y":4},"endGridPosition":{"x":17,"y":5}},{"startGridPosition":{"x":17,"y":5},"endGridPosition":{"x":16,"y":7}},{"startGridPosition":{"x":16,"y":7},"endGridPosition":{"x":15,"y":8}},{"startGridPosition":{"x":18,"y":-2},"endGridPosition":{"x":19,"y":0}},{"startGridPosition":{"x":19,"y":0},"endGridPosition":{"x":19,"y":1}},{"startGridPosition":{"x":19,"y":1},"endGridPosition":{"x":19,"y":2}},{"startGridPosition":{"x":19,"y":2},"endGridPosition":{"x":19,"y":3}},{"startGridPosition":{"x":19,"y":3},"endGridPosition":{"x":19,"y":4}},{"startGridPosition":{"x":19,"y":4},"endGridPosition":{"x":19,"y":5}},{"startGridPosition":{"x":19,"y":5},"endGridPosition":{"x":18,"y":7}},{"startGridPosition":{"x":21,"y":1},"endGridPosition":{"x":21,"y":2}},{"startGridPosition":{"x":21,"y":2},"endGridPosition":{"x":21,"y":3}},{"startGridPosition":{"x":21,"y":3},"endGridPosition":{"x":21,"y":4}},{"startGridPosition":{"x":23,"y":2},"endGridPosition":{"x":23,"y":3}},{"startGridPosition":{"x":-21,"y":-3},"endGridPosition":{"x":-22,"y":-2}},{"startGridPosition":{"x":-22,"y":-2},"endGridPosition":{"x":-23,"y":0}},{"startGridPosition":{"x":-23,"y":0},"endGridPosition":{"x":-23,"y":1}},{"startGridPosition":{"x":-23,"y":1},"endGridPosition":{"x":-23,"y":2}},{"startGridPosition":{"x":-23,"y":2},"endGridPosition":{"x":-23,"y":3}},{"startGridPosition":{"x":-23,"y":3},"endGridPosition":{"x":-23,"y":4}},{"startGridPosition":{"x":-23,"y":4},"endGridPosition":{"x":-23,"y":5}},{"startGridPosition":{"x":-23,"y":5},"endGridPosition":{"x":-22,"y":7}},{"startGridPosition":{"x":-22,"y":7},"endGridPosition":{"x":-22,"y":7}},{"startGridPosition":{"x":-22,"y":7},"endGridPosition":{"x":-21,"y":8}},{"startGridPosition":{"x":-24,"y":7},"endGridPosition":{"x":-25,"y":5}},{"startGridPosition":{"x":-25,"y":5},"endGridPosition":{"x":-25,"y":4}},{"startGridPosition":{"x":-25,"y":4},"endGridPosition":{"x":-25,"y":3}},{"startGridPosition":{"x":-25,"y":3},"endGridPosition":{"x":-25,"y":2}},{"startGridPosition":{"x":-25,"y":2},"endGridPosition":{"x":-25,"y":1}},{"startGridPosition":{"x":-25,"y":1},"endGridPosition":{"x":-25,"y":0}},{"startGridPosition":{"x":-25,"y":0},"endGridPosition":{"x":-24,"y":-2}},{"startGridPosition":{"x":-27,"y":1},"endGridPosition":{"x":-27,"y":2}},{"startGridPosition":{"x":-27,"y":2},"endGridPosition":{"x":-27,"y":3}},{"startGridPosition":{"x":-27,"y":3},"endGridPosition":{"x":-27,"y":4}},{"startGridPosition":{"x":-29,"y":2},"endGridPosition":{"x":-29,"y":3}}]},{"styleId":0,"stitchData":[{"startGridPosition":{"x":-8,"y":14},"endGridPosition":{"x":-8,"y":15}},{"startGridPosition":{"x":-8,"y":15},"endGridPosition":{"x":-9,"y":15}},{"startGridPosition":{"x":-9,"y":15},"endGridPosition":{"x":-10,"y":15}},{"startGridPosition":{"x":-10,"y":15},"endGridPosition":{"x":-11,"y":15}},{"startGridPosition":{"x":-8,"y":14},"endGridPosition":{"x":-9,"y":14}},{"startGridPosition":{"x":-9,"y":14},"endGridPosition":{"x":-10,"y":14}},{"startGridPosition":{"x":-10,"y":14},"endGridPosition":{"x":-11,"y":14}},{"startGridPosition":{"x":-11,"y":14},"endGridPosition":{"x":-12,"y":14}},{"startGridPosition":{"x":-12,"y":14},"endGridPosition":{"x":-12,"y":15}},{"startGridPosition":{"x":-12,"y":15},"endGridPosition":{"x":-12,"y":16}},{"startGridPosition":{"x":-12,"y":16},"endGridPosition":{"x":-12,"y":17}},{"startGridPosition":{"x":-12,"y":17},"endGridPosition":{"x":-12,"y":17}},{"startGridPosition":{"x":-12,"y":17},"endGridPosition":{"x":-12,"y":18}},{"startGridPosition":{"x":-12,"y":18},"endGridPosition":{"x":-11,"y":18}},{"startGridPosition":{"x":-11,"y":18},"endGridPosition":{"x":-10,"y":18}},{"startGridPosition":{"x":-10,"y":18},"endGridPosition":{"x":-9,"y":18}},{"startGridPosition":{"x":-9,"y":18},"endGridPosition":{"x":-8,"y":18}},{"startGridPosition":{"x":-17,"y":15},"endGridPosition":{"x":-16,"y":15}},{"startGridPosition":{"x":-16,"y":15},"endGridPosition":{"x":-15,"y":15}},{"startGridPosition":{"x":-15,"y":15},"endGridPosition":{"x":-14,"y":15}},{"startGridPosition":{"x":-14,"y":15},"endGridPosition":{"x":-14,"y":14}},{"startGridPosition":{"x":-14,"y":14},"endGridPosition":{"x":-15,"y":14}},{"startGridPosition":{"x":-15,"y":14},"endGridPosition":{"x":-16,"y":14}},{"startGridPosition":{"x":-16,"y":14},"endGridPosition":{"x":-17,"y":14}},{"startGridPosition":{"x":-17,"y":14},"endGridPosition":{"x":-18,"y":14}},{"startGridPosition":{"x":-18,"y":14},"endGridPosition":{"x":-18,"y":15}},{"startGridPosition":{"x":-18,"y":15},"endGridPosition":{"x":-18,"y":16}},{"startGridPosition":{"x":-18,"y":16},"endGridPosition":{"x":-18,"y":16}},{"startGridPosition":{"x":-18,"y":16},"endGridPosition":{"x":-18,"y":17}},{"startGridPosition":{"x":-18,"y":17},"endGridPosition":{"x":-18,"y":18}},{"startGridPosition":{"x":-18,"y":18},"endGridPosition":{"x":-17,"y":18}},{"startGridPosition":{"x":-17,"y":18},"endGridPosition":{"x":-16,"y":18}},{"startGridPosition":{"x":-16,"y":18},"endGridPosition":{"x":-15,"y":18}},{"startGridPosition":{"x":-15,"y":18},"endGridPosition":{"x":-14,"y":18}},{"startGridPosition":{"x":-20,"y":14},"endGridPosition":{"x":-20,"y":14}},{"startGridPosition":{"x":-23,"y":14},"endGridPosition":{"x":-22,"y":14}},{"startGridPosition":{"x":-22,"y":14},"endGridPosition":{"x":-21,"y":14}},{"startGridPosition":{"x":-21,"y":14},"endGridPosition":{"x":-20,"y":14}},{"startGridPosition":{"x":-20,"y":14},"endGridPosition":{"x":-20,"y":15}},{"startGridPosition":{"x":-20,"y":15},"endGridPosition":{"x":-20,"y":16}},{"startGridPosition":{"x":-20,"y":16},"endGridPosition":{"x":-20,"y":17}},{"startGridPosition":{"x":-20,"y":17},"endGridPosition":{"x":-20,"y":18}},{"startGridPosition":{"x":-20,"y":18},"endGridPosition":{"x":-21,"y":18}},{"startGridPosition":{"x":-21,"y":18},"endGridPosition":{"x":-22,"y":18}},{"startGridPosition":{"x":-22,"y":18},"endGridPosition":{"x":-23,"y":18}},{"startGridPosition":{"x":-23,"y":18},"endGridPosition":{"x":-24,"y":18}},{"startGridPosition":{"x":-24,"y":18},"endGridPosition":{"x":-24,"y":18}},{"startGridPosition":{"x":-24,"y":18},"endGridPosition":{"x":-24,"y":17}},{"startGridPosition":{"x":-24,"y":17},"endGridPosition":{"x":-24,"y":16}},{"startGridPosition":{"x":-24,"y":16},"endGridPosition":{"x":-24,"y":15}},{"startGridPosition":{"x":-24,"y":15},"endGridPosition":{"x":-24,"y":14}},{"startGridPosition":{"x":-24,"y":14},"endGridPosition":{"x":-24,"y":13}},{"startGridPosition":{"x":2,"y":14},"endGridPosition":{"x":2,"y":15}},{"startGridPosition":{"x":2,"y":15},"endGridPosition":{"x":2,"y":15}},{"startGridPosition":{"x":2,"y":15},"endGridPosition":{"x":2,"y":16}},{"startGridPosition":{"x":2,"y":16},"endGridPosition":{"x":2,"y":17}},{"startGridPosition":{"x":2,"y":17},"endGridPosition":{"x":2,"y":18}},{"startGridPosition":{"x":2,"y":18},"endGridPosition":{"x":3,"y":18}},{"startGridPosition":{"x":3,"y":18},"endGridPosition":{"x":4,"y":18}},{"startGridPosition":{"x":4,"y":18},"endGridPosition":{"x":5,"y":18}},{"startGridPosition":{"x":5,"y":18},"endGridPosition":{"x":6,"y":18}},{"startGridPosition":{"x":6,"y":18},"endGridPosition":{"x":6,"y":17}},{"startGridPosition":{"x":6,"y":17},"endGridPosition":{"x":6,"y":16}},{"startGridPosition":{"x":6,"y":16},"endGridPosition":{"x":6,"y":15}},{"startGridPosition":{"x":6,"y":14},"endGridPosition":{"x":6,"y":14}},{"startGridPosition":{"x":6,"y":15},"endGridPosition":{"x":6,"y":14}},{"startGridPosition":{"x":8,"y":14},"endGridPosition":{"x":8,"y":15}},{"startGridPosition":{"x":8,"y":15},"endGridPosition":{"x":8,"y":16}},{"startGridPosition":{"x":8,"y":16},"endGridPosition":{"x":8,"y":17}},{"startGridPosition":{"x":8,"y":17},"endGridPosition":{"x":8,"y":18}},{"startGridPosition":{"x":8,"y":18},"endGridPosition":{"x":8,"y":18}},{"startGridPosition":{"x":8,"y":18},"endGridPosition":{"x":9,"y":18}},{"startGridPosition":{"x":9,"y":18},"endGridPosition":{"x":10,"y":18}},{"startGridPosition":{"x":10,"y":18},"endGridPosition":{"x":11,"y":18}},{"startGridPosition":{"x":11,"y":18},"endGridPosition":{"x":12,"y":18}},{"startGridPosition":{"x":12,"y":18},"endGridPosition":{"x":12,"y":17}},{"startGridPosition":{"x":12,"y":17},"endGridPosition":{"x":12,"y":17}},{"startGridPosition":{"x":12,"y":17},"endGridPosition":{"x":12,"y":16}},{"startGridPosition":{"x":12,"y":16},"endGridPosition":{"x":12,"y":15}},{"startGridPosition":{"x":12,"y":15},"endGridPosition":{"x":12,"y":14}},{"startGridPosition":{"x":12,"y":14},"endGridPosition":{"x":11,"y":14}},{"startGridPosition":{"x":11,"y":14},"endGridPosition":{"x":10,"y":14}},{"startGridPosition":{"x":10,"y":14},"endGridPosition":{"x":9,"y":14}},{"startGridPosition":{"x":9,"y":14},"endGridPosition":{"x":8,"y":14}},{"startGridPosition":{"x":14,"y":14},"endGridPosition":{"x":14,"y":15}},{"startGridPosition":{"x":14,"y":15},"endGridPosition":{"x":14,"y":16}},{"startGridPosition":{"x":14,"y":16},"endGridPosition":{"x":14,"y":17}},{"startGridPosition":{"x":14,"y":17},"endGridPosition":{"x":14,"y":18}},{"startGridPosition":{"x":14,"y":18},"endGridPosition":{"x":15,"y":18}},{"startGridPosition":{"x":15,"y":18},"endGridPosition":{"x":16,"y":18}},{"startGridPosition":{"x":16,"y":18},"endGridPosition":{"x":17,"y":18}},{"startGridPosition":{"x":17,"y":18},"endGridPosition":{"x":18,"y":18}},{"startGridPosition":{"x":18,"y":18},"endGridPosition":{"x":18,"y":18}},{"startGridPosition":{"x":18,"y":18},"endGridPosition":{"x":18,"y":17}},{"startGridPosition":{"x":18,"y":17},"endGridPosition":{"x":18,"y":16}},{"startGridPosition":{"x":18,"y":16},"endGridPosition":{"x":18,"y":15}},{"startGridPosition":{"x":18,"y":15},"endGridPosition":{"x":18,"y":14}},{"startGridPosition":{"x":6,"y":18},"endGridPosition":{"x":6,"y":19}},{"startGridPosition":{"x":6,"y":19},"endGridPosition":{"x":-24,"y":19}},{"startGridPosition":{"x":8,"y":19},"endGridPosition":{"x":8,"y":19}},{"startGridPosition":{"x":8,"y":19},"endGridPosition":{"x":9,"y":19}},{"startGridPosition":{"x":9,"y":19},"endGridPosition":{"x":10,"y":19}},{"startGridPosition":{"x":10,"y":19},"endGridPosition":{"x":11,"y":19}},{"startGridPosition":{"x":11,"y":19},"endGridPosition":{"x":12,"y":19}},{"startGridPosition":{"x":14,"y":19},"endGridPosition":{"x":15,"y":19}},{"startGridPosition":{"x":15,"y":19},"endGridPosition":{"x":16,"y":19}},{"startGridPosition":{"x":16,"y":19},"endGridPosition":{"x":17,"y":19}},{"startGridPosition":{"x":17,"y":19},"endGridPosition":{"x":17,"y":19}},{"startGridPosition":{"x":17,"y":19},"endGridPosition":{"x":18,"y":19}}]}]}';
	if(data)
		input.load( data );	
}

/*

	TODO
	
	- need to rearchitect because of display bugs
		( add display objects for each thread, need to cache unactive threads )
		( add maximum number of stitches per thread to allow better caching )
	- allow thread colors to be changed when changing colors above threads
	- need delete
	- add ability to add knots at a point or ignore the same end + start point when creating threads
	- show backing threads
	- add vignette to create mood

*/
