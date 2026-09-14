# onry-website

Static site for [Onry](https://github.com/jjhale/onry), served via GitHub Pages at
[onry.jjhale.com](https://onry.jjhale.com).

Plain HTML/CSS, no build step. Pages:

- `/` — landing page
- `/privacy/` — privacy policy
- `/contact/` — contact form
- `/i` — fallback page for care team invite links (`i.html`, `i.js`)

## Invite links

Invites are shared as `https://onry.jjhale.com/i#<code>`.

- With the app installed, iOS opens Onry directly (a universal link). This relies on
  `.well-known/apple-app-site-association`, which lists the app's ID and the `/i` path.
- Otherwise `i.html` loads. It offers an "Open in Onry" button (`onry://invite?code=…`)
  and install instructions.
- The code stays in the URL fragment, which browsers don't send to the server. The page has
  a strict CSP, sends no referrer and is `noindex`. Don't add analytics or other
  third-party scripts to it.
- `.nojekyll` makes GitHub Pages publish the `.well-known` folder. Jekyll skips dot-folders
  otherwise.

After changing the association file, check what Apple's CDN has cached (it can lag by a
day or more):

```bash
curl -s https://app-site-association.cdn-apple.com/a/v1/onry.jjhale.com
```

## DNS

`onry.jjhale.com` needs a `CNAME` DNS record pointing at `jjhale.github.io`. The `CNAME`
file in this repo tells GitHub Pages which custom domain to serve this repo on.

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.
