function upload(e) {
    e.preventDefault();
    // hear i collect value from details form
    let movie_name = document.getElementById("Movie_name").value.trim();

    genre=document.getElementById("Genre").value.trim();
    language=document.getElementById("Language").value.trim();
    dates=document.getElementById("Dates").value.trim();
    actors = document.getElementById("Actors").value.trim();
    director = document.getElementById("Director").value.trim();
    music_Director = document.getElementById("MusicDirector").value.trim();
    synopsis = document.getElementById("Synopsis").value.trim();
    image_link = document.getElementById("image_url").value;
    link_file = document.getElementById("link_file").value;
    timing = document.getElementById("timing").value;
    uuid = uuidv4();
     

    // hear i give var name for local storage data (initially there is no data so we mentioned or (||) symbol to get empty array)
    let movie_detail = JSON.parse(localStorage.getItem('movie_detail')) || [];

    // hear we give some condition for uploading details to restict same unique id
    let exist = movie_detail.some(data =>
            data.movie_name  == movie_name.toLowerCase()
            // data.Genre.toLowerCase() === Genre.toLowerCase() ||
            // data.Language.toLowerCase() === Language.toLowerCase() ||
            // data.Dates.toLowerCase() == Dates.toLowerCase() ||
            // data.Actors.toLowerCase() == Actors.toLowerCase() ||
            // data.Director.toLowerCase() == Director.toLowerCase() ||
            // data.Music_Director.toLowerCase() == Music_Director.toLowerCase() ||
            // data.Synopsis.toLowerCase() == Synopsis.toLowerCase() 
        );

    // if condition fail
    if(!exist){
        
        movie_detail.push({movie_name,genre,language,dates,actors,director,music_Director,synopsis,image_link,link_file,timing,uuid});
        localStorage.setItem('unique_id',uuid);
        localStorage.setItem('movie_detail', JSON.stringify(movie_detail));
       
        document.querySelector('form').reset();
        alert('Detail submitted Successfully✅' );
        location.href="../other pages/movieform2.html";

    }
    // if condition pass
    else{
        alert('hospital detail already exist!!');
        document.querySelector('form').reset();
    }

}
