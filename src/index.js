const fs = require("fs");
const path = require("path");

const CardRender = require("./text2image");

const Card1 = {
  bigTitleText: "长板冲浪转向技巧",
  tipTitleText: "板倾斜",
  contentText:
    "倾斜是指，板子宽度方向左右的倾斜。\n在转向的时候，要让脚踩在板的中心线偏左或者偏右，这样才能让板倾斜，从而利于转向。\n",
  targetPath: path.join(__dirname, "./resImages/turnCard1.png"),
};

CardRender(Card1);
