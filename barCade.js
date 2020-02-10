$(document).ready(function() {
  $.get("https://obscure-tundra-54269.herokuapp.com/bar-food", function(data) {
    var apps = data.appetizers.map(function(item) {
      return `
        <div  class="itemNPD">
          <div class="iconContainer">
            <img class="foodIcon" src="Assets/Spicy.png">
            <img class="foodIcon" src="Assets/Allergy.png">
            <p class="name">${item.name}</p>
            <img class="foodIcon" src="Assets/Vegan.png">
            <img class="foodIcon" src="Assets/Rating.png">
          </div>
          <p class="description">${item.description}</p>
          <p class="price">${item.price}</p>
        </div>`
    })
    var entree = data.entrees.map(function(item) {
      return `
        <div  class="itemNPD">
          <div class="iconContainer">
            <img class="foodIcon" src="Assets/Spicy.png">
            <img class="foodIcon" src="Assets/Allergy.png">
            <p class="name">${item.name}</p>
            <img class="foodIcon" src="Assets/Vegan.png">
            <img class="foodIcon" src="Assets/Rating.png">
          </div>
          <p class="description">${item.description}</p>
          <p class="price">${item.price}</p>
        </div>`
    })
    var dessert = data.desserts
      .map(function(item) {
        return `
        <div class="itemNPD">
          <div class="iconContainer">
            <img class="foodIcon" src="Assets/Spicy.png">
            <img class="foodIcon" src="Assets/Allergy.png">
            <p class="name">${item.name}</p>
            <img class="foodIcon" src="Assets/Vegan.png">
            <img class="foodIcon" src="Assets/Rating.png">
          </div>
          <p class="description">${item.description}</p>
          <p class="price">${item.price}</p>
        </div>`
      })
      .join("")
    $(".dessertInfoShow").html(dessert)
    $(".entreeInfoShow").html(entree)
    $(".appInfoShow").html(apps)
    $("#menuDiv").on("click", "a", function(e) {
      e.preventDefault()
      var href = $(this).attr("href")
      $(".menu > div")
        .removeClass("show")
        .addClass("hide")
      $(href)
        .removeClass("hide")
        .addClass("show")
    })
    $("img.foodIcon").hover(function() {
      $(this).toggleClass("foodIconHover")
    })
  })
})
