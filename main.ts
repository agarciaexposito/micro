function parpadeo () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
}
input.onButtonPressed(Button.A, function () {
    parpadeo()
})
input.onButtonPressed(Button.B, function () {
    parpadeo()
})
