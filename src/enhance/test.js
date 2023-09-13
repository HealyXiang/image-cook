const fs = require('fs');
const path = require('path');
const Upscaler = require('upscaler/node');

// 读取原始图像文件
const inputImagePath = path.resolve(__dirname, 'image2.jpg');
const outputImagePath = path.resolve(__dirname, 'image3.jpg');

const upscaler = new Upscaler();

fs.promises.readFile(inputImagePath)
  .then((inputImageBuffer) => {
    // 使用 upscaler 来提升画质
    return upscaler.upscale(inputImageBuffer);
  })
  .then((outputImageBuffer) => {
    // 将提升后的图像保存到文件
    return fs.promises.writeFile(outputImagePath, outputImageBuffer);
  })
  .then(() => {
    console.log('画质提升完成，图像已保存到', outputImagePath);
  })
  .catch((error) => {
    console.error('处理图像时出错:', error);
  });
