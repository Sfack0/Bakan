const menuData = {
    "menu": [
        {
            "name": "Espresso",
            "type": "drink",
            "category": "cold coffee",
            "price": 3.00,
            "description": "A strong and rich shot of coffee made with finely ground coffee beans.",
            "available": true
        },
        {
            "name": "Latte",
            "type": "drink",
            "category": "hot coffee",
            "price": 4.50,
            "description": "Espresso with steamed milk, topped with a small amount of foam.",
            "available": true
        },
        {
            "name": "Cappuccino",
            "type": "drink",
            "category": "hot coffee",
            "price": 4.00,
            "description": "Espresso with equal parts steamed milk and foam.",
            "available": true
        },
        {
            "name": "Iced Coffee",
            "type": "drink",
            "category": "cold coffee",
            "price": 3.50,
            "description": "Chilled coffee served with ice and sweetened syrup.",
            "available": false
        },
        {
            "name": "Chocolate Cake",
            "type": "dessert",
            "category": "sweets",
            "price": 5.00,
            "description": "Rich and moist chocolate cake with a smooth, creamy frosting.",
            "available": true
        },
        {
            "name": "Cheesecake",
            "type": "dessert",
            "category": "sweets",
            "price": 6.00,
            "description": "A creamy, rich cheesecake with a graham cracker crust.",
            "available": true
        },
        {
            "name": "Bagel with Cream Cheese",
            "type": "food",
            "category": "breakfast",
            "price": 2.50,
            "description": "A freshly baked bagel topped with creamy cheese.",
            "available": true
        },
        {
            "name": "Avocado Toast",
            "type": "food",
            "category": "breakfast",
            "price": 6.50,
            "description": "Toasted bread topped with smashed avocado and a sprinkle of seasoning.",
            "available": true
        },
        {
            "name": "Smoothie",
            "type": "drink",
            "category": "cold drinks",
            "price": 4.25,
            "description": "A blend of fresh fruits, yogurt, and ice.",
            "available": true
        },
        {
            "name": "Ομελέτα Χωριάτικη",
            "type": "food",
            "category": "breakfast",
            "price": 4.25,
            "description": "A blend of fresh fruits, yogurt, and ice.",
            "available": true
        }
    ]
};

function displayMenu(type) {
    console.log(type);
    const menuContainer = $('#menu');
    menuContainer.empty();
    
    menuData.menu.forEach(item => {
    console.log(type);
    console.log(item.type);

        if (item.type === type) {
            const menuItem = $('<div></div>');
            menuItem.addClass('menu-item');
            menuItem.html(`<span>${item.name}</span> <span>$${item.price.toFixed(2)}</span>`); 
            menuContainer.append(menuItem); 
        }
    });
}

function filterMenu(category, button) {
    $('.filter-btn').removeClass('selected');
    $(button).addClass("selected");
    displayMenu(category);
}

window.onload = () => displayMenu('drink');
  