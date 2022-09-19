const tabla = document.querySelector('#stock1');

function cargarStock1() {
    fetch('stock.json')
        .then(respuesta => respuesta.json())
        .then(stock => {
            stock.forEach(usuario => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${usuario.id}</td>
                    <td>${usuario.name}</td>
                    <td>${usuario.medida}</td>
                    <td>${usuario.precio}</td>
                    <td>${usuario.color}</td>
                    <td>${usuario.rollo}</td>
                `;
                tabla.appendChild(row);


        // +IMAGEN
                // const card = document.createElement('card');
                // card.classList = 'card';
                // card.innerHTML += `
                //                 <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style="width:100%">
                //                     <div class="container">
                //                         <h4><b>${usuario.id}</b></h4>
                //                         <p>${usuario.name}</p>
                //                     </div>
                            
                //             `;

                // tabla.appendChild(card);

            });
        })
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarStock1();