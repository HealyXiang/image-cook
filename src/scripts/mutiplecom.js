import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import { UltimateTextToImage, HorizontalImage, VerticalImage } from "ultimate-text-to-image";
import { default as Upscaler } from "upscaler";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const textToImage1 = new UltimateTextToImage("长板转向技巧", {
  //   backgroundColor: "#0080FF33",
  fontColor: "#000000",
  fontSize: 30,
  marginBottom: 10,
  //   fontSize: 16,
});
const textToImage2 = new UltimateTextToImage("1.倾斜\n2.板尾 ", {
  //   maxWidth: 200,
  //   backgroundColor: "#00FF0033",
  fontSize: 20,
  fontColor: "#808080",
  lineHeight: 30,
});

const horizontalImage = new VerticalImage(
  [
    textToImage1,
    textToImage2,
    // new HorizontalImage([
    //   new UltimateTextToImage("Horizontal 1"),
    //   new UltimateTextToImage("Horizontal 2", { fontSize: 50 }),
    // ]),
    // new VerticalImage([
    //   new UltimateTextToImage("Vertical 1"),
    //   new UltimateTextToImage("Vertical 2", { fontColor: "#EE82EE" }),
    // ]),
  ],
  { valign: "bottom", backgroundColor: "#F5F5F5", margin: 80 },
);

horizontalImage
  .render()
  .toFile(path.join(__dirname, "imageMixed1.jpg"), "image/jpeg", { quality: 1 });

// const upscaler = new Upscaler();
// upscaler.upscale(path.join(__dirname, "imageMixed1.jpg")).then((upscaledImage) => {
//   console.log("upscaledImage:", upscaledImage); // base64 representation of image src
// });
