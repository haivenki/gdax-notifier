var myObj = {
	86: {email:['apple','ape'], sent: false},
	87: {email:['bananna','boob'], sent: false},
	88: {email:['cheese','carrot'], sent: false},
	89: {email:['doge','dude'], sent: false},
	90: {email:['elephant','zebra'], sent: false},
}




var emailList = (currentPrice) => {
	let emailArr = []

	for (var key in myObj){
		if (parseFloat(key) <= currentPrice && myObj[key].sent === false){

			// put all emails into an emailArr
			emailArr.push(...myObj[key].email)

			//change sent to true
			myObj[key].sent = true

		}
	}

	//console.log(myObj)

	return emailArr
}

console.log(emailList(88))
