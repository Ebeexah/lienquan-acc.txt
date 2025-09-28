// ==UserScript==
// @name         zSsaiky
// @namespace    http://tampermonkey.net/
// @version      0.36.1
// @description  Ultimate premium
// @author       Neutron Systems
// @match        https://muahack.xyz/*
// @grant        none
// @run-at       document-start
// @icon         https://raw.githubusercontent.com/Ebeexah/lienquan-acc.txt/refs/heads/main/IMG_7573.jpeg
// @updateURL    https://raw.githubusercontent.com/Ebeexah/lienquan-acc.txt/main/key.js
// @downloadURL  https://raw.githubusercontent.com/Ebeexah/lienquan-acc.txt/main/key.js
// ==/UserScript==

(() => {
  'use strict';

  const PATH = {
    START: '/randomkeyios/lienquanv4/getkey.php',
    INTERMEDIATE: '/randomkeyios/lienquanv4/cailonmemayykk1.php',
    SUCCESS: '/randomkeyios/lienquanv4/randomkeyendinfomation.php',
    VERIFY: '/verify.php'
  };
  const OPEN_URL = 'https://muahack.xyz/randomkeyios/lienquanv4/getkey.php';
  const DELAY_SEC = 6;
  const ATTEMPT_INTERVAL_MS = 300;
  const ATTEMPT_DURATION_MS = 15000;
  const LOGO_URL = 'https://raw.githubusercontent.com/Ebeexah/lienquan-acc.txt/refs/heads/main/IMG_7573.jpeg';

  const NEON_GLASS_CSS = `
    :root{
      --bg:#020205;
      --accent:#00bfff;
      --glow:rgba(0,191,255,0.45);
      --muted:#c0c0c0;
      --radius:14px;
    }
    html,body{height:100%;margin:0;padding:0;overflow:hidden;}
    #nt_fullscreen_wrap {
      position: fixed;
      inset: 0;
      background: linear-gradient(180deg, var(--bg) 0%, #050508 80%);
      z-index: 2147483646;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', 'Segoe UI', Roboto, Arial, sans-serif;
      color: var(--muted);
      overflow: hidden;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.5s ease-out;
    }
    #nt_bg_anim {
      position: absolute;
      inset: -10%;
      background: radial-gradient(ellipse at 30% 25%, var(--glow) 0.1, transparent 18%),
                  radial-gradient(ellipse at 70% 80%, var(--glow) 0.08, transparent 24%);
      filter: blur(120px);
      animation: nt_bg_move 35s ease-in-out infinite alternate;
      mix-blend-mode: screen;
      opacity:0.4;
    }
    @keyframes nt_bg_move {
      0% { transform: translate(0,0) scale(1); opacity:0.35; }
      50% { transform: translate(8%,-8%) scale(1.03); opacity:0.5; }
      100% { transform: translate(0,0) scale(1); opacity:0.4; }
    }
    #nt_card {
      width: min(960px, 94%);
      border-radius: var(--radius);
      padding: 36px;
      background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
      border: 1px solid rgba(255,255,255,0.1);
      backdrop-filter: blur(30px) saturate(1.5) brightness(1.1);
      box-shadow: 0 30px 100px rgba(0,0,0,0.95), 0 0 50px rgba(0,191,255,0.15), inset 0 1px 0 rgba(255,255,255,0.05);
      pointer-events: auto;
      display: grid;
      grid-template-columns: 1fr 260px;
      gap: 40px;
      align-items: start;
      transition: transform 0.6s cubic-bezier(.2,.9,.2,1);
      color: #f0f0f0;
      transform: translateY(20px);
      opacity: 0;
      animation: card_entry 0.8s ease-out 0.5s forwards;
    }
    @keyframes card_entry {
        to { transform: translateY(0); opacity: 1; }
    }
    #nt_logo { width:52px; height:52px; border-radius:10px; background-image:url(${LOGO_URL}); background-size:cover; box-shadow:0 0 20px rgba(0,191,255,0.7); flex-shrink:0; }
    #nt_title { color: #ffffff; font-weight: 900; font-size: 26px; letter-spacing: -0.8px; line-height:1.1; }
    #nt_sub { margin-top:4px; color: #a5a5a5; font-size: 14.5px; font-weight:400; }
    #nt_key_box {
      margin-top: 28px;
      padding: 22px 24px;
      border-radius: 12px;
      background: linear-gradient(90deg, rgba(0,191,255,0.1), rgba(0,191,255,0.04));
      color: var(--accent);
      font-weight: 600;
      font-size: 20px;
      cursor: pointer;
      user-select: all;
      box-shadow: 0 0 15px rgba(0,191,255,0.25);
      border: 1px solid rgba(0,191,255,0.3);
      transition: all .25s ease;
    }
    #nt_key_box:hover { background: rgba(0,191,255,0.15); transform: scale(1.005); }
    .key_success_pulse {
      animation: pulse_glow 1.8s infinite alternate;
      border-color: var(--accent) !important;
    }
    @keyframes pulse_glow {
      from { box-shadow: 0 0 15px var(--glow), 0 0 25px var(--glow), 0 0 3px var(--accent); }
      to { box-shadow: 0 0 8px var(--glow), 0 0 15px var(--glow), 0 0 2px var(--accent); }
    }
    .nt_btn {
      padding: 15px 20px;
      border-radius: 10px;
      font-weight: 700;
      font-size: 15.5px;
      transition: transform .15s ease, box-shadow .15s ease, background .15s ease;
    }
    .nt_primary {
      background: var(--accent);
      color: var(--bg) !important;
      box-shadow: 0 12px 36px rgba(0,191,255,0.35);
    }
    .nt_primary:hover { background: #40cfff; transform: translateY(-3px); box-shadow: 0 20px 50px rgba(0,191,255,0.45); }
    .nt_secondary {
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.15);
      color: #e0e0e0;
      box-shadow: none;
    }
    .nt_secondary:hover { background: rgba(255,255,255,0.12); transform: translateY(-1px); }
    #nt_countdown_display {
        font-size: 17px;
        font-weight: 600;
        color: var(--accent);
        margin-top: 10px;
        text-align: center;
        padding: 10px;
        border: 1px solid rgba(0,191,255,0.2);
        border-radius: 10px;
        background: rgba(0,191,255,0.07);
        box-shadow: 0 0 10px rgba(0,191,255,0.15);
        display: none;
    }
    #nt_status { color:var(--accent); font-size:15px; margin-top:18px; font-weight:500; }
    @media (max-width: 860px) {
      #nt_card { grid-template-columns: 1fr; padding:28px; gap:24px; }
      #nt_key_box { font-size: 18px; }
    }
  `;

  function injectCSS(css) {
    const s = document.createElement('style');
    s.textContent = css;
    if (document.head) document.head.appendChild(s);
    else if (document.documentElement) document.documentElement.appendChild(s);
    else console.warn("Cannot inject CSS.");
  }

  function createUI() {
    if (document.getElementById('nt_fullscreen_wrap')) return window.__nt_ui;
    try {
      injectCSS(NEON_GLASS_CSS);
      const wrap = document.createElement('div');
      wrap.id = 'nt_fullscreen_wrap';
      wrap.innerHTML = `
        <div id="nt_bg_anim"></div>
        <div id="nt_card" role="dialog" aria-label="Executive Key Acquisition Panel">
            <div id="nt_left">
                <div id="nt_title_block">
                    <div id="nt_logo" aria-hidden="true"></div>
                    <div>
                        <div id="nt_title">Key Extraction</div>
                        <div id="nt_sub">Automated Secure Protocol Engaged: Navigating and Extracting High-Value Key.</div>
                    </div>
                </div>
                <div id="nt_key_box" title="Click to copy key">— Awaiting Extraction —</div>
                <div id="nt_countdown_display" style="display:none;"></div>
                <div id="nt_status">Initializing Secure Tunnel...</div>
            </div>
            <div id="nt_right">
                <button id="nt_copy" class="nt_btn nt_primary">Copy Key to Clipboard</button>
                <button id="nt_open" class="nt_btn nt_secondary">Launch Game Client</button>
                <div id="nt_disclaimer" style="font-size:12px; color:#888; margin-top:12px; text-align:center;">
                    This module operates strictly on public display data. No credential harvesting occurs.
                </div>
            </div>
        </div>
      `;
      if (document.body) document.body.appendChild(wrap);
      else return null;

      const elements = {
        keyBox: wrap.querySelector('#nt_key_box'),
        copyBtn: wrap.querySelector('#nt_copy'),
        openBtn: wrap.querySelector('#nt_open'),
        statusEl: wrap.querySelector('#nt_status'),
        countdownEl: wrap.querySelector('#nt_countdown_display'),
        wrapEl: wrap
      };

      async function copyToClipboard(text) {
        if (!text || text.includes('Awaiting Extraction')) return setStatus('ERROR: No valid key data');
        try {
          await navigator.clipboard.writeText(text);
          setStatus('✓ Key Copied. Clipboard Confirmed.');
        } catch (e) {
          setStatus('✘ Copy Failed.');
          console.error('Copy error:', e);
        }
      }
      function setStatus(txt) {
        if (elements.statusEl) elements.statusEl.textContent = txt;
      }

      elements.keyBox.addEventListener('click', () => copyToClipboard(elements.keyBox.textContent.trim()));
      elements.copyBtn.addEventListener('click', () => copyToClipboard(elements.keyBox.textContent.trim()));
      elements.openBtn.addEventListener('click', () => window.open(OPEN_URL, '_blank'));

      const instance = {
        setKey(k) {
          elements.keyBox.textContent = k || '— Awaiting Extraction —';
          if (k) {
            elements.keyBox.classList.add('key_success_pulse');
            elements.countdownEl.style.display = 'none';
          }
        },
        setStatus,
        setCountdown(seconds) {
          elements.countdownEl.textContent = `Auto-Continue Protocol in: ${seconds} seconds...`;
          elements.countdownEl.style.display = 'block';
          elements.keyBox.textContent = '— Continue Protocol Engaged —';
        },
        show() {
          elements.wrapEl.style.opacity = '1';
        },
        hide() {
          elements.wrapEl.style.display = 'none';
        }
      };
      window.__nt_ui = instance;
      return instance;

    } catch (e) {
      console.error("Critical UI ERROR:", e);
      return null;
    }
  }

  async function clickContinueButton(ui) {
    ui.setStatus(`Verification Protocol Engaged. Searching for button...`);
    const deadline = Date.now() + ATTEMPT_DURATION_MS;
    let countdownTimer = null;
    try {
      while (Date.now() < deadline) {
        const buttons = Array.from(document.querySelectorAll('button[type="submit"], button'));
        const found = buttons.find(b => {
          const t = (b.innerText || '').replace(/\s+/g, ' ').trim().toLowerCase();
          return t === 'tiếp tục' || t === 'tiep tuc' || t.includes('tiếp tục') || t.includes('continue');
        });
        if (found) {
          ui.setStatus('Button located. Starting countdown.');
          let remaining = DELAY_SEC;
          ui.setCountdown(remaining);
          countdownTimer = setInterval(() => {
            remaining--;
            if (remaining >= 0) ui.setCountdown(remaining);
          }, 1000);

          await new Promise(res => setTimeout(res, DELAY_SEC * 1000));
          clearInterval(countdownTimer);
          ui.setCountdown(0);
          ui.setStatus('Executing button press...');
          try {
            found.click();
            ui.setStatus('Clicked Continue. Waiting redirect.');
          } catch (e) {
            found.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
            ui.setStatus('Click dispatch fallback. Waiting redirect.');
          }
          return;
        }
        await new Promise(r => setTimeout(r, ATTEMPT_INTERVAL_MS));
      }
      ui.setStatus('FAIL: Continue button not found.');
    } catch (e) {
      if (countdownTimer) clearInterval(countdownTimer);
      ui.setStatus('CRITICAL: click flow interrupted.');
    }
  }

  function extractKey(ui) {
    ui.setStatus('Final step: extracting key...');
    let keyEl = document.querySelector('#keyText');
    if (!keyEl) {
      keyEl = Array.from(document.querySelectorAll('div, span, p, code'))
        .find(el => (el.textContent || '').trim().match(/[A-Z0-9\-]{8,}/) && (el.offsetWidth > 0 || el.offsetHeight > 0));
    }
    const key = keyEl ? keyEl.textContent.trim() : '';
    if (key) {
      ui.setKey(key);
      ui.setStatus('✓ Key extracted.');
    } else {
      ui.setStatus('✘ Key not found.');
    }
  }

  function runModule() {
    const ui = createUI();
    if (!ui) {
      console.error("Module halted: UI init failed.");
      return;
    }
    const currentPath = location.pathname;
    const executeFlow = () => {
      ui.show();
      if (currentPath === PATH.START) {
        ui.setStatus('Initializing navigation...');
        setTimeout(() => { location.href = PATH.INTERMEDIATE; }, 300);
        return;
      }
      if (currentPath === PATH.INTERMEDIATE) {
        ui.setStatus('Intermediate redirect point.');
        return;
      }
      if (currentPath === PATH.VERIFY) {
        clickContinueButton(ui);
        return;
      }
      if (currentPath === PATH.SUCCESS || location.href.includes(PATH.SUCCESS)) {
        setTimeout(() => extractKey(ui), 500);
        return;
      }
      ui.setStatus('Active script. Waiting on non-target path.');
    };
    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', executeFlow);
    } else {
      executeFlow();
    }
  }

  try {
    const wrap = document.getElementById('nt_fullscreen_wrap');
    if (wrap) wrap.style.display = 'none';
    runModule();
  } catch (e) {
    console.error('Fatal error:', e);
  }

})();
