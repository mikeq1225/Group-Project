$(document).ready(function() {
  $.get("https://obscure-tundra-54269.herokuapp.com/bar-food", function(data) {
    var apps = data.appetizers
      .map(function(item) {
        return `
        <div id="appetizer" class="itemNPD">
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
    $(".appInfoShow").html(apps)
  })

  $.get("https://obscure-tundra-54269.herokuapp.com/bar-food", function(data2) {
    var entree = data2.entrees
      .map(function(item) {
        return `
        <div id="entree" class="itemNPD">
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
    $(".entreeInfoShow").html(entree)
  })

  $.get("https://obscure-tundra-54269.herokuapp.com/bar-food", function(data3) {
    var dessert = data3.desserts
      .map(function(item) {
        return `
        <div id="dessert" class="itemNPD">
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
  })

  // $("#menuButton").on("click", "a", function(e) {
  //   e.preventDefault()
  //   $("#menubutton")
  //     .find(".hide")
  //     .addClass("itemNPD")
  //   var href = $(this).attr("href")
  //   $(href).addClass("itemNPD")
  // })
})
