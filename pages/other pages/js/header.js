const root = window.location.origin;
console.log(root);

const before_login = `
        <header>
              <div class="topnav">
                <a href="${root}" class="logo"> <i class="fa fa-ticket"></i>IRFU TICKETS</a>
                <a href="${root}/pages/other pages/Theatres.html">Cinemas</a>
                <a href="${root}/pages/other pages/Trailer.html">Trailer</a>
                <a href="${root}/pages/other pages/review.html">Review</a>
                <a href="${root}/pages/other pages/about.html">About us</a>
                <a href="${root}/pages/other pages/signup.html">Sign up</a>
                <a href="${root}/pages/other pages/signin.html">Sign in</a>
                <div class="search-container">
                    <input type="text" placeholder="Search what you want" name="search">
                    <button type="submit"><i class="fa fa-search"></i></button>                  
                </div>
              </div>
        </header>

              
`;

const after_login = `
<header>
              <div class="topnav">
                <a href="${root}" class="logo"> <i class="fa fa-ticket"></i>IRFU TICKETS</a>
                <a href="${root}/pages/other pages/Theatres.html">Cinemas</a>
                <a href="${root}/pages/other pages/Trailer.html">Trailer</a>
                <a href="${root}/pages/other pages/review.html">Review</a>
                <a href="${root}/pages/other pages/about.html">About us</a>
                <a href="${root}/pages/other pages/profile.html">Profile</a>
                <div class="search-container"> 
                     <input type="text" placeholder="Search what you want" name="search">
                     <button type="submit"><i class="fa fa-search"></i></button>                  
                </div>
              </div>        
        </header>

`;
const unique_id = localStorage.getItem("unique_id");

if (!unique_id) {
  document.body.insertAdjacentHTML("afterbegin", before_login);
  // console.log(user_account)


} else {
  document.body.insertAdjacentHTML("afterbegin", after_login);
  //     location.href = "./pages/homepage/account.html"

  const logout_btn = document.getElementById("logout");


            logout_btn?.addEventListener("click", () =>{
              localStorage.removeItem("unique_id");
              document.body.innerHTML = before_login
              location.href = "/index.html";
            });
}
