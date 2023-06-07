export class etudiants{
     idEtudiant: number ;
     nomE :String; 
     prenomE :String ; 
     option : String ; 
     date_naissance : Date ;
     picture : String ;  
     equipe: [{
          idEquipe:number; 
          nomEquipe:String;
          niveau:String;
          logo:String;
          fav:number;
     }] ; 
     contrat :[
        {
          idContrat:number;
          dateDebutContrat:Date;
          dateFinContrat:Date; 
          specialite:String;
          archive: boolean; 
          montantContrat:number; 
        }  
     ] ;
     departement:{
          idDepart:number;
          nomDepart:String;
               
     };
  
}