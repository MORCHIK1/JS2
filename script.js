let products = [
    {
        id: 1,
        name: "Battle axe",
        category: "Axes",
        description: "A thick, heavy blade attached to a handle. A versatile, standard weapon",
        image: "media/battle_axe_weapon_elden_ring_wiki_guide_200px.webp"
    },
    {
        id: 2,
        name: "Iron Cleaver",
        category: "Axes",
        description: "Fairly large iron cleaver",
        image: "media/iron_cleaver_weapon_elden_ring_wiki_guide_200px.png"
    },
    {
        id: 3,
        name: "Glaive",
        category: "Halberd",
        description: "Weapon comprised of a sharp blade affixed to a long grip.",
        image: "media/glaive_halberds_elden_ring_wiki_guide_200px.webp"
    },
    {
        id: 4,
        name: "Lucerne",
        category: "Halberd",
        description: "This polearm features a hard, sharpened beak-like spike attached to its head, designed to pierce armor.",
        image: "media/lucerne_halberd_weapon_elden_ring_wiki_guide_200px.webp"
    },
    {
        id: 5,
        name: "Blasphemous Blade",
        category: "Greatsword",
        description: "Sacred sword of Rykard, Lord of Blasphemy.",
        image: "media/blasphemous_blade_weapon_elden_ring_wiki_guide_200px.webp"
    },

    {
        id: 6,
        name: "Claymore",
        category: "Greatsword",
        description: "A large sword with a long, straight blade.",
        image: "media/claymore_weapon_elden_ring_wiki_guide_200px.webp"
    },

];



function loadProducts(category) {
    let filterFunction;
    filterFunction = category ? (product) => product.category === category : () => true;

    let productsFiltered = products.filter(filterFunction);
    let productsHtml = '<div class="container">';

    for (let i = 0; i < productsFiltered.length; i++) {
        productsHtml += `<div class='card-elem' id='${productsFiltered[i].id}'>
                            <h2>${productsFiltered[i].name}</h2> 
                            <img size='30%' src='${productsFiltered[i].image}'/> 
                            <p><button class="active_desc">INFO</button></p> <p class="description">${productsFiltered[i].description}</p>
                        </div>`;

        if ((i+1) % 2 == 0 ) {
            productsHtml += '</div><div class="container">';
        }
    }


    let productsContainer = document.getElementById('container-id');
    productsContainer.innerHTML = productsHtml;
}

loadProducts();

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('active_desc')) {
        
        let description = event.target.parentElement.nextElementSibling;
        let close = document.createElement('button');

        makeModalDescription(description);
        makeCloseButton(close);

        close.addEventListener('click', function () {
            description.style.display = 'none';
        });
        
        description.appendChild(close);
    }
});

function makeModalDescription(description) {
    description.style.display = 'block';
    description.style.position = 'fixed';
    description.style.top = '40%';
    description.style.left = '50%';
    description.style.transform = 'translate(-50%, -50%)';
    description.style.backgroundColor = 'white';
    description.style.padding = '40px';
    description.style.border = '2px solid black';
    description.style.borderRadius = '60px';
}

function makeCloseButton(close){
    close.innerHTML = `X`;
    close.style.position = 'fixed';
    close.style.top = '6%';
    close.style.right = '4%';
    close.style.color = 'red';
    close.style.border = 'none';
    close.style.cursor = 'pointer';
    close.style.background = 'none';
    close.style.width = '30px';
}