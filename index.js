const submitRating = document.getElementById('submit-rating')
const thankYouSection = document.getElementById('thank-you-section')
const userRating = document.querySelector('.rating')
const buttonScore = document.getElementById('button-score')


submitRating.addEventListener('click', function submission() {
    thankYouSection.style.display ='block'
}
)

buttonScore.addEventListener("click", function (e) {

    if (e.target && e.target.tagName === 'BUTTON') {
        const buttonValue = e.target.textContent
        userRating.textContent = `You have rated us ${buttonValue} stars out of 5`
    }

})
