import * as $ from "jquery";

type Case = {
  type: string;
};
let monde: Case[][] = [
  [
    {
      type: "mur",
    },
    {
      type: "vide",
    },
  ],
  [
    {
      type: "vide",
    },
    {
      type: "mur",
    },
  ],
];

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
