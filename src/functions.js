const availableLanguages = [
    { code: "greek", flag: "greek_flag.jpg", alt: "Greek" },
    { code: "english", flag: "english_flag.jpg", alt: "English" },
];

function setLanguage(languageCode) {
    const selectedLanguage = availableLanguages.find(lang => lang.code === languageCode);
    if (selectedLanguage) {
        document.getElementById('current-flag').src = "images/" + selectedLanguage.flag;
        document.getElementById('current-flag').alt = selectedLanguage.alt;
    }
    document.getElementById('dropdown-menu').style.display = 'none';
}

function updateDropdown() {
    const dropdownMenu = document.getElementById('dropdown-menu');
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

    dropdownMenu.style.display = 'flex'; 
}

function showLanguageDropdown() {
    const dropdownMenu = document.getElementById('dropdown-menu');

    if(dropdownMenu.style.display === 'none'){
        updateDropdown(); 
    }else{
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


        const image = $('<img>').attr("src", "images/typeImages/"+ type + ".png").addClass("type-image");
        const imageContainer = $('<div></div>').addClass("type-image-container").append(image);
        const wrapperDiv = $('<div></div>').addClass("prime-category");
        if(type.length > 10)
            wrapperDiv.css("font-size", "15px");

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
                                <div class='item-discription'> ${item.discription ? '('+item.discription+')' :  ""} </div>`); 
                menuContainer.append(menuItem);
            });
        });
    });
    
}


function dropMenu(menuDropdown, category) {

    let menu = menuDropdown.querySelector('.menu');
    let arrow = menuDropdown.querySelector('.menu-downarrow');

    if ($(menuDropdown).height() != 200) {
        $(arrow).css('transform', 'rotate(0deg)');
        $(menuDropdown).css("background-color", "transparent"); 
        displayMenu("", menu);
        
    } else {
        displayMenu(category, menu); 
        $(menuDropdown).css("background-color", "rgb(66, 66, 66)"); 
        $(arrow).css('transform', 'rotate(180deg)');
    }
}