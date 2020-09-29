const nodemailer = require('nodemailer');
const express = require('express');
const app = express();

app.post('/send', (req, res) => {

  const { to, subject, text} = req.body;

	const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    	user : 'alcruzatt@gmail.com',
    	pass : 'Hijehp77'
    }

}

);
	const mailOptions = {
		from : 'alcruzatt@gmail.com',
		to: to,
		subject: subject,
		text: text
	}

	transporter.sendMail(mailOptions,(err, info) => {
		if (err) {
			res.status(500).send(err.message);
		} else {
			console.log('email Enviando')
			res.status(200).jsonp(req.body)
		}
	})
}) 



app.listen(3000, () => {
	console.log('App funcionando en: http://localhost:3000')
})