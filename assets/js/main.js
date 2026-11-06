/**
 * Main Interactive Application Script
 * Gurram Vamshi Kumar Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initTerminal();
  initProjectFilters();
  initCopyButtons();
  initScrollSpy();
  initNumberCounters();
  initContactForm();
});

/* ==========================================================================
   Toast Notification System
   ========================================================================== */
function showToast(message, icon = 'check') {
  let toast = document.getElementById('toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  const iconSvg = icon === 'check' 
    ? `<svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`
    : `<svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;

  toast.innerHTML = `${iconSvg} <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

/* ==========================================================================
   Interactive AI Terminal Console
   ========================================================================== */
function initTerminal() {
  const terminalBody = document.getElementById('terminal-content');
  const terminalInput = document.getElementById('terminal-input');
  const chipButtons = document.querySelectorAll('[data-term-cmd]');

  if (!terminalBody || !terminalInput) return;

  const commandResponses = {
    help: `
<div class="text-cyan-400 font-semibold mb-1">Available System Commands:</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-1 text-xs">
  <div><span class="text-emerald-400">aarna</span> - Inspect Aarna Multi-Model Avatar Architecture</div>
  <div><span class="text-emerald-400">vision</span> - Inspect Smart Medical Vision Workstation</div>
  <div><span class="text-emerald-400">paper</span> - Read Springer Nature Publication Details</div>
  <div><span class="text-emerald-400">stack</span> - Display Full Production AI / Cloud Stack</div>
  <div><span class="text-emerald-400">contact</span> - Output Direct Contact Channels</div>
  <div><span class="text-emerald-400">clear</span> - Clear Terminal Buffer</div>
</div>`,

    aarna: `
<div class="border-l-2 border-cyan-400 pl-3 py-1 my-1">
  <div class="text-cyan-300 font-bold">⚡ Project: Aarna - AI-Native Conversational Marketplace</div>
  <div class="text-slate-300 text-xs mt-1"><span class="text-slate-400">Role:</span> Lead AI Engineer @ Mondee Tech</div>
  <div class="text-slate-300 text-xs mt-1"><span class="text-slate-400">Core Architecture:</span> Multi-model agent pipeline uniting Google ADK, Gemini 1.5, LiveKit (WebRTC audio), and Simli (real-time video avatar generation).</div>
  <div class="text-slate-300 text-xs mt-1"><span class="text-emerald-400">Benchmark:</span> Achieved <span class="text-white font-bold">1-second First-Token Latency (TTFT)</span> for natural conversational turn-taking.</div>
  <div class="text-slate-300 text-xs mt-1"><span class="text-cyan-400">Multimodal Ingestion:</span> 1-minute seller onboarding extracting structured catalogs from images, videos, PDFs, and Excel.</div>
</div>`,

    vision: `
<div class="border-l-2 border-emerald-400 pl-3 py-1 my-1">
  <div class="text-emerald-300 font-bold">🔬 Project: Smart Vision Workstation (Medical Applications)</div>
  <div class="text-slate-300 text-xs mt-1"><span class="text-slate-400">Role:</span> AI Engineer & Tech Lead @ Techolution</div>
  <div class="text-slate-300 text-xs mt-1"><span class="text-slate-400">Pipeline:</span> Motion-based auto-focus camera + YOLO segmentation + Unified OCR (DocTR + PaddleOCR + Google OCR).</div>
  <div class="text-slate-300 text-xs mt-1"><span class="text-emerald-400">Inference & Accuracy:</span> <span class="text-white font-bold">98.7% Text Accuracy</span> with inference latency reduced by 80% down to <span class="text-white font-bold">1.3 seconds</span>.</div>
  <div class="text-slate-300 text-xs mt-1"><span class="text-indigo-400">Scale:</span> Generalizes across <span class="text-white font-bold">700K+ Medical Product SKUs</span> with automated OTA deployments via ArgoCD.</div>
</div>`,

    paper: `
<div class="border-l-2 border-purple-400 pl-3 py-1 my-1">
  <div class="text-purple-300 font-bold">📄 Publication: Springer Nature (DOI: 10.1007/s44230-023-00029-z)</div>
  <div class="text-slate-300 text-xs mt-1"><span class="text-slate-400">Title:</span> String Kernel-Based Techniques for Native Language Identification</div>
  <div class="text-slate-300 text-xs mt-1"><span class="text-slate-400">Methodology:</span> Novel spectrum, presence, and bit string kernels paired with gradient-boosted trees (XGBoost).</div>
  <div class="text-slate-300 text-xs mt-1"><span class="text-emerald-400">Key Result:</span> <span class="text-white font-bold">99.09% Classification Accuracy</span>, outperforming deep neural networks while slashing training compute by 95%.</div>
</div>`,

    stack: `
<div class="border-l-2 border-amber-400 pl-3 py-1 my-1">
  <div class="text-amber-300 font-bold">🛠️ Production Engineering Stack:</div>
  <div class="text-xs text-slate-300 mt-1"><span class="text-slate-400">Agentic & LLMs:</span> Google ADK, Gemini, LangChain, LangGraph, LiveKit, Simli, RAG, Ollama, Claude, Llama-3</div>
  <div class="text-xs text-slate-300 mt-1"><span class="text-slate-400">Vision & ML:</span> PyTorch, TensorFlow, OpenCV, YOLO Segmentation, PaddleOCR, DocTR, Hugging Face</div>
  <div class="text-xs text-slate-300 mt-1"><span class="text-slate-400">Cloud & MLOps:</span> GCP (Vertex AI, Cloud Run, GKE), AWS (SageMaker, EC2), Docker, Kubernetes, ArgoCD, FastAPI</div>
  <div class="text-xs text-slate-300 mt-1"><span class="text-slate-400">Languages:</span> Python (Advanced), C++, SQL, Bash</div>
</div>`,

    contact: `
<div class="border-l-2 border-cyan-400 pl-3 py-1 my-1">
  <div class="text-cyan-300 font-bold">📬 Connect with Gurram Vamshi Kumar:</div>
  <div class="text-xs text-slate-300 mt-1">📧 Email: <a href="mailto:vamshikumargurram357@gmail.com" class="text-cyan-400 underline">vamshikumargurram357@gmail.com</a></div>
  <div class="text-xs text-slate-300 mt-1">📱 Phone: <span class="text-white font-mono">+91 7702564211</span></div>
  <div class="text-xs text-slate-300 mt-1">📍 Location: Hyderabad, India (Open to Relocation / Remote AI roles)</div>
</div>`
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    // Append user command
    const cmdLine = document.createElement('div');
    cmdLine.className = 'terminal-line';
    cmdLine.innerHTML = `<span class="terminal-prompt">vamshi@ai-core:~$</span> <span class="text-white font-medium">${escapeHTML(rawCmd)}</span>`;
    terminalBody.appendChild(cmdLine);

    if (cmd === 'clear') {
      terminalBody.innerHTML = '';
      return;
    }

    const outputLine = document.createElement('div');
    outputLine.className = 'terminal-output mb-3';

    if (commandResponses[cmd]) {
      outputLine.innerHTML = commandResponses[cmd];
    } else {
      outputLine.innerHTML = `<span class="text-rose-400">Command not recognized: '${escapeHTML(rawCmd)}'.</span> Type <span class="text-cyan-300 underline cursor-pointer" onclick="document.getElementById('terminal-input').value='help';">help</span> to view available operations.`;
    }

    terminalBody.appendChild(outputLine);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(terminalInput.value);
      terminalInput.value = '';
    }
  });

  chipButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-term-cmd');
      if (cmd) {
        terminalInput.value = cmd;
        executeCommand(cmd);
        terminalInput.value = '';
      }
    });
  });
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

