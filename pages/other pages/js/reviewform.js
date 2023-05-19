function upload(e) {
    e.preventDefault();
    // hear i collect value from details form
    const movie_image = document.getElementById("movie_img").value.trim();
    title = document.getElementById("title").value.trim();
    language = document.getElementById("Language").value.trim();
    moviedescription = document.getElementById("movie_description").value.trim();
    stars = document.getElementById("stars").value.trim();
    director = document.getElementById("Director").value.trim();
    musicdirector = document.getElementById("MusicDirector").value.trim();
    Man_1 = document.getElementById("man1img").value.trim();
    Man_1text = document.getElementById("man1text").value.trim();
    Man_2 = document.getElementById("man2img").value.trim();
    Man_2text = document.getElementById("man2text").value.trim();
    Man_3 = document.getElementById("man3img").value.trim();
    Man_3text = document.getElementById("man3text").value.trim();
    para_1 = document.getElementById("karkucon").value.trim();
    para_2 = document.getElementById("boobalancon").value.trim();
    para_3 = document.getElementById("deepikacon").value.trim();
    

    
    uuid = uuidv4();
  
    // hear i give var name for local storage data (initially there is no data so we mentioned or (||) symbol to get empty array)
    const Review_detail = JSON.parse(localStorage.getItem("Review_detail")) || [];
  
    // hear we give some condition for uploading details to restict same unique id
    const exist = Review_detail.some(
      (data) => data.movie_name == movie_name.toLowerCase()
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
      Review_detail.push({
        movie_name,
        title,
        language,
        moviedescription,
        stars,
        director,
        musicdirector,
        Man_1,
        Man_1text,
        Man_2,
        Man_2text,
        Man_3,
        Man_3text,
        para_1,
        para_2,
        para_3,
        uuid,
      });
      localStorage.setItem("unique_id", uuid);
      localStorage.setItem("Review_detail", JSON.stringify(Review_detail));
  
      document.querySelector("form").reset();
      alert("Detail submitted Successfully✅");
      location.href = "../other pages/revieweditform2.html";
    }
    // if condition pass
    else {
      alert("review detail already exist!!");
      document.querySelector("form").reset();
    }
  }
  