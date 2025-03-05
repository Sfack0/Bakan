function displayMenu(type) {
    const menuContainer = $('#menu');
    menuContainer.empty();

    const itemTypes = {};



    menuData[type].forEach(item => {
        
     

            if(!itemTypes[item.type]) 
                 itemTypes[item.type] = [];
            
            if (!itemTypes[item.type][item.category]) 
                    itemTypes[item.type][item.category] = [];
                
            itemTypes[item.type][item.category].push(item);
                
 
    });




    Object.keys(itemTypes).forEach(type => {
        const typeLabel = $('<h2></h2>').text(type);
        menuContainer.append(typeLabel);
    
        Object.keys(itemTypes[type]).forEach(category => {
            const categoryLabel = $('<h4></h4>').text(category);
            menuContainer.append(categoryLabel);
    
            itemTypes[type][category].forEach(item => {
                const menuItem = $('<div></div>');
                menuItem.addClass('menu-item');
                menuItem.html(`<div class='item-info'><span>${item.name}</span> <span>${item.price ? item.price+ '&#8364' : 'N/A'}</span> </div>
                                <div class='item-discription'> ${item.discription ? '('+item.discription+')' :  ""} </div>`); 
                menuContainer.append(menuItem);
            });
        });
    });
    
}

function filterMenu(category, button) {
    $('.filter-btn').removeClass('selected');
    $(button).addClass("selected");
    displayMenu(category);
}

$(document).ready(() => {
    displayMenu('drinks');
});
