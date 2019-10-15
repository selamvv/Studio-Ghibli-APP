var MoviePromise= d3.json("https://ghibliapi.herokuapp.com/films")
MoviePromise.then(function(movies)
    {
    console.log("movies", movies)
    getTitle(movies)
    getDiscription(movies)
    getCharacters(movies)
    },
    function(Error)
{
    
    console.log("fail", Error)
    
})
    
    


 var getTitle= function(movies)
{
    
    
  d3.select("body")
  .selectAll("div")
  .data(movies)
  .enter()
  .append("div")
  .attr("id", function(movie) 
    {return("I"+movie.id.trim()
           )})
    
  d3.selectAll("div")
    .append("h1")
    .attr("class", "movieName")
    
    
    
  .text( function(movie) 
    {return(movie.title)})
  .on("click", function(movie){
     getDiscription(movie)
     
 })
}
 
 var getDiscription= function(movie)
{
d3.select("#I"+movie.id)
  .append("p")
  .attr("class", "description")
  .text(movie.description)
  .on("click", function(movie){
     getCharacters(movie)
 })    
}
  
  
  var getCharacters= function(movie)
{
 d3.select("#I"+movie.id)
  .append("div")
  .attr("class", "people")
  .text(movie.producer)}
 
 
