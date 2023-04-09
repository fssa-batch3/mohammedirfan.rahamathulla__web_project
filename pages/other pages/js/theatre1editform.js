const unique_movie = document.getElementById("unique_movie");
const movieName = document.getElementById("moviename");
const theatreName = document.getElementById("theatrename");
    
   
     const time1 = document.getElementById("timing1");
    const time2 = document.getElementById("timing2");
    const time3 = document.getElementById("timing3");
    const time4 = document.getElementById("timing4");
    
    const area = document.getElementById("location");
    
    const town = document.getElementById("city");

    document.getElementById("find_details").addEventListener("click",(event)=>{
        event.preventDefault();
        const uniqueMovie = unique_movie.value;
        const details = JSON.parse(localStorage.getItem('movies_and_theatres'));
        const detail = details.find(theatre=>
            theatre.movie_name === movieName);

        if(detail){
            movieName.value = detail.movie_name
            theatreName.value = detail.theatres.theatre_name
            area.value = detail.theatres.location
            town.value = detail.theatres.city
            time1.value = detail.theatres.timings.timing1
            time2.value = detail.theatres.timings.timing2
            time3.value = detail.theatres.timings.timing3
            time4.value = detail.theatres.timings.timing4

            document.getElementById("update").onclick = function(event){
                event.preventDefault();
                updateDetail()
            }
            function updateDetail(){
                
            }
        }    

    });
    