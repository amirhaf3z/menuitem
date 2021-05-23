const menu = [
  {
    id: 1,
    title: "iPhone Xs",
    category: "iPhone",
    price: 3000,
    img: "./images/item-1.jpeg",
    desc: `Använder du din telefon mycket, eller är du otålig? iPhone XS är det perfekta valet för dig! Intelligent A12 Bionic. Det smartaste, kraftfullaste chippet någonsin i en smartphone. Det betyder att den här telefonen aldrig kör fast.`,
  },
  {
    id: 2,
    title: "iPhone 11",
    category: "iPhone",
    price: 5500,
    img: "./images/item-2.jpg",
    desc: `iPhone 11 har ett fantastiskt 12 Mpx dubbelkamerasystem med vidvinkel, ultravidvinkel och teleobjektiv som fångar upp till fyra gånger mer av det du ser. Med hjälp av den nya funktionen Nattläge tar den även fantastiska mörkerbilder. Båda kamerorna på iPhone 11 filmar otroligt skarp video i 4K med 60 bilder/sekund. 
    `,
  },
  {
    id: 3,
    title: "iPhone 11Pro",
    category: "iPhone",
    price: 7000,
    img: "./images/item-3.jpg",
    desc: `iPhone 11 Pro har ett trippelkamerasystem som tar fotograferande till en helt ny nivå. Tre 12 MP-kameror med vidvinkel, ultravidvinkel och teleobjektiv som fångar upp till fyra gånger mer av det du ser. Med hjälp av den nya funktionen Nattläge tar den även fantastiska mörkerbilder. Filma i 4K med den högsta kvaliteten någonsin i en smartphone, och redigera med samma verktyg som du redan använder för dina bilder.
    `,
  },
  {
    id: 4,
    title: "iPhone 12Pro",
    category: "iPhone",
    price: 12000,
    img: "./images/item-4.png",
    desc: `iPhone 11 Pro har ett trippelkamerasystem som tar fotograferande till en helt ny nivå. Tre 12 MP-kameror med vidvinkel, ultravidvinkel och teleobjektiv som fångar upp till fyra gånger mer av det du ser. Med hjälp av den nya funktionen Nattläge tar den även fantastiska mörkerbilder. Filma i 4K med den högsta kvaliteten någonsin i en smartphone, och redigera med samma verktyg som du redan använder för dina bilder.
    `},
  {
    id: 5,
    title: "iPad Pro 11",
    category: "iPad",
    price: 6800,
    img: "./images/item-5.png",
    desc: `Använder du din telefon mycket, eller är du otålig? iPhone XS är det perfekta valet för dig! Intelligent A12 Bionic. Det smartaste, kraftfullaste chippet någonsin i en smartphone. Det betyder att den här telefonen aldrig kör fast.`,
  },
  {
    id: 6,
    title: "iPad Pro 10.2",
    category: "iPad",
    price: 6500,
    img: "./images/item-6.jpg",
    desc: `iPhone 11 har ett fantastiskt 12 Mpx dubbelkamerasystem med vidvinkel, ultravidvinkel och teleobjektiv som fångar upp till fyra gånger mer av det du ser. Med hjälp av den nya funktionen Nattläge tar den även fantastiska mörkerbilder. Båda kamerorna på iPhone 11 filmar otroligt skarp video i 4K med 60 bilder/sekund. 
      `,
  },
  {
    id: 7,
    title: "iPad Air 10.9",
    category: "iPad",
    price: 8000,
    img: "./images/item-7.png",
    desc: `iPhone 11 Pro har ett trippelkamerasystem som tar fotograferande till en helt ny nivå. Tre 12 MP-kameror med vidvinkel, ultravidvinkel och teleobjektiv som fångar upp till fyra gånger mer av det du ser. Med hjälp av den nya funktionen Nattläge tar den även fantastiska mörkerbilder. Filma i 4K med den högsta kvaliteten någonsin i en smartphone, och redigera med samma verktyg som du redan använder för dina bilder.
      `,
  },
  {
    id: 8,
    title: "iPad 5 Gen",
    category: "iPad",
    price: 3400,
    img: "./images/item-8.jpg",
    desc: `iPhone 11 Pro har ett trippelkamerasystem som tar fotograferande till en helt ny nivå. Tre 12 MP-kameror med vidvinkel, ultravidvinkel och teleobjektiv som fångar upp till fyra gånger mer av det du ser. Med hjälp av den nya funktionen Nattläge tar den även fantastiska mörkerbilder. Filma i 4K med den högsta kvaliteten någonsin i en smartphone, och redigera med samma verktyg som du redan använder för dina bilder.
  `},
  {
    id: 9,
    title: 'mac book pro 13" 2016',
    category: "mac",
    price: 6800,
    img: "./images/item-9.jpg",
    desc: `Stilig och lättviktig MacBook Pro 13" som gör det lätt att arbeta. Med sjunde generationens Intel Core processor och en super ljus skärm. Enheten levereras med en Apple USB C - adapter och har gått igenom en fullständig kontroll av en Apple auktoriserad tekniker! Modell Mitten 2017.

    `,
  },
  {
    id: 10,
    title: 'macbook pro 13" 2017',
    category: "mac",
    price: 6500,
    img: "./images/item-10.png",
    desc: `Stilig och lättviktig MacBook Pro 13" som gör det lätt att arbeta. Med sjunde generationens Intel Core processor och en super ljus skärm. Enheten levereras med en Apple USB C - adapter och har gått igenom en fullständig kontroll av en Apple auktoriserad tekniker! Modell Mitten 2017.


  `,
  },
  {
    id: 11,
    title: 'macbook pro 15" 2018',
    category: "mac",
    price: 8000,
    img: "./images/item-11.png",
    desc: `Stilig och lättviktig MacBook Pro 13" som gör det lätt att arbeta. Med sjunde generationens Intel Core processor och en super ljus skärm. Enheten levereras med en Apple USB C - adapter och har gått igenom en fullständig kontroll av en Apple auktoriserad tekniker! Modell Mitten 2017.


  `,
  },
  {
    id: 12,
    title: 'macbook pro 15" 2019',
    category: "mac",
    price: 3400,
    img: "./images/item-12.png",
    desc: `Stilig och lättviktig MacBook Pro 13" som gör det lätt att arbeta. Med sjunde generationens Intel Core processor och en super ljus skärm. Enheten levereras med en Apple USB C - adapter och har gått igenom en fullständig kontroll av en Apple auktoriserad tekniker! Modell Mitten 2017.


  `}
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector('.btn-container');

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItem(menu);
  displayMenuButtons();
});

function displayMenuItem(menuItems) {
  // map method returns allways a new array
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
    <img src="${item.img}" class="photo" alt="${item.title}" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price} SEK</h4>
      </header> 
      <p class="item-text">
      ${item.desc}
      </p>
    </div>
  </article>`;
  })
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons(){
  const categories = menu.reduce(function (values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
    ['all'])
  const categoryBtns = categories.map(function (category) {
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
  })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      })
      // console.log(menuCategory);
      if (category === 'all') {
        displayMenuItem(menu)
      } else {
        displayMenuItem(menuCategory);
      }
    })
  });
}

