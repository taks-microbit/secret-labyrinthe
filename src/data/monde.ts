import { Case } from "types/case";

const largeur = 20;
const hauteur = 20;

const casesTmp: Case[][] = [
  [
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "porte",
    },
    {
      type: "mur",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
  ],
  [
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
  ],
  [
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "porte",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
  ],
  [
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
  ],
  [
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
  ],
  [
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "porte",
    },
    {
      type: "sol",
    },
  ],
  [
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "porte",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
  ],
  [
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
  ],
  [
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
  ],
  [
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "porte",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
  ],
  [
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
  ],
  [
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
  ],
  [
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
  ],
  [
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
  ],
  [
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
  ],
  [
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
  ],
  [
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
  ],
  [
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
  ],
  [
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
  ],
  [
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
    {
      type: "herbe",
    },
  ],
];

export function initCases(): Case[][] {
  const cases = new Array<Case[]>(hauteur);
  for (let y = 0; y < hauteur; y++) {
    cases[y] = new Array<Case>(largeur);
    for (let x = 0; x < largeur; x++) {
      if (y < casesTmp.length && x < casesTmp[y].length) {
        cases[y][x] = casesTmp[y][x];
      } else {
        cases[y][x] = { type: "herbe" };
      }
    }
  }
  return cases;
}
