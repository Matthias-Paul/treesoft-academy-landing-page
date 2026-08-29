import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";
import { contactSubjects } from "@/lib/contact";

const ContactMessageSchema = new Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    subject: {
      type: String,
      required: true,
      enum: contactSubjects.map((item) => item.value),
    },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

export type ContactMessageDocument = InferSchemaType<typeof ContactMessageSchema>;

export type ContactMessageModel = Model<ContactMessageDocument>;

export function getContactMessageModel(): ContactMessageModel {
  return (
    (mongoose.models.ContactMessage as ContactMessageModel | undefined) ??
    mongoose.model<ContactMessageDocument>(
      "ContactMessage",
      ContactMessageSchema,
    )
  );
}
