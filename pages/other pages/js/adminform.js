function upload(e) {
  e.preventDefault();
  // hear i collect value from details form
  const name = document.getElementById("name").value.trim();

  email = document.getElementById("email").value.trim();
  password = document.getElementById("password").value.trim();
  // dates=document.getElementById("Dates").value.trim();
  // actors = document.getElementById("Actors").value.trim();
  // director = document.getElementById("Director").value.trim();
  // music_Director = document.getElementById("MusicDirector").value.trim();
  // synopsis = document.getElementById("Synopsis").value.trim();
  // image_link = document.getElementById("image_url").value;
  // link_file = document.getElementById("link_file").value;
  // timing = document.getElementById("timing").value;
  uuid = uuidv4();

  // hear i give var name for local storage data (initially there is no data so we mentioned or (||) symbol to get empty array)
  const Admin_detail = JSON.parse(localStorage.getItem("Admin_detail")) || [];

  // hear we give some condition for uploading details to restict same unique id
  const exist = Admin_detail.some(
    (data) => data.name == name.toLowerCase()
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
    Admin_detail.push({
      name,
      email,
      password,
      uuid,
    });
    localStorage.setItem("admin_id", uuid);
    localStorage.setItem("Admin_detail", JSON.stringify(Admin_detail));

    document.querySelector("form").reset();
    alert("Detail submitted Successfully✅");
    location.href = "../other pages/adminform2.html";
  }
  // if condition pass
  else {
    alert("admin detail already exist!!");
    document.querySelector("form").reset();
  }
}
