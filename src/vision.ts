import * as $ from "jquery";
import { Monde, tailleCase } from "monde-MAIN";

export function afficherMondeVisible(
  monde: Monde,
  portee: number,
  centreX: number,
  centreY: number
) {
  // Transformation des [x, y] du tableau de visibilité en [x, y] du monde
  const conversionXMonde = (x: number) => centreX + x - portee;
  const conversionYMonde = (y: number) => centreY + y - portee;

  // Étape 1 : préparation du tableau qui dira si les cases autour du joueur sont visibles (true) on pas (false)
  // Si portee vaut 3, on regarde de "portee - 3" à "portee + 3", donc 7 cases, sur l'axe X et l'axe Y.
  // On va aussi avoir besoin d'un tableau de même dimension, indiquant où sont les murs
  const tailleTableau = portee * 2 + 1;
  const tableauVisibilite = new Array<boolean[]>(tailleTableau);
  const tableauMurs = new Array<boolean[]>(tailleTableau);
  for (let y = 0; y < tailleTableau; y++) {
    tableauVisibilite[y] = new Array<boolean>(tailleTableau);
    tableauMurs[y] = new Array<boolean>(tailleTableau);
    const yMonde = conversionYMonde(y);
    for (let x = 0; x < tailleTableau; x++) {
      tableauVisibilite[y][x] = false;
      const xMonde = conversionXMonde(x);
      tableauMurs[y][x] =
        !monde.caseValide(xMonde, yMonde) ||
        monde.caseBloqueVision(xMonde, yMonde);
    }
  }

  // Étape 2 : définition du centre, c'est égal à la portée.
  // Exemple, pour une portée de 3, notre tableau fait 7x7 cases, le centre est à l'indice 3
  // (c'est-à-dire la quatrième case)
  // => - - - x - - -
  //    0 1 2 3 4 5 6
  // C'est la même valeur sur l'axe X et l'axe Y
  const centre = portee;

  // Étape 3 : on parcourt chaque cases en bordure de la zone visible maximale
  // (pas la totalité du tableau, juste les bordures)
  for (let y = 0; y < tailleTableau; y++) {
    // Étape 4a : pour chaque case de bordure de gauche (x=0), on tracera une ligne imaginaire vers le centre
    // pour regarder, case après case, si elle est visible. Ça se passe dans "chercherCasesVisiblesSurLigne"
    chercherCasesVisibles(
      tableauMurs,
      tableauVisibilite,
      centre,
      centre,
      0,
      y,
      true
    );
    // Étape 4b : même chose pour la bordure de droite (x=tailleTableau-1)
    chercherCasesVisibles(
      tableauMurs,
      tableauVisibilite,
      centre,
      centre,
      tailleTableau - 1,
      y,
      true
    );
  }

  for (let x = 0; x < tailleTableau; x++) {
    // Étape 4c : même chose pour la bordure du haut (y=0)
    chercherCasesVisibles(
      tableauMurs,
      tableauVisibilite,
      centre,
      centre,
      x,
      0,
      false
    );
    // Étape 4d : même chose pour la bordure du bas (y=tailleTableau-1)
    chercherCasesVisibles(
      tableauMurs,
      tableauVisibilite,
      centre,
      centre,
      x,
      tailleTableau - 1,
      false
    );
  }

  // Étape 5 : les appels à "chercherCasesVisiblesSurLigne" ont mis toutes les cases visible à "true"
  // On n'a plus qu'à indiquer avec la classe CSS "inconnu" ce qu'il faut afficher ou pas.
  // Commençons par tout rendre invisible
  $(".case").addClass("inconnu");

  // Étape 6 : puis on parcourt les cases dans la zone de visibilité maximale
  // et on enlève le CSS "inconnu" si c'est visible
  for (let y = 0; y < tailleTableau; y++) {
    const yMonde = conversionYMonde(y);
    for (let x = 0; x < tailleTableau; x++) {
      const xMonde = conversionXMonde(x);
      if (tableauVisibilite[y][x]) {
        $(`#case_${xMonde}_${yMonde}`).removeClass("inconnu");
      }
    }
  }
}

