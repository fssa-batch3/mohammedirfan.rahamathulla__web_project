function uploadtheatre(e){
    let movie_name = document.getElementById("moviename").value;

    let theatres = [];
    let theatre_name = document.getElementById("theatrename").value;
    
    let timings = [];
     let timing1 = document.getElementById("timing1").value;
    let timing2 = document.getElementById("timing2").value;
    let timing3 = document.getElementById("timing3").value;
    let timing4 = document.getElementById("timing4").value;
    
    let location = document.getElementById("location").value;
    
    let city = document.getElementById("city").value;
    
     let unique_mandt = uuidv4();
    
    let moviesandtheatres = JSON.parse(localStorage.getItem("movies_and_theatres")) || [];

    timings.push(timing1,timing2,timing3,timing4);
    
     theatres.push({theatre_name,location,city,timings});
    
    moviesandtheatres.push({movie_name,theatres,unique_mandt});
    
    localStorage.setItem('movies_and_theatres',JSON.stringify(moviesandtheatres));
    localStorage.setItem('unique_movies_theatres',movie_name);
    
    alert("theater details updated succesfully");
    
    document.querySelector('form').reset();
}
