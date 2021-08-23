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