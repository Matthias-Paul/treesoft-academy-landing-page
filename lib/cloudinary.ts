import crypto from "node:crypto";
import { getErrorMessage } from "@/lib/errors";

export type UploadedFile = {
  url: string;
  publicId: string;
};

function getCloudinaryConfig() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !apiKey) {
    throw new Error("Cloudinary cloud name and API key must be set in .env.local");
  }

  if (!uploadPreset && !apiSecret) {
    throw new Error(
      "Add CLOUDINARY_UPLOAD_PRESET (unsigned preset) or CLOUDINARY_API_SECRET to .env.local",
    );
  }

  return { cloudName, apiKey, apiSecret, uploadPreset };
}

function signParams(
  params: Record<string, string | number>,
  apiSecret: string,
) {
  const toSign = Object.keys(params)
    .sort()
    .map((key) => `${key}=${params[key]}`)
    .join("&");

  return crypto.createHash("sha1").update(toSign + apiSecret).digest("hex");
}

async function parseCloudinaryError(response: Response) {
  try {
    const data = (await response.json()) as {
      error?: { message?: string };
    };
    return data.error?.message ?? `HTTP ${response.status}`;
  } catch {
    return `HTTP ${response.status}`;
  }
}

export async function uploadToCloudinary(
  file: File,
  folder: string,
): Promise<UploadedFile> {
  const { cloudName, apiKey, apiSecret, uploadPreset } = getCloudinaryConfig();
  const endpoint = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const body = new FormData();
  body.append("file", file, file.name || "upload");
  body.append("folder", folder);

  if (uploadPreset) {
    body.append("upload_preset", uploadPreset);
  } else if (apiSecret) {
    const timestamp = Math.round(Date.now() / 1000);
    const params = { folder, timestamp };
    const signature = signParams(params, apiSecret);

    body.append("api_key", apiKey);
    body.append("timestamp", String(timestamp));
    body.append("signature", signature);
  }

  const response = await fetch(endpoint, {
    method: "POST",
    body,
  });

  if (!response.ok) {
    const detail = await parseCloudinaryError(response);

    if (response.status === 403 && !uploadPreset) {
      throw new Error(
        `Cloudinary rejected the upload (403). Create an unsigned upload preset in Cloudinary → Settings → Upload, then add CLOUDINARY_UPLOAD_PRESET to .env.local. Details: ${detail}`,
      );
    }

    throw new Error(`Cloudinary upload failed: ${detail}`);
  }

  const data = (await response.json()) as {
    secure_url?: string;
    public_id?: string;
  };

  if (!data.secure_url || !data.public_id) {
    throw new Error("Cloudinary upload failed: missing file URL");
  }

  return {
    url: data.secure_url,
    publicId: data.public_id,
  };
}

export const ACCEPT_IMAGE_TYPES = "image/*";

export const MAX_FILE_BYTES = 5 * 1024 * 1024;

export function isImageFile(file: File) {
  return file.type.startsWith("image/");
}

export function validateUploadFile(file: File, label: string) {
  if (!isImageFile(file)) {
    throw new Error(`${label} must be an image file (JPG, PNG, WebP, GIF, etc.)`);
  }
  if (file.size > MAX_FILE_BYTES) {
    throw new Error(`${label} must be 5MB or smaller`);
  }
}
