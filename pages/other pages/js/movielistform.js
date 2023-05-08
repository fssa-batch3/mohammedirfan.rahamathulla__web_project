function upload(e) {
  e.preventDefault();
  // hear i collect value from details form
  const movie_name = document.getElementById("Movie_name").value.trim();

  tamil = document.getElementById("Tamil").value.trim();
  english = document.getElementById("English").value.trim();
  uuid = uuidv4();

  // hear i give var name for local storage data (initially there is no data so we mentioned or (||) symbol to get empty array)
  const Movielist_detail =
    JSON.parse(localStorage.getItem("Movielist_detail")) || [];

  // hear we give some condition for uploading details to restict same unique id
  const exist = Movielist_detail.some(
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
    Movielist_detail.push({
      movie_name,
      tamil,
      english,
      uuid,
    });
    localStorage.setItem("unique_id", uuid);
    localStorage.setItem("Movielist_detail", JSON.stringify(Movielist_detail));

    document.querySelector("form").reset();
    alert("Detail submitted Successfully✅");
    location.href = "../other pages/movielistform2.html";
  }
  // if condition pass
  else {
    alert("movielist detail already exist!!");
    document.querySelector("form").reset();
  }
}
