function upload(e) {
    e.preventDefault();
    // hear i collect value from details form
    const movie_name = document.getElementById("master").value.trim();
    const releaseddate = document.getElementById("u/a").value.trim();
    const imageurl = document.getElementById("masterimg").value.trim();
    const videourl = document.getElementById("video1").value.trim();
    const moviedescription = document.getElementById("kishan").value.trim();
    const stars = document.getElementById("stars").value.trim();
    const uuid = uuidv4();
    const Trailer_detail = JSON.parse(localStorage.getItem("Trailer_detail")) || [];
    const exist = Trailer_detail.some(
        (data) => data.movie_name == movie_name.toLowerCase()
        );

        // if condition fail
        if (!exist) {
          Trailer_detail.push({
            movie_name,
            releaseddate,
            imageurl,
            videourl,
            moviedescription,
            stars,
            uuid,
          });
          localStorage.setItem("unique_id", uuid);
          localStorage.setItem("Trailer_detail", JSON.stringify(Trailer_detail));
      
          document.querySelector("form").reset();
          alert("Detail submitted Successfully✅");
          location.href = "../other pages/Trailer.html";
        }
        // if condition pass
        else {
          alert("trailer detail already exist!!");
          document.querySelector("form").reset();
        }
      }
      