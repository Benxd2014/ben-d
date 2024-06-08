basic.showString("" + (10 - 8))
music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
record.startRecording(record.BlockingState.Blocking)
basic.forever(function () {
	
})