/* ==========================================================================
   Project Category Filter
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const categories = (card.getAttribute('data-category') || '').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.35s ease-out';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   Copy to Clipboard Handlers
   ========================================================================== */
function initCopyButtons() {
  // Generic copy data-copy-text buttons
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-copy-label') || 'Copied to clipboard';

      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(label, 'check');
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(label, 'check');
      }
    });
  });

  // BibTeX Copy
  const bibtexBtn = document.getElementById('copy-bibtex-btn');
  if (bibtexBtn) {
    const bibtexSnippet = `@article{kumar2023string,
  title={String Kernel-Based Techniques for Native Language Identification},
  author={Kumar, Gurram Vamshi and contributors},
  journal={Springer Nature},
  doi={10.1007/s44230-023-00029-z},
  year={2023}
}`;
    bibtexBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(bibtexSnippet).then(() => {
        showToast('BibTeX citation copied to clipboard!', 'check');
      });
    });
  }
}

/* ==========================================================================
   Mobile Hamburger Menu
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener('click', () => {
    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

/* ==========================================================================
   Scrollspy Navigation Highlighting
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollY = window.pageYOffset;

    sections.forEach((sec) => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('text-cyan-400', 'font-semibold');
      link.classList.add('text-slate-300');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.remove('text-slate-300');
        link.classList.add('text-cyan-400', 'font-semibold');
      }
    });
  });
}

/* ==========================================================================
   Metric Counter Animation
   ========================================================================== */
function initNumberCounters() {
  const counterElements = document.querySelectorAll('[data-counter-target]');
  if (!counterElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-counter-target'));
        const prefix = el.getAttribute('data-counter-prefix') || '';
        const suffix = el.getAttribute('data-counter-suffix') || '';
        const decimals = parseInt(el.getAttribute('data-counter-decimals') || '0', 10);
        const duration = 1500;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out expo
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const currentVal = target * easeProgress;

          el.textContent = `${prefix}${currentVal.toFixed(decimals)}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
          }
        }

        requestAnimationFrame(updateCounter);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counterElements.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   Contact Form Handler (Mailto fallback)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cf-name')?.value || '';
    const email = document.getElementById('cf-email')?.value || '';
    const subject = document.getElementById('cf-subject')?.value || 'AI Engineering Opportunity';
    const message = document.getElementById('cf-message')?.value || '';

    const mailtoBody = encodeURIComponent(
      `Hi Vamshi,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent via Portfolio Contact Form`
    );
    const mailtoUrl = `mailto:vamshikumargurram357@gmail.com?subject=${encodeURIComponent(subject)}&body=${mailtoBody}`;

    window.location.href = mailtoUrl;
    showToast('Opening default email client...', 'info');
  });
}
