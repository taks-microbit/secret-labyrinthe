import * as $ from "jquery";
import { style } from "typestyle";
import { monde } from "data/monde";
import { ZoneTexte } from "zoneTexte";
import { TypeCase } from "types/monde";

const params = new URLSearchParams(window.location.search);
const mode = params.get("mode");
const modeConstruction = mode === "construction";

const tailleCase = 64;
const cssCase = style({
  width: tailleCase,
  height: tailleCase,
  position: "absolute",
});

const zoneTexte = new ZoneTexte();
if (modeConstruction) {
  zoneTexte.ajoutTexte("<i>MODE CONSTRUCTION ACTIVÉ</i>");
}

(window as any).changeTypeCase = (x: number, y: number) => {
  const typesCases: TypeCase[] = ["mur", "sol", "porte", "herbe"];
  const ancienType = monde[x][y].type;
  const nouveauType =
    typesCases[(typesCases.indexOf(ancienType) + 1) % typesCases.length];
  monde[x][y].type = nouveauType;
  console.log(monde);
  $(`#case_${x}_${y}`).removeClass(ancienType);
  $(`#case_${x}_${y}`).addClass(nouveauType);
};

function cliqueCase(x: number, y: number) {
  if (modeConstruction) {
    return `changeTypeCase(${x},${y})`;
  }
  return "";
}

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
        <div class="${cssCase} ${
        caze.type
      }" id="case_${x}_${y}" style=${cssCasePosition(
        x,
        y
      )} onclick="${cliqueCase(x, y)}">
        </div>
      `);
      x++;
    }
    y++;
  }
  zoneTexte.afficher();
}

afficher();
