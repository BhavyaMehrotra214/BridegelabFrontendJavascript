$(document).ready(function() {
  $("#searchBox").on("input", function() {
    const query = $(this).val().trim();

    $("#searchResults").empty();
    if(query === "") return;

    $("#loading").show();

    $.ajax({
      url: `http://localhost:3001/products?q=${query}`,
      method: "GET",
      success: function(data) {
        $("#loading").hide();

        if(data.length === 0) {
          $("#searchResults").html('<div class="no-results">No products found</div>');
        } else {
          data.forEach(product => {
            $("#searchResults").append(`
              <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <div>
                  <strong>${product.name}</strong><br>
                  Price: ₹${product.price}
                </div>
              </div>
            `);
          });
        }
      },
      error: function() {
        $("#loading").hide();
        $("#searchResults").html('<div class="no-results">Error fetching data</div>');
      }
    });
  });
});
