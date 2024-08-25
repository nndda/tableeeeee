import "datatables.net-fixedheader-bs5";
import "datatables.net-responsive-bs5";

window.$ = require("jquery");

const mainData = require("../../data/data");
const headerArr = Object.getOwnPropertyNames(mainData[0]);

document.getElementById("main-table").innerHTML = `
  <thead>
    <tr>
    ${
      headerArr.reduce((acc, cur) => {
        return acc + `<td>${cur}</td>`;
      }, "")
    }
    </tr>
  </thead>
  <tbody>
    ${
      mainData.reduce((acc, cur) => {
        return acc + `
          <tr>${
            Object.values(cur).map(
              value => `
                <td>${value}</td>`
            ).join("")
          }</tr>`;
      }, "")
    }
  </tbody>
`;

$("#main-table").DataTable({
  data: mainData,
  responsive: true,
  columns: headerArr.map(item => {
    if (item === "Image") {
      return {
        data: item,
        render: data =>
          `<a href="${data}" class="image"><img style="max-width: 200px;" src="${data}"></a>`,
      };
    } else {
      return {
        data: item,
      };
    };
  }),
});