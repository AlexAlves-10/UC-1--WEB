'use client'
import { useState } from "react";

function Estados() {

    //const nome = "Alex"
      const [nome, alteraNome] = useState("")
      const [senha, alteraSenha] = useState("") 
      const [email, alteraEmail] = useState("") 

      function salvar(){
        alert("O nome é: "+nome+ "\nSeu e-mail é: "+email+"\nSua senha é: "+senha)
      }

    return (
        <div>
            <h1> Programação em React com estados </h1>

            <p> Digite o seu nome: </p>
            <input onChange={ e => alteraNome(e.target.value) } />

              <br/><br/>
            
            <p> Digite seu e-mail: </p>
            <input type="email" onChange={ e => alteraEmail(e.target.value) } />
            

            <br/><br/>

            <p> Digite sua senha: </p>   
            <input type="password" onChange={ e => alteraSenha(e.target.value) } />

            <br/><br/>

            <button onClick={salvar} > Salvar </button>


        </div>

    );
}

export default Estados;