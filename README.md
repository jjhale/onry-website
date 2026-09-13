# onry-website

Static site for [Onry](https://github.com/jjhale/onry), served via GitHub Pages at
[onry.jjhale.com](https://onry.jjhale.com).

Plain HTML/CSS, no build step. Pages:

- `/` — landing page
- `/privacy/` — privacy policy

## DNS

`onry.jjhale.com` needs a `CNAME` DNS record pointing at `jjhale.github.io`. The `CNAME`
file in this repo tells GitHub Pages which custom domain to serve this repo on.

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.
