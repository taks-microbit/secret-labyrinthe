import { Case } from "types/case";

const largeur = 20;
const hauteur = 20;

const casesTmp: Case[][] = [
  [
    /* 1 */
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "porte",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
  ],
  [
    /* 2 */
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
  ],
  [
    /* 3 */
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "porte",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
  ],
  [
    /* 4 */
    {
      type: "herbe",
      objets: ["clef"],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
  ],
  [
    /* 5 */
    {
      type: "herbe",
      objets: ["clef", "rhum"],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
  ],
  [
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "porte",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
  ],
  [
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "porte",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
  ],
  [
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
  ],
  [
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
  ],
  [
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "porte",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
  ],
  [
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
  ],
  [
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
  ],
  [
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
  ],
  [
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "sol",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
  ],
  [
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "mur",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
  ],
  [
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
  ],
  [
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
  ],
  [
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
  ],
  [
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
  ],
  [
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
    },
    {
      type: "herbe",
      objets: [],
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
        cases[y][x] = { type: "herbe", objets: [] };
      }
    }
  }
  return cases;
}
