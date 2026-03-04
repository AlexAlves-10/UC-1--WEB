'use client'

function Equiipamentos() {

    const equipamentos = [
        {
        nome: "Chave de fenda",
        preco: 8.5,
        funcionalidade: "(Serve para por em fendas)"
        },   
    
        {
        nome: "Serrote",
        preco: 29.9,
        funcionalidade: "(Serra coisas que terminam com 'ote')"
        },   
        
        {
        nome: "Martelo",
        preco: 15.25,
        funcionalidade: "(Martela o martelão)"
        },   
    
    ]




    return ( 
        <div>
            <h1> Listagem de equipamentos </h1>
            <hr/>

            <ul>
                <li> <p> <strong> Item </strong> {equipamentos[1].nome} <strong> R$ </strong> {equipamentos[1].preco} {equipamentos[1].funcionalidade} </p> </li>
                <li> <p> <strong> Item </strong> {equipamentos[2].nome} <strong> R$ </strong> {equipamentos[2].preco} {equipamentos[2].funcionalidade} </p> </li>
                <li> <p> <strong> Item </strong> {equipamentos[0].nome} <strong> R$ </strong> {equipamentos[0].preco} {equipamentos[0].funcionalidade}  </p> </li>
            </ul>


        </div>
     );
}

export default Equiipamentos;