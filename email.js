const nodemailer = require('nodemailer');
const password = require('./password.js')


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'leondo.bot@gmail.com',
        pass: password.email
    }
});

exports.sendMsg = (email, message) =>{

	// setup email data with unicode symbols
	let mailOptions = {
	    from: 'GDAX notification', // sender address
	    to: email, // list of receivers
	    subject: 'GDAX notification', // Subject line
	    text: message // plain text body
	};

	transporter.sendMail(mailOptions)

}