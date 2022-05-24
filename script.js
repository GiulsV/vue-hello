// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
// (va bene qualsiasi immagine che prendete dal web e/o avete e/o vi scaricate, è indifferente)


var container = new Vue({

    el: "#container",
    data : {

        message:"Hello World",
        image:"https://picsum.photos/400",
        imgAlt: "image",

    },

})