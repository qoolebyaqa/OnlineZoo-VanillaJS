function burger() {
    const BGR_BUT = document.querySelector('.header_burger');
    const BGR_BACKGROUND = document.querySelector('.__transparent_bg');
    const BGR_MENU = document.querySelector('.__burger_opened');

    BGR_BUT.addEventListener('click', () => {
        BGR_BUT.classList.toggle('header_burger_active');
        BGR_BACKGROUND.classList.toggle('elem_active');
        BGR_MENU.classList.toggle('elem_active');
        document.body.classList.toggle('body__active');
    })
    BGR_BACKGROUND.addEventListener('click', () => {
        BGR_BUT.classList.toggle('header_burger_active');
        BGR_BACKGROUND.classList.toggle('elem_active');
        BGR_MENU.classList.toggle('elem_active');
        document.body.classList.toggle('body__active');
    })
}
const arrPets = [{
    'name': 'GIANT PANDAS',
    'location': 'Native to Southwest China',
    'photo': '../../assets/images/pandas.png',
    'eatphoto': '../../assets/icons/banana-bamboo_icon.svg'
},
{
    'name': 'EAGLES',
    'location': 'Native to South America',
    'photo': '../../assets/images/eagle.png',
    'eatphoto': '../../assets/icons/meet-fish_icon.svg'
},
{
    'name': 'TWO-TOED SLOTH',
    'location': 'Mesoamerica, South America',
    'photo': '../../assets/images/sid.png',
    'eatphoto': '../../assets/icons/banana-bamboo_icon.svg'
},
{
    'name': 'CHEETAHS',
    'location': 'Native to Africa',
    'photo': '../../assets/images/leopards.png',
    'eatphoto': '../../assets/icons/meet-fish_icon.svg'
},
{
    'name': 'PINGUINS',
    'location': 'Native to Antarctica',
    'photo': '../../assets/images/pinguin.png',
    'eatphoto': '../../assets/icons/meet-fish_icon.svg'
},
{
    'name': 'GORILLAS',
    'location': 'Native to Congo',
    'photo': '../../assets/images/gorilla.png',
    'eatphoto': '../../assets/icons/meet-fish_icon.svg'
},
{
    'name': 'Alligators',
    'location': 'Native to Southeastern U. S.',
    'photo': '../../assets/images/aligator.png',
    'eatphoto': '../../assets/icons/meet-fish_icon.svg'
},
]
const arrPersons = [{
    'name': 'Michael John',
    'location': 'Local Austria • Today',
    'photo': '../../assets/images/user_iconPng.png',
    'feedback': fbGenerator,
},
{
    'name': 'Oskar Samborsky',
    'location': 'Local Austria • Yesterday',
    'photo': '../../assets/images/Oskar.png',
    'feedback': fbGenerator,
},
{
    'name': 'Fredericka Michelin',
    'location': 'Local Austria • Yesterday',
    'photo': '../../assets/images/Fredericka.png',
    'feedback': fbGenerator,
},
{
    'name': 'Mila Riksha',
    'location': 'Local Austria • Yesterday',
    'photo': '../../assets/images/Mila.png',
    'feedback': fbGenerator,
},
{
    'name': 'Vanessa Angel',
    'location': 'London, England • Yesterday',
    'photo': '../../assets/images/user_iconPng.png',
    'feedback': fbGenerator,
}, 
{
    'name': 'Richard Armitage',
    'location': 'London, England • Yesterday',
    'photo': '../../assets/images/user_iconPng.png',
    'feedback': fbGenerator,
},
{
    'name': 'Eliza Bennett',
    'location': 'London, England • Yesterday',
    'photo': '../../assets/images/user_iconPng.png',
    'feedback': fbGenerator,
},
{
    'name': 'Rosalind Bennett',
    'location': 'London, England • Yesterday',
    'photo': '../../assets/images/user_iconPng.png',
    'feedback': fbGenerator,
},
{
    'name': 'Martin Benson',
    'location': 'London, England • Yesterday',
    'photo': '../../assets/images/user_iconPng.png',
    'feedback': fbGenerator,
},
{
    'name': 'Steven Berkoff',
    'location': 'London, England • Yesterday',
    'photo': '../../assets/images/user_iconPng.png',
    'feedback': fbGenerator,
},
{
    'name': 'Brian Blessed',
    'location': 'London, England • Yesterday',
    'photo': '../../assets/images/user_iconPng.png',
    'feedback': fbGenerator,
},
];

