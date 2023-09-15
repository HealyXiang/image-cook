const fs = require("fs");
const path = require("path");

const CardRender = require("./text2image");
const { longboardTurn } = require("./data/longboardTurn");

function checkDirExist(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

const contentId = longboardTurn.id;
const targetDir = path.join(__dirname, `./resImages/${contentId}`);

checkDirExist(targetDir);

longboardTurn.content.forEach((card, index) => {
  CardRender({
    ...card,
    targetPath: path.join(targetDir, `./contet_${index}.png`),
  });
});
