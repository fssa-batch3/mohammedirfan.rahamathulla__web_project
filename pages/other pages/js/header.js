const root = window.location.origin;
console.log(root);


let before_login = `
        <header>
              <div class="topnav">
                <a href="${root}" class="logo"> <i class="fa fa-ticket"></i>IRFU TICKETS</a>
                <a href="${root}/pages/other pages/Theatres.html">Cinemas</a>
                <a href="${root}/pages/other pages/Trailer.html">Trailer</a>
                <a href="${root}/pages/other pages/movielist.html">Movie list</a>
                <a href="${root}/pages/other pages/review.html">Review</a>
                <a href="${root}/pages/other pages/stadium.html">Stadium</a>
                <a href="${root}./pages/other pages/signup.html">REGISTER</a>
                <a href="${root}/pages/other pages/signin.html">LOGIN</a>
                <div class="search-container">
                  
                    <input type="text" placeholder="Search what you want" name="search">
                    <button type="submit"><i class="fa fa-search"></i></button>                  
                </div>
              </div>
        </header>

              
`

let after_login = `
<header>
              <div class="topnav">
                <a href="${root}" class="logo"> <i class="fa fa-ticket"></i>IRFU TICKETS</a>
                <a href="${root}/pages/other pages/Theatres.html">Cinemas</a>
                <a href="${root}/pages/other pages/Trailer.html">Trailer</a>
                <a href="${root}/pages/other pages/movielist.html">Movie list</a>
                <a href="${root}/pages/other pages/review.html">Review</a>
                <a href="${root}/pages/other pages/stadium.html">Stadium</a>
                <a href="${root}/pages/other pages/profile.html" id="p">Profile</a>
                <div class="search-container">
                  
                    <input type="text" placeholder="Search what you want" name="search">
                    <button type="submit"><i class="fa fa-search"></i></button>                  
                </div>
              </div>
        </header>

`
let unique_id = localStorage.getItem("unique_id");

if (unique_id == 0 || unique_id == undefined) {
    //console.log(user_account)
    document.body.insertAdjacentHTML("afterbegin", before_login);
}


else {
    document.body.insertAdjacentHTML("afterbegin", after_login);
    //     location.href = "./pages/homepage/account.html"
}