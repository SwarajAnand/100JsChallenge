import pageData from "../Js/pageData.js";

const container = document.getElementById("container");

const tableView = (pageData) => {
  const table = document.createElement("table");
  pageData.forEach((val) => {
    console.log(val);
    const tableRow = document.createElement("tr");
    const tableData = `
      <td style="font-weight: bold">${val.id}</td>
      <td>${val.projectName}</td>
      <td><a href="${val.projectLink}">Link for the Project</a></td>
      <td><a href="${val.githubLink}">Gitub Link</a></td>
    `;
    tableRow.innerHTML = tableData;
    table.appendChild(tableRow);
  });

  container.append(table);
};

tableView(pageData);
