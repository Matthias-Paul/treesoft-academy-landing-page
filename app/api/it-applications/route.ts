import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import { getErrorMessage } from "@/lib/errors";
import {
  parseItApplicationBody,
  parseOptionalDate,
} from "@/lib/it-application";
import { sendItApplicationEmails } from "@/lib/mail/it-application";
import { getItApplicationModel } from "@/lib/models/ItApplication";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = parseItApplicationBody(body);

    await connectDb();

    const application = await getItApplicationModel().create({
      fullName: payload.fullName,
      email: payload.email,
      phone: payload.phone,
      track: payload.track,
      schoolName: payload.schoolName,
      department: payload.department,
      programLevel: payload.programLevel,
      itStatus: payload.itStatus,
      itStartDate: parseOptionalDate(payload.itStartDate),
      itEndDate: parseOptionalDate(payload.itEndDate),
      notes: payload.notes,
      schoolId: payload.schoolId,
      itLetter: payload.itLetter,
      status: "pending",
    });

    const applicationId = application._id.toString();

    try {
      await sendItApplicationEmails(payload, applicationId);
    } catch (mailError) {
      console.error("[it-applications] email failed", mailError);
    }

    return NextResponse.json({
      success: true,
      id: applicationId,
    });
  } catch (error) {
    const message = getErrorMessage(error, "Unable to submit application");
    console.error("[it-applications]", error);

    return NextResponse.json({ error: message }, { status: 400 });
  }
}
