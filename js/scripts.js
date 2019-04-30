

// Use suggested ajax call from Random User Generator
// Add function calls gallery (to load 12 users' cards) and modal (to feature selected user in pop-up window)
// function calls only run if ajax call is successful so .then() not required
function randomUserGenerator() {
  $.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      gallery(data);
      modal(data);
    }
  });
};

// Calls function above
randomUserGenerator();

// Display API data for each user using html markup template literals
function gallery(data) {
  data.results.forEach(data => {
    const users =
      `<div class="card">
         <div class="card-img-container">
           <img class="card-img" src="${data.picture.large}" alt="profile picture">
         </div>
         <div class="card-info-container">
           <h3 id="name" class="card-name cap">${data.name.first} ${data.name.last}</h3>
           <p class="card-text">${data.email}</p>
           <p class="card-text cap">${data.location.city}, ${data.location.state}</p>
         </div>
       </div>`;
// Append user data for 12 employees to div with ID of gallery
       $("#gallery").append(users);
    });
  };

// Create modal pop-up window for selected user with html markup template literals
function modal(data) {
  let card = $(".card");
// Iterate through cards to get data for selected card[i]
  for (var i = 0; i < card.length; i++) {
    ((i) => {
    card[i].addEventListener("click", function() {
    const modal_user =
      `<div class="modal-container">
          <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
              <div class="modal-info-container">
                <img class="modal-img" src="${data.results[i].picture.large}" alt="profile picture">
                  <h3 id="name" class="modal-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
                  <p class="modal-text">${data.results[i].email}</p>
                  <p class="modal-text cap">${data.results[i].location.city}</p>
                  <hr>
                  <p class="modal-text">${data.results[i].cell}</p>
                  <p class="modal-text cap">${data.results[i].location.street} ${data.results[i].location.city} ${data.results[i].location.state} ${data.results[i].location.postcode}</p>
                  <p class="modal-text">Birthday: ${data.results[i].dob.date.slice(0,10)}</p>
              </div>
          </div>
      </div>`;
// Append selected user's modal window to div with ID of gallery
    $("#gallery").append(modal_user);
// Close modal window when X button is clicked
    $('#modal-close-btn').on('click', ()=> {
      $('.modal-container').hide();
    });
    });
    })(i);
  };
};
