/* ============================================================
Prints a single row from a table in a new print-friendly window.
==============================================================*/
function printRow(event) {
  const button = event.target;
  const row = button.closest("tr");
  const clonedRow = row.cloneNode(true);
  const lastCell = clonedRow.querySelector("td:last-child");
  if (lastCell) {
    lastCell.remove();
  }

  const printWindow = window.open("", "", "width=800,height=600");
  const table = document.createElement("table");
  table.style.width = "100%";
  table.style.borderCollapse = "collapse";
  table.appendChild(clonedRow);
  const style = document.createElement("style");
  style.textContent = `
    table { width: 100%; border-collapse: collapse; }
    td, th { border: 1px solid #000; padding: 8px; text-align: left; }
  `;
  printWindow.document.head.appendChild(style);
  printWindow.document.body.appendChild(table);
  printWindow.focus();
  printWindow.print();
  printWindow.close();
}

export { printRow }
