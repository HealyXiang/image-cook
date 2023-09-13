const fs = require('fs')
const path = require('path')
const tf = require('@tensorflow/tfjs-node')
const Upscaler = require('upscaler/node') // this is important!

const imgPath = path.join(__dirname,'image2.png')
console.log('imgPath:', imgPath)
const filePath = path.resolve(__dirname, './img-target.png')
const file = fs.readFileSync(filePath);

async function main() {
    const upscaler = new Upscaler()
    const image = tf.node.decodeImage(file, 3)
    const tensor = await upscaler.upscale(image)
    const upscaledTensor = await tf.node.encodePng(tensor)

    console.log('upscaledTensor:', upscaledTensor)
    
    // dispose the tensors!
    image.dispose()
    tensor.dispose()
    // upscaledTensor.dispose()

    fs.writeFileSync(path.resolve(__dirname, './img-out.png'), upscaledTensor)


}

main()