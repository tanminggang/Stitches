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

var spacing = 10;
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
	var background = new Background( virtualgrid );
	var cursor = new Cursor( virtualgrid );
	var threadContainer = new ThreadContainer( virtualgrid );
	var displayContainer = new createjs.Container();

	// Input
	// var input = new Input( virtualgrid, displayContainer, background, display );

	// Add Children
	container.addChild( displayContainer );
	displayContainer.addChild( background, threadContainer, cursor );

	// var data = '';
	// if(data)
	// 	input.load( data );	
}

/*


	ThreadContainer
		Thread
			ThreadData
				

	TODO
	- clear out old pieces
	- need to rearchitect because of display bugs
		( add display objects for each thread, need to cache unactive threads )
		( add maximum number of stitches per thread to allow better caching )
	- allow thread colors to be changed when changing colors above threads
	- need delete
	- add ability to add knots at a point or ignore the same end + start point when creating threads
	- show backing threads
	- add vignette to create mood
	- simplify json to make file sizes smaller
	- add buttons for controls like undo, center, move, zoom, clear
	- add 'hide interface' button and command
	- add intro screen
	- make help editable html
	- mobile zoom
	- mobile interface tweaks

*/
