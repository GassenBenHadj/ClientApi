export interface Visiteur {
  id: Number;
  nom: string;
  discriminator:string;

}
export interface Moderateur extends Visiteur{
  id: Number;
  nom: string;
  discriminator:string;
}
export interface Auteur extends Visiteur {
  id: Number;
  nom: string;
  discriminator:string;
  palmares:string;
  pang:Number;
}
export interface Utilisateur extends Visiteur{
  id: Number;
  nom: string;
  discriminator:string;
  profil:string;
  sessionsParJour:Number;
}
