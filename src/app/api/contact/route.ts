import { NextResponse } from "next/server";
import { Resend } from "resend";

import { siteConfig } from "@/data/site-config";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, projectType, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, email and message are required.",
        },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({
        success: true,
        message:
          "Form connected successfully. Add RESEND_API_KEY later to enable email sending.",
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Nexora Contact <onboarding@resend.dev>",
      to: siteConfig.personal.email,
      subject: `New project inquiry from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #111827;">
          <h2>New Project Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project Type:</strong> ${projectType || "Not provided"}</p>
          <p><strong>Budget:</strong> ${budget || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}