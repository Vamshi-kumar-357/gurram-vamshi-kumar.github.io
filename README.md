# Gurram Vamshi Kumar — AI Engineer & Agentic Systems Portfolio

A modern, high-performance portfolio website engineered for **Gurram Vamshi Kumar** (AI / ML Engineer & Agentic Systems Architect). Designed specifically to be hosted on **GitHub Pages** with zero build dependencies, blazing-fast load times, and responsive mobile-first design.

---

## 🌟 Highlights & Key Features

- **Futuristic AI Aesthetic**: Deep space dark mode (`#070a12`), glowing glassmorphism cards, and an interactive ambient neural network canvas (`assets/js/particles.js`).
- **Interactive AI Architecture Terminal**: Visitors and hiring managers can run commands (`aarna`, `vision`, `paper`, `stack`, `contact`) or click quick-run chips to inspect multi-model agentic pipelines and medical computer vision architectures in real-time.
- **Detailed Production Case Studies**:
  - **Aarna (Mondee Tech)**: Conversational marketplace avatar platform with 1s first-token latency (Google ADK, Gemini, LiveKit WebRTC, Simli).
  - **Smart Vision Workstation (Techolution)**: Medical extraction system with 98.7% accuracy, 1.3s inference, and unified OCR across 700K+ SKUs.
  - **Gemini Enterprise (Techolution)**: Dynamic API intelligence with Google ADK, RAG, and ServiceNow/Jira/Salesforce integration.
  - **Autonomous Inventory Grab-and-Go POC**: Real-time OpenCV tracking with < 2s dashboard telemetry.
  - **Orthopedic Bone Screw Defect Detection**: 0.01 mm precision robotic vision inspection for healthcare implantables.
- **Springer Nature Research Spotlight**: Features the peer-reviewed publication (*String Kernel-Based Techniques for Native Language Identification*, DOI: `10.1007/s44230-023-00029-z`, 99.09% accuracy) with a direct link and one-click BibTeX copy button.
- **ATS-Optimized Printable Resume (`resume.html`)**: Clean, print-ready web resume that allows recruiters to save as PDF with a single click.
- **GitHub Pages Ready**: Includes `.nojekyll`, `404.html`, OpenGraph preview image, and an automated GitHub Actions deployment workflow (`.github/workflows/deploy.yml`).

---

## 📂 Project Structure

```
portfolio/
├── index.html                   # Main high-impact portfolio page
├── resume.html                  # ATS-friendly printable web resume
├── 404.html                     # Custom 404 error page for GitHub Pages
├── .nojekyll                    # Tells GitHub Pages to bypass Jekyll processing
├── README.md                    # Setup and GitHub Pages hosting instructions
├── .github/
│   └── workflows/
│       └── deploy.yml           # Automated GitHub Pages deployment workflow
└── assets/
    ├── css/
    │   └── style.css            # Custom animations, glassmorphism, glowing borders
    ├── js/
    │   ├── main.js              # Interactive terminal, project filters, copy buttons
    │   └── particles.js         # Interactive ambient neural canvas particles
    └── images/
        ├── favicon.svg          # Modern neural 'V' SVG favicon
        └── og-preview.svg       # Social preview image (LinkedIn, Twitter, OpenGraph)
```

---

## 🚀 How to Host on GitHub Pages (Step-by-Step)

You can host this for free on GitHub Pages in under 2 minutes:

### Step 1: Initialize Git and Commit

Open your terminal in this `portfolio` folder:

```bash
git init
git add .
git commit -m "Initial commit: Production AI Portfolio"
```

### Step 2: Create a Repository on GitHub

1. Go to [github.com/new](https://github.com/new).
2. Set repository name (for example, `portfolio` or `<your-username>.github.io`).
   - If named `<your-username>.github.io`, your site will be live at `https://<your-username>.github.io/`
   - If named `portfolio`, your site will be live at `https://<your-username>.github.io/portfolio/`
3. Leave it Public, do **not** initialize with a README (since you already have one).
4. Click **Create repository**.

### Step 3: Push Your Code to GitHub

Link your local repository to GitHub and push:

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. In your GitHub repository, click on **Settings** (top right tab).
2. In the left sidebar, click on **Pages** (under "Code and automation").
3. Under **Build and deployment**:
   - **Option A (Simplest - Branch Deployment)**:
     - **Source**: `Deploy from a branch`
     - **Branch**: Select `main`, folder `/(root)`, then click **Save**.
   - **Option B (GitHub Actions)**:
     - **Source**: `GitHub Actions` (the repository already includes `.github/workflows/deploy.yml` which will auto-deploy).
4. Wait 30–60 seconds, refresh the page, and GitHub will provide your live URL:
   ```
   Your site is live at https://<your-username>.github.io/<your-repo-name>/
   ```

---

## 💻 Local Preview

You can preview the website locally anytime:

### Using Node.js (Installed):
```bash
npx serve .
```
Or start a local preview:
```bash
node -e "const http=require('http'), fs=require('fs'), path=require('path'); http.createServer((req, res) => { let file = path.join(__dirname, req.url === '/' ? 'index.html' : req.url); fs.readFile(file, (err, data) => { if (err) { res.writeHead(404); res.end('Not Found'); } else { res.writeHead(200); res.end(data); } }); }).listen(3000, () => console.log('Portfolio live at http://localhost:3000'));"
```

### Using VS Code:
Right-click `index.html` and click **Open with Live Server**.

### Direct Double Click:
You can also simply double-click `index.html` in Windows File Explorer to open it in any browser!

---

## ✏️ Customization Notes

- **LinkedIn & GitHub URLs**: In `index.html` and `resume.html`, update the placeholder `https://linkedin.com` and `https://github.com` links with your specific profile URLs (e.g., `https://linkedin.com/in/vamshikumar`).
- **Email**: Direct contact via `vamshikumargurram357@gmail.com`.
- **ATS Resume PDF**: Open `resume.html` in your browser and click **Print / Save as PDF** to generate an updated PDF anytime.
