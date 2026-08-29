import { NextResponse } from "next/server";
import { parseContactMessageBody } from "@/lib/contact-message";
import { connectDb } from "@/lib/db";
import { getErrorMessage } from "@/lib/errors";
import { sendContactEmails } from "@/lib/mail/contact";
import { getContactMessageModel } from "@/lib/models/ContactMessage";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = parseContactMessageBody(body);

    await connectDb();

    const message = await getContactMessageModel().create({
      fullName: payload.fullName,
      email: payload.email,
      phone: payload.phone,
      subject: payload.subject,
      message: payload.message,
    });

    const messageId = message._id.toString();

    try {
      await sendContactEmails(payload, messageId);
    } catch (mailError) {
      console.error("[contact] email failed", mailError);
    }

    return NextResponse.json({
      success: true,
      id: messageId,
    });
  } catch (error) {
    const message = getErrorMessage(error, "Unable to send message");
    console.error("[contact]", error);

    return NextResponse.json({ error: message }, { status: 400 });
  }
}
