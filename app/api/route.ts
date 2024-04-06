
import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const body = await req.json(); // Use NextRequest's json method to parse the body

  // Define your transporter as before
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "ounder@backlinkafrica.com",
      pass: "qect segw ccva rmfg", // Ensure this is securely handled and not exposed
    },
  });

  try {
    const info = await transporter.sendMail({
      from: '"New Link Request" <founder@backlinkafrica.com>',
      to: "founder@backlinkafrica.com",
      subject: "You have a new link posting request",
      text: `Form Details:\nFull Name: ${body.fullName}\nEmail: ${body.email}\nWebsite Name: ${body.websiteName}\nDomain Name: ${body.domainName}\nPrice Range: ${body.priceRange}\nAllowed Content Types: ${body.allowedContentType}\nDescription: ${body.siteDescription}`,

    });

    console.log("Message sent: %s", info.messageId);
    
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Error sending email", error);
    return new Response(JSON.stringify({ error: 'Error sending email' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
