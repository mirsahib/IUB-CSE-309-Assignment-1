# Rotten Pumpkin
Movie Recomendation site
#### Task 1: HTML and css (design)
  the site is build using bootstrap
#### Task 2: store movie data to localstorage
  The Movie Database (TMDb) [API](https://www.themoviedb.org/documentation/api) is used to get the popular movie list<br>
  The dataset is then stored into the localstorage
#### Task 3: dynamically show movie data
  The Popular movie section is dynamically populate by fetching the localstorage data
#### Task 4: Show movie detail
  Movie Detail can found by clicking the details button,<br>.
  The `$(.cartbtn).click()` function will get the movie id and pass this to detail.html file <br>
  The following code is use to pass movie id from index.html to detail.html<br>
  `var queryString = "?para1=" + item['id'];
   window.location.href = "details.html"+ queryString`

#### NB: clear local storage before running index.html

## Landing Page
![alt text](https://github.com/mirsahib/RottenPumpkin/blob/master/screenshot/landing.png "Landing page")

## Popular Movie
![alt text](https://github.com/mirsahib/RottenPumkin/blob/Assignment1/screenshot/popularMovie.png "Popular page")

## Movie Detail
![alt text](https://github.com/mirsahib/RottenPumkin/blob/Assignment1/screenshot/detail.png "Detail page")





