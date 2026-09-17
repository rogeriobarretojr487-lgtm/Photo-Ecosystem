// Dados mockados do Photo Ecosystem.
// Sprint 2 é só front-end: nada de banco, tudo sai daqui.

const LOCAIS = [
  { id: 'paulista', nome: 'Paulista', foto: '../assets/img/locais/paulista.jpg' },
  { id: 'liberdade', nome: 'Liberdade', foto: '../assets/img/locais/liberdade.jpg' },
  { id: 'ibirapuera', nome: 'Ibirapuera', foto: '../assets/img/locais/ibirapuera.jpg' },
  { id: 'centro', nome: 'Centro', foto: '../assets/img/locais/centro.jpg' },
  { id: 'pinheiros', nome: 'Pinheiros', foto: '../assets/img/locais/pinheiros.jpg' },
  { id: 'farol', nome: 'Farol', foto: '../assets/img/locais/farol.jpg' },
];

const POSTS = [
  {
    id: 1,
    autor: 'Renato Martins',
    avatar: '../assets/img/avatares/12.jpg',
    local: 'liberdade',
    localNome: 'Liberdade, São Paulo',
    tempo: '10 min',
    foto: '../assets/img/posts/liberdade.jpg',
    distancia: '1.2 km',
    temperatura: '18°C',
    horario: 'Hoje 17:32',
    curtidas: 152,
    comentarios: 23,
    compartilhamentos: 8,
  },
  {
    id: 2,
    autor: 'Juliana Costa',
    avatar: '../assets/img/avatares/45.jpg',
    local: 'ibirapuera',
    localNome: 'Ibirapuera, São Paulo',
    tempo: '2 h',
    foto: '../assets/img/posts/ibirapuera.jpg',
    distancia: '4.7 km',
    temperatura: '21°C',
    horario: 'Hoje 15:10',
    curtidas: 318,
    comentarios: 41,
    compartilhamentos: 16,
  },
  {
    id: 3,
    autor: 'Lucas Ferreira',
    avatar: '../assets/img/avatares/33.jpg',
    local: 'paulista',
    localNome: 'Paulista, São Paulo',
    tempo: '5 h',
    foto: '../assets/img/posts/paulista.jpg',
    distancia: '800 m',
    temperatura: '19°C',
    horario: 'Hoje 12:04',
    curtidas: 94,
    comentarios: 7,
    compartilhamentos: 3,
  },
  {
    id: 4,
    autor: 'Amanda Ribeiro',
    avatar: '../assets/img/avatares/26.jpg',
    local: 'centro',
    localNome: 'Centro Histórico, São Paulo',
    tempo: '8 h',
    foto: '../assets/img/posts/centro.jpg',
    distancia: '2.1 km',
    temperatura: '20°C',
    horario: 'Hoje 09:47',
    curtidas: 205,
    comentarios: 30,
    compartilhamentos: 11,
  },
];

const STORIES = [
  { id: 1, autor: 'Paulista, São Paulo', avatar: '../assets/img/avatares/12.jpg', foto: '../assets/img/stories/paulista.jpg', tempo: '2 h', total: 72 },
  { id: 2, autor: 'Liberdade, São Paulo', avatar: '../assets/img/avatares/45.jpg', foto: '../assets/img/stories/liberdade.jpg', tempo: '3 h', total: 48 },
  { id: 3, autor: 'Ibirapuera, São Paulo', avatar: '../assets/img/avatares/33.jpg', foto: '../assets/img/stories/ibirapuera.jpg', tempo: '5 h', total: 91 },
];

const USUARIOS_SUGERIDOS = [
  { usuario: '@brunofotos', nome: 'Bruno Alves', avatar: '../assets/img/avatares/52.jpg' },
  { usuario: '@viagens.do.lucas', nome: 'Lucas Dias', avatar: '../assets/img/avatares/15.jpg' },
  { usuario: '@amanda.capturas', nome: 'Amanda Ribeiro', avatar: '../assets/img/avatares/26.jpg' },
];

const SUGESTOES_BUSCA = [
  'Ibirapuera, São Paulo',
  'Praia de Copacabana, RJ',
  'Centro Histórico, SP',
  'Pôr do sol',
  'Comida',
  'Arquitetura',
];

const GALERIA = {
  local: 'Liberdade, São Paulo',
  capa: '../assets/img/locais/liberdade.jpg',
  distancia: '1.2 km',
  fotosHoje: 243,
  categorias: ['Recentes', 'Populares', 'Pôr do sol', 'Arquitetura'],
  fotos: [
    { id: 1, foto: '../assets/img/galeria/1.jpg', categoria: 'Recentes', curtidas: 125 },
    { id: 2, foto: '../assets/img/galeria/2.jpg', categoria: 'Arquitetura', curtidas: 34 },
    { id: 3, foto: '../assets/img/galeria/3.jpg', categoria: 'Populares', curtidas: 413 },
    { id: 4, foto: '../assets/img/galeria/4.jpg', categoria: 'Arquitetura', curtidas: 83 },
    { id: 5, foto: '../assets/img/galeria/5.jpg', categoria: 'Pôr do sol', curtidas: 271 },
    { id: 6, foto: '../assets/img/galeria/6.jpg', categoria: 'Recentes', curtidas: 52 },
    { id: 7, foto: '../assets/img/galeria/7.jpg', categoria: 'Pôr do sol', curtidas: 194 },
    { id: 8, foto: '../assets/img/galeria/8.jpg', categoria: 'Populares', curtidas: 388 },
  ],
};

// Posição dos pins em % da área do mapa (esquerda, topo).
const PINS_MAPA = [
  { id: 1, tipo: 'cluster', total: 37, x: 45, y: 48 },
  { id: 2, tipo: 'cluster', total: 12, x: 70, y: 32 },
  { id: 3, tipo: 'cluster', total: 8, x: 30, y: 62 },
  { id: 4, tipo: 'usuario', nome: 'Renato Martins', avatar: '../assets/img/avatares/12.jpg', x: 22, y: 34 },
  { id: 5, tipo: 'usuario', nome: 'Juliana Costa', avatar: '../assets/img/avatares/45.jpg', x: 68, y: 68 },
];

const PERFIL = {
  nome: 'Lucas Ferreira',
  usuario: '@lucasferr',
  cidade: 'São Paulo, SP',
  avatar: '../assets/img/avatares/33.jpg',
  posts: 52,
  seguindo: 250,
  seguidores: '4.5k',
};
