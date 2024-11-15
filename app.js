let news = document.querySelector('.news');
let best = document.querySelector('.best');
let frees = document.querySelector('.frees');


let images1 = [
  "https://imagessl0.casadellibro.com/a/l/s5/00/9788414339800.webp",
  "https://imagessl7.casadellibro.com/a/l/s5/07/9788419868107.webp",
  "https://imagessl0.casadellibro.com/a/l/s5/50/9780571334650.webp",
  "https://imagessl3.casadellibro.com/a/l/s5/03/9788420432403.webp"
];

let images2 = [
  "https://imagessl0.casadellibro.com/a/l/s5/10/9788441443310.webp",
  "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ4N7N3T5B8oUNV278Digg3YwrFNV7FPZW76IcOhy2Ko0YMBYkYO4wX7PaQPZaBsZarhBrKneF089GX4iTg0yzUkQyaWgWNWAqx_RrCaZTL", 
  "https://imagessl6.casadellibro.com/a/l/s5/86/9788419266286.webp", "https://imagessl1.casadellibro.com/a/l/s5/81/9788408294481.webp"
  ];

  let images3 = ["https://imagessl3.casadellibro.com/a/l/s5/43/9788467972443.webp", "https://imagessl9.casadellibro.com/a/l/s5/79/9788408297079.webp", "https://imagessl8.casadellibro.com/a/l/s5/48/9788419988348.webp", "https://imagessl8.casadellibro.com/a/l/s5/78/9788408292678.webp"];


function fillProducts(images, container){

    let colorTag;
    let textTag;

    switch (container) {
        case news:
            colorTag = "#20471c";
            textTag = "Nuevo";
        break;

        case best:
            colorTag = "#ed2f00";
            textTag = "Top";
        break;
        case frees:
            colorTag = "#262892";
            textTag = "Free";
        break;
    
        default:
            console.log("Error");
            break;
    }


    for(let i = 0; i < images.length; i++){
        let card = document.createElement('div');
        card.classList.add("card-container");

        card.innerHTML = `<div class="card-img">
          <img src="${images[i]}" alt="">
          </div>
          <p class="card-description">La muerte desde muchos planos: la muerte física de los humanos en el matadero y la muerte del hombre ante la imposición del poder.</p>
          <p class="card-author">Juan Perez</p>
          <p class="card-price">22,95€</p>
          <a target="blank" href="https://www.amazon.es/gp/bestsellers/books"><button class="card-button">Añadir</button></a>
      </div>`;

      container.appendChild(card);
    }
}

fillProducts(images1, news);
fillProducts(images2, best);
fillProducts(images3, frees);