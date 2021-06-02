let users = ["Adriano", "Marcia", "josé"];

function insertUser(nome, callback) {
    setTimeout(() => {
        users.push(nome);
        callback();
    }, 1000);
}

function listUser() {
    console.log(users);
}

insertUser("Davi", listUser)