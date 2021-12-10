const userList = [
    {id: 1, prenom: "Jonathan", age: 40, role: "utilisateur"},
    {id: 2, prenom: "Florence", age: 28, role: "administrateur"},
    {id: 3, prenom: "Morgane", age: 20, role: "utilisateur"},
    {id: 4, prenom: "Rodolphe", age: 30, role: "utilisateur"},
];

//div liste utilisateur
let List = document.getElementById("userList");
//bouton Créer
let btmS = document.getElementById("create");
//bouton Tri par ID
let btmTid = document.getElementById("tId");
//bouton Tri par prénom
let btmTprnm = document.getElementById("tPrenom");
//bouton Tri par age
let btmTage = document.getElementById("tAge");
//barre de recherche
let search = document.getElementById("search");

lecture(userList);

//fonction de création de ligne
function creation(i) {
    let user = document.createElement("ol");
    user.textContent = "Id : " + userList[i].id + 
            "; Prenom : " + userList[i].prenom + 
            "; Age : " + userList[i].age + "; Role : " 
            + userList[i].role + " ";
            List.appendChild(user);
            if(userList[i].role == "utilisateur") {
                user.style.color = "blue";
            } else {
                user.style.color = "red";
            }
            user.addEventListener("mouseenter", function() {
                user.style.backgroundColor = "lightgrey";
            })
            user.addEventListener("mouseleave", function() {
                user.style.backgroundColor = "white";
            })
            let btm = document.createElement("button");
            btm.innerHTML = "Supprimer";
            btm.name = "supprimer";
            user.appendChild(btm);
            btm.addEventListener("click", event => {
                List.removeChild(user);
            })
    
}

//lecture et affiche du tableau de base
function lecture(list) {
    for(let i = 0; i < list.length; i++) {
        creation(i);
    };
}

//création d'une nouvelle ligne
btmS.addEventListener("click", event => {
    event.preventDefault();
    let p= document.getElementById("Prenom");
    let a = document.getElementById("Age");
    let r = document.getElementById("Role");
    let c = userList.length;
    let form = {id: c+1, prenom: p.value, age: a.value, role: r.value};
    userList.push(form);
    creation(c);
})

//tri par id
btmTid.addEventListener("click", event => {
    userList.sort((a,b) => (a.id - b.id));
    List.innerHTML="";
    lecture(userList);
    /*btmTid.addEventListener("click", event => {
        userList.reverse;
    })*/
})

//tri par prenom
btmTprnm.addEventListener("click", event => {
    userList.sort((a,b) => a.prenom.localeCompare(b.prenom));
    List.innerHTML="";
    lecture(userList);
})

//tri par age
btmTage.addEventListener("click", event => {
    userList.sort((a,b) => a.age - b.age);
    List.innerHTML="";
    lecture(userList);
})

//recherche (pas finie)
search.addEventListener("input", event => {
    let searchValue = document.getElementById("search").value;
    let newUserList = userList.filter(
        user => user.age == searchValue
        || user.prenom.includes(searchValue)
        || user.role.includes(searchValue)
        || user.id == searchValue
    );
    List.innerHTML="";
    lecture(newUserList)
})