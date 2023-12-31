function createNavbar() {
    // Create a header element
    var header = document.createElement('header');
    
    // Set the content of the header (you can customize this)
  //   header.innerHTML = '<nav class="navbar navbar-expand-lg bg-secondary" id="Home"> | <div class="container-fluid">  | <a class="navbar-brand" href="index.html"> | <img src="../img/logo.png" alt="Logo" width="150" height="84" class="mx-4"> | </a> | <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> | <span class="navbar-toggler-icon"></span> | </button> | <div class="collapse navbar-collapse" id="navbarSupportedContent"> | <ul class="navbar-nav me-2 mb-2 mb-lg-0 ms-auto px-3"> | <li class="nav-item px-2"> |  <a class="nav-link active" id="active" aria-current="page" href="index.html">Home</a> | </li> ';
    
      header.innerHTML = `
      <nav class="navbar navbar-expand-lg bg-secondary fade-in" id="Home">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
          <img src="img/logo.png" alt="Logo" width="150" height="84" class="mx-4">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-2 mb-2 mb-lg-0 ms-auto px-3">
            <li class="nav-item px-2">
              <a class="nav-link"  href="index.html">Home</a>
            </li>
            <li class="nav-item px-2 ">
              <a class="nav-link" href="aboutus.html">About us</a>
            </li>
            
            <!-- DROP DOWN MENU-->
            <li class="nav-item dropdown px-2">
              <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Shopping tools
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="orderonline.html"><i class="bi bi-wallet-fill"></i> Order Online</a></li>
                <li><a class="dropdown-item" href="visitus.html"><i class="bi bi-pin-map"></i> Visit Us to Order</a></li>
              </ul>
            </li> 
            <!-- DROP DOWN MENU-->


            <li class="nav-item px-2 ">
              <a class="nav-link" href="contactus.html">Contact us</a>
            </li>

            <!-- LOG IN Nav-item -->
            <li class="nav-item dropdown px-2 ez-account" id="ez-dropdown" >
              <a class="nav-link dropdown-toggle" href="#" role="button"  data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-person-circle" ></i>
              </a>
              <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="login.html"><i class="bi bi-person-fill"></i> Log In </a></li>
                <li><a class="dropdown-item" href="accountdetails.html"><i class="bi bi-person-lines-fill"> </i>  Account Details</a></li>
                <li><a class="dropdown-item" href="orders.html"><i class="bi bi-cart"></i> Orders </a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="policies.html">Privacy & Policies </a></li>
              </ul>
            </li> 
            <!-- LOG IN Nav-item -->

          </ul>
        </div>
      </div>
    </nav>
    `;

    // Shton elementin header brenda Body
    document.body.appendChild(header);
  }

  function createFooter() {
      var footer = document.createElement('footer');
  
      footer.innerHTML = `
      <div class="container-fluid p-0">
          <div class="footer bg-dark text-light  d-flex justify-content-between">
            <div class="container">
            <div class="row m-0">
              <div class="col col-sm-6 col-12  ez-About">
                <img src="img/logo.png" class="img-fluid ez-footer-logo"  alt="Logo" width="120px" height="70px">
                <h3 class="h3 ez-footer-title">About</h3>
                <p class="ez-about-footer text-secondary">
                  <em>AutoSalloni Flawless is one of the biggest Autodealerships on Ballkan, <br>
                    we sell the best pieces ever produced.<br>
                    You have many choices but not much time so take something that saves your time!
                </em>
                </p>
              </div>
  
              <div class="col col-sm-4 col-12  text-center mt-5 ez-Lista">
                  <h2 class="h2 ez-ql">Quick Links</h2>
                  <div class="ez-list-col">
                  <ul class="list-group ez-ql-items">
                    <li class="list-item my-1"><a href="aboutus.html">About Us</a></li>
                    <li class="list-item my-1"><a href="contactus.html">Contact Us</a></li>
                    <li class="list-item my-1"><a href="signup.html">Create An Account</a></li><br>
                  </ul>
                </div>
              </div>
            </div><hr>
            <div class="d-flex justify-content-between ez-copyright">
            <p class="text-secondary"><strong>Copyright &copy; 2023 All Rights Reserved by AutoSalloni Flawless</strong></p>
            <div class="social-icons">
              <a href=""><abbr title="Facebook"><i class="bi bi-facebook"></i></abbr></a>
              <a href=""><abbr title="Twitter"><i class="bi bi-twitter"></i></abbr></a>
              <a href=""><abbr title="Linkedin"><i class="bi bi-linkedin"></i></abbr></a>
              <a href=""><abbr title="GitHub"><i class="bi bi-github"></i></abbr></a>
            </div>
          </div>
          </div>
        </div> 
      </div>
      `;
  
      document.body.appendChild(footer);
  }