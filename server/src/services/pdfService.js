const pdfParse = require("pdf-parse");
const fs = require("fs");

const extractTextFromPDF = async (filePath) => {
  let buffer;

  if (filePath.startsWith("http://") || filePath.startsWith("https://")) {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to fetch file from Cloudinary: ${response.statusText}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    buffer = Buffer.from(arrayBuffer);
  } else {
    buffer = fs.readFileSync(filePath);
  }

  const data = await pdfParse(buffer);

  return data.text;
};

module.exports = {
  extractTextFromPDF,
};