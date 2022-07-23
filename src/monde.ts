import * as $ from "jquery";
import { style } from "typestyle";
import { Case, TypeCase } from "types/case";

const tailleCase = 64;
const cssCase = style({
  width: tailleCase,
  height: tailleCase,
  position: "absolute",
});

export class Monde {
  constructor(private cases: Case[][]) {
    for (let y = 0; y < cases.length; y++) {
      for (let x = 0; x < cases[y].length; x++) {
        const id = `case_${x}_${y}`;
        const st = `top: ${y * tailleCase}px; left: ${x * tailleCase}px;`;
        $("#plateau").append(`<div id="${id}" style="${st}"></div>`);
      }
    }
  }

  public afficher() {
    for (let y = 0; y < this.cases.length; y++) {
      for (let x = 0; x < this.cases[y].length; x++) {
        $(`#case_${x}_${y}`).attr(
          "class",
          `${cssCase} ${this.cases[y][x].type}`
        );
      }
    }
  }

  public activerModeConstruction() {
    const typesCases: TypeCase[] = ["mur", "sol", "porte", "herbe"];
    for (let y = 0; y < this.cases.length; y++) {
      for (let x = 0; x < this.cases[y].length; x++) {
        $(`#case_${x}_${y}`).on("click", () => {
          const ancienType = this.cases[y][x].type;
          const nouvelIndex =
            (typesCases.indexOf(ancienType) + 1) % typesCases.length;
          const nouveauType = typesCases[nouvelIndex];
          this.cases[y][x].type = nouveauType;
          console.log(this.cases);
          this.afficher();
        });
      }
    }
  }
}
