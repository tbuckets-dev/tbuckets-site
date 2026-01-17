import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Debug: Check if key exists (don't log the actual key for security)
console.log("Resend Key Configured:", !!process.env.RESEND_API_KEY);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Log the attempt
    console.log(`Attempting to send email from: ${email}`);

    // Validation
    if (!name || !email || !message) {
      console.log("Validation Failed: Missing fields");
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Vessel Portfolio <system@tbuckets.us>', // MUST use this until domain is verified
      to: ['system@tbuckets.us'], // Ensure this matches your Resend account email
      replyTo: email,
      subject: `New Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    // Check for Resend specific errors
    if (data.error) {
      console.error("Resend API Error:", data.error); 
      return NextResponse.json({ error: data.error }, { status: 400 });
    }

    console.log("Email sent successfully:", data.data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Unexpected Server Error:", error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}