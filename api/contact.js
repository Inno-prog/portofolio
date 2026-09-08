const nodemailer = require('nodemailer');

function createTransporter() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) throw new Error('Missing SMTP credentials');
  return nodemailer.createTransport({ service: 'gmail', auth: { user, pass } });
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Champs requis manquants' });
    }

    const transporter = createTransporter();

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.RECIP_EMAIL,
      subject: `Portfolio — ${subject || 'Nouveau message'} de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nSujet: ${subject || 'Non spécifié'}\n\n${message}`,
      html: `
        <h2>Nouveau message depuis le portfolio</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject || 'Non spécifié'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return res.status(200).json({ success: true, message: 'Message envoyé avec succès' });
  } catch (error) {
    console.error('Erreur envoi email:', error);
    return res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi', error: error.message });
  }
};
