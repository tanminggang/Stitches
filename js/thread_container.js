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

			this.pressingThread = null;
			this.mouseEnabled = false;
			this.mouseChilden = false;
			
			this.addThread();

			
			stage.on("stagemouseup", this.pressUp, this);
			stage.on("stagemousemove", this.pressMove, this);
			stage.on("stagemousedown", this.pressDown, this);			
		}

		p.pressDown = function( event )
		{
			if(this.pressingThread != null)
			{
				console.log("pressingThread:"+this.pressingThread+" didn't recieve a press Up Event.");
				this.pressingThread.pressUp();
				this.pressingThread = null;
			}

			this.pressingThread = this.currentThread();
			this.pressingThread.pressDown();
		}

		p.pressUp = function( event )
		{
			this.pressingThread.pressUp();
			this.pressingThread = null;
		}

		p.pressMove = function( event )
		{
			if(!this.pressingThread)
				return;

			this.pressingThread.pressMove();
		}

		p.addThread = function()
		{		
			var thread = new Thread( this.virtualgrid );
			this.addChild( thread );
			this.threads.push( thread );

			return thread;
		}

		p.changeThread = function()
		{
			var thread = this.currentThread();

			if(( thread == null ) || ( !this.hasThreads() ) || ( thread.data.hasStitches() ))
			{
				// if( thread.data.hasPoints() )
				// 	thread.pressUp();
				//	thread.forceAnimationComplete();

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
			if(this.isPressing)
				return;

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
			if(this.isPressing)
				return;

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