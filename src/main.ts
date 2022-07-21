import * as $ from "jquery";
import { style } from "typestyle";
import { monde } from "data/monde";

const tailleCase = 64;
const cssCase = style({
  width: tailleCase,
  height: tailleCase,
  position: "absolute",
});

const hauteur = monde.length;
const largeur = Math.max(...monde.map((ligne) => ligne.length));
$("#plateau").css("width", largeur * tailleCase);
$("#plateau").css("height", hauteur * tailleCase);

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
}

afficher();
