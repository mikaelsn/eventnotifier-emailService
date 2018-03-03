var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: '',
    pass: ''
  }
});

exports.send = function (req, res) {
//   var mailOptions = {
//     from: 'BlueMix Reminder ✔',
//     to: req.body.to,
//     subject: req.body.subject,
//     html: req.body.body
//   };
//   transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//       console.log(error);
//       return res.status(500).json(error);
//     }
//     res.status(200).json(info.response);
//     console.log(new Date() + ": emailed: " + mailOptions.to)
// });
  const timeOut = Math.floor(Math.random() * (300 - 150)) + 150
  setTimeout(returnOk(res), timeOut);
  console.log(new Date() + ": sent ok after " + timeOut + "ms");
}

function returnOk(res) {
  res.sendStatus(200);
}