// Library behaviour: a shot plays while the pointer is on it (or, on touch screens,
// while it is in view) and opens larger on click.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const canHover = window.matchMedia('(hover: hover) and (pointer: fine)');

function play(v: HTMLVideoElement) {
  if (v.preload !== 'auto') v.preload = 'auto';
  v.play().catch(() => {});
}

function stop(v: HTMLVideoElement) {
  v.pause();
  v.currentTime = 0;
}

function setupPlayback() {
  const tiles = document.querySelectorAll<HTMLElement>('.tile-media');
  if (reduceMotion.matches) return;

  if (canHover.matches) {
    tiles.forEach((tile) => {
      const v = tile.querySelector('video')!;
      tile.addEventListener('pointerenter', () => play(v));
      tile.addEventListener('pointerleave', () => stop(v));
      tile.addEventListener('focus', () => play(v));
      tile.addEventListener('blur', () => stop(v));
    });
    return;
  }

  // Touch screens have no hover: play what is on screen.
  const io = new IntersectionObserver(
    (entries) => {
      for (const { target, isIntersecting } of entries) {
        const v = target as HTMLVideoElement;
        if (isIntersecting) play(v);
        else v.pause();
      }
    },
    { threshold: 0.6 },
  );
  tiles.forEach((tile) => io.observe(tile.querySelector('video')!));
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
      caption.textContent = btn.closest('figure')?.querySelector('.tile-title')?.textContent ?? '';
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

setupPlayback();
setupDialog();
