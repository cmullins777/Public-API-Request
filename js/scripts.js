

// Suggested script from Random User Generator
function randomUserGenerator() {
$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    gallery(data);
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
    let $card = $("div[class='card']");
    let $cardImgContainer = $("div[class='card-img-container']");
      $card.append($cardImgContainer);
    let $img = $("img[class='card-img']");
      $img.scr="https://placehold.it/90x90";
      $img.alt="profile picture";
      $cardImgContainer.append($img);
    let $cardInfoContainer = $("div[class='card-info-container']");
    let $h3 = $("h3[id='name']");
      $h3.addClass("card-name cap");
      $h3.textContent=(`{data.results.first}{data.results.last}`);
      $cardInfoContainer.append($h3);
    let $p1 = $("p[class='card-text']");
      $p1.textContent=(`{data.results.email}`);
    let $p2 = $("p[class='card-text cap']");
      $p2.textContent=(`{data.results.city} + ", " + {data.results.state}`);
      $cardInfoContainer.append($p1);
      $cardInfoContainer.append($p2);
    document.querySelector('.gallery').append($card);  
  });
};

/**
Gallery markup:
<div class="card">
    <div class="card-img-container">
        <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
    </div>
    <div class="card-info-container">
        <h3 id="name" class="card-name cap">first last</h3>
        <p class="card-text">email</p>
        <p class="card-text cap">city, state</p>
    </div>
</div>
**/

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
