import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://rahulyadav1209ts:E8ZSJw8BULxo0xlM@backend.vmycuzj.mongodb.net/?retryWrites=true&w=majority&appName=Backend"
    )
    .then(() => {
      console.log("Database connnected");
    })
    .catch((error) => {
      console.log("failed to connect database", error);
    });
};
