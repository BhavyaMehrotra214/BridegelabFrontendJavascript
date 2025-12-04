const daySelect = document.getElementById("daySelect");
const timetableContainer = document.getElementById("timetableContainer");

// Fetch timetable for selected day
function fetchTimetable(day) {
  fetch(`http://localhost:3007/timetable?day=${day}`)
    .then(res => res.json())
    .then(data => renderTimetable(data))
    .catch(err => {
      timetableContainer.innerHTML = '<div class="no-classes">Error loading timetable.</div>';
      console.error(err);
    });
}

function renderTimetable(timetable) {
  if(timetable.length === 0) {
    timetableContainer.innerHTML = '<div class="no-classes">No classes today.</div>';
    return;
  }

  let html = '<table><thead><tr><th>Subject</th><th>Faculty</th><th>Time</th></tr></thead><tbody>';
  timetable.forEach(entry => {
    html += `<tr>
               <td>${entry.subject}</td>
               <td>${entry.faculty}</td>
               <td>${entry.time}</td>
             </tr>`;
  });
  html += '</tbody></table>';

  timetableContainer.innerHTML = html;
}

// Initial load
fetchTimetable(daySelect.value);

// Handle day change
daySelect.addEventListener("change", () => {
  fetchTimetable(daySelect.value);
});
