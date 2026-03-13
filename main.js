const menuItems = [
  {
    name: 'Neon Bao Trio',
    description: 'Steamed bao buns with char siu pork, pickled daikon, and spicy sesame oil.',
    price: '$8.50',
    image: './assets/dish-bao.svg',
    alt: 'Steamed bao buns on a dark plate'
  },
  {
    name: 'Chainlink Noodles',
    description: 'Hand-pulled noodles tossed in black bean sauce with wok-seared vegetables.',
    price: '$11.20',
    image: './assets/dish-noodles.svg',
    alt: 'Wok noodles with vegetables and chopsticks'
  },
  {
    name: 'Proof-of-Wok Rice',
    description: 'Smoked jasmine rice with prawns, scallions, egg, and chili crunch.',
    price: '$10.00',
    image: './assets/dish-rice.svg',
    alt: 'Fried rice with shrimp and chili flakes'
  },
  {
    name: 'Gasless Dumplings',
    description: 'Crispy pan-fried chicken dumplings with ginger soy dip.',
    price: '$7.75',
    image: './assets/dish-dumplings.svg',
    alt: 'Crispy dumplings with dipping sauce'
  }
];

const menuGrid = document.querySelector('#menu-grid');

menuItems.forEach((item) => {
  const card = document.createElement('article');
  card.className = 'menu-card';
  card.innerHTML = `
    <img src="${item.image}" alt="${item.alt}" loading="lazy" decoding="async" />
    <div class="menu-card__content">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <span class="price">${item.price}</span>
    </div>
  `;
  menuGrid.append(card);
});

document.querySelector('#year').textContent = new Date().getFullYear().toString();
