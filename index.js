const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.post("/upload", upload.single("image"), async (req, res) => {
  const directory = req.body.directory;
  const originalName = path.parse(req.file.originalname).name;
  const outputFileName = `${originalName}.webp`;

  try {
    if (!fs.existsSync(directory)) {
      return res.status(400).send("Directory does not exist.");
    }

    const outputFilePath = path.join(directory, outputFileName);

    await sharp(req.file.path)
      .resize({ width: 1200, withoutEnlargement: true })
      .toFormat("webp")
      .toFile(outputFilePath);

    // Check if file size is greater than 100KB and adjust quality
    let outputFileSize = fs.statSync(outputFilePath).size;
    if (outputFileSize > 100 * 1024) {
      await sharp(outputFilePath)
        .toFormat("webp", { quality: 80 })
        .toFile(outputFilePath);

      outputFileSize = fs.statSync(outputFilePath).size;
    }

    fs.unlinkSync(req.file.path); // Remove the original uploaded file
    res.send("Image processed and saved successfully.");
  } catch (error) {
    res.status(500).send("An error occurred while processing the image.");
  }
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
