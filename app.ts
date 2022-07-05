import { NumericLiteral } from "typescript";

let funcionario ={
    codigo: 10, 
    nome: 'Heverton'
};

let funcionario2:{codigo: number , nome: string} = {
    codigo:10,
    nome: 'Héverton'
}

interface Funcionario {
    codigo: Number,
    nome: string
}

let funcionario3: Funcionario = {
    codigo: 200,
    nome:'Héverton'

}