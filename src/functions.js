function displayMenu(type, menu) {
    menuContainer = $(menu);
    menuContainer.empty();

    if(type == "") return;

    const itemTypes = {};



    menuData[type].forEach(item => {

            if(!itemTypes[item.type]) 
                 itemTypes[item.type] = [];
            
            if (!itemTypes[item.type][item.category]) 
                    itemTypes[item.type][item.category] = [];
                
            itemTypes[item.type][item.category].push(item); 
    });

    Object.keys(itemTypes).forEach(type => {
        const typeLabel = $('<h2></h2>').text(type).addClass("item-type-title");
        const image = $('<img>').attr("src", "/images/drinks.png").addClass("type-image");
        const imageContainer = $('<div></div>').addClass("type-image-container").append(image);

        const wrapperDiv = $('<div></div>').addClass("prime-category");
        wrapperDiv.append(typeLabel, imageContainer);

        menuContainer.append(wrapperDiv);
    
        Object.keys(itemTypes[type]).forEach(category => {
            const categoryLabel = $('<h4></h4>').text(category);
            categoryLabel.addClass("secondary-category");
            menuContainer.append(categoryLabel);
    
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

// function filterMenu(category, button) {
//     $('.filter-btn').removeClass('selected');
//     $(button).addClass("selected");
//     displayMenu(category);
// }

// $(document).ready(() => {
//     displayMenu('drinks');
// });


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