/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr Coxall
 * Created on: Sep 2020
 * This program finds the distance using a sonar.
*/

// variables
let distanceToObject: number = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// find distance
input.onButtonPressed(Button.A, function() {
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.clearScreen()
    basic.showNumber(distanceToObject)
    basic.showIcon(IconNames.Happy)
})
