document.addEventListener("DOMContentLoaded", function () {
  const tables = [
    { id: 1, status: "available" },
    { id: 2, status: "Reserved" },
    { id: 3, status: "available" },
    { id: 4, status: "available" },
    { id: 5, status: "available" },
    { id: 6, status: "Reserved" },
    { id: 7, status: "Reserved" },
    { id: 8, status: "Reserved" },
    { id: 9, status: "available" },
    { id: 10, status: "available" },
  ];

  const container = document.querySelector(".container");

  function renderTables() {
    container.innerHTML = "";
    tables.forEach((table) => {
      const card = document.createElement("div");
      card.className = `card ${table.status}`;
      card.innerHTML = `
        <h6>Table ${table.id}</h6>
        <p>${table.status}</p>
        <button class="button ${
          table.status === "available" ? "reserve" : "cancel"
        }">
          <i class="fas fa-${
            table.status === "available" ? "check" : "times"
          }"></i>
          ${table.status === "available" ? "Reserve" : "Cancel"}
        </button>
      `;

      const button = card.querySelector("button");
      button.addEventListener("click", function () {
        if (table.status === "available") {
          table.status = "reserved";
        } else {
          table.status = "available";
        }
        renderTables();
      });

      container.appendChild(card);
    });
  }

  renderTables();
});
