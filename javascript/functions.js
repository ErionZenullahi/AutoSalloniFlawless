 
        /**
         * LogIn  Function
         */
        function login() {
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
          
        
          

//Forgot password logic 
        function forgotPassword() {
          const oldpassword = document.getElementById('oldpassword').value;
          const newpassword = document.getElementById('newpassword').value;
          const confirmpassword = document.getElementById('confirmpassword').value;
          const alertElement = document.getElementById('alertconfirm');
      
          if (oldpassword === "admin") {
              if (newpassword === confirmpassword && newpassword !== "" && newpassword !== null) {
                  alert("New Password has been set");
                  window.location.href = "login.html";
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
      

 // Password Toggler (Hide-Show)
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


// Filtering cards at orders
        function filterCards() {
          var selectedOption = document.getElementById("selectOption").value;
          var cards = document.querySelectorAll(".ez-order-card");
        
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
// Remove cards at orders
        function removeCard(button) {
          // Ask the user for confirmation
          var isConfirmed = window.confirm("Are you sure you want to REMOVE this order?");
      
          if (isConfirmed) {
            let card = button.closest(".ez-order-card");
            card.remove();
          }
        }

// Cancel order func...
        function cancelButton(button) {
          var card = button.closest('.card');
          var statusElement = card.querySelector('.ez-order-status');

          if (statusElement.textContent.trim().toLowerCase() === 'cancelled') {
              button.setAttribute('disabled');
              return;
          }

          if(statusElement.textContent.trim().toLowerCase() === 'arrived'){
            alert('This order has already been delivered to the client!' + ' If you want to return it contact the support');
            button.setAttribute('disabled');
            return;
          }

          var userConfirmation = confirm('Are you sure you want to cancel this order?');

          if (userConfirmation) {
              statusElement.textContent = 'Cancelled';

               card.setAttribute('data-options', 'cancelled');

              alert('Order has been cancelled.');
          }
      }
  
      // ORDER A CAR

      function order() {
        confirm('Are you sure you want to make this order?');
        if(confirm){
          alert('Purchase has been made successfully');
        }
      }


      function showPopup() {
        document.getElementById('popup').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
      }

      function confirmPurchase(button){
        document.getElementById('popup2').style.display = 'block';
        
      }
    
      function hidePopup() {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('popup2').style.display = 'none';
      }