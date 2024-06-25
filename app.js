console.log("Let's get this party started!");
$('#searchbutton').click(function (event){
    event.preventDefault(); 
const valueInput=$('input').val()
getGiphyInfo(valueInput)
})

async function getGiphyInfo(valueInput) {
    try {
        let response = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${valueInput}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
        console.log(response.data);
        let arrLength=response.data.data.length
        let randomIndex = Math.floor(Math.random() * arrLength);
        displayGifs(response.data.data[randomIndex].images.original.url);
    } catch (error) {
        console.error('Error fetching data from Giphy API:', error);
    }
  }
function displayGifs(chosenGifUrl){
$('body').append(`<img src=${chosenGifUrl}>`)
}
$('#removebutton').click(function(){
    $('img').remove();
})