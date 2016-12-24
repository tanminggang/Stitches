(function(){

	function ThreadContainer( virtualgrid )
	{
		this.Container_constructor();
		this.virtualgrid = virtualgrid;
		
		this.setup();
	}

	var p = createjs.extend( ThreadContainer, createjs.Container );

		p.setup = function()
		{
			this.threads = [];

			this.mouseEnabled = false;
			this.mouseChilden = false;

			this.addThread();
			// this.on("added", this.added );
		}

		// p.added = function( event )
		// {
		// 	this.stage.on("stagemousedown", this.pressDown, this);
		// 	this.stage.on("stagemouseup", this.pressUp, this);
		// 	this.stage.on("stagemousemove", this.pressMove, this);
		// }

		// p.pressDown = function( event )
		// {

		// }

		// p.pressUp = function( event )
		// {

		// }

		// p.pressMove = function( event )
		// {

		//}

		p.addThread = function( data )
		{
			data = new ThreadData( this.virtualgrid, threadId)
			var thread = new Thread( this.virtualgrid, data);
			this.addChild( thread );
			this.threads.push( thread );
			return thread;
		}

		p.removeThread = function()
		{

		}

		p.clearThreads = function()
		{

		}

		p.changeThread = function()
		{

		}

		p.currentThread = function()
		{
			var length = this.threads.length;
			if(length <= 0)
				return null

			return this.threads[length-1];	
		}

		p.clear = function()
		{

		}

		p.undo = function()
		{
			var thread = this.currentThread();

			if(thread == null)
				return;

				thread.undo();

			if(thread.stitches.length <= 0)
			{
				removeChild( thread );
				this.threads.pop();
			}
			
		}

	window.ThreadContainer = createjs.promote( ThreadContainer, "Container" );

} () );