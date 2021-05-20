#!/bin/bash

cd ..
cd word-panel
rm -rf build
echo "开始打包 APP 代码"
yarn build
# 移动生成的文件
echo "转移生成的模版 html"
cp ./build/index.html ../chrome-words/public/template.html
cd ..
echo "开始打包 chrome 插件"
cd chrome-words
rm -rf build
yarn build


