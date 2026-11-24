{
  const go = document.getElementById('go'), msg = document.getElementById('msg'), grid = document.getElementById('grid'), more = document.getElementById('more');
  let files = [];
  const say = (t) => { msg.textContent = t; };
  const label = (t, pct) => { go.textContent = t; go.style.setProperty('--p', (pct || 0) + '%'); };

  async function load() {
    const list = await (await fetch('list.json', { cache: 'no-store' })).json();
    for (const it of list) { const im = new Image(); im.src = it.thumb; im.alt = ''; im.loading = 'lazy'; grid.appendChild(im); }
    const total = list.reduce((a, b) => a + b.bytes, 0);
    let got = 0, done = 0;
    label('Loading 0 of ' + list.length, 0);
    const out = new Array(list.length);
    let next = 0;
    const worker = async () => {
      while (next < list.length) {
        const i = next++;
        for (let tries = 0; ; tries++) {
          try {
            const r = await fetch(list[i].full);
            if (!r.ok) throw new Error('HTTP ' + r.status);
            const b = await r.blob();
            out[i] = new File([b], list[i].name, { type: 'image/jpeg' });
            break;
          } catch (e) { if (tries >= 2) throw e; await new Promise((s) => setTimeout(s, 800 * (tries + 1))); }
        }
        got += list[i].bytes; done++;
        label('Loading ' + done + ' of ' + list.length, Math.floor(got * 100 / total));
      }
    };
    await Promise.all([worker(), worker(), worker(), worker()]);
    files = out;
    if (!navigator.canShare || !navigator.canShare({ files: files.slice(0, 1) })) {
      label('Open this page in Safari', 0);
      say('This browser can’t send photos to Photos. Copy the link and open it in Safari.');
      return;
    }
    label('Save all ' + files.length + ' to Photos', 0);
    go.disabled = false;
  }

  async function share(set, btn) {
    try {
      await navigator.share({ files: set });
      say('Done. Check your Photos.');
      return true;
    } catch (e) {
      if (e && e.name === 'AbortError') { say('Cancelled. Tap again when ready.'); return true; }
      return false;
    }
  }

  function batches() {
    // fallback if the phone refuses all 20 at once: 4 buttons of 5
    more.innerHTML = ''; more.style.display = 'grid';
    for (let i = 0; i < files.length; i += 5) {
      const b = document.createElement('button'); b.type = 'button';
      const set = files.slice(i, i + 5);
      b.textContent = (i + 1) + '–' + (i + set.length);
      b.addEventListener('click', async () => { if (await share(set, b)) b.textContent = '✓ ' + (i + 1) + '–' + (i + set.length); });
      more.appendChild(b);
    }
    say('Your phone wouldn’t take all 20 at once. Tap each group of 5.');
  }

  go.addEventListener('click', async () => {
    if (!files.length) return;
    say('Choose “Save ' + files.length + ' Images”.');
    const ok = navigator.canShare({ files }) && await share(files, go);
    if (!ok) batches();
  });

  load().catch(() => { label('Couldn’t load. Reload the page', 0); });
}
