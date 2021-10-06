// exo1


// - ## Créer une variable qui recoit un nombre via un prompt.
//   - ## A l'aide d'un switch, affichez si le nombre est paire ou impaire:
//     - ### Ex: 2 est nombre paire.

let nombre = Number(prompt("recois un nombre ?"));
switch (nombre%2 ==0) {
    case true:
    console.log('chiffre paire');
        
        break;

    default:
        console.log('chiffre impaire');
        break;
}

// exo2

// - ## Créer une variable qui recoit un nombre entre 1 et 12 via un prompt.
// - ## A l'aide d'un switch, affichez le mois qui correspond au nombre choisi.
//   - ## exemple: mois 1 => "Vous etes en Janvier"

let nombre = Number(prompt("choisi un nombre entre 1 et 12 ?"));
switch (nombre) {
    case 1:
        alert('vous etes en janvier');
        break;

        case 2:
            alert('vous etes en fevrier');

        break;

        case 3:
            alert('vous etes en mars');
        break;

        case 4:
            alert('vous etes en avril');
        break;
         
        case 5:
            alert('vous etes en mai')
            
        break;

        case 6:
            alert('vous etes en juin');
        break;

        case 7:
            alert('vous etes en juillet');

        break;

        case 8:
            alert('vous etes en aout');
        break;
        
        case 9:
            alert('vous etes en septembre');
        break;

        case 10:
            alert('vous etes en octobre');
        break;

        case 11:
            alert('vous etes en novembre');
        break;

        case 12:
            ('vous etes en decembre');
        break;
        

    default:
        alert('aucune donnée');
        break;
}