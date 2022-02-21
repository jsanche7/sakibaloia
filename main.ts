input.onButtonPressed(Button.A, function () {
    Puntuak = 0
})
let Puntuak = 0
Puntuak = 0
basic.forever(function () {
    basic.showNumber(Puntuak)
    if (input.pinIsPressed(TouchPin.P2)) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        Puntuak += 1
    }
})
