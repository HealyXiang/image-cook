import path from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import {
  getCanvasImage,
  HorizontalImage,
  registerFont,
  UltimateTextToImage,
  VerticalImage,
} from "ultimate-text-to-image";

// render the image
const textToImage = new UltimateTextToImage("长板如何转向\n1.使用倾斜和板尾\n2.后脚位置非常重要", {
  width: 400,
  maxWidth: 1000,
  maxHeight: 1000,
  fontFamily: "Arial",
  fontColor: "#696969",
  fontSize: 16,
  minFontSize: 10,
  lineHeight: 30,
  autoWrapLineHeightMultiplier: 1.2,
  margin: 20,
  marginBottom: 40,
  align: "center",
  valign: "middle",
  //   borderColor: "#00FF00",
  //   borderSize: 2,
  backgroundColor: "#FFF8DC",
  //   underlineColor: "#00FFFF33",
  //   underlineSize: 2,
});
textToImage.render().toFile(path.join(__dirname, "image2.png"));

// properties
const width = textToImage.width; // final canvas size
const height = textToImage.height; // final canvas size
const renderedTime = textToImage.renderedTime; // rendering time of canvas
const measuredParagraph = textToImage.measuredParagraph; // all the details of the texts in size
const canvas = textToImage.canvas; // the node-canvas
const hasRendered = textToImage.hasRendered; // a flag to indicate if render() has run

// render again (this will create a new canvas)
const options = (textToImage.options.fontFamily = "Comic Sans MS");
const buffer = textToImage.render().toBuffer("image/jpeg");
