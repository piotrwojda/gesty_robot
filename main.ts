radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    if (receivedNumber == 1) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    } else if (receivedNumber == 2) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    } else if (receivedNumber == 3) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
basic.showIcon(IconNames.Happy)
radio.setGroup(1)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
basic.pause(500)
maqueen.motorStop(maqueen.Motors.All)
basic.forever(function () {
	
})
