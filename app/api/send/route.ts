import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, company } = body;

    // Honeypot: real users never see this field. Pretend success so bots
    // don't learn they were filtered.
    if (company) {
      return NextResponse.json({ success: true });
    }

    if (
      typeof name !== 'string' || !name.trim() ||
      typeof email !== 'string' || !email.trim() ||
      typeof message !== 'string' || !message.trim()
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (
      name.length > MAX_NAME_LENGTH ||
      email.length > MAX_EMAIL_LENGTH ||
      message.length > MAX_MESSAGE_LENGTH
    ) {
      return NextResponse.json(
        { error: 'Message too long' },
        { status: 400 }
      );
    }

    // Construct lazily so a missing key fails the request, not the build.
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: 'Vessel Portfolio <system@tbuckets.us>',
      to: ['system@tbuckets.us'],
      replyTo: email.trim(),
      subject: `New Contact from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
    });

    if (error) {
      console.error('Resend API Error:', error.name);
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Unexpected Server Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
