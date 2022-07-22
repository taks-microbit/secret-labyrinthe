import * as $ from "jquery";
import { style } from "typestyle";
import { monde } from "data/monde";
import { ZoneTexte } from "zoneTexte";

const tailleCase = 64;
const cssCase = style({
  width: tailleCase,
  height: tailleCase,
  position: "absolute",
});

const zoneTexte = new ZoneTexte();
zoneTexte.ajoutTexte(`
Bonjour !
Comment vous appellez-vous ?
<input type="text" name="nom" id="nom"/>
`);
function cssCasePosition(x: number, y: number) {
  return `"top: ${y * tailleCase}px; left: ${x * tailleCase}px;"`;
}

function afficher() {
  let x = 0;
  let y = 0;
  for (const ligne of monde) {
    x = 0;
    for (const caze of ligne) {
      $("#plateau").append(`
        <div class="${cssCase} ${caze.type}" style=${cssCasePosition(x, y)}>
        </div>
      `);
      x++;
    }
    y++;
  }
  zoneTexte.afficher();
}

afficher();
