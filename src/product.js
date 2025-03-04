  const menuData = {
    "menu": [
        {"name": "Espresso", "category": "hot", "price": 3.00},
        {"name": "Americano", "category": "hot", "price": 3.50},
        {"name": "Cappuccino", "category": "hot", "price": 4.00},
        {"name": "Iced Latte", "category": "cold", "price": 4.50},
        {"name": "Iced Mocha", "category": "cold", "price": 5.00},
        {"name": "Hot Chocolate", "category": "hot", "price": 4.00}
    ]
};

function displayMenu(category) {
    const menuContainer = document.getElementById('menu');
    menuContainer.innerHTML = '';
    menuData.menu.forEach(item => {
        if (category === 'all' || item.category === category) {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.innerHTML = `<span>${item.name}</span> <span>$${item.price.toFixed(2)}</span>`;
            menuContainer.appendChild(menuItem);
        }
    });
}

function filterMenu(category) {
    displayMenu(category);
}

window.onload = () => displayMenu('all');
  