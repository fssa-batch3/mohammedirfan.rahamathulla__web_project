function upload(e) {
    e.preventDefault();
    // hear i collect value from details form
    const movie_image = document.getElementById("img").value.trim();
  
    title = document.getElementById("title").value.trim();
    grossover = document.getElementById("budget").value.trim();
    firstdaycollection = document.getElementById("firstday").value.trim();
    firstweekcollection = document.getElementById("firstweek").value.trim();
    time = document.getElementById("time").value.trim();
    stars = document.getElementById("stars").value.trim();
    runningdate = document.getElementById("rundate").value.trim();
    totaldays = document.getElementById("totaldays").value;
    uuid = uuidv4();
  
    // hear i give var name for local storage data (initially there is no data so we mentioned or (||) symbol to get empty array)
    const Recorded_movies = JSON.parse(localStorage.getItem("Recorded_movies")) || [];
  
    // hear we give some condition for uploading details to restict same unique id
    const exist = Recorded_movies.some(
      (data) => data.movie_image == movie_image.toLowerCase()
      // data.Genre.toLowerCase() === Genre.toLowerCase() ||
      // data.Language.toLowerCase() === Language.toLowerCase() ||
      // data.Dates.toLowerCase() == Dates.toLowerCase() ||
      // data.Actors.toLowerCase() == Actors.toLowerCase() ||
      // data.Director.toLowerCase() == Director.toLowerCase() ||
      // data.Music_Director.toLowerCase() == Music_Director.toLowerCase() ||
      // data.Synopsis.toLowerCase() == Synopsis.toLowerCase()
    );
  
    // if condition fail
    if (!exist) {
        Recorded_movies.push({
        movie_image,
        title,
        grossover,
        firstdaycollection,
        firstweekcollection,
        time,
        stars,
        runningdate,
        totaldays,
        uuid,
      });
      localStorage.setItem("unique_id", uuid);
      localStorage.setItem("Recorded_movies", JSON.stringify(Recorded_movies));
  
      document.querySelector("form").reset();
      alert("Detail submitted Successfully✅");
      location.href = "../other pages/recordededitform.html";
    }
    // if condition pass
    else {
      alert("recorded movies detail already exist!!");
      document.querySelector("form").reset();
    }
  }
  