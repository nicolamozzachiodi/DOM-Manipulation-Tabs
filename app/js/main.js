//Get <ul> with list of tabs
const tabsList = document.querySelector(".tabs__list");
//Add click listener to whole link list
tabsList.addEventListener('click', event => {
    //Event delegation
    if(event.target.matches('.tabs__item a')) {
        event.preventDefault();
        const tabsItem = event.target.parentNode; //parentNode collega il genitore
        console.log(tabsItem);

    }        
},false);
