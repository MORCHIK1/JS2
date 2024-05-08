let products = [
    {
        id: 1,
        name: "Battle axe",
        category: "Axes",
        cost: "100",
        image: "media/battle_axe_weapon_elden_ring_wiki_guide_200px.webp"
    },
    {
        id: 2,
        name: "Iron Cleaver",
        category: "Axes",
        cost: "300",
        image: "media/iron_cleaver_weapon_elden_ring_wiki_guide_200px.png"
    },
    {
        id: 3,
        name: "Glaive",
        category: "Halberd",
        cost: "800",
        image: "media/glaive_halberds_elden_ring_wiki_guide_200px.webp"
    },
    {
        id: 4,
        name: "Lucerne",
        category: "Halberd",
        cost: "770",
        image: "media/lucerne_halberd_weapon_elden_ring_wiki_guide_200px.webp"
    },
    {
        id: 5,
        name: "Blasphemous Blade",
        category: "Greatsword",
        cost: "2000",
        image: "media/blasphemous_blade_weapon_elden_ring_wiki_guide_200px.webp"
    },

    {
        id: 6,
        name: "Claymore",
        category: "Greatsword",
        cost: "500",
        image: "media/claymore_weapon_elden_ring_wiki_guide_200px.webp"
    },

];

function loadProducts(category) {
    let filterFunction;
    filterFunction = category ? (product) => product.category === category : () => true;

    let productsFiltered = products.filter(filterFunction);
    let productsHtml = '<div class="container"> <div class="row">';

    for (let i = 0; i <productsFiltered.length; i++) {
        productsHtml += `<div class="col">
                            <div class="card" style="width: 20rem;">
                                <img class="card-img-top" src="${productsFiltered[i].image}" alt="Card image cap">
                                <div class='card-elem' id='${productsFiltered[i].id}'>
                                    <h2 align="center">${productsFiltered[i].name}</h2> 
                                    <p class="card-text">Price: ${productsFiltered[i].cost}$</p>
                                    <a href="#" data-name=${productsFiltered[i].name} data-price="${productsFiltered[i].cost}" class="add-to-cart btn btn-primary">Add to cart</a>
                                </div>
                            </div>
                        </div>`;

        if ((i+1) % 2 == 0 ) {
            productsHtml += '</div><div class="row">';
        }
    }
    productsHtml+="</div>";

    let productsContainer = document.getElementById('container-id');
    productsContainer.innerHTML = productsHtml;
}

loadProducts();

mybutton = document.getElementById("upButton");

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > (document.body.scrollHeight/3) || document.documentElement.scrollTop > (document.body.scrollHeight/3)) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
    document.documentElement.scrollTop = 0;
}
mybutton.addEventListener("click", topFunction);