import { Joueur } from "joueur";
import * as $ from "jquery";
import { Monde } from "monde-MAIN";

export function gestionClavier(joueur: Joueur, monde: Monde) {
  $(document).on("keydown", function (e) {
    switch (e.originalEvent?.key) {
      case "ArrowLeft": //touche "fleche gauche"
        joueur.deplacementGauche(monde);
        break;
      case "ArrowUp": //touche "fleche haut"
        joueur.deplacementHaut(monde);
        break;
      case "ArrowRight": //touche "fleche droite"
        joueur.deplacementDroite(monde);
        break;
      case "ArrowDown": //touche "fleche bas"
        joueur.deplacementBas(monde);
        break;
    }
  });
}
