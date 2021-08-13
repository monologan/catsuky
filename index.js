const boton = document.getElementById('buy-now')

boton.addEventListener('click', () => {
    if (boton.innerHTML === 'comprar ahora') {
        boton.innerHTML = 'Gracias por tu compra'
    } else {
        boton.innerHTML = 'comprar ahora'

    }


})

const cards = document.querySelectorAll('.card')
console.log(cards);

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    const indexElement = document.createElement('p');
    card.appendChild(indexElement);
    indexElement.innerHTML = i + 1

    card.addEventListener('click', () => {
        card.remove()
    })
    
}