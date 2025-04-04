import cloudinary from "@/lib/cloudinary";
import { Readable } from "stream";

export async function uploadFileToStorage(file) {
  return new Promise((resolve, reject) => {
    const fileStream = Readable.from(Buffer.from(new Uint8Array(file)));

    const stream = cloudinary.uploader.upload_stream(
      {
        resource_type: "raw", // RAW for PDFs
        folder: "case_documents",
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result.secure_url); // Return file URL
      }
    );

    fileStream.pipe(stream);
  });
}
