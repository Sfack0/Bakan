const availableLanguages = [
    { code: "greek", flag: "greek_flag.jpg", alt: "Greek" },
    { code: "english", flag: "english_flag.jpg", alt: "English" },
];

const nameMapping = {
    "Καφές": "Coffee",
    "Τσάι": "Tea",
    "Σοκολάτες": "Chocolate",
    "Special Ροφήματα": "Special Drinks",
    "Αναψυκτικά": "Soft Drinks",
    "Χυμοί": "Juices",
    "Αλκοόλ": "Alcohol",
    "Βάφλες": "Waffles",
    "Ατομικές Μερίδες": "Single Plates",
    "Παγωτά": "Ice Cream"
};

menuData = menuDataGR;

function setLanguage(languageCode) {
    const selectedLanguage = availableLanguages.find(lang => lang.code === languageCode);
    if (selectedLanguage) {
        document.getElementById('current-flag').src = "images/" + selectedLanguage.flag;
        document.getElementById('current-flag').alt = selectedLanguage.alt;
    }
    document.getElementById('dropdown-content').style.display = 'none';
    menuData = languageCode === "greek" ? menuDataGR : menuDataENG;


    // close menus when language changes
    const menuDropdowns = document.querySelectorAll('.menu-dropdown');
    menuDropdowns.forEach(dropdown => {
        const menu = dropdown.querySelector('.menu');
        const arrow = dropdown.querySelector('.menu-downarrow');
        
        $(arrow).css('transform', 'rotate(0deg)');
        $(dropdown).css("background-color", "transparent");
        $(menu).empty();
    });

}

function updateDropdown() {
    const dropdownMenu = document.getElementById('dropdown-content');
    dropdownMenu.innerHTML = ""; 
    const currentFlagSrc = document.getElementById('current-flag').src.split('/').pop();

    availableLanguages
        .filter(lang => lang.flag !== currentFlagSrc) 
        .forEach(lang => {
            const button = document.createElement("button");
            button.onclick = () => setLanguage(lang.code);

            const img = document.createElement("img");
            img.src = "images/" + lang.flag;
            img.alt = lang.alt;
            img.classList.add("flag-image");

            button.appendChild(img);
            dropdownMenu.appendChild(button);
        });

}

function showLanguageDropdown() {
    const dropdownMenu = document.getElementById('dropdown-content');

    if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
        updateDropdown();
        dropdownMenu.style.display = 'flex'; 
    } else {
        dropdownMenu.style.display = 'none';
    }
}







function displayMenu(menuType, menu) {
    menuContainer = $(menu);
    menuContainer.empty();

    if(menuType == "") return;

    const itemTypes = {};



    menuData[menuType].forEach(item => {

            if(!itemTypes[item.type]) 
                 itemTypes[item.type] = [];
            
            if (!itemTypes[item.type][item.category]) 
                    itemTypes[item.type][item.category] = [];
                
            itemTypes[item.type][item.category].push(item); 
    });

    Object.keys(itemTypes).forEach(type => {

        const typeContainer = $('<div></div>').addClass("type-container");
        const typeLabel = $('<h2></h2>').text(type).addClass("item-type-title");
        const typeInfo = $('<div></div>').addClass("type-info");
        
        typeInfoText = menuData[menuType].filter(item => item.type === type)[0]["type_info"];
       
        if(typeInfoText)
            typeInfo.text(typeInfoText);

        typeContainer.append(typeLabel,typeInfo);

        
        image = $('<img>').attr("src", "images/typeImages/"+ (nameMapping[type] ? nameMapping[type] : type)+ ".png").addClass("type-image");
        const imageContainer = $('<div></div>').addClass("type-image-container").append(image);
        const wrapperDiv = $('<div></div>').addClass("prime-category");
        if(type.length > 8)
            wrapperDiv.css("font-size", "15px");  //big titles -> smaller font size

        wrapperDiv.append(typeContainer, imageContainer);

        menuContainer.append(wrapperDiv);
    
        Object.keys(itemTypes[type]).forEach(category => {
            const categoryLabel = $('<h4></h4>').text(category);
            categoryLabel.addClass("secondary-category");
            

            const categoryInfo = $('<div></div>').addClass("category-info");
        
            categoryInfoText = menuData[menuType].filter(item => item.category === category)[0]["category_info"];
        
            if(categoryInfoText)
                categoryInfo.text(categoryInfoText);


            menuContainer.append(categoryLabel, categoryInfo);
    
            itemTypes[type][category].forEach(item => {
                const menuItem = $('<div></div>');
                menuItem.addClass('menu-item');
                menuItem.html(`<div class='item-info'><p class='item-name'>${item.name}</p> 
                                                     <p class='item-price'>${item.price ? item.price+ '&#8364' : 'N/A'}</p> </div>
                                                     <div class='item-description'> ${item.description ? '('+item.description+')' :  ""} </div>
                                                     `); 
                menuContainer.append(menuItem);
            });
        });
    });
    
}

function dropMenu(menuBanner, category) {
    let menuDropdown = menuBanner.closest('.menu-dropdown'); 
    let menu = menuDropdown.querySelector('.menu');
    let arrow = menuBanner.querySelector('.menu-downarrow');

    if ($(menuDropdown).height() != 200) {
        $(arrow).css('transform', 'rotate(0deg)');
        $(menuDropdown).css("background-color", "transparent");
        displayMenu("", menu);
    } else {
        displayMenu(category, menu);
        $(menuDropdown).css("background-color", "var(--clr-dark-green)");
        $(arrow).css('transform', 'rotate(180deg)');
    }
}
