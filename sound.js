Sound = function(file, volume, loop) {

	// Build our sound object.
	this.file = file;
	this.volume = volume;
	this.loop = loop;

	// This will construct our audio element and autoplay it.
	this.play = function() {
		this.audio = new Audio(this.file);
		this.audio.loop = this.loop;
		this.audio.volume = this.volume;
		this.audio.play();
	};

	// This will change our audio object propriets.
	this.change = function(volume, loop, auto, file) {
		//if file ins empty it'll not change
		if (file) this.file = file;
		this.volume = volume;
		this.loop = loop;

		// Check if its auto is true and then reconstruct our audio element.
		if (auto) {
			this.play();

		// If it's not, we are going to stop the audio so it can recieve the new atributes on the next play event.
		} else {
			this.stop();
		}
	};

	// This will act as a normal "Audio.pause()".
	this.pause = function() {
		if (!this.audio.paused) this.audio.pause();
	};

	// This will resume the audio if it is paused.
	this.resume = function() {
		if (this.audio.paused) this.audio.play();
	};

	// This will act as a normal "Audio.muted = true".
	this.mute = function() {
		if (!this.audio.muted) this.audio.muted = true;		
	};

	// This will act as a normal "Audio.muted = false".
	this.unmute = function() {
		if (this.audio.muted) this.audio.muted = false;		
	};

	// Return the audiofile duration's
	this.duration = function() {
		return this.audio.duration;
	}
};
