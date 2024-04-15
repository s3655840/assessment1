const ITEMS_KEY = "items";
const ITEM_KEY = "item"

function initItems () {
    if(localStorage.getItem(ITEMS_KEY) !== null)
    return;

const items = [
{
    item: "apple",
    price: "5$"
},

];
 localStorage.setItem(ITEMS_KEY, JSON.stringify(items));

}

function getItem() {
    const data = localStorage.getItem(ITEMS_KEY);
    return JSON.parse(data);
}


function setItem(item) {
    localStorage.setItem(ITEM_KEY, item);
}

function getItem() {
    return localStorage.getItem(ITEM_KEY);
}

export {
    initItems,
    getItem,
    
}