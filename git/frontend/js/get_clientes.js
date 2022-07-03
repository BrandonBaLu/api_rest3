function getClientes() {

    var query  = window.location.search.substring(1);
    console.log("Query " + query)

    //Conectar con el Backend
    var request = new XMLHttpRequest();

        
    request.open('GET', 'http://127.0.0.1:8000/clientes/', true);
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json");  

    const  tabla   = document.getElementById("tabla_clientes");

    var tblBody = document.createElement("tbody");
    var tblHead = document.createElement("thead");

    tblHead.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
        </tr>`;

    request.onload = () => {
        
        const response = request.responseText;
        const json = JSON.parse(response);
        
        console.log("Response " + response);
        console.log("Json " +  json);
        
        for (let i = 0; i < json.length; i++) {
            var tr = document.createElement('tr');
            var id_cliente = document.createElement('td');
            var nombre = document.createElement('td');
            var email = document.createElement('td');

            id_cliente.innerHTML = json[i].id_cliente;
            nombre.innerHTML = json[i].nombre;
            email.innerHTML = json[i].email;
                
            tr.appendChild(id_cliente);
            tr.appendChild(nombre);
            tr.appendChild(email);
                
            tblBody.appendChild(tr);
            }
            tabla.appendChild(tblHead);
            tabla.appendChild(tblBody);
        }
    request.send();
};