function fbGenerator() {
    const strFB = "Online zoo is one jf the ways to instill a love for animals. The best online zoo I've met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I've met. My son delighted very much ljves to watch gouillas.The best online zoo I've met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I've met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I've met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I've met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals";
    const randomStart = Math.floor(Math.random()*800);
    let result = strFB.slice(strFB.indexOf('.', randomStart)+1);
    while (result.length < 750) {
        result = result + strFB; 
    }
    return result;
}   
function elemPacking(obj) {
    const personalItem = document.createElement('div');
    const nameInfo = document.createElement('div');
    const personalFB = document.createElement('p');
    const nameText = document.createElement('div');
    const namePerson = document.createElement('p');
    const personLocation = document.createElement('p');
    const img = document.createElement('IMG');

    personalItem.classList.add('piforjs');
    nameInfo.classList.add('niforjs');
    personalFB.classList.add('pfforjs');
    nameText.classList.add('__name_text');
    namePerson.classList.add('npforjs');
    personLocation.classList.add('plforjs');

    namePerson.innerHTML = obj.name;
    personLocation.innerHTML = obj.location;
    personalFB.innerHTML = obj.feedback();
    img.src = obj.photo;

    nameText.append(namePerson, personLocation);
    nameInfo.append(img, nameText);

    personalItem.append(nameInfo, personalFB);
    return personalItem;
}
function feedbackCarousel () {  

    const arrforPagin = [];

    arrPersons.forEach((value) => {
        arrforPagin.push(value);
    })
    function carousel() {
        const container = document.querySelector('.__personal_cards');
        container.innerHTML = '';
        let currentPage = carouselInput.value;
        let quantContent = 4;
        let displayedItems = [];

        if (quantContent === 4) {
            displayedItems = arrforPagin.slice(currentPage-1, currentPage+3);
        }
        else if (quantContent === 3) {
            displayedItems = arrforPagin.slice(currentPage-1, currentPage+2);
        }           

            displayedItems.forEach((value) => {
            container.append(elemPacking(value));
        })
        for (item of container.children ) {
            item.classList.add('anim_card');
        };

        function remover () {
            for (item of container.children ) {
                item.classList.remove('anim_card');
            };
        }
        setTimeout(remover, 100);
        return container;
        
    }
    
    const carouselInput = document.querySelector('.__scroll_cards');
    carouselInput.addEventListener('input', carousel);
}

