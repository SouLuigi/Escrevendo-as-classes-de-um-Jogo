class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        let ataque;
        if (this.tipo === "Mago") {
             ataque = "usou magia";
        } else if (this.tipo === "Guerreiro") {
             ataque = "usou espada";
        } else if (this.tipo === "Monge") {
             ataque = "usou artes marciais";
        } else if (this.tipo === "Ninja") {
             ataque = "usou shuriken";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}
let mago = new heroi("Luigi", 21, "Mago")
let guerreiro = new heroi("Ronald", 20, "Guerreiro")
let monge = new heroi("Mine", 20, "Monge")
let ninja =new heroi("Júlia", 17, "Ninja")

mago.atacar();       
guerreiro.atacar();  
monge.atacar();      
ninja.atacar();      