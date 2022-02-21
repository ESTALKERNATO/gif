basic.showIcon(IconNames.Square)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
basic.showIcon(IconNames.SmallSquare)
basic.showIcon(IconNames.Diamond)
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    . # # # .
    . . # . #
    `)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . # . #
        . . # # .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . . # .
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        # . . . #
        . # # # .
        . # # # .
        . # # # .
        # . . . #
        `)
})
