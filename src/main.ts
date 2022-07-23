import { initCases } from "data/monde";
import { Monde } from "monde";
import { ZoneTexte } from "zoneTexte";

const params = new URLSearchParams(window.location.search);
const mode = params.get("mode");
const modeConstruction = mode === "construction";

const monde = new Monde(initCases());
const zoneTexte = new ZoneTexte();

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
