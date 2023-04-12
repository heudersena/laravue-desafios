

const seconds = 108000;

function converty(seconds) {
    let h = Math.floor(seconds / 3600)
    let m = Math.floor((seconds % 3600) / 60) // Pegar o resto da divisão
    let s = seconds % 60 // Pegar o resto da divisão

    return {
        h,
        m,
        s
    }

}

const timer = converty(seconds)

console.log(timer);