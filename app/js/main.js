//Get <ul> with list of tabs
const tabsList = document.querySelector(".tabs__list");

//Add click listener to whole link list
tabsList.addEventListener('click', event => {
    
    //Event delegation
    if(event.target.matches('.tabs__item a')) {
        event.preventDefault();
        const tabsItem = event.target.parentNode; //parentNode collega con il genitore
        const targetId = event.target.hash.slice(1);
        const targetPanel = document.getElementById(targetId);
        
        //Activate correct tabs menu item 
        const allTabsItems = document.querySelectorAll('.tabs__item.is-active');
        allTabsItems.forEach(item => {
            item.classList.remove('is-active');

        });
        tabsItem.classList.add('is-active');
        
        const panelsActive = document.querySelectorAll('.tabs__panel.is-active');
        panelsActive.forEach(panel => {
            panel.classList.remove('is-active');
        
        });
        targetPanel.classList.add('is-active');

    }        
},false);



//Accordion 

//Panels
const accordion = document.querySelector('.accordion');
accordion.addEventListener('click', event => {
    if(event.target.matches('.accordion__header a, .accordion__header a svg')) {
        event.preventDefault();

        const header = event.target.tagName.toLowerCase() == 'a' ? 
        
        event.target.parentNode : 
        event.target.parentNode.parentNode;


        const targetPanel = header.nextElementSibling; 
        const allPanels = document.querySelectorAll('.accordion__panel.is-active');
        console.log(allPanels);
        
        targetPanel.classList.toggle('is-active');
    


// Headers
const allHeaders = document.querySelectorAll('.accordion__header.is-active');

header.classList.toggle('is-active');
}
});

/*const loading = document.querySelector('button')
    loading.addEventListener('click', event => {
        document.querySelector('html').classList.add('is-loading', 'prevent-scroll');
    } );*/

function activateLoading () {
    document.querySelector('html').classList.add('is-loading', 'prevent-scroll');    
}

function deactivateLoading () {
    document.querySelector('html').classList.remove('is-loading', 'prevent-scroll');
}

//activateLoading();
setTimeout(() => {
    deactivateLoading();
},1000);


//Modal
const modal = document.querySelector('.modal');
const modalBox = document.querySelector('.modal__box');
//Open modal
function openModal() {
    modalBox.classList.remove('is-out');
    modal.classList.remove('is-out');
    modal.classList.add('is-active');
    document.querySelector('html').classList
    .add('preventScroll');
}
//Close modal
function closeModal() {
    document.querySelector('html').classList.remove('prevent-scroll');
    modalBox.classList.add('is-out');
    setTimeout(() =>{
        modalBox.classList.remove('is-out');
        modal.classList.remove('is-active');
    }, 500);
}