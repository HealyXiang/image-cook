// const { createCanvas, loadImage, registerFont } = require("canvas");
// const markdownIt = require("markdown-it")();
import { join } from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";
import { createCanvas, loadImage, registerFont } from "canvas";
import MarkdownIt from "markdown-it";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const md = new MarkdownIt();

// Define the canvas dimensions
const width = 800;
const height = 600;

// Create a new canvas
const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");
const fontPath = join(__dirname, "./Poppins-Bold.ttf");
// Load a font (optional, if you want to use a custom font)
registerFont(fontPath, { family: "CustomFont" });

// Define the Markdown text
const markdownText = `
# Hello, Markdown to Image!

This is a **sample** Markdown text that we will convert to an image.
`;

// Convert Markdown to HTML
const htmlText = md.render(markdownText);
console.log(htmlText);

// Set the background color and text color (optional)
ctx.fillStyle = "white"; // Background color
ctx.fillRect(0, 0, width, height);
ctx.fillStyle = "black"; // Text color

// Define text options (optional)
const fontSize = 18;
ctx.font = `${fontSize}px 'CustomFont', sans-serif`;
ctx.textAlign = "left";
ctx.textBaseline = "top";

// Split the HTML text into lines
const lines = htmlText.split("\n");

// Define the initial vertical position for rendering text
let yPos = 20;

// Render each line of text
lines.forEach((line) => {
  ctx.fillText(line, 20, yPos);
  yPos += fontSize + 5; // Adjust the vertical position
});

// Save the canvas as an image (PNG format)
// const fs = require("fs");
const outputPath = join(__dirname, "output.png");
const out = fs.createWriteStream(outputPath);
const stream = canvas.createPNGStream();

stream.pipe(out);

out.on("finish", () => {
  console.log(`Markdown converted to an image and saved to ${outputPath}`);
});
