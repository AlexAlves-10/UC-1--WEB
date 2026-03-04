'use client'

function Objetos() {

    const numeros = [3, 10, 9, 7, 821, -9999]
    const nomes = ["Luan", "Marcio", "Alex", "Natan"]



    const usuario = {
        nome: "Alex",
        dataNascimento: "10/11/1999",
        idade: 26,
        admin: true
    }

    const listaUsuarios = [
        {
            id: 7,
            nome: "Sete",
            email: "quantico.voador@gmail.br"
        },
        {
            id: 32,
            nome: "Marcio",
            email: "marcio10@gmail.br"
        },
        {
            id: 19,
            nome: "Raphael",
            email: "veiga@gmail.br"
        }
    ]

    

    return ( 
        <div>
            <h1> Objetos em JavaScrpit </h1>
            <p> Conhecendo o famoso JSON, a estrutura mais usada da programação </p>

            <p> Seja bem-vindo {usuario.nome} você nasceu em {usuario.dataNascimento} e tem {usuario.idade} anos </p>
            <p> Top 5 melhores números: {numeros[1]} </p>
            <p> Top 3 bichos: { listaUsuarios[1].nome } </p>

        </div>
     );
}

export default Objetos;