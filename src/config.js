import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://ordinario:123456@cluster0.xlszdyq.mongodb.net/?retryWrites=true&w=majority/Notes";
