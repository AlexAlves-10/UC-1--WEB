'use client'

import"./Listagem.css"

function Listagem() {

    const listaAves = [
        {
            nome: "Arara-azul",
            cor: "Azul com detalhes amarelos",
            especie: "Anodorhynchus hyacinthinus",
            habitat: "Pantanal e Cerrado",
            alimentacao: "Frutas e sementes"
        },
        {
            nome: "Tucano-toco",
            cor: "Preto com peito branco e bico laranja",
            especie: "Ramphastos toco",
            habitat: "Florestas tropicais da América do Sul",
            alimentacao: "Frutas, insetos e pequenos vertebrados"
        },
        {
            nome: "Beija-flor",
            cor: "Verde metálico",
            especie: "Eupetomena macroura",
            habitat: "Jardins e florestas abertas",
            alimentacao: "Néctar e pequenos insetos"
        },
        {
            nome: "Coruja-buraqueira",
            cor: "Marrom com manchas brancas",
            especie: "Athene cunicularia",
            habitat: "Campos abertos e áreas urbanas",
            alimentacao: "Insetos e pequenos roedores"
        },
        {
            nome: "Pinguim-imperador",
            cor: "Preto e branco com detalhes amarelos",
            especie: "Aptenodytes forsteri",
            habitat: "Antártida",
            alimentacao: "Peixes, lulas e krill"
        },
        {
            nome: "Flamingo",
            cor: "Rosa",
            especie: "Phoenicopterus roseus",
            habitat: "Lagos salgados e lagoas costeiras",
            alimentacao: "Algas e pequenos crustáceos"
        },
        {
            nome: "Águia-real",
            cor: "Marrom-escuro",
            especie: "Aquila chrysaetos",
            habitat: "Montanhas e áreas abertas",
            alimentacao: "Pequenos mamíferos e aves"
        },
        {
            nome: "Canário",
            cor: "Amarelo",
            especie: "Serinus canaria",
            habitat: "Ilhas Canárias e áreas domésticas",
            alimentacao: "Sementes"
        },
        {
            nome: "Pardal",
            cor: "Marrom e cinza",
            especie: "Passer domesticus",
            habitat: "Áreas urbanas e rurais",
            alimentacao: "Grãos e insetos"
        },
        {
            nome: "Garça-branca",
            cor: "Branca",
            especie: "Ardea alba",
            habitat: "Áreas alagadas e margens de rios",
            alimentacao: "Peixes e pequenos anfíbios"
        },

        {
    nome: "João-de-barro",
    cor: "Marrom-avermelhado",
    especie: "Furnarius rufus",
    habitat: "Campos e áreas abertas da América do Sul",
    alimentacao: "Insetos"
  },
  {
    nome: "Sabiá-laranjeira",
    cor: "Marrom com peito alaranjado",
    especie: "Turdus rufiventris",
    habitat: "Jardins e florestas",
    alimentacao: "Frutas e insetos"
  },
  {
    nome: "Bem-te-vi",
    cor: "Amarelo, branco e marrom",
    especie: "Pitangus sulphuratus",
    habitat: "Áreas urbanas e rurais",
    alimentacao: "Insetos e frutas"
  },
  {
    nome: "Andorinha",
    cor: "Azul-escuro e branco",
    especie: "Hirundo rustica",
    habitat: "Áreas abertas e urbanas",
    alimentacao: "Insetos voadores"
  },
  {
    nome: "Maritaca",
    cor: "Verde",
    especie: "Psittacara leucophthalmus",
    habitat: "Florestas e áreas urbanas",
    alimentacao: "Frutas e sementes"
  },
  {
    nome: "Cardeal",
    cor: "Vermelho vibrante",
    especie: "Cardinalis cardinalis",
    habitat: "Bosques e jardins",
    alimentacao: "Sementes e insetos"
  },
  {
    nome: "Pica-pau",
    cor: "Preto, branco e vermelho",
    especie: "Dryocopus lineatus",
    habitat: "Florestas",
    alimentacao: "Insetos e larvas"
  },
  {
    nome: "Albatroz",
    cor: "Branco e cinza",
    especie: "Diomedea exulans",
    habitat: "Oceanos do hemisfério sul",
    alimentacao: "Peixes e lulas"
  },
  {
    nome: "Gaivota",
    cor: "Branco e cinza",
    especie: "Larus dominicanus",
    habitat: "Regiões costeiras",
    alimentacao: "Peixes e restos alimentares"
  },
  {
    nome: "Cisne-branco",
    cor: "Branco",
    especie: "Cygnus olor",
    habitat: "Lagos e lagoas",
    alimentacao: "Plantas aquáticas"
  },
  {
    nome: "Pato-mandarim",
    cor: "Multicolorido",
    especie: "Aix galericulata",
    habitat: "Lagos e rios",
    alimentacao: "Sementes e insetos"
  },
  {
    nome: "Falcão-peregrino",
    cor: "Cinza-azulado",
    especie: "Falco peregrinus",
    habitat: "Montanhas e áreas urbanas",
    alimentacao: "Outras aves"
  },
  {
    nome: "Gavião-carijó",
    cor: "Cinza com listras",
    especie: "Rupornis magnirostris",
    habitat: "Áreas abertas e florestas",
    alimentacao: "Pequenos vertebrados"
  },
  {
    nome: "Urubu",
    cor: "Preto",
    especie: "Coragyps atratus",
    habitat: "Áreas abertas e urbanas",
    alimentacao: "Carniça"
  },
  {
    nome: "Tangará",
    cor: "Azul vibrante",
    especie: "Chiroxiphia caudata",
    habitat: "Mata Atlântica",
    alimentacao: "Frutas"
  },
  {
    nome: "Saíra-sete-cores",
    cor: "Multicolorido",
    especie: "Tangara seledon",
    habitat: "Florestas tropicais",
    alimentacao: "Frutas e insetos"
  },
  {
    nome: "Corvo",
    cor: "Preto",
    especie: "Corvus corax",
    habitat: "Diversos ambientes",
    alimentacao: "Onívoro"
  },
  {
    nome: "Papagaio",
    cor: "Verde",
    especie: "Amazona aestiva",
    habitat: "Florestas tropicais",
    alimentacao: "Frutas e sementes"
  },
  {
    nome: "Gralha-azul",
    cor: "Azul",
    especie: "Cyanocorax caeruleus",
    habitat: "Florestas de araucária",
    alimentacao: "Sementes e insetos"
  },
  {
    nome: "Cacatua",
    cor: "Branca com crista amarela",
    especie: "Cacatua galerita",
    habitat: "Florestas e savanas da Austrália",
    alimentacao: "Sementes e frutas"
  },
  {
    nome: "Periquito-australiano",
    cor: "Verde e amarelo",
    especie: "Melopsittacus undulatus",
    habitat: "Regiões áridas da Austrália",
    alimentacao: "Sementes"
  },
  {
    nome: "Tordo",
    cor: "Marrom",
    especie: "Molothrus bonariensis",
    habitat: "Campos e áreas abertas",
    alimentacao: "Insetos e sementes"
  },
  {
    nome: "Ibis",
    cor: "Branco",
    especie: "Eudocimus albus",
    habitat: "Áreas alagadas",
    alimentacao: "Peixes e crustáceos"
  },
  {
    nome: "Aracuã",
    cor: "Marrom-escuro",
    especie: "Ortalis guttata",
    habitat: "Florestas tropicais",
    alimentacao: "Frutas e folhas"
  },
  {
    nome: "Cegonha",
    cor: "Branco e preto",
    especie: "Ciconia ciconia",
    habitat: "Áreas úmidas e campos",
    alimentacao: "Peixes e insetos"
  },
  {
    nome: "Pavão",
    cor: "Azul e verde iridescente",
    especie: "Pavo cristatus",
    habitat: "Florestas e áreas abertas",
    alimentacao: "Sementes e insetos"
  },
  {
    nome: "Mutum",
    cor: "Preto",
    especie: "Crax fasciolata",
    habitat: "Florestas tropicais",
    alimentacao: "Frutas e sementes"
  },
  {
    nome: "Tesourinha",
    cor: "Preto e branco",
    especie: "Tyrannus savana",
    habitat: "Campos e áreas abertas",
    alimentacao: "Insetos"
  },
  {
    nome: "Rolinha",
    cor: "Cinza-claro",
    especie: "Columbina talpacoti",
    habitat: "Áreas urbanas e rurais",
    alimentacao: "Sementes"
  },
  {
    nome: "Calopsita",
    cor: "Cinza com face amarela",
    especie: "Nymphicus hollandicus",
    habitat: "Regiões áridas da Austrália",
    alimentacao: "Sementes"
  }
    ];


    return (
        <div>
            <h1> Listagem de aves bonitas </h1>
            <hr/>

            {
                listaAves.map(
                    item => <p> {item.nome}  da espécie   {item.especie}  vive em  {item.habitat} e se alimenta de {item.alimentacao} </p>
                )
            }





        </div>
    );
}

export default Listagem;