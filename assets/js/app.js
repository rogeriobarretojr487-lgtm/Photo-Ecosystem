// Navegação inferior compartilhada por todas as telas.
// Cada página só precisa ter <nav id="bottom-nav"></nav>.

const NAV = [
  { href: 'feed.html', label: 'Home', icone: 'M3 10.5 12 3l9 7.5V21H3z' },
  { href: 'busca.html', label: 'Explorar', icone: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3.5 5.5-2 5-5 2 2-5 5-2Z' },
  { href: 'mapa.html', label: 'Mapa', icone: 'M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z' },
  { href: 'perfil.html', label: 'Perfil', icone: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4 0-7 2-7 4.5V21h14v-2.5c0-2.5-3-4.5-7-4.5Z' },
];

const nav = document.getElementById('bottom-nav');
if (nav) {
  const atual = location.pathname.split('/').pop();
  const item = (i) => `
    <a href="${i.href}" class="flex flex-col items-center gap-1 ${i.href === atual ? 'text-jovi' : 'text-slate-400'}">
      <svg viewBox="0 0 24 24" class="w-6 h-6" fill="currentColor"><path d="${i.icone}"/></svg>
      <span class="text-xs">${i.label}</span>
    </a>`;

  nav.innerHTML = `
    <div class="max-w-2xl mx-auto flex items-center justify-around py-2">
      ${NAV.slice(0, 2).map(item).join('')}
      <button id="fab" aria-label="Nova publicação" class="bg-jovi text-white w-12 h-12 rounded-full text-2xl leading-none -mt-6 shadow-lg">+</button>
      ${NAV.slice(2).map(item).join('')}
    </div>
    <div id="sheet" class="hidden border-t bg-white">
      <div class="max-w-2xl mx-auto flex justify-around py-3 text-sm">
        <a href="stories.html" class="text-slate-600">Publicar story</a>
        <a href="galeria.html" class="text-slate-600">Publicar foto</a>
      </div>
    </div>`;

  document.getElementById('fab').addEventListener('click', () => {
    document.getElementById('sheet').classList.toggle('hidden');
  });
}
