

const seconds = 108000;

function converty(seconds) {
    let h = Math.floor(seconds / 3600)
    let m = Math.floor((seconds % 3600) / 60)
    let s = seconds % 60

    return {
        h,
        m,
        s
    }

}

const timer = converty(seconds)

console.log(timer);