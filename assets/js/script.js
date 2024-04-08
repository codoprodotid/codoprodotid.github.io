/**
 * @author: O027-MIFTAHUL ULUM S.Pd
 * @date: 2024-04-08 10:05:53
 * @desc:
 */
function getTemplate(index, data) {
  let dateYear = data.year != undefined ? data.year : data.date;
  let template = `<tr>
        <td>${index + 1}.</td>
        <td>${data.name}</td>
        <td>${dateYear}</td>
        <td>${data.link}</td>
    </tr>`;
  return template;
}

function getTemplateSertifikat(index, data) {
  let dateYear = data.year != undefined ? data.year : data.date;
  let link = "<small>";
  data.link.forEach((item, ind) => {
    link += `<a href="${item}" target="_blank">Link ${ind + 1}</a><br>`;
  });
  link += "</small>";
  let template = `<tr>
        <td>${index + 1}.</td>
        <td>${data.name}</td>
        <td>${dateYear}</td>
        <td>${data.expired}</td>
        <td>${link}</td>
    </tr>`;
  return template;
}

function getContainerServices(data, index) {
  let row = index + 1;
  return `<div class="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="${row}00">
  <div class="feature-block">
    <img src="${data.image}" alt="img">
    <h4>${data.name}</h4>
    <p>${data.description}</p>
    <a href="${data.link}">read more</a>
  </div>
</div>`;
}

function getFetchOptions() {
  let fecthOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fecthOptions;
}

$(function () {
  getServices();
});

function getResponse(url) {
  let fecthOptions = getFetchOptions();
  return fetch(url, fecthOptions).then((response) => {
    return response
      .json()
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

function getServices() {
  const url = "assets/json/services.json";
  let res = getResponse(url).then((data) => {
    let dataParsing = data.data;
    dataParsing.forEach((element, index) => {
      let row = getContainerServices(element, index);
      $("#container-services").append(row);
    });
  });
}
