var fetchUrl = require("fetch").fetchUrl;


fetchUrl("https://api.cryptowat.ch/markets/gdax/ethusd/ohlc", function(error, meta, body){
    const data = JSON.parse(body)

    // 8640 seconds in 1 day
    const tenkan = senLine(data, 20, 86400)
    const kijun  = senLine(data, 60, 86400)

    console.log(tenkan)
    console.log(kijun)
})


// senLine calculates the mid point of the high-low range
function senLine(data, maxDays, seconds){
    let line = days = 0
    let index = data['result'][seconds].length - 1

    while (days < maxDays){

        let high = data['result'][seconds][index][2]
        let low  = data['result'][seconds][index][3]
        let midPoint = ( high + low ) / 2
        line = line + midPoint

        index--
        days++
    }

    return line / maxDays
}
