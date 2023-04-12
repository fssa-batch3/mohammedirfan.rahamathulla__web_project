function upload(e) {
    e.preventDefault();
    // hear i collect value from details form
    let movie_name = document.getElementById("Movie_name").value.trim();

    genre=document.getElementById("Genre").value.trim();
    language=document.getElementById("Language").value.trim();
    dates=document.getElementById("Dates").value.trim();
    actors = document.getElementById("Actors").value.trim();
    director = document.getElementById("Director").value.trim();
    uuid = uuidv4();
     

    // hear i give var name for local storage data (initially there is no data so we mentioned or (||) symbol to get empty array)
    let theatreowner_detail = JSON.parse(localStorage.getItem('theatreowner_detail')) || [];

    // hear we give some condition for uploading details to restict same unique id
    let exist = theatreowner_detail.some(data =>
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
        
        theatreowner_detail.push({movie_name,genre,language,dates,actors,director,uuid});
        localStorage.setItem('unique_id',uuid);
        localStorage.setItem('theatreowner_detail', JSON.stringify(theatreowner_detail));
       
        document.querySelector('form').reset();
        alert('Detail submitted Successfully✅' );
        location.href="../other pages/theatreownerform2.html";

    }
    // if condition pass
    else{
        alert('hospital detail already exist!!');
        document.querySelector('form').reset();
    }

}
