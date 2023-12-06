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
                      Cars
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="luxurycars.html">Luxury</a></li>
                      <li><a class="dropdown-item" href="#">Economic</a></li>
                      <li><a class="dropdown-item" href="#">Sport</a></li>
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
                    <li><a class="dropdown-item" href="login.html">Log In <i class="bi bi-person-fill"></i></a></li>
                      <li><a class="dropdown-item" href="accountdetails.html">Account Details</a></li>
                      <li><a class="dropdown-item" href="orders.html">Orders <i class="bi bi-cart"></i></a></li>
                    </ul>
                  </li> 
                  <!-- LOG IN Nav-item -->
    
                </ul>
              </div>
            </div>
          </nav>
          `;

          // Append the header to the body
          document.body.appendChild(header);
        }

        function createFooter() {
            var footer = document.createElement('footer');
        
            footer.innerHTML = `
            <div class="container-fluid p-0">
                <div class="footer bg-dark text-light  d-flex justify-content-between">
                  <div class="container">
                  <div class="row m-0">
                    <div class="col">
                      <img src="img/logo.png" class="img-fluid"  alt="Logo" width="120px" height="70px">
                      <h3 class="h3">About</h3>
                      <p class="ez-about-footer text-secondary">
                        <em>AutoSalloni Flawless is one of the biggest Autodealerships on Ballkan, <br>
                          we sell the best pieces ever produced.<br>
                          You have many choices but not much time so take something that saves your time!
                      </em>
                      </p>
                    </div>
        
                    <div class="col text-center mt-5 ez-Lista">
                        <h2 class="h2 ez-ql">Quick Links</h2>
                        <div class="ez-list-col">
                        <ul class="list-group ez-ql-items">
                          <li class="list-item"><a href="aboutus.html">About Us</a></li>
                          <li class="list-item"><a href="contactus.html">Contact Us</a></li>
                          <li class="list-item"><a href="">Cars</a></li><br>
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


        
        /**
         * LogIn  Function
         */
        function login() {
          // Get input values
          var username = document.getElementById("username").value;
          var password = document.getElementById("password").value;
          var aUser = document.getElementById("alertuser");
          var aPassword = document.getElementById("alertpassword");

          if(username === "Admin"){
            if(password === "admin"){
              window.location.href = 'index.html';
            }else if(password !== "admin" && password !== ""){ 
              aPassword.innerHTML = "Password is Incorrect!";
              aUser.innerHTML = "";
            }else{
              aPassword.innerHTML = "Password is Required!";
              aUser.innerHTML = "";
            }
          }else if(username !== "Admin" && username !== ""){ 
              aUser.innerHTML = "Username Not Found!";
              aPassword.innerHTML = "";
          }else{
              aUser.innerHTML = "Username is Required!";
              aPassword.innerHTML = "";
          }
        }



        /**
         * Sign up Function
         */
        function signUp() {
          var username = document.getElementById("username").value;
          var password = document.getElementById("password").value;
          var aUser = document.getElementById("alertuser");
          var aPassword = document.getElementById("alertpassword");

          if(username !== "Admin" && username !== ""){
            if(password !== ""){
              window.location.href = "index.html";
              alert("You Created an Account Successfully!");
            }else{
              aPassword.innerHTML = "Password is Required!";
              aUser.innerHTML = "";
            }
          }else if(username === ""){
            aUser.innerHTML = "Username is Required!";
            aPassword.innerHTML = "";
          }else{
            aUser.innerHTML = "Username is Taken!";
            aPassword.innerHTML = "";
          }
        }
          
        
          


        function forgotPassword() {
          const oldpassword = document.getElementById('oldpassword').value;
          const newpassword = document.getElementById('newpassword').value;
          const confirmpassword = document.getElementById('confirmpassword').value;
          const alertElement = document.getElementById('alertconfirm');
      
          if (oldpassword === "admin") {
              if (newpassword === confirmpassword && newpassword !== "" && newpassword !== null) {
                  alert("New Password has been set");
              } else if (newpassword === "" || newpassword === null) {
                  alertElement.innerHTML = "New Password is required!";
              } else {
                  alertElement.innerHTML = "Passwords do not match!";
              }
          } else if (oldpassword === '' || oldpassword === null) {
              alertElement.innerHTML = "Old Password is required!";
          } else {
              alertElement.innerHTML = "Old Password is incorrect!";
          }
      }
      

      /*TOGGLE PASSWORD*/


        

        function passwordToggler(){

          var passwordInput = document.getElementById("password");
          var icon = document.getElementById("togglePassword");


          if(passwordInput.type === "password"){
            passwordInput.type = 'text';
            icon.className = 'bi-eye ez-shp';
          }else{
            passwordInput.type = 'password';
            icon.className = 'bi-eye-slash ez-shp';
          }
        }



        function filterCards() {
          var selectedOption = document.getElementById("selectOption").value;
          var cards = document.querySelectorAll(".order-card");
        
          cards.forEach(function (card) {
            var cardOptions = card.getAttribute("data-options").toLowerCase().split(" ");
            var displayCard = true;
        

            if (selectedOption !== "0") {
              displayCard = cardOptions.includes(selectedOption.toLowerCase());
            }
        
            if (displayCard) {
              card.style.display = "block"; // Show the card
            } else {
              card.style.display = "none";  // Hide the card
            }
          });
        }


        function removeCard(button) {
          // Ask the user for confirmation
          var isConfirmed = window.confirm("Are you sure you want to cancel this order?");
      
          if (isConfirmed) {

            var card = button.closest(".order-card");
      

            card.remove();
          }
        }


        function cancelButton(button) {
          var card = button.closest('.card');
          var statusElement = card.querySelector('.ez-order-status');

          if (statusElement.textContent.trim().toLowerCase() === 'cancelled') {
              alert('This order is already cancelled.');
              return;
          }

          var userConfirmation = confirm('Are you sure you want to cancel this order?');

          if (userConfirmation) {
              statusElement.textContent = 'Cancelled';

               card.setAttribute('data-options', 'cancelled');

              alert('Order has been cancelled.');
          }
      }




