'use client'

import { useState } from "react";

function Carros() {

    const [nome, alteraNome] = useState("")
    const [marca, alteraMarca] = useState("")
    const [valor, alteraValor] = useState()


    const [carros, alteraListaCarros] = useState(
        [
        {
            nome: "Civic",
            marca: "Honda",
            cor: "Preto",
            valor: 145000
        },
        {
            nome: "Corolla",
            marca: "Toyota",
            cor: "Branco",
            valor: 150000
        },
        {
            nome: "Onix",
            marca: "Chevrolet",
            cor: "Prata",
            valor: 85000
        },
        {
            nome: "HB20",
            marca: "Hyundai",
            cor: "Vermelho",
            valor: 82000
        },
        {
            nome: "Gol",
            marca: "Volkswagen",
            cor: "Branco",
            valor: 78000
        },
        {
            nome: "Compass",
            marca: "Jeep",
            cor: "Cinza",
            valor: 185000
        },
        {
            nome: "Renegade",
            marca: "Jeep",
            cor: "Preto",
            valor: 165000
        },
        {
            nome: "Tracker",
            marca: "Chevrolet",
            cor: "Azul",
            valor: 135000
        },
        {
            nome: "Creta",
            marca: "Hyundai",
            cor: "Prata",
            valor: 140000
        },
        {
            nome: "Kicks",
            marca: "Nissan",
            cor: "Cinza",
            valor: 130000
        },
       
    ]
    ) 

    function salvar(e){
        e.preventDefault()
        
        const objeto = {
            nome: nome,
            marca: marca,
            cor: "Preto",
            valor: valor
            
        }
        
        //carros.push(objeto)
        alteraListaCarros(carros.concat(objeto))
    }

    return (

        <div >
            <h1> Lista de carros </h1>
            <hr />

            <form onSubmit={salvar} >

                <p> Digite o nome do carro: </p>
                <input onChange={ e => alteraNome(e.target.value) } />
                <p> Digite a marca do carro: </p>
                <input onChange={ e => alteraMarca(e.target.value) } />
                <p> Digite o valor do carro: </p>
                <input onChange={ e => alteraValor(e.target.value) } />

                <br/><br/>
                <button>Salvar</button>

            </form>


            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Cor</th>
                        <th scope="col">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carros.map(
                            item => <tr>
                                <td>{item.nome}</td>
                                <td>{item.marca}</td>
                                <td>{item.cor}</td>
                                <td> R$ {item.valor}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>


        </div>
    );
}

export default Carros;