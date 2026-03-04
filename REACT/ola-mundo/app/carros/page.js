function Carros() {


    const carros = [
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
        {
            nome: "T-Cross",
            marca: "Volkswagen",
            cor: "Branco",
            valor: 145000
        },
        {
            nome: "Argo",
            marca: "Fiat",
            cor: "Vermelho",
            valor: 90000
        },
        {
            nome: "Mobi",
            marca: "Fiat",
            cor: "Branco",
            valor: 70000
        },
        {
            nome: "Ranger",
            marca: "Ford",
            cor: "Preto",
            valor: 220000
        },
        {
            nome: "Hilux",
            marca: "Toyota",
            cor: "Prata",
            valor: 250000
        },
        {
            nome: "S10",
            marca: "Chevrolet",
            cor: "Branco",
            valor: 230000
        },
        {
            nome: "208",
            marca: "Peugeot",
            cor: "Azul",
            valor: 95000
        },
        {
            nome: "Polo",
            marca: "Volkswagen",
            cor: "Cinza",
            valor: 105000
        },
        {
            nome: "City",
            marca: "Honda",
            cor: "Prata",
            valor: 125000
        },
        {
            nome: "Fastback",
            marca: "Fiat",
            cor: "Preto",
            valor: 155000
        }
    ]
    return (

        <div >
            <h1> Lista de carros </h1>
            <hr />

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