export const SITE_URL = 'https://amaryacht.design';

export const brand = {
  name: 'A·MAR Yacht Design',
  shortName: 'A·MAR',
  line: 'Interiores · Refit · Layout',
  /** Linha de posicionamento da apresentação oficial. */
  tagline: 'Projetamos espaços a bordo que unem estética, funcionalidade e experiência.',
  /**
   * Frase-âncora da marca: está na bio do Instagram e fecha o post de lançamento.
   * É o fio condutor do site — abre a página e alimenta meta description e JSON-LD.
   */
  ancora: 'Seu barco pode ser o seu lugar favorito.',
  signature: 'Design considerado. Experiências duradouras.',
  founder: 'Jessica Zancanella',
  role: 'Designer de Interiores',
  location: 'Santa Catarina, Brasil',
  region: 'SC',
  country: 'BR',
} as const;

export const contact = {
  /** Formato internacional, só dígitos — usado no link wa.me */
  whatsapp: '5547999334564',
  phoneDisplay: '(47) 99933-4564',
  phoneHref: '+5547999334564',
  instagramHandle: '@amaryachtdesign',
  instagramUrl: 'https://www.instagram.com/amaryachtdesign',
  email: 'jessica@amaryacht.design' as string | null,
} as const;

export const nav = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Interiores', href: '#interiores' },
  { label: 'Refit', href: '#refit' },
  { label: 'Antes e depois', href: '#antes-depois' },
  { label: 'Método', href: '#metodo' },
  // Parcerias fora do ar por ora; devolver esta linha reativa o link.
  // { label: 'Parcerias', href: '#parcerias' },
] as const;

/** As cinco frentes do projeto de interiores náuticos (deck, pág. 3). */
export const servicos = [
  {
    n: '01',
    title: 'Layout e otimização de espaços',
    body: 'Melhor aproveitamento de circulação, armazenamento e áreas de convivência.',
  },
  {
    n: '02',
    title: 'Materiais e revestimentos',
    body: 'Seleção de materiais adequados ao uso náutico, considerando resistência, manutenção, conforto e estética.',
  },
  {
    n: '03',
    title: 'Marcenaria e mobiliário',
    body: 'Desenvolvimento e atualização de elementos sob medida para o ambiente a bordo.',
  },
  {
    n: '04',
    title: 'Iluminação',
    body: 'Estudo da iluminação funcional e de ambientação para diferentes momentos de uso da embarcação.',
  },
  {
    n: '05',
    title: 'Cores, tecidos e acabamentos',
    body: 'Composição de interiores coerentes com o estilo da embarcação e com o perfil do proprietário.',
  },
] as const;

/**
  * Intervenções de refit (deck, pág. 4).
  *
  * A lista original do deck tem dez itens. Por decisão da marca, dois saíram do
  * site para encurtar a seção: "Renovação de estofados internos e externos"
  * (que já é o assunto do comparador antes/depois) e "Reorganização de
  * ambientes". Seguem valendo na apresentação.
  */
export const refitItems = [
  'Troca de revestimentos',
  'Atualização de pisos',
  'Reforma de marcenaria',
  'Modernização da iluminação',
  'Atualização de acabamentos e ferragens',
  'Decoração e ambientação',
  'Revitalização estética de interiores',
  'Acompanhamento da execução',
] as const;

/** Os três princípios de projeto (deck, pág. 5). */
export const principios = [
  {
    title: 'Função',
    body: 'O espaço precisa funcionar bem em movimento e aproveitar cada centímetro disponível.',
  },
  {
    title: 'Conforto',
    body: 'Materiais, iluminação, ergonomia e organização precisam contribuir para uma experiência agradável a bordo.',
  },
  {
    title: 'Identidade',
    body: 'O interior deve refletir o estilo de quem utiliza a embarcação, e não apenas seguir tendências.',
  },
] as const;

/** Formas de viver o barco que abrem o método (deck, pág. 5). */
export const usos = [
  'Receber amigos',
  'Passar finais de semana a bordo',
  'Viajar com a família',
  'Navegar por longos períodos',
  'Relaxar',
] as const;

/** Rede de parceiros (deck, pág. 6). */
export const parceiros = [
  'Marinas',
  'Estaleiros',
  'Brokers e empresas de venda de embarcações',
  'Empresas de manutenção e refit',
  'Marcenarias especializadas',
  'Tapeçarias náuticas',
  'Fornecedores de materiais e equipamentos',
] as const;

/** Opções do formulário de contato. */
export const tiposDeProjeto = [
  'Projeto de interiores',
  'Refit completo',
  'Intervenção pontual',
  'Layout e otimização',
  'Ainda não sei / quero conversar',
] as const;

/**
 * Esteira de marcas do mercado náutico.
 *
 * ATENÇÃO — LISTA PROVISÓRIA, PENDENTE DE CURADORIA.
 * São os estaleiros mais relevantes do mercado brasileiro e os líderes globais,
 * levantados em pesquisa. Não representam clientes nem parceiros da A·MAR: por
 * isso o rótulo da seção descreve o mercado, e não uma relação comercial.
 * Ao definir a lista final, ajustar também o texto de `Marcas.astro` se a seção
 * passar a afirmar parceria de fato.
 *
 * Fontes: Mundo Náutico (marcas mais buscadas no Brasil), Boat International
 * Global Order Book via Perfil Náutico (líderes mundiais).
 */
export const marcasNauticas = [
  'Schaefer Yachts',
  'Azimut Yachts',
  'Intermarine',
  'Ferretti',
  'Real Powerboats',
  'Princess',
  'NX Boats',
  'Sunseeker',
  'Fibrafort',
  'Sanlorenzo',
  'Cimitarra',
  'Beneteau',
  'Focker',
  'Sessa Marine',
  'Ventura Marine',
  'Benetti',
  'Triton',
  'Sea Ray',
] as const;
