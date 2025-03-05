

const menuData ={
    "drinks": [
        {
            "name": "Espresso",
            "type": "coffee",
            "category": "hot",
            "price": "1.80/2.40/2.90"
        },
        {
            "name": "Espresso Macchiato",
            "type": "coffee",
            "category": "hot",
            "price": "2.50"
        },
        {
            "name": "Americano",
            "type": "coffee",
            "category": "hot",
            "price": "2.30/2.80"
        },
        {
            "name": "Cappuccino",
            "type": "coffee",
            "category": "hot",
            "price": "2.80/3.40/3.90"
        },
        {
            "name": "Flat White",
            "type": "coffee",
            "category": "hot",
            "price": "3.00"
        },
        {
            "name": "Latte",
            "type": "coffee",
            "category": "hot",
            "price": "3.00"
        },
        {
            "name": "Latte Caramel",
            "type": "coffee",
            "category": "hot",
            "price": "3.30"
        },
        {
            "name": "Φίλτρου",
            "type": "coffee",
            "category": "hot",
            "price": "3.00"
        },
        {
            "name": "Mocha",
            "type": "coffee",
            "category": "hot",
            "price": "3.50"
        },
        {
            "name": "Ελληνικός",
            "type": "coffee",
            "category": "hot",
            "price": "1.80/2.30/2.80"
        },
        {
            "name": "Nescafe",
            "type": "coffee",
            "category": "hot",
            "price": "2.50"
        },
        {
            "name": "Freddo Espresso",
            "type": "coffee",
            "category": "cold",
            "price": "3.00/3.50"
        },
        {
            "name": "Freddo Cappuccino",
            "type": "coffee",
            "category": "cold",
            "price": "3.00/3.50"
        },
        {
            "name": "Iced Latte",
            "type": "coffee",
            "category": "cold",
            "price": "3.00"
        },
        {
            "name": "Iced Latte Caramel",
            "type": "coffee",
            "category": "cold",
            "price": "3.50"
        },
        {
            "name": "Freddo Caramel",
            "type": "coffee",
            "category": "cold",
            "price": "3.50"
        },
        {
            "name": "Iced Mochaccino",
            "type": "coffee",
            "category": "cold",
            "price": "3.50"
        },
        {
            "name": "Frappe",
            "type": "coffee",
            "category": "cold",
            "price": "2.50"
        },
        {
            "name": "English Breakfast",
            "type": "tea",
            "category": "black",
            "price": "3.50"
        },
        {
            "name": "Early Grey Blue Flower",
            "type": "tea",
            "category": "black",
            "price": "3.50"
        },
        {
            "name": "Chai Tea",
            "type": "tea",
            "category": "black",
            "price": "2.50"
        },
        {
            "name": "Darjeeling Margaret's Hope",
            "type": "tea",
            "category": "black",
            "price": "3.50"
        }
    ],
    "food": [
        {
            "name": "Ομελέτα αλλαντικών",
            "type": "Brunch",
            "category": "",
            "price": "6.00"
        },
        {
            "name": "Ομελέτα τυριών",
            "type": "Brunch",
            "category": "",
            "price": "6.00"
        },
        {
            "name": "Classic",
            "type": "All Day",
            "category": "Club Sandwiches",
            "price": "5.50"
        },
        {
            "name": "Chicken",
            "type": "All Day",
            "category": "Club Sandwiches",
            "price": "6.00"
        },
        {
            "name": "Barbeque",
            "type": "All Day",
            "category": "Burgers",
            "price": "8.50"
        },
        {
            "name": "Chicken",
            "type": "All Day",
            "category": "Burgers",
            "price": "7.50"
        },
        {
            "name": "Special",
            "type": "All Day",
            "category": "Burgers",
            "price": "9.00"
        },
        {
            "name": "Σοκολάτα & Μπισκότο",
            "type": "Pancakes & Waffles",
            "category": "Γλυκά",
            "price": "5.00",
        },
        {
            "name": "Bueno & Μπισκότο Oreo",
            "type": "Pancakes & Waffles",
            "category": "Γλυκά",
            "price": "5.50",
        },
        {
            "name": "Lila Pause",
            "type": "Pancakes & Waffles",
            "category": "Γλυκά",
            "price": "5.50",
        },
        {
            "name": "Φρούτα & Μέλι",
            "type": "Pancakes & Waffles",
            "category": "Γλυκά",
            "discription": "μπανανα, μήλο, σταφίδες, μέλι, κανέλα",
            "price": "6.00",
        },
        {
            "name": "Ανάμεικτα",
            "type": "Pancakes & Waffles",
            "category": "Γλυκά",
            "discription": "πραλίνα σοκολάτα & bueno",
            "price": "5.50",
        },
        {
            "name": "Φυστικοβούτηρο",
            "type": "Pancakes & Waffles",
            "category": "Γλυκά",
            "discription": "μαρμελάδα φράουλα",
            "price": "6.00",
        },
        {
            "name": "Φυστικοβούτηρο",
            "type": "Pancakes & Waffles",
            "category": "Γλυκά",
            "discription": "σοκολάτα",
            "price": "6.00",
        },
        {
            "name": "Classic",
            "type": "Pancakes & Waffles",
            "category": "Αλμυρά",
            "discription": "τυρί, γαλοπούλα, μπέικον, μαγιονέζα, ρόκα",
            "price": "5.50",
        },
        {
            "name": "Special",
            "type": "Pancakes & Waffles",
            "category": "Αλμυρά",
            "discription": "τυρί, γαλοπούλα, μπέικον, μαγιονέζα, ρόκα, τηγανιτό αυγό",
            "price": "6.00",
        },
        {
            "name": "Chicken Nuggets",
            "type": "Pancakes & Waffles",
            "category": "Αλμυρά",
            "discription": "παναρισμένες μπουκίτσες κοτόπουλο, πατάτες τηγανιτές, French sauce",
            "price": "6.50",
        },
        {
            "name": "Cheddar Fries",
            "type": "Pancakes & Waffles",
            "category": "Αλμυρά",
            "discription": "πατάτες τηγανιτές με cheddar sause & μπέικον",
            "price": "3.80",
        },
        {
            "name": "Hot Dog",
            "type": "Pancakes & Waffles",
            "category": "Αλμυρά",
            "discription": "μαλακό ψωμάκι, λουκάνικο Φρανγκφούρτης, κέτσαπ, μουστάρδα, coleslaw, πατάτες τηγανιτές",
            "price": "6.00",
        },
        {
            "name": "Open Special Bread",
            "type": "Pancakes & Waffles",
            "category": "Αλμυρά",
            "discription": "μαλακό ψωμάκι, πατάτες τηγανιτές, τυρί, γαλοπούλα ωμοπλάτη, λουκάνικο, μπέικον, french sause & μαγιονέζα",
            "price": "7.00",
        },
        {
            "name": "Ceasar's Salad",
            "type": "Pancakes & Waffles",
            "category": "Αλμυρά",
            "discription": "μαρούλι, κόκκινη λόλα, φιλετακια κοτόπουλο, ντοματίνια, κρουτόν, γραβιέρα, ceasar's sauce",
            "price": "6.00",
        },
        {
            "name": "BAKAN Salad",
            "type": "Pancakes & Waffles",
            "category": "Αλμυρά",
            "discription": "λόλα, ρόκα, ντοματίνια, super mix nuts, μήλο, γραβιέρα, αγγούρι, κρουτόν, βαλσάμικο",
            "price": "6.50",
        },
        {
            "name": "Ποικιλία Τυριών/Αλλαντικών",
            "type": "Pancakes & Waffles",
            "category": "Αλμυρά",
            "discription": "μπέικον, λουκάνικο Φρανγκφούρτης, ωμοπλάτη, γαλοπούλα, γραβιέρα, τυρί ένταμ, κριτσίνια",
            "price": "6.50",
        }
    
    
    ]
}