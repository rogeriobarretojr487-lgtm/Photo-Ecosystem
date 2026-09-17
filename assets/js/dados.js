// Dados mockados do Photo Ecosystem.
// Sprint 2 é só front-end: nada de banco, tudo sai daqui.

const LOCAIS = [
  { id: 'paulista', nome: 'Paulista', foto: 'https://picsum.photos/seed/paulista/200/200' },
  { id: 'liberdade', nome: 'Liberdade', foto: 'https://picsum.photos/seed/liberdade/200/200' },
  { id: 'ibirapuera', nome: 'Ibirapuera', foto: 'https://picsum.photos/seed/ibirapuera/200/200' },
  { id: 'centro', nome: 'Centro', foto: 'https://picsum.photos/seed/centro/200/200' },
  { id: 'pinheiros', nome: 'Pinheiros', foto: 'https://picsum.photos/seed/pinheiros/200/200' },
  { id: 'farol', nome: 'Farol', foto: 'https://picsum.photos/seed/farol/200/200' },
];

const POSTS = [
  {
    id: 1,
    autor: 'Renato Martins',
    avatar: 'https://i.pravatar.cc/100?img=12',
    local: 'liberdade',
    localNome: 'Liberdade, São Paulo',
    tempo: '10 min',
    foto: 'https://picsum.photos/seed/post-liberdade/800/560',
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
    avatar: 'https://i.pravatar.cc/100?img=45',
    local: 'ibirapuera',
    localNome: 'Ibirapuera, São Paulo',
    tempo: '2 h',
    foto: 'https://picsum.photos/seed/post-ibirapuera/800/560',
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
    avatar: 'https://i.pravatar.cc/100?img=33',
    local: 'paulista',
    localNome: 'Paulista, São Paulo',
    tempo: '5 h',
    foto: 'https://picsum.photos/seed/post-paulista/800/560',
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
    avatar: 'https://i.pravatar.cc/100?img=26',
    local: 'centro',
    localNome: 'Centro Histórico, São Paulo',
    tempo: '8 h',
    foto: 'https://picsum.photos/seed/post-centro/800/560',
    distancia: '2.1 km',
    temperatura: '20°C',
    horario: 'Hoje 09:47',
    curtidas: 205,
    comentarios: 30,
    compartilhamentos: 11,
  },
];

const STORIES = [
  { id: 1, autor: 'Paulista, São Paulo', avatar: 'https://i.pravatar.cc/100?img=12', foto: 'https://picsum.photos/seed/story-paulista/600/1000', tempo: '2 h', total: 72 },
  { id: 2, autor: 'Liberdade, São Paulo', avatar: 'https://i.pravatar.cc/100?img=45', foto: 'https://picsum.photos/seed/story-liberdade/600/1000', tempo: '3 h', total: 48 },
  { id: 3, autor: 'Ibirapuera, São Paulo', avatar: 'https://i.pravatar.cc/100?img=33', foto: 'https://picsum.photos/seed/story-ibirapuera/600/1000', tempo: '5 h', total: 91 },
];

const USUARIOS_SUGERIDOS = [
  { usuario: '@brunofotos', nome: 'Bruno Alves', avatar: 'https://i.pravatar.cc/100?img=52' },
  { usuario: '@viagens.do.lucas', nome: 'Lucas Dias', avatar: 'https://i.pravatar.cc/100?img=15' },
  { usuario: '@amanda.capturas', nome: 'Amanda Ribeiro', avatar: 'https://i.pravatar.cc/100?img=26' },
];

const SUGESTOES_BUSCA = [
  'Ibirapuera, São Paulo',
  'Praia de Copacabana, RJ',
  'Centro Histórico, SP',
  'Pôr do sol',
  'Comida',
  'Arquitetura',
];

const PERFIL = {
  nome: 'Lucas Ferreira',
  usuario: '@lucasferr',
  cidade: 'São Paulo, SP',
  avatar: 'https://i.pravatar.cc/100?img=33',
  posts: 52,
  seguindo: 250,
  seguidores: '4.5k',
};
