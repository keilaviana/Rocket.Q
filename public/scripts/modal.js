export default function Modal (){
    function open(){
        //funcionalidade de atribuir a classe active para a modal
        document.querySelector('.modal-wrapper').classList.add("active")
    }
    function close(){
        document.querySelector('.modal-wrapper').classList.remove("active")
    }

    return{
        open,
        close
    }
}