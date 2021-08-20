let movieContainer = document.createElement('div')
movieContainer.classList.add('container')
document.body.appendChild(movieContainer)
for(var i =parseFloat(0); i < movies.length; i++){
    let movieDiv = document.createElement('div')
    let movieName = document.createElement('div')
    let movieNameFull = document.createElement('div')
    let movieNumber = document.createElement('div')
    let movieYear = document.createElement('div')
    // let movieImg = document.createElement('img')
    let movieItem = document.createElement('div')
    let movieReyting = document.createElement('div')
    let movieLanguage = document.createElement('div')
    let movieLink = document.createElement('a')
    movieDiv.classList.add('movie__div')
    movieName.classList.add('movie__name')
    movieNameFull.classList.add('movie__name__full')
    movieNumber.classList.add('movie__number')
    movieYear.classList.add('movie__year')
    // movieImg.classList.add('movie__img')
    movieItem.classList.add('movie__catigories')
    movieReyting.classList.add('movie__reyting')
    movieLanguage.classList.add('movie__language')
    movieLink.classList.add('movie__link')
    movieName.textContent = movies[i].Title
    movieNameFull.textContent = 'To\'liq nonmi: ' + movies[i].fulltitle
    movieNumber.textContent = i +1
    movieYear.textContent = 'yili:' + movies[i].movie_year
    // movieImg.href =  movies[i].ImageURL
    movieItem.textContent = movies[i].Categories
    movieReyting.textContent = movies[i].imdb_rating
    movieLanguage.textContent = movies[i].language
    movieLink.textContent = movies[i].Title + ' Trelle'
    movieLink.href = 'https://www.youtube.com/watch?v=' + movies[i].ytid
    movieContainer.appendChild(movieDiv)
    movieDiv.appendChild(movieName)
    movieDiv.appendChild(movieNameFull)
    movieDiv.appendChild(movieYear)
    // movieDiv.appendChild(movieImg)
    movieDiv.appendChild(movieItem)
    movieDiv.appendChild(movieReyting)
    movieDiv.appendChild(movieLanguage)
    movieDiv.appendChild(movieLink)
    movieDiv.appendChild(movieNumber)
}