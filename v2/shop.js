const searchInput = document.querySelector('.search');
const cardContainer = document.querySelectorAll('.add');
const remove = document.querySelectorAll('.remove');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();


    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        const heading = document.querySelector('.section-title');

        const productName = product.querySelector('h3').innerText.toLowerCase();
        if (searchTerm.includes(Symbol) || searchTerm.includes(Number)) {
            alert('Please enter a valid search term (at least 3 characters and not a number).');
            product.style.display = 'block';
        } else {

            if (productName.includes(searchTerm)) {
                product.style.display = 'block';

            } else {
                heading.style.display = 'none';
                product.style.display = 'none';
            }
        }
    });

    remove.forEach(btn => {
        btn.style.display = 'block';
    });
    cardContainer.forEach(card => {
        card.style.display = 'block';
    });

})


let cart = [];
let counter = 0;

cardContainer.forEach(card => {
    card.addEventListener('click', (e) => {
        counter+=1;
        if (e.target.classList.contains('remove')) return;

        const productCard = e.currentTarget;
        console.log(productCard);
        cart.push(productCard);
        console.log(cart);
    })
})

remove.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const productCard = e.target.closest('.product-card');
        const index = cart.indexOf(productCard);
        if (index !== -1) {
            cart.splice(index, 1);
        }
        productCard.remove();
    })
})