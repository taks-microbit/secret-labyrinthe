import * as $ from "jquery";
import { Monde, tailleCase } from "monde";
import { style } from "typestyle";

const cssHeros = style({
  width: tailleCase,
  height: tailleCase,
});

export class Joueur {
  private vision: number = 3;

  constructor(private positionX: number, private positionY: number) {
    $("#plateau").append(`<div id="heros" class="heros ${cssHeros}"></div>`);
  }

  public afficher() {
    const st = `top: ${this.positionY * tailleCase}px; left: ${
      this.positionX * tailleCase
    }px;`;
    $("#heros").attr("style", st);
  }

  public afficherMondeVisible() {
    $(".case").addClass("inconnu");
    for (let y = -this.vision; y <= this.vision; y++) {
      const posy = this.positionY + y;
      for (let x = -this.vision; x <= this.vision; x++) {
        const posx = this.positionX + x;
        $(`#case_${posx}_${posy}`).removeClass("inconnu");
      }
    }
  }

  public deplacementHaut(monde: Monde) {
    // A FAIRE: verifier qu'il n'y ait pas un mur en haut
    if (this.positionY > 0) {
      this.positionY--;
      this.afficher();
      this.afficherMondeVisible();
    }
  }

  public deplacementBas(monde: Monde) {
    // A FAIRE: verifier qu'il n'y ait pas un mur en bas
    if (this.positionY < monde.hauteur - 1) {
      this.positionY++;
      this.afficher();
      this.afficherMondeVisible();
    }
  }

  public deplacementGauche(monde: Monde) {
    // A FAIRE: verifier qu'il n'y ait pas un mur à gauche
    if (this.positionX > 0) {
      this.positionX--;
      this.afficher();
      this.afficherMondeVisible();
    }
  }

  public deplacementDroite(monde: Monde) {
    // A FAIRE: verifier qu'il n'y ait pas un mur à droite
    if (this.positionX < monde.largeur - 1) {
      this.positionX++;
      this.afficher();
      this.afficherMondeVisible();
    }
  }
}
