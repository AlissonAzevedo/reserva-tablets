'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const cancelModal = () => document.getElementById('modal')
    .classList.remove('active')

document.getElementById('cadastrarReserva')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('cancelModal')
    .addEventListener('click', cancelModal)


const Agendamento ={
    add(agendamento){
        Agendamento.all.push(agendamento)
        App.reload()
    },
    remove(index){
        Agendamento.all.splice(index, 1)
        App.reload()
    },
    
}
    


const Utils = {
    formatdate(date){
        const splittedDate = date.split("-")
        return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
    },
    formathr(time){
        //const 
    }
}

const Form = {
    name:document.querySelector('input#name'),
    email:document.querySelector('input#email'),
    value:document.querySelector('input#value'),
    nameClass:document.querySelector('input#nameClass'),
    timeOpen:document.querySelector('input#time-open'),
    timeExit:document.querySelector('input#timeExit'),
    date:document.querySelector('input#date'),

    getValues(){
        return{
            name: Form.name.value,
            email: Form.email.value,
            value: Form.value.value,
            nameClass: Form.nameClass.value,
            timeOpen: Form.timeOpen.value,
            timeExit: Form.timeExit.value,
            date: Form.date.value,
        }
    },

    validateFields(){
        const {name, email, value, nameClass, timeOpen, timeExit, date} = getValues()
        if(name.trim() === "" || email.trim() === "" || value.trim() === "" || nameClass.trim() === "" || timeOpen.trim() === "" || timeExit.trim() === "" || date.trim() === ""){
            throw new Error("Por favor, preencha todos os campos")
        }
    },

    submit(event){
        event.preventDefault()
        try{
            //verficar se todas as informações foram preenchidas
            Form.validateFields()
        }catch(error){
            alert(error.message)
        }
    }
}
