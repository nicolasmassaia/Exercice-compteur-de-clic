let app = {

  init: function() {
    console.log('demarrage de l\'application');
    let button = document.getElementById('button');

    let compteur = document.querySelector('#counter');


    button.addEventListener('click',

      function() {
        console.log('il y a eu un click');
                
        //récupérons la valeur de notre compteur
        let compteurValeur = compteur.innerHTML;
        console.log(compteurValeur);
        //convertissons compteurValeur (qui est une string) en nombre entier
        compteurValeur = parseInt(compteurValeur);
        //incrémenton la valeur maintenant que c'est un nombre
        compteurValeur++;
        console.log('Après incrémentation :'+compteurValeur);
        compteur.innerHTML = compteurValeur;


      }
    );
        
    //verifion ce qu'il y a dans l'élément que nous avons ciblé
    console.log(button); 
  }

};

app.init();