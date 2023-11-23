$('#movies').on('click', '.btnRemove', function() {
    $(this).closest('li').remove();
});

$('#btn').on('click', function(e){
    e.preventDefault();
    const $movieName = $('#inputTitle').val();
    const $movieRating = $('#inputRating').val();
    const $movieList = $('#movies'); 
    const $appendButton =  $("<button class='btnRemove'>Remove</button>")

    const $newMovie = $("<li>Movie: " + $movieName + ", " + "Rating: " + $movieRating +  " </li>")
    $newMovie.append($appendButton);
    $movieList.append($newMovie);
    // $appendButton.click(function(e){
    //     $newMovie.remove();
    // })

})