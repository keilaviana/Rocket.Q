export default function Modal(){

    const canceButton = document.querySelector('.button.cancel')
    canceButton.addEventListener("click", close)

    function open(){
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