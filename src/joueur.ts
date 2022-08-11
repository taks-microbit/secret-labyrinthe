import * as $ from "jquery";
import { Monde, tailleCase } from "monde-MAIN";
import { style } from "typestyle";
import { afficherMondeVisible } from "vision";

const cssHeros = style({
  width: tailleCase,
  height: tailleCase,
});

export class Joueur {
  private vision: number = 3;

  constructor(private positionX: number, private positionY: number) {
    $("#plateau").append(`<div id="heros" class="heros ${cssHeros}"></div>`);
  }

  public afficher(monde: Monde) {
    const st = `top: ${this.positionY * tailleCase}px; left: ${
      this.positionX * tailleCase
    }px;`;
    $("#heros").attr("style", st);

    afficherMondeVisible(monde, this.vision, this.positionX, this.positionY);
  }

  public deplacementHaut(monde: Monde) {
    if (monde.deplacementAutorise(this.positionX, this.positionY - 1)) {
      this.positionY--;
      this.afficher(monde);
    }
  }

  public deplacementBas(monde: Monde) {
    if (monde.deplacementAutorise(this.positionX, this.positionY + 1)) {
      this.positionY++;
      this.afficher(monde);
    }
  }

  public deplacementGauche(monde: Monde) {
    if (monde.deplacementAutorise(this.positionX - 1, this.positionY)) {
      this.positionX--;
      this.afficher(monde);
    }
  }

  public deplacementDroite(monde: Monde) {
    if (monde.deplacementAutorise(this.positionX + 1, this.positionY)) {
      this.positionX++;
      this.afficher(monde);
    }
  }
}
