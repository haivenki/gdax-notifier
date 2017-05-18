var Gdax = require('gdax');
var websocket = new Gdax.WebsocketClient(['BTC-USD', 'ETC-USD', 'LTC-USD']);
const email = require('./email.js')



websocket.on('message', function(data) { 

	var coinPair = 'ETH-USD'
	var price = 87.56

	if (data.product_id === coinPair && parseFloat(data.price) <= price){
		//email.sendMsg('leondo.bot@gmail.com', `Price of ${coinPair} has dropped to ${data.price}`)
	}

})