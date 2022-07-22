import * as $ from "jquery";

export class ZoneTexte {
  private textes: string[] = [];
  public afficher(): void {
    for (const texte of this.textes) {
      $("#zoneTexte").append(`<p>
          ${texte}
        </p>
      `);
    }
  }
  public ajoutTexte(texte: string) {
    this.textes.push(texte);
  }
}
