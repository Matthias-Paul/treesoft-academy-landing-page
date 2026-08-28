import { NextResponse } from "next/server";
import {
  uploadToCloudinary,
  validateUploadFile,
} from "@/lib/cloudinary";
import { getErrorMessage } from "@/lib/errors";

export const runtime = "nodejs";

const UPLOAD_FOLDER = "treesoft/it-applications";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File) || file.size === 0) {
      return NextResponse.json({ error: "Choose a file to upload" }, { status: 400 });
    }

    const kind = String(formData.get("kind") ?? "document");
    const label =
      kind === "schoolId"
        ? "School ID"
        : kind === "itLetter"
          ? "IT letter"
          : "Document";

    validateUploadFile(file, label);

    const uploaded = await uploadToCloudinary(file, UPLOAD_FOLDER);

    return NextResponse.json({
      success: true,
      ...uploaded,
      fileName: file.name,
      mimeType: file.type,
    });
  } catch (error) {
    const message = getErrorMessage(error, "Upload failed");
    console.error("[it-applications/upload]", error);

    const isUploadError =
      message.toLowerCase().includes("cloudinary") ||
      message.includes("403") ||
      message.includes("401");

    return NextResponse.json(
      { error: message },
      { status: isUploadError ? 502 : 400 },
    );
  }
}