function popUp () {
    if (window.screen.width < 980) {
        const arrItems = [...Array.from(document.querySelectorAll('.__personal_item'))];
        const popupCont = document.querySelector('.__popup_cont');
        const iks = document.createElement('div');
        iks.classList.add('close_btn');
        
        for(let i = 0; i < arrPersons.length; i++){
            for (let j = 0; j < arrItems.length; j++) {
                if (arrPersons[i].name === arrItems[j].children[0].children[1].children[0].innerHTML) {
                    arrItems[j].addEventListener('click', () => {
                        popupCont.innerHTML = '';
                        popupCont.append(iks, elemPacking(arrPersons[i]));
                        popupCont.children[1].classList.add('__popup_card');
                        document.querySelector('.__popup_wrapper').classList.add('__popup_active');
                        document.body.classList.add('body__active');
                    })
                    document.querySelector('.__popup_body').addEventListener('click', (e) => {
                        if (e.target === document.querySelector('.__popup_body') || e.target === document.querySelector('.close_btn')) {                        
                            document.querySelector('.__popup_wrapper').classList.remove('__popup_active');
                            document.body.classList.remove('body__active');
                        }
                    })
                }
            }
        }
    }     
}
function petCardPacking (obj){
    const animalCard = document.createElement('div');
    const img = document.createElement('IMG');
    const petDiscript = document.createElement('div');
    const petsInfo = document.createElement('div');
    const petTitle = document.createElement('p');
    const petText = document.createElement('p');
    const iconMeal = document.createElement('div');
    const svgI = document.createElement('IMG');

    animalCard.classList.add('__animal_card');
    img.classList.add('__item_pet');
    petDiscript.classList.add('__pet_discript');
    petsInfo.classList.add('__pets_info');
    petTitle.classList.add('__pet_title');
    petText.classList.add('__pet_text');
    iconMeal.classList.add('__icon_meal');

    petText.innerHTML = obj.location;
    petTitle.innerHTML = obj.name;
    img.src = obj.photo;
    svgI.src = obj.eatphoto;
    
    iconMeal.append(svgI);
    petsInfo.append(petTitle, petText);
    petDiscript.append(petsInfo, iconMeal);
    animalCard.append(img, petDiscript);

    return animalCard
}
function subsequenceGenerator () {
    let resultIndexes = [];
    while (resultIndexes.length <6){
        let random = Math.floor(Math.random()*7);
        if (!resultIndexes.includes(random)) {
            resultIndexes.push(random);
        }
    } 
    let objectsArr = []
    resultIndexes.forEach((value) => {
        objectsArr.push(arrPets[value]);
    })
    return objectsArr;
}
function filling () {
    let bodyPets = document.querySelector('.middle');
    
    bodyPets.innerHTML = '';
    subsequenceGenerator().forEach((value) => {
        bodyPets.append(petCardPacking(value));
    })
    subsequenceGenerator().forEach((value) => {
        leftpart.append(petCardPacking(value));
    })
    subsequenceGenerator().forEach((value) => {
        rightpart.append(petCardPacking(value));
    })

    return bodyPets;
}



const RIGHT_BTN = document.querySelector('.__right');
const LEFT_BTN = document.querySelector('.__left');
const bodyPets = document.querySelector('.middle');
const leftpart = document.querySelector('.leftpart');
const rightpart = document.querySelector('.rightpart');
const generalWrapper = document.querySelector('.carousel');

const moveleft = () => {    
generalWrapper.classList.add('animationLeft');
LEFT_BTN.removeEventListener('click', moveleft);
RIGHT_BTN.removeEventListener('click', moveright);
}
const moveright = () => {    
generalWrapper.classList.add('animationRight');
LEFT_BTN.removeEventListener('click', moveright);
RIGHT_BTN.removeEventListener('click', moveright); 
}    
LEFT_BTN.addEventListener('click', moveleft);
RIGHT_BTN.addEventListener('click', moveright);


function fixationAnimation () {
    generalWrapper.addEventListener('animationend', animationEvent => {
        if (generalWrapper.matches('.animationRight')) {  
            bodyPets.innerHTML = '';
            bodyPets.innerHTML = leftpart.innerHTML;
            leftpart.innerHTML = '';            
            subsequenceGenerator().forEach((value) => {
                leftpart.append(petCardPacking(value));
            }) 
            generalWrapper.classList.remove('animationRight');
        }
        else if (generalWrapper.matches('.animationLeft')){                                 
            bodyPets.innerHTML = '';
            bodyPets.innerHTML = rightpart.innerHTML;
            rightpart.innerHTML = '';
            subsequenceGenerator().forEach((value) => {
                rightpart.append(petCardPacking(value));
            })
            generalWrapper.classList.remove('animationLeft');
        }        
        LEFT_BTN.addEventListener('click', moveleft);
        RIGHT_BTN.addEventListener('click', moveright);
    })
}


burger();
feedbackCarousel();
popUp();
filling();
fixationAnimation();