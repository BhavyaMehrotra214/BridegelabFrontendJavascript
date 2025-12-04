const usersCount = document.getElementById("usersCount");
const ordersCount = document.getElementById("ordersCount");
const productsCount = document.getElementById("productsCount");
const warningDiv = document.getElementById("warning");

// URLs for the APIs
const urls = [
  { url: "http://localhost:3004/users", element: usersCount },
  { url: "http://localhost:3005/orders", element: ordersCount },
  { url: "http://localhost:3006/products", element: productsCount }
];

Promise.allSettled(urls.map(u => fetch(u.url).then(res => res.json())))
  .then(results => {
    let anyFailed = false;

    results.forEach((result, index) => {
      const el = urls[index].element;
      if(result.status === "fulfilled") {
        // Count the array length
        el.textContent = result.value.length;
        el.classList.remove("loading");
      } else {
        // Failed
        el.textContent = "N/A";
        el.classList.remove("loading");
        anyFailed = true;
      }
    });

    if(anyFailed) {
      warningDiv.textContent = "Some data could not be loaded.";
    }
  })
  .catch(err => {
    warningDiv.textContent = "Error loading dashboard.";
    console.error(err);
  });
