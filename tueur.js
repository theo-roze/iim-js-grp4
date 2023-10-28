class Survivant {
    constructor(nom, caracteristique, probaMourir, probaDmg, probaMourirDmg) {
        this.nom = nom;
        this.caracteristique = caracteristique;
        this.probaMourir = probaMourir;
        this.probaDmg = probaDmg;
        this.probaMourirDmg = probaMourirDmg;
        this.estVivant = true;
    }

    attaquerTueur(tueur) {
        const probaAttaque = Math.random()
        if (probaAttaque <= this.probaDmg) {
            const degats = 10;
            console.log(tueur.name + " attaque " + this.nom + " (" + this.caracteristique + "), " + this.nom + " esquive en infligeant " + degats + " points de degats à " + tueur.name + ".");
            tueur.hp -= degats;
            if (tueur.hp <= 0) {
                console.log(tueur.name + " est mort. Les survivants ont gagnés");
                tueur.hp = 0;
                tueur.estvivant = false;
            }
        } else if (probaAttaque <= this.probaMourirDmg + this.probaDmg) {
            const degats = 15;
            console.log(tueur.name + " attaque " + this.nom + " (" + this.caracteristique + "), " + this.nom + " meurt en infligeant " + degats + " points de degats à " + tueur.name + ".");
            this.hp = 0;
            this.estVivant = false;
            tueur.hp -= degats;
            if (tueur.hp <= 0) {
                console.log(tueur.name + " est mort. Les survivants ont gagnés");
                tueur.hp = 0;
                tueur.estvivant = false;
            }
        } else {
            const degats = 0;
            console.log(tueur.name + " attaque " + this.nom + " (" + this.caracteristique + "), " + this.nom + " meurt sur le coup.");
            this.hp = 0;
            this.estVivant = false;
            tueur.hp -= degats;
        }
    }
}

class Tueur {
    constructor(name) {
        this.name = name;
        this.hp = 100;
        this.estvivant = true;
    }
}

var Jason = new Tueur("Jason");

var prenomsSurvivants = ["Alice", "Bob", "Carol", "David", "Eve", "Nathan", "Louis","Alexandre","Paul"];

var caracteristiquesPossibles = ["Nerd", "Sportif", "Blonde", "Courageux", "Timide"];

var survivants = [];
var nomutilise = [];

for (var i = 0; i < 5; i++) {
    var nomSurvivant;
    do {
        nomSurvivant = prenomsSurvivants[Math.floor(Math.random() * prenomsSurvivants.length)];
    } while (nomutilise.includes(nomSurvivant));

    nomutilise.push(nomSurvivant);
    var caracteristiqueSurvivant = caracteristiquesPossibles[Math.floor(Math.random() * caracteristiquesPossibles.length)];
    var probaMourir = Math.random();
    var probDegats = Math.random();
    var probMourirDamage = Math.random();

    var survivant = new Survivant(nomSurvivant, caracteristiqueSurvivant, probaMourir, probDegats, probMourirDamage);
    survivants.push(survivant);
}

while (Jason.estvivant && survivants.some(s => s.estVivant)) {
    for (var i = 0; i < survivants.length; i++) {
        if (!Jason.estvivant) {
            break;
        }
        if (survivants[i].estVivant) {
            survivants[i].attaquerTueur(Jason);
        }
    }
}

if (!survivants.some(s => s.estVivant)) {
    console.log("Jason a tué tous les survivants. Les survivants ont perdu");
}

console.log("Les survivants ayant survécu :");
survivants.filter(s => s.estVivant).forEach(s => console.log(s.nom));

console.log("Les survivants morts :");
survivants.filter(s => !s.estVivant).forEach(s => console.log(s.nom));