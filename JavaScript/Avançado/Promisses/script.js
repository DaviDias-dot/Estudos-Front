let users = ["Adriano", "Marcia", "josé"];

function insertUser(nome) {
    let promise = new Promise(function(resolve, reject) {

        setTimeout(() => {
            users.push(nome);
            let erro = false;
            if (!erro) {
                resolve();
            } else {
                reject({ msg: "Erro" })
            }
        }, 1000);
    })
    return promise;
}

function listUser() {
    console.log(users);
}

// insertUser("Davi").then(listUser).catch((erro) => {
//     console.log(erro.msg)
// });

async function exe() {
    await insertUser("Davi");
    listUser();
}

exe();