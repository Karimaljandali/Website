const sendgrid = require('@sendgrid/mail');

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    const body = req.body

    const message = `
      First Name: ${body.first_name}<br>
      Last Name: ${body.last_name}<br>
      Email: ${body.email}<br>
      Message: ${body.message}
    `
    await sendgrid.send({
      to: "karim@aljandali.dev", 
      from: "noreply@aljandali.dev", 
      subject: 'Form Submission!',
      html: message,
    });
    
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;