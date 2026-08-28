import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const ItApplicationSchema = new Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    track: { type: String, required: true, trim: true },
    schoolName: { type: String, required: true, trim: true },
    department: { type: String, required: true, trim: true },
    programLevel: { type: String, required: true, trim: true },
    itStatus: {
      type: String,
      required: true,
      enum: ["current", "upcoming"],
    },
    itStartDate: { type: Date },
    itEndDate: { type: Date },
    notes: { type: String, trim: true },
    schoolId: {
      url: { type: String, required: true },
      publicId: { type: String, required: true },
    },
    itLetter: {
      url: { type: String, required: true },
      publicId: { type: String, required: true },
    },
    status: {
      type: String,
      required: true,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true },
);

export type ItApplicationDocument = InferSchemaType<typeof ItApplicationSchema>;

export type ItApplicationModel = Model<ItApplicationDocument>;

export function getItApplicationModel(): ItApplicationModel {
  return (
    (mongoose.models.ItApplication as ItApplicationModel | undefined) ??
    mongoose.model<ItApplicationDocument>("ItApplication", ItApplicationSchema)
  );
}
