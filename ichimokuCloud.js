var fetchUrl = require("fetch").fetchUrl;


fetchUrl("https://api.cryptowat.ch/markets/gdax/ethusd/ohlc", function(error, meta, body){
    const data = JSON.parse(body)

    /*
    let currentOHLC = {
        closeTime:  data['result']['14400'][0][0],
        openPrice:  data['result']['14400'][0][1],
        highPrice:  data['result']['14400'][0][2],
        lowPrice:   data['result']['14400'][0][3],
        closePrice: data['result']['14400'][0][4],
        volume:     data['result']['14400'][0][4],
    }
    */



    // const tenkanSen = senLine(data, 1)
    // const kijunSen = senLine(data, 60)
    // const SMA = simpleMovingAverage(data, 60)

    //senLine(data, total days, key in object)

    const hourly    = senLine(data, 24, 3600)
    const daily    = senLine(data, 1, 86400)
    const oneWeek   = senLine(data, 7, 86400)
    const oneMonth  = senLine(data, 30, 86400)
    const twoMonths = senLine(data, 60, 86400)

    console.log(hourly)
    console.log(daily)
    console.log(oneWeek)
    console.log(oneMonth)
    console.log(twoMonths)
})


// senLine calculates the mid point of the high-low range
function senLine(data, maxDays, seconds){
    let line = days = 0
    let index = data['result'][seconds].length - 1

    while (days < maxDays){

        // console.log('\n')
        // console.log(data['result']['86400'][index])
        // console.log('\n')

        let high = data['result'][seconds][index][2]
        let low  = data['result'][seconds][index][3]
        let midPoint = ( high + low ) / 2
        line = line + midPoint

        index--
        days++
    }

    return line / maxDays
}


function simpleMovingAverage(data, maxDays){
    let line = days = 0
    let index = data['result']['86400'].length - 1

    while (days < maxDays){
        let closingPrice = data['result']['86400'][index][4]
        line = line + closingPrice

        index--
        days++
    }

    return line / maxDays
}
