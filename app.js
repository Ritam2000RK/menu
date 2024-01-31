const menu = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: 15.99,
    image: "./resources/item-1.jpeg",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed ",
  },
  {
    id: 2,
    title: "Diner Double",
    category: "lunch",
    price: 13.99,
    image: "./resources/item-2.jpeg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats ",
  },
  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "shakes",
    price: 6.99,
    image: "./resources/item-3.jpeg",
    desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
  },
  {
    id: 4,
    title: "Country Delight",
    category: "breakfast",
    price: 20.99,
    image: "./resources/item-4.jpeg",
    desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut",
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "lunch",
    price: 22.99,
    image: "./resources/item-5.jpeg",
    desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up ",
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "shakes",
    price: 18.99,
    image: "./resources/item-6.jpeg",
    desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
  },
  {
    id: 7,
    title: "Bacon Overflow",
    category: "breakfast",
    price: 8.99,
    image: "./resources/item-7.jpeg",
    desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
  },
  {
    id: 8,
    title: "American Classic",
    category: "lunch",
    price: 12.99,
    image: "./resources/item-8.jpeg",
    desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
  },
  {
    id: 9,
    title: "Quarantine Buddy",
    category: "shakes",
    price: 16.99,
    image: "./resources/item-9.jpeg",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 10,
    title: "Steak Dinner",
    category: "dinner",
    price: 39.99,
    image: "./resources/item-10.jpeg",
    desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
  },
];

const mainBody = document.getElementById("main-id");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);

  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  //   console.log(categories);
  const categoryBtns = categories
    .map((category) => {
      return `<li><button type="button" class="navBtn" data-id="${category}">${category}</button></li>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const btns = document.querySelectorAll(".navBtn");

  btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const category = event.currentTarget.dataset.id;

      const menuCategory = menu.filter((menuItem) => {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCategory)
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return `<section class="product">
        <div class="product-img">
          <img loading="lazy"src="${item.image}" alt="${item.title}" />
        </div>
        <div class="product-description">
          <div class="product-heading">
            <h3 class="product-title">${item.title}</h3>
            <h3 class="price">$${item.price}</h3>
          </div>
          <hr />
          <div class="product-body">
            <p>
              ${item.desc}
            </p>
          </div>
        </div>
      </section>`;
  });

  displayMenu = displayMenu.join("");
  mainBody.innerHTML = displayMenu;
}
