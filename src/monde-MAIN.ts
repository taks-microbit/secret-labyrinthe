import * as $ from "jquery";
import { style } from "typestyle";
import { Case, TypeCase } from "types/case";

export const tailleCase = 64;
const cssCase = style({
  width: tailleCase,
  height: tailleCase,
});

export class Monde {
  public readonly largeur: number;
  public readonly hauteur: number;

  constructor(private cases: Case[][]) {
    this.hauteur = cases.length;
    this.largeur = cases[0].length;

    for (let y = 0; y < cases.length; y++) {
      for (let x = 0; x < cases[y].length; x++) {
        const id = `case_${x}_${y}`;
        const st = `top: ${y * tailleCase}px; left: ${x * tailleCase}px;`;
        $("#plateau").append(`<div id="${id}" style="${st}"></div>`);
        for (const objet of cases[y][x].objets) {
          $("#plateau").append(
            `<div style="${st}" class="objet ${cssCase} ${objet}"></div>`
          );
        }
      }
    }
  }

  public afficher() {
    for (let y = 0; y < this.cases.length; y++) {
      for (let x = 0; x < this.cases[y].length; x++) {
        $(`#case_${x}_${y}`).attr(
          "class",
          `case ${cssCase} ${this.cases[y][x].type} ` /*${this.cases[y][
            x
          ].objets.join(" ")}*/
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
          this.afficher();
        });
      }
    }
  }

  public deplacementAutorise(x: number, y: number): boolean {
    if (!this.caseValide(x, y)) {
      return false;
    }
    const type = this.cases[y][x].type;
    return !(type === "mur"); //type === "herbe" || type === "sol" || type === "porte";
  }

  public caseBloqueVision(x: number, y: number): boolean {
    const type = this.cases[y][x].type;
    return type === "mur";
  }

  public caseValide(x: number, y: number): boolean {
    return x >= 0 && y >= 0 && x < this.largeur && y < this.hauteur;
  }
}
