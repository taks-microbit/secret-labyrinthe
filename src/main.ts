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
  let casesHTML = "";
  for (const ligne of monde) {
    x = 0;
    for (const caze of ligne) {
      casesHTML += `
        <div class="case ${caze.type}" style="top: ${y * 64}px; left: ${
        x * 64
      }px;">
        </div>
      `;
      x++;
    }
    y++;
  }
  const plateau = document.getElementById("plateau");
  plateau.innerHTML = casesHTML;
}

afficher();
