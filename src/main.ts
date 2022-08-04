import { gestionClavier } from "clavier";
import { initCases } from "data/monde";
import { Joueur } from "joueur";
import { Monde } from "monde";
import { ZoneTexte } from "zoneTexte";

const params = new URLSearchParams(window.location.search);
const mode = params.get("mode");
const modeConstruction = mode === "construction";

const monde = new Monde(initCases());
const zoneTexte = new ZoneTexte();
const joueur = new Joueur(1, 6);
gestionClavier(joueur, monde);

if (modeConstruction) {
  zoneTexte.ajoutTexte("<i>MODE CONSTRUCTION ACTIVÉ</i>");
  monde.activerModeConstruction();
}

zoneTexte.ajoutTexte(`
Bonjour !<br/>
Comment vous appellez-vous ?<br/>
<input type="text" name="nom" id="nom"/>
`);

monde.afficher();
zoneTexte.afficher();
joueur.afficher(monde);
