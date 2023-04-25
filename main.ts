input.onButtonPressed(Button.A, function () {
    vl_tela = vl_a - 1
    if (vl_tela < 0) {
        vl_tela = 9
    }
    basic.showNumber(vl_tela)
})
input.onButtonPressed(Button.AB, function () {
    if (_var == 1) {
        vl_a = vl_tela
        basic.showIcon(IconNames.Yes)
        _var = 2
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    } else if (_var == 2) {
        vl_b = vl_tela
        basic.showIcon(IconNames.Yes)
        _var = 3
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    } else if (_var == 3) {
        vl_c = vl_tela
        basic.showIcon(IconNames.Yes)
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
        basic.pause(200)
        if (vl_a > vl_b) {
            maior = vl_a
        } else {
            maior = vl_b
        }
        if (vl_c > maior) {
            maior = vl_c
        }
        basic.showString("O maior: " + maior)
        _var = 1
        music.startMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once)
    }
})
input.onButtonPressed(Button.B, function () {
    vl_tela = vl_tela + 1
    if (vl_tela > 9) {
        vl_tela = 0
    }
    basic.showNumber(vl_tela)
})
let maior = 0
let vl_c = 0
let vl_b = 0
let vl_a = 0
let vl_tela = 0
let _var = 0
_var = 1
