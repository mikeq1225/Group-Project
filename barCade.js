$(document).ready(function() {
  $.get("https://obscure-tundra-54269.herokuapp.com/bar-food", function(data) {
    var apps = data.appetizers
      .map(function(item) {
        return `<div class="menuInfo">
        <div class="itemNPD">
          <p>${item.name}</p>
          <p>${item.price}</p>
          <p>${item.description}</p>
        </div>
    </div>`
      })
      .join("")
    $(".menuInfo").html(apps)
  })
})
