$(document).ready(function(){
    console.log("details")
    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1);
    var queries = queryString.split("=");
    var item = JSON.parse(localStorage.getItem(queries[1]))
    var title = item['title']
    var overview = item['overview']
    var img = 'http://image.tmdb.org/t/p/w342/' + item['poster_path']
    document.title = title
    $('#title').text(title)
    $('#overview').text(overview)
    $('#poster').attr('src',img)
})