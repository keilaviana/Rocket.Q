export default function Modal(){

    const modalWrapper =document.querySelector('.modal-wrapper')
    const canceButton = document.querySelector('.button.cancel')

    canceButton.addEventListener("click", close)

    function open(){
        modalWrapper.classList.add("active")
    }
    function close(){
        modalWrapper.classList.remove("active")
    }

    return{
        open,
        close
    }
}