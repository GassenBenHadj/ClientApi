export interface Visiteur {
  Id: number;
  Nom: string;
  Discriminator:string;

}
export interface Moderateur extends Visiteur{
  Id: number;
  Nom: string;
  Discriminator:string;
}
export interface Auteur extends Visiteur {
  Id: number;
  Nom: string;
  Discriminator:string;
  Palmares:string;
  Rang:number;
}
export interface Utilisateur extends Visiteur{
  Id: number;
  Nom: string;
  Discriminator:string;
  Profil:string;
  SessionsParJour:number;
}