function chercherCasesVisibles(
  tableauMurs: boolean[][],
  tableauVisibilite: boolean[][],
  centreX: number,
  centreY: number,
  extremiteX: number,
  extremiteY: number,
  avancerSurX: boolean
) {
  // On va tracer une ligne imaginaire partant du centre de la case centrale, allant jusqu'au centre de la case à l'extrémité
  // Exemple:
  // o o o o o o x
  // o o o o o / o
  // o o o o / o o
  // o o o x o o o
  // o o o o o o o
  // o o o o o o o
  // o o o o o o o

  // Pour plus de précision, on convertit nos coordonnées de cases en pixels
  const centreXPxl = trouverCentreEnPixels(centreX);
  const centreYPxl = trouverCentreEnPixels(centreY);
  const extremiteXPxl = trouverCentreEnPixels(extremiteX);
  const extremiteYPxl = trouverCentreEnPixels(extremiteY);

  if (avancerSurX) {
    chercherCasesVisiblesSurLigneX(
      tableauMurs,
      tableauVisibilite,
      centreXPxl,
      centreYPxl,
      extremiteXPxl,
      extremiteYPxl
    );
  } else {
    chercherCasesVisiblesSurLigneY(
      tableauMurs,
      tableauVisibilite,
      centreXPxl,
      centreYPxl,
      extremiteXPxl,
      extremiteYPxl
    );
  }
}

function chercherCasesVisiblesSurLigneX(
  tableauMurs: boolean[][],
  tableauVisibilite: boolean[][],
  centreXPxl: number,
  centreYPxl: number,
  extremiteXPxl: number,
  extremiteYPxl: number
) {
  // Formule mathématique de la pente : c'est (y2 - y1) / (x2 - x1). C'est utile pour trouver un point sur une droite.
  const pente = (extremiteYPxl - centreYPxl) / (extremiteXPxl - centreXPxl);

  // Maintenant, on va "avancer" le long de la ligne en partant du joueur (le centre), de pixel en pixel
  // et regarder sur quelle case on se trouve
  for (let xabs = 0; xabs < Math.abs(extremiteXPxl - centreXPxl); xabs += 5) {
    const x =
      centreXPxl < extremiteXPxl ? centreXPxl + xabs : centreXPxl - xabs;
    // pente = (y - centreYPxl) / (x - centreXPxl)
    // donc y = pente * (x - centreXPxl) + centreYPxl
    const y = pente * (x - centreXPxl) + centreYPxl;

    if (!verifierCase(tableauMurs, tableauVisibilite, x, y)) {
      // Si c'est une case de mur, toutes les cases suivantes seront cachées,
      // donc plus la peine de continuer à marquer les cases visibles sur cette ligne.
      return;
    }

    // Sinon, la case a été marquée comme visible, et on continue sur la ligne
    // (à noter qu'on peut repasser plusieurs fois sur la même case, c'est pas gênant ça marche quand même)
  }
}

function chercherCasesVisiblesSurLigneY(
  tableauMurs: boolean[][],
  tableauVisibilite: boolean[][],
  centreXPxl: number,
  centreYPxl: number,
  extremiteXPxl: number,
  extremiteYPxl: number
) {
  // Pour éviter une division par 0 lorsque le joueur est sur la même ligne que la case d'extrémité,
  // on inverse la pente et on parcourt les pixels sur l'axe Y plutôt que X
  const penteInversee =
    (extremiteXPxl - centreXPxl) / (extremiteYPxl - centreYPxl);

  // On "avance" cette fois sur Y
  for (let yabs = 0; yabs < Math.abs(extremiteYPxl - centreYPxl); yabs += 5) {
    const y =
      centreYPxl < extremiteYPxl ? centreYPxl + yabs : centreYPxl - yabs;
    const x = penteInversee * (y - centreYPxl) + centreXPxl;
    if (!verifierCase(tableauMurs, tableauVisibilite, x, y)) {
      return;
    }
  }
}

// La fonction verifierCase renvoie "true" si la case est visible, sinon "false"
function verifierCase(
  tableauMurs: boolean[][],
  tableauVisibilite: boolean[][],
  xPxl: number,
  yPxl: number
): boolean {
  const caseX = trouverCaseContenantPixel(xPxl);
  const caseY = trouverCaseContenantPixel(yPxl);
  tableauVisibilite[caseY][caseX] = true;
  return !tableauMurs[caseY][caseX];
}

function trouverCentreEnPixels(indiceCase: number): number {
  // Un peu de maths ... on veut passer de coordonnées "cases" en coordonnées "pixels".
  // On va donc multiplier par "tailleCase", puis ajouter la moitié de "tailleCase" pour arriver au centre de la case.
  // Example, si tailleCase vaut 10 et je cherche le centre de la 2e case, ça fera: 10*2 + 5 = 25
  // ------------------------------
  // |        |         |         |
  // |        |         |    x    |
  // |        |         |         |
  // 1        10        20   25
  return indiceCase * tailleCase + tailleCase / 2;
}

function trouverCaseContenantPixel(pixel: number): number {
  // Cette fonction fait l'inverse de la précédente
  return Math.floor(pixel / tailleCase);
}
