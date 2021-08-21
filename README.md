![image](./image/preview.png)

# Get Started

## 运行
```bash
git clone https://github.com/Spike-Leung/markdown-resume.git

cd markdown-resume

yarn # 安装依赖

vim markdown/resume.md # 编辑你的简历

yarn build # 生成html文件
```

## 简历编辑
- 你可以直接编辑 `markdown` 目录下的 `resume.md` 文件
- 或者你可以自己在任意位置创建一个 `.md` 文件，然后在 `markdown-resume/config/index.js` 中，修改 `resume-path` 指向你的 `.md` 文件

## 导出 PDF
尝试使用一些模块完成 PDF 的导出，但样式差异较大，目前的解决办法是使用浏览器的打印功能，然后将其保存到本地。

以 firefox 为例：

- 打开生成的 html 文件
- 选择打印
![image](./image/firefox-option.png)
- 配置打印选项
  - 选择保存为PDF
  - 勾选打印背景
  - 去除页眉页脚
![image](./image/print-setting.png)
- 保存


# 参考
- [Complete list of github markdown emoji markup](https://gist.github.com/rxaviers/7360908)
- [pandoc_resume](https://github.com/mszep/pandoc_resume)
