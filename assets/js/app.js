// Ícones em SVG usados por todas as telas, no lugar de emojis.
const ICONES = {
  home: '<path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  explorar: '<circle cx="12" cy="12" r="9"/><path d="M16 8l-2.4 5.6L8 16l2.4-5.6z"/>',
  mapa: '<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  perfil: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-3.9 3.6-6 8-6s8 2.1 8 6"/>',
  coracao: '<path d="M12 20.7 4.7 13.4a4.6 4.6 0 0 1 6.5-6.5l.8.8.8-.8a4.6 4.6 0 0 1 6.5 6.5z"/>',
  comentario: '<path d="M21 12a8 8 0 0 1-11.4 7.2L4 21l1.8-5.1A8 8 0 1 1 21 12z"/>',
  compartilhar: '<path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7"/><path d="M12 16V4"/><path d="M8 8l4-4 4 4"/>',
  local: '<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  distancia: '<circle cx="6" cy="17" r="2"/><circle cx="18" cy="7" r="2"/><path d="M8.5 17H14a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h4"/>',
  temperatura: '<path d="M14 14.8V5a2 2 0 1 0-4 0v9.8a4 4 0 1 0 4 0z"/>',
  relogio: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  busca: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.6-3.6"/>',
  esquerda: '<path d="M15 6l-6 6 6 6"/>',
  direita: '<path d="M9 6l6 6-6 6"/>',
  fechar: '<path d="M6 6l12 12"/><path d="M18 6 6 18"/>',
  mais: '<path d="M12 5v14"/><path d="M5 12h14"/>',
  camera: '<path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.2"/>',
  galeria: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10" r="1.5"/><path d="m5 17 4.5-4.5L13 16l2.5-2.5L20 18"/>',
  ajustes: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 7.5 19.4l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 3.6 14H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 7.5l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 10 3.6V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.5 1.5l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 1.1 2.7H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/>',
};

// preenchido: usa o próprio traço como preenchimento (coração curtido, por exemplo).
function icone(nome, classe = 'w-5 h-5', preenchido = false) {
  return `<svg viewBox="0 0 24 24" class="${classe}" fill="${preenchido ? 'currentColor' : 'none'}"
    stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONES[nome]}</svg>`;
}

// Em janelas largas o espaço ao lado do aparelho vira apresentação da solução.
// Fica fora do <body>, que no desktop é a moldura do celular.
if (matchMedia('(min-width: 1100px)').matches) {
  const vitrine = document.createElement('aside');
  vitrine.id = 'vitrine';
  vitrine.innerHTML = `
    <span class="logo">JOVI</span>
    <h2>Photo ecosystem</h2>
    <p>Um novo jeito de enxergar sua galeria. Suas fotos conectam histórias, lugares e pessoas.</p>
    <p class="dica">Navegue pelo aparelho ao lado</p>`;
  document.documentElement.appendChild(vitrine);
}

// Navegação inferior compartilhada: cada página só precisa ter <nav id="bottom-nav"></nav>.
const NAV = [
  { href: 'feed.html', label: 'Home', icone: 'home' },
  { href: 'busca.html', label: 'Explorar', icone: 'explorar' },
  { href: 'mapa.html', label: 'Mapa', icone: 'mapa' },
  { href: 'perfil.html', label: 'Perfil', icone: 'perfil' },
];

const nav = document.getElementById('bottom-nav');
if (nav) {
  const atual = location.pathname.split('/').pop();
  const item = (i) => `
    <a href="${i.href}" class="flex flex-col items-center gap-1 w-16 ${i.href === atual ? 'text-jovi' : 'text-slate-400'}">
      ${icone(i.icone, 'w-6 h-6')}
      <span class="text-[11px]">${i.label}</span>
    </a>`;

  nav.innerHTML = `
    <div class="max-w-2xl mx-auto flex items-center justify-around py-2">
      ${NAV.slice(0, 2).map(item).join('')}
      <button id="fab" aria-label="Nova publicação" class="bg-jovi text-white w-12 h-12 rounded-full flex items-center justify-center -mt-6 shadow-lg shadow-blue-500/30">
        ${icone('mais', 'w-6 h-6')}
      </button>
      ${NAV.slice(2).map(item).join('')}
    </div>
    <div id="sheet" class="hidden border-t bg-white">
      <div class="max-w-2xl mx-auto flex justify-around py-3 text-sm">
        <a href="stories.html" class="flex items-center gap-2 text-slate-600">${icone('camera')} Publicar story</a>
        <a href="galeria.html" class="flex items-center gap-2 text-slate-600">${icone('galeria')} Publicar foto</a>
      </div>
    </div>`;

  document.getElementById('fab').addEventListener('click', () => {
    document.getElementById('sheet').classList.toggle('hidden');
  });
}
