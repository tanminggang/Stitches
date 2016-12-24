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

			this.isPressing = false;
			this.mouseEnabled = false;
			this.mouseChilden = false;
			
			this.addThread();

			stage.on("stagemousedown", this.pressDown, this);
			stage.on("stagemouseup", this.pressUp, this);
			stage.on("stagemousemove", this.pressMove, this);			
		}

		p.pressDown = function( event )
		{
			this.isPressing = true;
			this.currentThread().pressDown();
		}

		p.pressUp = function( event )
		{

			this.isPressing = false;
			this.currentThread().pressUp();
		}

		p.pressMove = function( event )
		{
			if(!this.isPressing)
				return;

			this.currentThread().pressMove();
		}

		p.addThread = function()
		{
			var data = new ThreadData( this.virtualgrid, threadId)
			var thread = new Thread( this.virtualgrid, data);
			this.addChild( thread );
			this.threads.push( thread );
			return thread;
		}

		p.changeThread = function()
		{
			var thread = this.currentThread();

			if(( thread == null ) || ( !this.hasThreads() ) || ( thread.data.hasStitches() ))
			{
				//if( thread.data.hasPoints() )
				//	thread.data.clearPoints();

				this.addThread();
			}else{
				thread.changeStyle( threadId );
			}
		}

		p.currentThread = function()
		{
			var length = this.threads.length;
			if(length <= 0)
				return null

			return this.threads[length - 1];	
		}

		p.clearThreads = function()
		{
			for(var i = 0; i < this.threads.length; i++)
			{
				var thread = this.threads[i];
				this.removeChild( thread );
			}
			this.threads = [];
			this.addThread();
		}

		p.hasThreads = function()
		{
			if(this.threads.length > 0)
				return true;

			return false;
		}

		p.undo = function()
		{
			var thread = this.currentThread();

			if(thread == null)
				return;

				thread.undo();

			if(this.threads.length <= 1)
				return;

			if(!thread.data.hasStitches())
			{
				this.removeChild( thread );
				this.threads.pop();
			}

		}

	window.ThreadContainer = createjs.promote( ThreadContainer, "Container" );

} () );