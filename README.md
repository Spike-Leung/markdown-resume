# Get Started
```bash
git clone https://github.com/Spike-Leung/markdown-resume.git
cd markdown-resume
pnpm i

# edit resume
vim src/resume.md

# generate resume.html
pnpm run build

# open dist/resume.html and print it
```

# Edit Resume
- You can fork this repo, and edit `markdown-resume/src/resume.md`
- Or write your own `resume.md`, and change `resumePath` variable in `mardown-resume/config.js`

# Custom style
- Edit files in  `markdown-resume/style` to custom your resume style, use `#custom` selector, or make it yourself

# Export to pdf
- `pnpm run build` then open `markdown-resume/dist/resume.html` in browser
- Print it as pdf (You may need to set some printing options)

# Preview
- [[resume.pdf]](./screenshot/resume.pdf)

# FAQ
## Where to get icon?
Check out [GitHub Emoji Picker](https://github-emoji-picker.rickstaa.dev/) !

Find the icon you want,  copy the shortcode and paste to your resume.md, that's it :blush:
