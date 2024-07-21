import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  preview: { type: String, required: true },
  size: { type: Number, required: true },
  type: { type: String, required: true },
});

const profileModel =
  mongoose.models.profile || mongoose.model("profile", profileSchema);

export default profileModel;
