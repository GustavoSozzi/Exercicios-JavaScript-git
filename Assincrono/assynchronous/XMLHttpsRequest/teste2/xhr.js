let xhr = new XMLHttpRequest();
let documento;

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    //estado da rota, requisição terminada
    //só mostra quando a requição der certa
    //alert("deu certoo")
    documento = xhr.response; //todo texto daquele JSON
    documento = JSON.parse(); //convertendo para JSON
    console.log(documento);
  }
};

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1"); //abrindo e pegando a requisição

xhr.send(); //enviando pro servidor

//FAZENDO REQUISIÇÕES POST

let xhr2 = new XMLHttpRequest();
let document = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};

xhr2.onreadystatechange = function () { //oque faz quando a XHR é executada
    
    if(xhr.readyState == 4){
        console.log(xhr2)
    }
}

xhr2.open("POST", "https://jsonplaceholder.typicode.com/posts")

xhr.send(documento)