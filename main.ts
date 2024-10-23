let count = 0
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.clearScreen()
    }
    count += 1
    music.ringTone(262)
    basic.pause(8)
    music.stopAllSounds()
})
