$(document).ready(function() {
  const taskList = $("#taskList");
  const filter = $("#filter");

  function fetchTasks(query = "") {
    $.ajax({
      url: `http://localhost:3003/tasks${query}`,
      method: "GET",
      success: function(data) {
        renderTasks(data);
      },
      error: function() {
        taskList.html("<li>Error fetching tasks</li>");
      }
    });
  }

  function renderTasks(tasks) {
    taskList.empty();
    if(tasks.length === 0) {
      taskList.html("<li>No tasks found</li>");
      return;
    }
    tasks.forEach(task => {
      const li = $(`
        <li>
          <input type="checkbox" ${task.completed ? "checked" : ""}>
          <span class="${task.completed ? "completed" : ""}" style="margin-left:8px">${task.title} (${task.priority})</span>
        </li>
      `);

      li.find("input").change(function() {
        const newCompleted = this.checked;
        // Optimistic update
        li.find("span").toggleClass("completed", newCompleted);

        $.ajax({
          url: `http://localhost:3003/tasks/${task.id}`,
          method: "PATCH",
          contentType: "application/json",
          data: JSON.stringify({ completed: newCompleted }),
          error: function() {
            li.find("input").prop("checked", !newCompleted);
            li.find("span").toggleClass("completed", !newCompleted);
            alert("Failed to update task");
          }
        });
      });

      taskList.append(li);
    });
  }

  // Fetch all tasks initially
  fetchTasks();

  // Handle filter change
  filter.change(function() {
    const value = $(this).val();
    let query = "";
    if(value === "completed") {
      query = "?completed=true";
    } else if(value) {
      query = `?priority=${value}`;
    }
    fetchTasks(query);
  });
});
