# Get Started
```bash
git clone https://github.com/Spike-Leung/markdown-resume.git
cd markdown-resume
pnpm i

# edit resume
vim src/resume-template.md

# generate resume.html
pnpm run build
```

# Edit Resume
- You can fork this repo, and edit `markdown-resume/src/resume.md`
- Or write your own `resume.md`, and change `resumePath` variable in `mardown-resume/config.js`

# Custom style
- Edit files in  `markdown-resume/style` to custom your resume style
- A `custom` id is set on `<body>`, you can use `#custom` selector to custom html, or change it yourself

# Export to pdf
- Run build and open `markdown-resume/dist/resume.html` in browser
- Print it as pdf (You may need to set some printing options)

# Preview
- [[resume.pdf]](./screenshot/resume.pdf)
