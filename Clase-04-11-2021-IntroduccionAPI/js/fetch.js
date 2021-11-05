let url_api = 'https://rickandmortyapi.com/api/character'
let api = fetch(url_api)

let contenedor_pagina = document.querySelector("#data_personajes")


api.then(res => res.json())
    .then(datico_pepe => {


        for (const data_personaje of datico_pepe.results) {
            console.log(data_personaje.name)
        }

        //     if (datico_pepe.gender == "Male") {
        //         datico_pepe.gender = "Masculino"
        //     }

        //     contenedor_pagina.innerHTML = `
        //     <div class="card" style="width: 18rem;">
        //     <img src="${datico_pepe.image}" class="card-img-top" alt="...">
        //     <div class="card-body">
        //       <h5 class="card-title">${datico_pepe.name}</h5>
        //       <p class="card-text">${datico_pepe.gender}</p>
        //     </div>
        //   </div>
        //     `
    }).catch(error => console.log(error))