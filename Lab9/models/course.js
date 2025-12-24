import mongoose from "mongoose";
const { Schema } = mongoose;

const CourseSchema = new Schema({
  date: { type: Date, default: Date.now },
  title: { type: String, required: true },
  description: { type: String },
  instructorName: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String },
  numOfEnrolledStudents: { type: Number, default: 0 }
});

export default mongoose.model("Course", CourseSchema);
