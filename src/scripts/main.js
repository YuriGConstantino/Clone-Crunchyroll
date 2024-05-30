document.addEventListener("DOMContentLoaded", function () {
    //menus and collapse function
    function toggleMenu(buttonSelector, menuSelector, activeClass) {
        const menuBtn = document.querySelector(buttonSelector);
        const menu = document.querySelector(menuSelector);

        menuBtn.addEventListener("click", () => {
            menu.classList.toggle(activeClass);
        });

    }
    // btns list
    const menus = [
        menuMobile = {
            buttonSelector: '[data-menu-btn]',
            menuSelector: '[data-mobile-menu]',
            activeClass: 'collapse__menu-options--active'
        },

        menuMobileGenres = {
            buttonSelector: '[data-genres-menu]',
            menuSelector: '[data-genres-list]',
            activeClass: 'collapse__menu-sub--active'
        },

        menuNews = {
            buttonSelector: '[data-news-menu]',
            menuSelector: '[data-news-list]',
            activeClass: 'header__menu-news--active'
        },

        menuNewsMobile = {
            buttonSelector: '[data-news-menu-mobile]',
            menuSelector: '[data-news-list-mobile]',
            activeClass: 'collapse__menu-sub--active'
        },

        menuNavegate = {
            buttonSelector: '[data-navegate-menu]',
            menuSelector: '[data-navegate-list]',
            activeClass: 'header__menu-navegate--active'
        },

        menuDescriptionBtn = {
            buttonSelector: '[data-description-btn]',
            menuSelector: '[data-description]',
            activeClass: 'description--active'
        },

        menuDescription = {
            buttonSelector: '[data-description-btn]',
            menuSelector: '[data-description-btn]',
            activeClass: 'description__details-btn--active'
        },

    ]
    //function menus interaction
    for (let i = 0; i < menus.length; i++) {
        toggleMenu(menus[i].buttonSelector, menus[i].menuSelector, menus[i].activeClass)

    }
    // function replacement btn text
    function toggleText(elementSelector, newText) {
        const element = document.querySelector(elementSelector);
        const originalText = element.textContent;

        element.addEventListener("click", () => {
            if (element.textContent === originalText) {
                element.textContent = newText;
            } else {
                element.textContent = originalText;
            }
        });
    }

    toggleText('[data-description-btn]', 'Menos detalhes')
    toggleText('[data-season-btn]', "Mais Recentes")
    //Function create eps card list
    const episodesList = [
        {
            episode: '1',
            title: 'O fim da aventura'
        },
        {
            episode: '2',
            title: 'Não precesa ser magia...'
        },
        {
            episode: '3',
            title: 'A magia para matar pessoas'
        },
        {
            episode: '4',
            title: 'A terra onde as almas descansam'
        },
        {
            episode: '5',
            title: 'Os fantasmas dos mortos'
        },
        {
            episode: '6',
            title: 'O herói do vilarejo'
        },
        {
            episode: '7',
            title: 'É como um conto de fadas'
        },
        {
            episode: '8',
            title: 'Frieren, a Mensageira do Além'
        },
        {
            episode: '9',
            title: 'Aura, a Guilhotina'
        },
        {
            episode: '10',
            title: 'Uma maga poderosa'
        },
        {
            episode: '11',
            title: 'Inverno nas Terras do Norte'
        },
        {
            episode: '12',
            title: 'Um herói de verdade'
        },
        {
            episode: '13',
            title: 'Aversão à própria espécie'
        },
        {
            episode: '14',
            title: 'Privilégio dos jovens'
        },
        {
            episode: '15',
            title: 'Cheiro de problema'
        },
        {
            episode: '16',
            title: 'Amigos de longa data'
        },
        {
            episode: '17',
            title: 'Se cuidem'
        },
        {
            episode: '18',
            title: 'Exame do primeiro nível de magos'
        },
        {
            episode: '19',
            title: 'Plano elaborado'
        },
        {
            episode: '20',
            title: 'Precisar matar'
        },
        {
            episode: '21',
            title: 'O mundo da magia'
        },
        {
            episode: '22',
            title: 'Futuros adversários'
        },
        {
            episode: '23',
            title: 'Conquistando labirinto'
        },
        {
            episode: '24',
            title: 'Réplicas perfeitas'
        },
        {
            episode: '25',
            title: 'Vulnerabilidade fatal'
        },
        {
            episode: '26',
            title: 'A grandeza da magia'
        },
        {
            episode: '27',
            title: 'Era dos humanos'
        },
        {
            episode: '28',
            title: 'Seria contrangedor quando...'
        }

    ]

    function createCard({ episode, title }) {
        const card = document.createElement('div')
        card.classList.add('episodes__lists-card')

        const img = document.createElement('img')
        img.classList.add('episodes__lists-card-cover')
        img.src = `dist/images/ep${episode}.jpg`
        img.alt = title

        const textDiv = document.createElement('div')
        textDiv.classList.add('episodes__lists-card-text')

        const h3 = document.createElement('h3')
        h3.classList.add('episodes__lists-card-serie')
        h3.classList.add('text-little')
        h3.textContent = 'Frieren e a Jornada para o Além'

        const h4 = document.createElement('h4')
        h4.classList.add('episodes__lists-card-title')
        h4.textContent = `S-1 E-${episode} - ${title}`

        const span = document.createElement('span')
        span.classList.add('episodes__lists-card-language')
        span.classList.add('text-small')
        span.textContent = 'Dub | Leg'

        textDiv.appendChild(h3)
        textDiv.appendChild(h4)
        textDiv.appendChild(span)

        card.appendChild(img)
        card.appendChild(textDiv)

        return card

    }

    function addCardToContainer(containerSelector, cardData) {
        const container = document.querySelector(containerSelector)

        cardData.forEach(cardData => {
            const card = createCard(cardData)
            container.appendChild(card)

        })

    }

    addCardToContainer('[data-episodes]', episodesList)
    // inverte a lista de eps
    const reverseListEpBtn = document.querySelector('[data-season-btn]')

    reverseListEpBtn.addEventListener('click', () => {

        let epsContainer = document.querySelector('[data-episodes]')

        let arrayList = Array.from(epsContainer.children)

        arrayList.reverse()

        epsContainer.innerHTML = ''

        arrayList.forEach((item) => {
            epsContainer.appendChild(item)
        })

    })


    const stars = document.querySelectorAll('[data-rate-star]')
    let currentRating = 0

    stars.forEach(star => {
        star.addEventListener('click', () => {
            currentRating = star.getAttribute('data-value')
            updateStars(currentRating)
        });

        star.addEventListener('mouseover', () => {
            updateStars(star.getAttribute('data-value'))
        });

        star.addEventListener('mouseout', () => {
            updateStars(currentRating)
        });
    });

    function updateStars(rating) {
        stars.forEach(star => {
            if (star.getAttribute('data-value') <= rating) {
                star.classList.add('description__rate-stars-icon--active')
            } else {
                star.classList.remove('description__rate-stars-icon--active')
            }
        })
    }



})







