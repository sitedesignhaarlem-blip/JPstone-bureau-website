// Library behaviour: play shots while visible, filter by category, open a shot larger.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function setupAutoplay() {
  const videos = document.querySelectorAll<HTMLVideoElement>('video[data-autoplay]');
  if (reduceMotion.matches || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(
    (entries) => {
      for (const { target, isIntersecting } of entries) {
        const v = target as HTMLVideoElement;
        if (isIntersecting) v.play().catch(() => {});
        else v.pause();
      }
    },
    { threshold: 0.5 },
  );
  videos.forEach((v) => io.observe(v));
}

function setupFilter() {
  const buttons = document.querySelectorAll<HTMLButtonElement>('[data-filter]');
  const tiles = document.querySelectorAll<HTMLElement>('#library-grid .tile');
  const count = document.querySelector<HTMLElement>('[data-count]');
  buttons.forEach((btn) =>
    btn.addEventListener('click', () => {
      const f = btn.dataset.filter;
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      let shown = 0;
      tiles.forEach((t) => {
        const match = f === 'all' || t.dataset.category === f;
        t.hidden = !match;
        if (match) shown++;
      });
      if (count) count.textContent = `${shown} shots`;
    }),
  );
}

function setupDialog() {
  const dialog = document.querySelector<HTMLDialogElement>('#shot-dialog');
  if (!dialog) return;
  const video = dialog.querySelector('video')!;
  const caption = dialog.querySelector<HTMLElement>('[data-caption]')!;
  let opener: HTMLElement | null = null;

  document.querySelectorAll<HTMLButtonElement>('[data-open]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const file = btn.dataset.open!;
      opener = btn;
      video.innerHTML = `<source src="/media/${file}.webm" type="video/webm"><source src="/media/${file}.mp4" type="video/mp4">`;
      video.poster = `/media/${file}.jpg`;
      video.load();
      const fig = btn.closest('figure');
      caption.textContent = fig?.querySelector('.tile-title')?.textContent ?? '';
      dialog.showModal();
      video.play().catch(() => {});
    }),
  );
  dialog.addEventListener('close', () => {
    video.pause();
    opener?.focus();
  });
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
}

setupAutoplay();
setupFilter();
setupDialog();
