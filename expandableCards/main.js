const  pictureCards= document.querySelectorAll('.containerImg>section')

pictureCards.forEach(pictureCard => {
    pictureCard.addEventListener('click', () => {
        removeActiveClasses()
        pictureCard.classList.add('active')
    })
})

function removeActiveClasses() {
    pictureCards.forEach(pictureCard => {
        pictureCard.classList.remove('active')
    })
}