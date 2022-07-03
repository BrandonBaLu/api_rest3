function getClientes(offset) {

    var query  = window.location.search.substring(1);

    //Accede a la session de la pagina
    var username= sessionStorage.getItem("username");
    var password= sessionStorage.getItem("password");

    console.log("Username: " + username)

    var request = new XMLHttpRequest();

    
    //https://8000-brandonbalu-apirest3-6kdpz8c3moh.ws-us47.gitpod.io/clientes/    
    request.open('GET', 'http://127.0.0.1:8000/clientes/?offset='+offset+'&limit=10', true);
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password))  
    request.setRequestHeader("Authorization", "Basic " + btoa("username:user"));
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
        // Almacena la respuesta en una variable, si es 202 es que se obtuvo correctamente
        const response = request.responseText;
        const json = JSON.parse(response);
        console.log("Response " + response);
        console.log("Json " +  json);
        if (request.status === 401 || request.status === 403) {
            alert(json.detail);
            window.location.replace("http://localhost:8080/validate/");
        }
        else if (request.status == 202){
            console.log(request);
            const response = request.responseText;
            const json = JSON.parse(response);
            console.log(json);
            for (let i = 0; i < json.length; i++) {
                var tr = document.createElement('tr');
                var get_clientes = document.createElement('td');
                var nombre = document.createElement('td');
                var email = document.createElement('td');
                

                get_clientes.innerHTML = "<a href='\\clientes\\get\\"+json[i].nombre+"'>Ver</a>";
                nombre.innerHTML = json[i].nombre;
                email.innerHTML = json[i].email;
                

                tr.appendChild(get_clientes);
                tr.appendChild(nombre);
                tr.appendChild(email);
                
                
                tblBody.appendChild(tr);
            }
            tabla.appendChild(tblHead);
            tabla.appendChild(tblBody);
        }
    };
    request.send();
};