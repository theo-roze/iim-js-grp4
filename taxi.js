var musiqueList = ["Annisa - Wejdene", "Bohemian Rhapsody - Queen", "Shape of You - Ed Sheeran", "Smells Like Teen Spirit - Nirvana", "Billie Jean - Michael Jackson"]

console.log("John monte dans un taxi.")

class Personnage {
    constructor(name, santemental) {
    this.name = name
    this.santemental = santemental 
    }
}

var john = new Personnage ("John", 10)

class Travel {
    constructor(nombreFeuxRouges,personnage,musiqueList) {
        this.nombreFeuxRouges = nombreFeuxRouges
        this.personnage = personnage
        this.musiqueList = musiqueList
        this.nombreTaxi = 0
    }
    prochainFeu() {
        this.nombreFeuxRouges--
        var randoMusique = Math.floor(Math.random() * this.musiqueList.length)
        console.log()
        if (randoMusique == 0) {
            console.log("Le taxis arrive à un feu rouge. La radio affiche " + this.musiqueList[0])
            this.personnage.santemental -= 1
            this.nombreTaxi += 1
            console.log(this.personnage.name + " n'apprécie pas la musique et perd 1 de santé mental, il lui reste " + this.personnage.santemental + " de santé mentale. John change de taxi.")
            }
            else {
                console.log("Le taxis arrive à un feu rouge. La radio affiche " + this.musiqueList[randoMusique])
                console.log(this.personnage.name + " ne déteste pas particulièrement la musique, il continue le trajet")
            }
    }
}

var johnTravel = new Travel(30,john,musiqueList)

do {
    johnTravel.prochainFeu()
    if(johnTravel.personnage.santemental <= 0) {
        console.log("La santé mentale de John est trop basse, il explose. Il lui restait " + johnTravel.nombreFeuxRouges + " à traversé")
    }
} while(johnTravel.nombreFeuxRouges>0 && johnTravel.personnage.santemental>0)

if(johnTravel.nombreFeuxRouges >= 0) {
    console.log("John à parcouru tout les feux rouges, au total il à pris " + johnTravel.nombreTaxi + " taxis. Il lui reste " + johnTravel.personnage.santemental + " de santé mental")
}
    