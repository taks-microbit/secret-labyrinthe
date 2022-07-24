import { Joueur } from "joueur";
import * as $ from "jquery";
import { Monde } from "monde";

export function gestionClavier(joueur: Joueur, monde: Monde) {
  $(document).on("keydown", function (e) {
    switch (e.originalEvent?.key) {
      case "ArrowLeft": //left arrow key
        joueur.deplacementGauche(monde);
        break;
      case "ArrowUp": //up arrow key
        joueur.deplacementHaut(monde);
        break;
      case "ArrowRight": //right arrow key
        joueur.deplacementDroite(monde);
        break;
      case "ArrowDown": //bottom arrow key
        joueur.deplacementBas(monde);
        break;
    }
  });
}
