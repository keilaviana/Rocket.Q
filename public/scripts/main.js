
import Modal from './modal.js'

const modal = Modal()

//Pegar todos os botões que existe com a classe 'check'
const checkButtons = document.querySelectorAll(".actions a.check")

// for (let button of checkButtons){
//     button.addEventListener("click", event =>{
//         //abrir modal
//         modal.open()
//     })
// }


checkButtons.forEach(button => {
    //adicionar a escuta
    button.addEventListener("click", event =>{
        //abrir modal
        modal.open()
    })
})
//Pegar quando o marcar como lido for clicado


