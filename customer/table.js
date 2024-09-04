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
      card.className = `card ${table.status.toLowerCase()}`;
      card.innerHTML = `
        <h6>Table ${table.id}</h6>
        <p>${table.status}</p>
        ${
          table.status === "available"
            ? `<button class="button reserve">Reserve</button>`
            : ""
        }
      `;

      if (table.status === "available") {
        const button = card.querySelector("button");
        button.addEventListener("click", function () {
          table.status = "reserved";
          renderTables();
        });
      }

      container.appendChild(card);
    });
  }

  renderTables();
});
