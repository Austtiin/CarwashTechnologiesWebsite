// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('API Route received:', body);

    // In a real application, you would add your email sending logic here.
    // For example, using a service like Nodemailer, Resend, or SendGrid.
    //
    // Example:
    // await sendEmail({
    //   to: 'your-email@example.com',
    //   from: 'website@carwashtech.com',
    //   subject: 'New Contact Form Submission',
    //   html: `<p>Name: ${body.name}</p><p>Email: ${body.email}</p><p>Message: ${body.message}</p>`,
    // });

    return NextResponse.json({ message: 'Form submitted successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error submitting form.' }, { status: 500 });
  }
}