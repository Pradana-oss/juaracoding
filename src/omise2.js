let janji = new Promise ((resolve,reject) => {
    setTimeout(() => {
        console.log("pertama promise ini dijalankan");
        reject("ok dari pertama");
    }, 5000)
})

janji.then(response => {
    console.log(response);
    console.log("kemudian hasil dilanjutkan setelah 5 detik");
}).then(response => {
    console.log("setelah 5 detik perintah ini dijalankan")
})
.catch(error => console.log(error));

export default janji