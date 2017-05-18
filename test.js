var myObj = {
	86: [{email:'apple', sent: false}, {email:'ape', sent: false}],
	88: [{email:'bananna', sent: false}, {email:'bong', sent: false}],
	90: [{email:'carrot', sent: false}, {email:'cash', sent: false}],
	100:[{email:'doge', sent: false}, {email:'dope', sent: false}],
	15: [{email:'elephant', sent: false}, {email:'extreme', sent: false}]}


for (var key in myObj){
	if (parseFloat(key) <= 88){
		console.log(myObj[key])
		//sent sent to true || delete the array || move data to a seperate db
	}
}