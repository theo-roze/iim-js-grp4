class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }   
    
    isLucky() {
        return Math.random() < this.luck;
    }

    attackPokemon(defenseur) {
        if (this.isLucky()) {
            let dmg = this.attack - defenseur.defense;
            defenseur.hp -= dmg;
            console.log(dmg + " ont été infligés à " + defenseur.name );
            console.log("Il reste " + defenseur.hp + " à " + defenseur.name);
        } else {
            console.log("L'attaque échoue");
        }
    }
}

let evolie = new Pokemon("Evolie", 30, 20, 100, 0.6);
let pikachu = new Pokemon("Pikachu", 35, 15, 90, 0.8);

// boucle avec les attaques
while (evolie.hp > 0 && pikachu.hp > 0) {
    pikachu.attackPokemon(evolie);
    if (evolie.hp <= 0) {
        console.log("Evolie est KO");
        break;
    }

    evolie.attackPokemon(pikachu);
   
    if (pikachu.hp <= 0) {
        console.log("Pikachu est KO");
        break;
    }
    console.log(" ")
}