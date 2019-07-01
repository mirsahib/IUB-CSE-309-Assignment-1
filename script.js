

$(document).ready(function(){
  console.log("Start here");
  getData(function loadData(){
    var key = Object.keys(localStorage)
    for (var i = 0; i < key.length; i++) {
      var item = JSON.parse(localStorage.getItem(key[i]))
      var title = item['title']
      var imageurl = 'http://image.tmdb.org/t/p/w342/' + item['poster_path']
      var id = item['id']

      var divCol = $('<div style="margin-bottom:8px" class="col-md-4">')
      var divCard = $('<div class="card">')
      var image = $('<img class="card-img-top" src="' + imageurl + '" />')
      var cardBody = $('<div class="card-body">')
      var cardTitle = $('<h5 class="card-title">' + title + '</h5>')
      var cartBtn = $('<button id="' + id + '" class="btn btn-primary cardbtn" href="#" >Details</button>')
      divCard.append(image)
      cardBody.append(cardTitle)
      cardBody.append(cartBtn)
      divCard.append(cardBody)
      divCol.append(divCard)
      $('#popularMovie').append(divCol)
    }
  })
  //store movie data to localstorage

  //dynamically show movie data
  var key = Object.keys(localStorage)
  for(var i =0;i<key.length;i++){
    var item = JSON.parse(localStorage.getItem(key[i]))
    var title = item['title']
    var imageurl = 'http://image.tmdb.org/t/p/w342/'+item['poster_path']
    var id = item['id']

    var divCol = $('<div style="margin-bottom:8px" class="col-md-4">')
    var divCard = $('<div class="card">')
    var image = $('<img class="card-img-top" src="' + imageurl + '" />')
    var cardBody = $('<div class="card-body">')
    var cardTitle = $('<h5 class="card-title">' + title + '</h5>')
    var cartBtn = $('<button id="'+id+'" class="btn btn-primary cardbtn" href="#" >Details</button>')
    divCard.append(image)
    cardBody.append(cardTitle)
    cardBody.append(cartBtn)
    divCard.append(cardBody)
    divCol.append(divCard)
    $('#popularMovie').append(divCol)
  }  

  $('.cardbtn').click(function (event) {
    var item = JSON.parse(localStorage.getItem(event.target.id))
    var queryString = "?para1=" + item['id'];
    window.location.href = "details.html"+ queryString
    
    
  })
   
});

function getData(callback){
  var len = Object.keys(localStorage).length
  if (len == 0) { //if localstorage is empty fetch data
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?api_key=c438d70b1fcbf9e8f9852482df70fa5f&language=en-US&page=1";
    fetch(url)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        var id
        for (var i = 0; i < data['results'].length; i++) {
          id = data['results'][i]['id']
          localStorage.setItem(id, JSON.stringify(data['results'][i]))
        }
        callback()
      })
      .catch(function (err) {
        alert(err);
      });
  }
}




// $(".my-rating").starRating({
//   totalStars: 5,
//   emptyColor: 'lightgray',
//   hoverColor: 'crimson',
//   activeColor: 'orange',
//   initialRating: 4,
//   strokeWidth: 0,
//   useGradient: false,
//   minRating: 1,
//   callback: function(currentRating, $el){
//       alert('rated '+ currentRating);
//       console.log('DOM element ', $el);
//   }
// });




