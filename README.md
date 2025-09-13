# Fake CTF Challenges Website

This repository contains a simple website presenting a set of fake, educational Capture‑the‑Flag (CTF) challenges. The site is intended for security training and helps learners practice identifying and exploiting common security misconfigurations.

## Challenges included

1. **Hidden in Comments** – Discover a base64‑encoded credential hidden in an HTML comment.
2. **Hard‑coded API Key** – Inspect a JavaScript bundle for a hard‑coded API key.
3. **Exposed `.git` Directory** – Reconstruct a repository from an exposed `.git` folder and extract a secret.
4. **Open S3 Bucket Listing** – Locate a backup archive in a public bucket and retrieve a password from an `.env` file.
5. **Leaked Database with Weak Hashes** – Crack MD5‑hashed passwords from a leaked database file.

## Running the site

To view the website locally, navigate into the `fake_ctf_site` directory and open `index.html` in your browser. No server is required; it’s a static site.

```
cd fake_ctf_site
xdg-open index.html # or open index.html in your browser
```

## Disclaimer

These challenges are intentionally contrived and should only be run in a controlled environment. Use them to practice and improve your skills, but do not apply these techniques to systems without explicit permission.
