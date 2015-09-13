# Enhanced HTML5 audio library

### Creating and Audio element
To create an audio element we need to provide four three parameters:
- Path to mp3 file.
- Volume (0.00 - 1.00).
- Loop (true or false).
- Autoplay (true or false).

```` js
 var myAudio = new Sound('/path/to/file.mp3', 1, true, false);
````

### Methods

```` js
 myAudio.play(); // To construct our audio object and will play the file from the begning.
 myAudio.pause(); // Pause the audio if it's playing.
 myAudio.resume(); // Resume the audio if it's paused.
 myAudio.mute(); // Mute the audio if it's not muted.
 myAudio.unmute(); // Unmute the audio if it's muted.
 myAudio.duration(); // Return the audio duration.
// You can call any Audio method or use any properties by assesing the audio object instead:
 myAudio.audio.audioPropertiesOrMethodNameHere; 
````

### Changelog

- 1.0.0 Initial release.
- 1.0.1 Checking if the audio object exists before calling some functions.

### Me

Murilo Bastos, Web Developer: iam@murilobastos.com
