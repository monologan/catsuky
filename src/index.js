//cambia lo que tiene escrito el boton.
//home

import _ from 'lodash'

const boton = document.getElementById('buy-now')

boton.addEventListener('click', () => {
    if (boton.innerHTML === 'comprar ahora') {
        boton.innerHTML = 'Gracias por tu compra'
    } else {
        boton.innerHTML = 'comprar ahora'
    }
})
//end

//funcion que agrega y elimina cards
//home
const renderCatCard = (cardIndex) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const image = document.createElement('img')
    image.src = 'https://cataas.com/cat'
    image.alt = 'Catsuky'

    card.appendChild(image)
    cardCatalogue.appendChild(card)

    //agrego el indicador de indice en la card
    const indexElement = document.createElement('p');
    card.appendChild(indexElement);
    indexElement.innerHTML = cardIndex + 1
    //agrego la funcionalidad de eliminar la card al hacer click
    card.addEventListener('click', () => {
        card.remove()
    })

}

//end

const cardCatalogue = document.getElementsByClassName('catalogue-content')[0]
const addButton = document.getElementById('add-cat-button')
addButton.addEventListener('click',renderCatCard)
//empieza a cargar
//muestra un indicador de que esta cargando
//una vez que carga muestra los elementos
const getCatCards = () => {
    //traer las cards de gatos de la base de datos

    setTimeout(() => {

        const loader = document.getElementById('catalogue-loader')

        loader.style.display = 'none'

        const cardCats = [1, 2, 3]
        for (let i = 0; i < cardCats.length; i++) {
            renderCatCard(i)

        }
    }, 5000)


}

function testLodash() {
    const tittle =document.getElementById('tittle').innerHTML
    const result = _.upperCase(tittle)
    console.log(result);
}
//cargar las cards de gatos y mostrarlas en pantalla.
getCatCards()
testLodash()
console.log(1 + 5);//3