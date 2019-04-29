

// Suggested script from Random User Generator
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

randomUserGenerator();
/**
Search markup:


<form action="#" method="get">
    <input type="search" id="search-input" class="search-input" placeholder="Search...">
    <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
</form>
**/

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
       $("#gallery").append(users);
    });
  };

function modal(data) {
  let card = $("div[class='card']");
  console.log(card);

  for (var i = 0; i < card.length; i++) {
   (function(i) {
    card[i].addEventListener("click", function() {
    const modal_user =
      `<div class="modal-container">
          <div class="modal">
              <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
              <div class="modal-info-container">
                  <img class="modal-img" src="${data.results[i].picture.large}" alt="profile picture">
                  <h3 id="name" class="modal-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
                  <p class="modal-text">${data.email}</p>
                  <p class="modal-text cap">${data.results[i].location.city}</p>
                  <hr>
                  <p class="modal-text">${data.cell}</p>
                  <p class="modal-text">${data.results[i].location.street} ${data.results[i].location.city} ${data.results[i].location.state} ${data.results[i].location.postcode}</p>
                  <p class="modal-text">${data.results[i].dob.date}</p>
              </div>
          </div>
      </div>`;
      document.querySelector('body').innerHTML += modal;
      $("#gallery").append(modal_user);
        })
    })(i);
  }
};


/**
Modal markup:

<div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
            <h3 id="name" class="modal-name cap">name</h3>
            <p class="modal-text">email</p>
            <p class="modal-text cap">city</p>
            <hr>
            <p class="modal-text">(555) 555-5555</p>
            <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
            <p class="modal-text">Birthday: 10/21/2015</p>
        </div>
    </div>
    **/

    /**
    data.results.forEach(data => {
      let $card = $("<div></div>").attr('class', "card-info-container");
      let $cardImgContainer = $("<div></div>").attr('class', "card-img-container");
        $card.append($cardImgContainer);
      let $img = $("<img></img>").attr('class', "card-img");
        $img.attr('src', `${data.picture.large}`);
        $img.attr('alt', "profile picture");
        $cardImgContainer.append($img);
      let $cardInfoContainer = $("<div></div>").attr('class', "card-info-container");
      let $h3 = $("<h3></h3>").attr('id', "name");
        $h3.attr('class', "card-name cap");
        $h3.textContent=(`${data.name.first} ${data.name.last}`);
        $cardInfoContainer.append($h3);
        console.log($cardInfoContainer);
      let $p1 = $("<p></p>").attr('class', "card-text");
        $p1.textContent=(`${data.email}`);
      let $p2 = $("<p></p>").attr('class', "card-text cap");
        $p2.textContent=(`${data.city} + ", " + ${data.state}`);
        $cardInfoContainer.append($p1);
        $cardInfoContainer.append($p2);
        $("#gallery").append($card);
      });
    };
    **/
