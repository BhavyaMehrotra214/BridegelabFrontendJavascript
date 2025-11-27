"use strict";

const searchBox = document.getElementById("searchBox");
const tableBody = document.getElementById("tableBody");
const noResult = document.getElementById("noResult");
searchBox.addEventListener("input", () => {
    const query = searchBox.value.trim().toLowerCase();
    let visibleRows = 0;

    [...tableBody.rows].forEach(row => {
        const rowText = row.textContent.toLowerCase();

        if (rowText.includes(query)) {
            row.style.display = "";
            visibleRows++;
        } else {
            row.style.display = "none";
        }
    });

    noResult.style.display = visibleRows === 0 ? "block" : "none";
});
