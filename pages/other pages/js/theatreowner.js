function upload(e) {
  e.preventDefault();
  // hear i collect value from details form
  const Email = document.getElementById("Email").value.trim();

  Password = document.getElementById("Password").value.trim();
  Confirm_Password = document.getElementById("Confirm_Password").value.trim();
  Theatre_Name = document.getElementById("Theatre_Name").value.trim();
  Theatre_Address = document.getElementById("Theatre_Address").value.trim();
  Screens = document.getElementById("Screen").value.trim();
  uuid = uuidv4();

  // hear i give var name for local storage data (initially there is no data so we mentioned or (||) symbol to get empty array)
  const theatreowner_detail =
    JSON.parse(localStorage.getItem("theatreowner_detail")) || [];

  // hear we give some condition for uploading details to restict same unique id
  const exist = theatreowner_detail.some(
    (data) => data.movie_name == Email.toLowerCase()
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
    theatreowner_detail.push({
      Email,
      Password,
      Confirm_Password,
      Theatre_Name,
      Theatre_Address,
      Screens,
      uuid,
    });
    localStorage.setItem("unique_id", uuid);
    localStorage.setItem(
      "theatreowner_detail",
      JSON.stringify(theatreowner_detail)
    );

    document.querySelector("form").reset();
    alert("Detail submitted Successfully✅");
    location.href = "../other pages/theatreownerform2.html";
  }
  // if condition pass
  else {
    alert("hospital detail already exist!!");
    document.querySelector("form").reset();
  }
}
