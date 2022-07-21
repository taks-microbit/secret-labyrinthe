import * as $ from "jquery";

type Case = {
  type: string;
};
const monde: Case[][] = [
  [
    /* Ligne 1: */ { type: "mur" },
    {
      type: "sol",
    },
    {
      type: "mur",
    },
    { type: "mur" },
    { type: "mur" },
    { type: "mur" },
  ],
  [
    /* ligne 2: */
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    {
      type: "sol",
    },
    { type: "sol" },
    { type: "sol" },
    { type: "mur" },
  ],
  [
    /* ligne 3: */
    {
      type: "mur",
    },
    {
      type: "mur",
    },
    {
      type: "sol",
    },
    { type: "mur" },
    { type: "sol" },
    { type: "mur" },
    { type: "mur" },
    { type: "mur" },
    { type: "mur" },
    { type: "mur" },
    { type: "mur" },
    { type: "mur" },
    { type: "mur" },
  ],
  [
    /* ligne 4: */
    { type: "vide" },
    { type: "vide" },
    { type: "vide" },
    { type: "mur" },
    { type: "sol" },
    { type: "sol" },
    { type: "sol" },
    { type: "sol" },
    { type: "sol" },
    { type: "sol" },
    { type: "sol" },
    { type: "sol" },
    { type: "mur" },
  ],
  [
    /* ligne 5: */
    { type: "vide" },
    { type: "vide" },
    { type: "vide" },
    { type: "mur" },
    { type: "sol" },
    { type: "mur" },
    { type: "mur" },
    { type: "mur" },
    { type: "mur" },
    { type: "sol" },
    { type: "mur" },
    { type: "mur" },
    { type: "mur" },
  ],
  [
    /* ligne 6: */
    { type: "vide" },
    { type: "vide" },
    { type: "vide" },
    { type: "mur" },
    { type: "sol" },
    { type: "mur" },
    { type: "sol" },
    { type: "sol" },
    { type: "mur" },
    { type: "sol" },
    { type: "mur" },
    { type: "vide" },
    { type: "vide" },
  ],
  [
    /* ligne 7: */
    { type: "vide" },
    { type: "vide" },
    { type: "vide" },
    { type: "mur" },
    { type: "sol" },
    { type: "mur" },
    { type: "sol" },
    { type: "mur" },
    { type: "mur" },
    { type: "mur" },
    { type: "mur" },
    { type: "mur" },
    { type: "vide" },
  ],
  [
    /* ligne 8: */
    { type: "vide" },
    { type: "vide" },
    { type: "vide" },
    { type: "mur" },
    { type: "sol" },
    { type: "mur" },
    { type: "sol" },
    { type: "mur" },
    { type: "sol" },
    { type: "mur" },
    { type: "sol" },
    { type: "mur" },
    { type: "mur" },
  ],
  [
    /* ligne 9: */
    { type: "vide" },
    { type: "vide" },
    { type: "vide" },
    { type: "mur" },
    { type: "sol" },
    { type: "mur" },
    { type: "sol" },
    { type: "sol" },
    { type: "sol" },
    { type: "sol" },
    { type: "sol" },
    { type: "sol" },
    { type: "mur" },
  ],
];

const hauteur = monde.length;
const largeur = Math.max(...monde.map((ligne) => ligne.length));
$("#plateau").css("width", largeur * 64);
$("#plateau").css("height", hauteur * 64);

function afficher() {
  let x = 0;
  let y = 0;
  for (const ligne of monde) {
    x = 0;
    for (const caze of ligne) {
      $("#plateau").append(`
        <div class="case ${caze.type}" style="top: ${y * 64}px; left: ${
        x * 64
      }px;">
        </div>
      `);
      x++;
    }
    y++;
  }
}

afficher();
