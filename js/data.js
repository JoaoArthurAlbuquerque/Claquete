/* CLAQUETE — data.js
   Catálogo mockado. Filmes: ids 1–12. Séries: ids 101–112.
   Para usar imagem real, preencha "poster" e/ou "backdrop" com um caminho
   relativo (ex.: "img/posters/1.jpg"). Vazio = gera pôster SVG automático. */

const CATALOGO = [
  /* ================= FILMES ================= */
  {
    id: 1,
    tipo: "filme",
    titulo: "Homem-Aranha: Um Novo Dia",
    ano: 2026,
    duracao: "145 min",
    genero: "Ação / Ficção Científica / Aventura",
    diretor: "Destin Daniel Cretton",
    elenco: [
      "Tom Holland",
      "Zendaya",
      "Sadie Sink",
      "Jacob Batalon",
      "Jon Bernthal",
      "Mark Ruffalo"
    ],
    sinopse: "Após o feitiço que apagou a sua identidade da memória do mundo, Peter Parker dedica-se inteiramente a combater o crime em Nova Iorque como o Homem-Aranha. No entanto, enquanto lida com a dor de ver os seus antigos amigos a seguir em frente e enfrenta uma nova e perigosa ameaça, as suas próprias capacidades começam a sofrer mutações inesperadas.",
    poster: "https://image.tmdb.org/t/p/original/x0nvYzQpyJc5pdT9lMnkMuYAg0O.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/r08LxMJCbf1SiJIWeyH9aJmdqwC.jpg"
  },
  {
    id: 2,
    tipo: "filme",
    titulo: "Meninas Malvadas",
    ano: 2004,
    duracao: "97 min",
    genero: "Comédia",
    diretor: "Mark Waters",
    elenco: [
      "Lindsay Lohan",
      "Rachel McAdams",
      "Amanda Seyfried",
      "Lacey Chabert",
      "Tina Fey"
    ],
    sinopse: "Cady Heron é uma jovem educada em casa pelos seus pais cientistas na África. Ao entrar na escola pública pela primeira vez nos Estados Unidos, envolve-se na intrincada dinâmica social do colégio e infiltra-se no grupo das garotas mais populares, as Poderosas.",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/iV7YxvjdmRZo0amjGA2BZW5kkAu.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/zuv21AZA7z7XidnCYAOxc6rNQwX.jpg"
  },
  {
    id: 3,
    tipo: "filme",
    titulo: "Jogos Vorazes",
    ano: 2012,
    duracao: "142 min",
    genero: "Ação / Ficção Científica",
    diretor: "Gary Ross",
    elenco: [
      "Jennifer Lawrence",
      "Josh Hutcherson",
      "Liam Hemsworth",
      "Woody Harrelson"
    ],
    sinopse: "Na região outrora conhecida como América do Norte, a Capital de Panem força cada um dos seus doze distritos a enviar um rapaz e uma rapariga para competir nos Jogos Vorazes, um evento anual transmitido ao vivo pela televisão onde os tributos devem lutar até à morte.",
    poster: "https://image.tmdb.org/t/p/original/kjpsw6us0xAUsckYYgN54CtGyFO.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/nGWc1gLtC3Kw7dXcZgwZN0lBCcX.jpg"
  },
  {
  id: 4,
  tipo: "filme",
  titulo: "Interestelar",
  ano: 2014,
  duracao: "169 min",
  genero: "Ficção Científica",
  diretor: "Christopher Nolan",
  elenco: [
    "Matthew McConaughey",
    "Anne Hathaway",
    "Jessica Chastain"
  ],
  sinopse: "Uma equipa de exploradores viaja através de um buraco de minhoca no espaço...",
  poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/5C3RriLKkIAQtQMx85JLtu4rVI2.jpg"
},
  {
    id: 5,
    tipo: "filme",
    titulo: "Maze Runner: Correr ou Morrer",
    ano: 2014,
    duracao: "113 min",
    genero: "Ação / Ficção Científica / Mistério",
    diretor: "Wes Ball",
    elenco: [
      "Dylan O'Brien",
      "Kaya Scodelario",
      "Thomas Brodie-Sangster",
      "Will Poulter",
      "Ki Hong Lee"
    ],
    sinopse: "Num futuro pós-apocalíptico, um jovem chamado Thomas acorda sem memórias numa comunidade de rapazes cercada por um labirinto gigantesco em constante mutação. Juntos, precisam de desvendar os segredos do labirinto para encontrar uma saída.",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/wULA52wA823fPriHgyaSVqEbHQQ.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/8tEos5D0sJgfwFbZbwuiwniwvS.jpg"
  },
  {
    id: 6,
    tipo: "filme",
    titulo: "Matilda",
    ano: 1996,
    duracao: "102 min",
    genero: "Comédia / Família / Fantasia",
    diretor: "Danny DeVito",
    elenco: [
      "Mara Wilson",
      "Danny DeVito",
      "Rhea Perlman",
      "Embeth Davidtz",
      "Pam Ferris"
    ],
    sinopse: "Matilda é uma menina extraordinariamente inteligente e dotada de poderes telecinéticos, mas negligenciada pelos pais. Ao entrar na escola, encontra apoio na amável professora Honey enquanto enfrenta a tirânica diretora Trunchbull.",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/anKGylXCQ8NUv41TusuxIxbA06i.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/azLC34TYTBssbTTnIDXES4QRj6m.jpg"
  },
  {
    id: 7,
    tipo: "filme",
    titulo: "O Fabuloso Destino de Amélie Poulain",
    ano: 2001,
    duracao: "122 min",
    genero: "Comédia / Romance",
    diretor: "Jean-Pierre Jeunet",
    elenco: [
      "Audrey Tautou",
      "Mathieu Kassovitz",
      "Rufus",
      "Lorella Cravotta",
      "Jamel Debbouze"
    ],
    sinopse: "Amélie é uma jovem ingénua e sonhadora do interior que se muda para Paris e trabalha num café em Montmartre. Após encontrar uma pequena caixa de recordações escondida no seu apartamento, decide embarcar numa missão para ajudar discretamente as pessoas ao seu redor a encontrarem a felicidade.",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/oAYKYALxamhAB1wKUGmOo05Vf92.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/2WyjkKudTkDgtZo9CIN8NoPGHRB.jpg"
  },
 {
    id: 8,
    tipo: "filme",
    titulo: "Carrie, a Estranha",
    ano: 2026,
    duracao: "115 min",
    genero: "Terror / Drama / Sobrenatural",
    diretor: "Mike Flanagan",
    elenco: [
      "Summer H. Howell",
      "Samantha Sloyan",
      "Alison Thornton",
      "Amber Midthunder",
      "Matthew Lillard",
      "Siena Agudong"
    ],
    sinopse: "Após a morte do pai, a jovem Carrie White ingressa pela primeira vez num colégio público, onde se torna alvo de um implacável escândalo de cyberbullying. Ao mesmo tempo, descobre e passa a manifestar poderes telecinéticos cada vez mais devastadores enquanto tenta escapar do controle rígido da mãe.",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/pgi67D7ERtedbywBHXY9Tj2vk2L.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/chr3eT0yqfDXeLW9pfAZ8Wmg3A3.jpg"
  },
  {
    id: 9,
    tipo: "filme",
    titulo: "Resident Evil",
    ano: 2026,
    duracao: "94 min",
    genero: "Terror / Ação / Ficção Científica",
    diretor: "Zach Cregger",
    elenco: [
      "Austin Abrams",
      "Paul Walter Hauser",
      "Zach Cherry",
      "Kali Reis",
      "Will Merrick"
    ],
    sinopse: "Bryan, um estafeta médico encarregado de fazer uma entrega noturna em Raccoon City, vê-se preso no epicentro de um surto biológico devastador orquestrado pela Umbrella Corporation. Durante uma noite claustrofóbica e repleta de terror, tem de lutar pela sobrevivência contra aberrações mutantes para escapar com vida.",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/gQ76UL64RQe3oHwiwHwODTC23g4.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/fQpxJXfOm0QSHj3eB8QDjOvYL3t.jpg"
  },
  {
    id: 10,
    tipo: "filme",
    titulo: "A Odisseia",
    ano: 2026,
    duracao: "173 min",
    genero: "Ação / Épico / Fantasia",
    diretor: "Christopher Nolan",
    elenco: [
      "Matt Damon",
      "Tom Holland",
      "Anne Hathaway",
      "Robert Pattinson",
      "Zendaya",
      "Charlize Theron"
    ],
    sinopse: "Após o desfecho da Guerra de Troia, Odisseu, o lendário rei de Ítaca, enfrenta uma perigosa e longa travessia marítima para regressar a casa. Pelo caminho, confronta monstros mitológicos, deuses e provações divinas, enquanto a sua esposa Penélope resiste a pretendentes que ameaçam o reino.",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/muMwJAiMtReEHLKpKMWt2rMkYF7.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/n3D2Lmwomtbc4SZFO8hLtLL0b5q.jpg"
  },
  {
    id: 11,
    tipo: "filme",
    titulo: "A Hipótese do Amor",
    ano: 2026,
    duracao: "102 min",
    genero: "Comédia / Romance",
    diretor: "Claire Scanlon",
    elenco: [
      "Lili Reinhart",
      "Tom Bateman",
      "Rachel Marsh",
      "Nicholas Duvernay",
      "Arty Froushan"
    ],
    sinopse: "Olive Smith, uma aluna de doutoramento em biologia, decide fingir que está num relacionamento para convencer a melhor amiga de que superou o passado amoroso. Em pânico no laboratório, beija o primeiro homem que vê pela frente: ninguém menos que Adam Carlsen, o jovem professor mais rígido e temido do departamento, que aceita manter a farsa.",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/9TQyjZ9PHCiPR8eylF8dulUFreu.jpg",
    backdrop: "https://www.themoviedb.org/t/p/w600_and_h900_face/9TQyjZ9PHCiPR8eylF8dulUFreu.jpg"
  },
  {
    id: 11,
    tipo: "filme",
    titulo: "Verity",
    ano: 2026,
    duracao: "118 min",
    genero: "Thriller / Mistério / Drama",
    diretor: "Michael Showalter",
    elenco: [
      "Anne Hathaway",
      "Dakota Johnson",
      "Josh Hartnett"
    ],
    sinopse: "Lowen Ashleigh, uma escritora à beira da ruína financeira, aceita a proposta de Jeremy Crawford para terminar os livros restantes de uma série de sucesso da sua esposa acamada, a célebre autora Verity Crawford. Ao instalar-se na mansão da família, Lowen descobre um manuscrito autobiográfico inédito repleto de confissões perturbadoras sobre a morte das filhas do casal.",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/6Qf3sylInJeyK0fFTfjprnGIXCF.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/3BoHXmGAfC2qO4wnCpMYV0BzpHD.jpg"
  },

  /* ================= SÉRIES ================= */
  {
    id: 101,
    tipo: "serie",
    titulo: "Friends",
    ano: 1994,
    duracao: "10 temporadas",
    genero: "Comédia / Romance",
    diretor: "David Crane, Marta Kauffman",
    elenco: [
      "Jennifer Aniston",
      "Courteney Cox",
      "Lisa Kudrow",
      "Matt LeBlanc",
      "Matthew Perry",
      "David Schwimmer"
    ],
    sinopse: "Seis jovens amigos — Rachel, Monica, Phoebe, Joey, Chandler e Ross — vivem em Manhattan e partilham os desafios, amores, frustrações de carreira e momentos hilariantes da vida adulta enquanto se reúnem regularmente no seu inseparável café Central Perk.",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/2koX1xLkpTQM4IZebYvKysFW1Nh.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/m3Jev59mJLyUp5bXhY5SVfIBZI0.jpg"
  },
  {
    id: 102,
    tipo: "serie",
    titulo: "Breaking Bad",
    ano: 2008,
    duracao: "5 temporadas",
    genero: "Crime / Drama / Suspense",
    diretor: "Vince Gilligan",
    elenco: [
      "Bryan Cranston",
      "Aaron Paul",
      "Anna Gunn",
      "Dean Norris",
      "Betsy Brandt",
      "RJ Mitte"
    ],
    sinopse: "Ao ser diagnosticado com cancro de pulmão em estado avançado, Walter White, um desiludido professor de química do ensino secundário, une-se a Jesse Pinkman, um antigo aluno, para produzir e comercializar metanfetamina com o intuito de assegurar o futuro financeiro da sua família.",
    poster: "https://image.tmdb.org/t/p/original/hGwm9Cj3CdbJIqQWNExQqiYmCd4.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg"
  },
  {
    id: 103,
    tipo: "serie",
    titulo: "Vikings",
    ano: 2013,
    duracao: "6 temporadas",
    genero: "Ação / Aventura / Drama / Guerra",
    diretor: "Michael Hirst",
    elenco: [
      "Travis Fimmel",
      "Katheryn Winnick",
      "Clive Standen",
      "Gustaf Skarsgård",
      "Alexander Ludwig"
    ],
    sinopse: "Ragnar Lothbrok é um jovem agricultor e guerreiro nórdico que anseia por explorar e saquear civilizações distantes além do oceano. Desafiando o líder local, constrói uma nova geração de navios e inicia uma série de incursões bem-sucedidas em Inglaterra, ascendendo ao poder até se tornar rei das tribos vikings.",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/bQLrHIRNEkE3PdIWQrZHynQZazu.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/13kblIK8DnxMurcRDkeyy2sGR7v.jpg"
  },
  {
    id: 104,
    tipo: "serie",
    titulo: "The Walking Dead",
    ano: 2010,
    duracao: "11 temporadas",
    genero: "Ação / Drama / Terror / Ficção Científica",
    diretor: "Frank Darabont",
    elenco: [
      "Andrew Lincoln",
      "Norman Reedus",
      "Melissa McBride",
      "Lauren Cohan",
      "Danai Gurira",
      "Chandler Riggs"
    ],
    sinopse: "O xerife Rick Grimes acorda de um coma num hospital abandonado e descobre que o mundo foi devastado por um apocalipse zombi. Ao liderar um grupo de sobreviventes em busca de um lugar seguro, descobre que a luta diária contra os mortos-vivos é muitas vezes menos perigosa do que a crueldade dos humanos sobreviventes.",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/9lb02gTh4LLB17yAEXFd4C3R4JP.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/wY3KAlS1VgyOc5rJ6kBierv1iKW.jpg"
  },
  {
    id: 105,
    tipo: "serie",
    titulo: "The Vampire Diaries",
    ano: 2009,
    duracao: "8 temporadas",
    genero: "Drama / Fantasia / Romance / Terror",
    diretor: "Julie Plec, Kevin Williamson",
    elenco: [
      "Nina Dobrev",
      "Paul Wesley",
      "Ian Somerhalder",
      "Kat Graham",
      "Candice King",
      "Zach Roerig"
    ],
    sinopse: "Na pequena cidade de Mystic Falls, a jovem Elena Gilbert apaixona-se por Stefan Salvatore, sem saber que ele é um vampiro centenário. A sua vida transforma-se num turbilhão com o regresso de Damon, o perigoso irmão de Stefan, reacendendo rivalidades antigas e desenterrando segredos sobrenaturais da comunidade.",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/lcGQaSrWkkxGuh0JJqyN2TkuNqb.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/wy5uqfMlt7Yy2Ru90dk6k9auVcY.jpg"
  },
  {
    id: 106,
    tipo: "serie",
    titulo: "How I Met Your Mother",
    ano: 2005,
    duracao: "9 temporadas",
    genero: "Comédia / Romance",
    diretor: "Carter Bays, Craig Thomas",
    elenco: [
      "Josh Radnor",
      "Jason Segel",
      "Cobie Smulders",
      "Neil Patrick Harris",
      "Alyson Hannigan"
    ],
    sinopse: "No ano de 2030, Ted Mosby senta-se com os seus filhos para lhes relatar em detalhe a longa jornada de como conheceu a mãe deles. A narrativa recua a 2005 e acompanha as peripécias amorosas, desafios profissionais e aventuras quotidianas de Ted ao lado do seu inseparável grupo de amigos em Nova Iorque.",
    poster: "https://image.tmdb.org/t/p/original/b34jPzmB0wZy7EjUZoleXOl2RRI.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/hlAl1isnYiTSobUT9vsmPQWz0Mi.jpg"
  },
  {
    id: 107,
    tipo: "serie",
    titulo: "The Chosen",
    ano: 2019,
    duracao: "4 temporadas",
    genero: "Drama / Histórico",
    diretor: "Dallas Jenkins",
    elenco: [
      "Jonathan Roumie",
      "Shahar Isaac",
      "Elizabeth Tabish",
      "Paras Patel",
      "Noah James"
    ],
    sinopse: "Um retrato íntimo e histórico da vida de Jesus Cristo através dos olhos daqueles que o conheceram e conviveram com ele na Judeia do século I. A narrativa explora os desafios pessoais, dilemas morais e transformações vividas pelos seus discípulos e seguidores.",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/9Um6qPWSWHP8cl60fTtOU15uXqb.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/9NhIWmsh2RZFzhM13NDSP8vTYCQ.jpg"
  },
  {
    id: 108,
    tipo: "serie",
    titulo: "Round 6",
    ano: 2021,
    duracao: "3 temporadas",
    genero: "Ação / Drama / Mistério / Suspense",
    diretor: "Hwang Dong-hyuk",
    elenco: [
      "Lee Jung-jae",
      "Park Hae-soo",
      "Jung Ho-yeon",
      "Wi Ha-jun",
      "Oh Young-soo",
      "Heo Sung-tae"
    ],
    sinopse: "Centenas de pessoas endividadas e desesperadas por dinheiro aceitam um misterioso convite para competir em jogos infantis tradicionais coreanos. Fechados num complexo secreto, descobrem que as apostas são mortais e que apenas um sobrevivente levará o prémio bilionário.",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/6gcHdboppvplmBWxvROc96NJnmm.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/2BgUqkgbVLO9e94379cMK0oJmca.jpg"
  },
  {
    id: 109,
    tipo: "serie",
    titulo: "Bridgerton",
    ano: 2020,
    duracao: "3 temporadas",
    genero: "Drama / Romance / Época",
    diretor: "Chris Van Dusen",
    elenco: [
      "Nicola Coughlan",
      "Luke Newton",
      "Jonathan Bailey",
      "Simone Ashley",
      "Phoebe Dynevor",
      "Claudia Jessie"
    ],
    sinopse: "Oito irmãos inseparáveis da influente família Bridgerton procuram o amor e a felicidade no competitivo e luxuoso mercado matrimonial da alta sociedade de Londres na era da Regência, enquanto os seus segredos e escândalos são vigiados de perto pela misteriosa cronista Lady Whistledown.",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/k54GKSjE0vXACHN2qkCGXvaafn5.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/yFPm6ZdgDyd1X4LAFiMvcvFltcj.jpg"
  },
  {
    id: 110,
    tipo: "serie",
    titulo: "Dr. House",
    ano: 2004,
    duracao: "8 temporadas",
    genero: "Drama / Mistério / Medicina",
    diretor: "David Shore",
    elenco: [
      "Hugh Laurie",
      "Robert Sean Leonard",
      "Omar Epps",
      "Jesse Spencer",
      "Lisa Edelstein",
      "Jennifer Morrison"
    ],
    sinopse: "O Dr. Gregory House é um médico brilhante, cínico e desprovido de boas maneiras que lidera uma equipa de diagnóstico num hospital universitário de Nova Jérsia. Juntamente com a sua equipa, desvenda enigmas médicos complexos e salva vidas de pacientes com doenças raras que outros especialistas não conseguem diagnosticar.",
    poster: "https://image.tmdb.org/t/p/original/teFg9jM4s0RLW6Pvd3YH9cDngIR.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/r9t9lblyPfudl0LV0Ujg1nXdKyW.jpg"
  },
  {
    id: 111,
    tipo: "serie",
    titulo: "Game of Thrones",
    ano: 2011,
    duracao: "8 temporadas",
    genero: "Fantasia / Drama / Ação",
    diretor: "David Benioff, D.B. Weiss",
    elenco: [
      "Peter Dinklage",
      "Lena Headey",
      "Emilia Clarke",
      "Kit Harington",
      "Sophie Turner",
      "Maisie Williams"
    ],
    sinopse: "Num continente fictício conhecido como Westeros, nobres famílias travam uma guerra sangrenta e cheia de conspirações políticas pelo Trono de Ferro e o controlo dos Sete Reinos. Ao mesmo tempo, antigas ameaças sobrenaturais despertam nas fronteiras geladas para além da Muralha.",
    poster: "https://image.tmdb.org/t/p/original/aqomTRKjNZkmNEeOZnEmWrFTmKU.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/jJojoFmsuLPQz8AOdkeV0b686RN.jpg"
  },
  {
    id: 101,
    tipo: "serie",
    titulo: "Dexter",
    ano: 2006,
    duracao: "8 temporadas",
    genero: "Crime / Drama / Mistério",
    diretor: "James Manos Jr.",
    elenco: [
      "Michael C. Hall",
      "Jennifer Carpenter",
      "David Zayas",
      "James Remar",
      "C.S. Lee"
    ],
    sinopse: "Dexter Morgan é um especialista forense em padrões de dispersão de sangue que trabalha para a polícia de Miami. Secretamente, leva uma vida dupla como um assassino em série que caça e elimina apenas criminosos impunes que escaparam do sistema judicial.",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_face/f1nV5NBIFwfQLw5g8FVrdt90FAy.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/iprMfJ9VHS4wMhBXyHtN7l9d2hP.jpg"
  },
];

/* Home: ids em destaque */
const DESTAQUE_ID = 1;
const TOP3_IDS = [2, 3, 1];
