const fs = require("fs");
const path = require("path");
// import { UltimateTextToImage, HorizontalImage, VerticalImage } from "ultimate-text-to-image";
const {
  UltimateTextToImage,
  HorizontalImage,
  VerticalImage,
  getCanvasImage,
} = require("ultimate-text-to-image");

const surfLogo = path.join(__dirname, "surf-logo.png");

async function CardRender({ bigTitleText, tipTitleText, contentText, targetPath }) {
  const imgBUffer = fs.readFileSync(surfLogo);

  const surfLogoCanvas = await getCanvasImage({ buffer: imgBUffer });

  const bigTitle = new HorizontalImage([
    new UltimateTextToImage("       ", {
      width: 60,
      height: 60,
      marginRight: 100,
      images: [{ canvasImage: surfLogoCanvas, layer: -1, repeat: "fit" }],
    }),
    new UltimateTextToImage(bigTitleText, {
      fontColor: "#fe7600",
      fontSize: 40,
      height: 60,
      fontWeight: 600,
      marginLeft: 20,
      valign: "middle",
      // marginBottom: 30,
    }),
  ]);

  const tipTitle = new UltimateTextToImage(tipTitleText, {
    fontColor: "#fe7600",
    fontSize: 32,
    height: 80,
    fontWeight: 600,
    // marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    valign: "middle",
  });

  const content = new UltimateTextToImage(contentText, {
    maxWidth: 900,
    fontSize: 28,
    fontColor: "#111111",
    lineHeight: 40,
    // marginTop: 40,
  });

  const cardImage = new VerticalImage([bigTitle, tipTitle, content], {
    valign: "bottom",
    backgroundColor: "#f5f5d5",
    margin: 42,
    width: 900,
    height: 1200,
  });

  cardImage.render().toFile(targetPath, "image/png");
}

// CardRender();

module.exports = CardRender;
