const NAV = [
  { href: 'feed.html', label: 'Home' },
  { href: 'busca.html', label: 'Explorar' },
  { href: 'galeria.html', label: 'Galeria' },
  { href: 'mapa.html', label: 'Mapa' },
  { href: 'perfil.html', label: 'Perfil' },
];

const nav = document.getElementById('bottom-nav');
if (nav) {
  const atual = location.pathname.split('/').pop();
  nav.innerHTML = `<ul class="flex justify-around max-w-2xl mx-auto py-3 text-sm">${NAV.map(
    (i) => `<li><a href="${i.href}" class="${i.href === atual ? 'text-jovi font-semibold' : 'text-slate-400'}">${i.label}</a></li>`
  ).join('')}</ul>`;
}
