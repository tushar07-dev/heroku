
let data = [];

let filter = [];
let  per_pageby = document.getElementById("page-page");

async function JOBData() {

  data = await fetch("./db.json");
  data = await data.json();
  filter = data;
 
  JOBSPage(data);
}

JOBData();


const per_page = 10;

let current_page = 1;


function JOBSPage(data) {

    per_pageby.innerHTML = null;
    
  let pages = Math.ceil(data.length / per_page);

  paginatedList(data, current_page, per_page);

  for (let page = 1; page <= pages; page++) {

    let button = document.createElement("button");
    button.setAttribute("class", "pagination-btn");
    button.innerText = page;

    button.addEventListener("click", () => {

      current_page = page;

      paginatedList(data, current_page, per_page);

    });
    per_pageby.append(button);
  }
}

function paginatedList(data, current_page, per_page) {
  let start = per_page * (current_page - 1);
  let end = per_page * current_page;
  let paginatedData = data.slice(start, end);
  JOBLISTData(paginatedData);
}
function JOBLISTData(data) {

  let div = document.getElementById("list");
  div.innerHTML = null;

  data.map((el, index) => {

    let container = document.createElement("div");

    container.setAttribute("class", "job-listing");

    let left_container = document.createElement("div");
    left_container.setAttribute("class", "left-container");

    let image_left_container = document.createElement("div");
    let company_images = document.createElement("img");
    company_images.setAttribute(

      "src",
      "https://media.istockphoto.com/photos/software-development-application-programming-code-and-tacit-computer-picture-id1364366923?b=1&k=20&m=1364366923&s=170667a&w=0&h=BvmIZq8AkodVqE3liAzN-eBUm_Pq3GbCfsLoUq_bAec="
     
    );

    company_images.setAttribute("class", "company-logo");

    image_left_container.append(company_images);

    let desc_left_container = document.createElement("div");

    let company = document.createElement("p");
    company.setAttribute("class", "company");
    company.innerText = el.company;

    let position = document.createElement("p");
    position.setAttribute("class", "position");
    position.innerText = el.position;

    let posted_details = document.createElement("div");
    posted_details.setAttribute("class", "post-details");

    let postedAt = document.createElement("p");
    postedAt.innerText = el.postedAt;

    let contract = document.createElement("p");
    contract.innerText = el.contract;

    let location = document.createElement("p");
    location.innerText = el.location;

    let city = document.createElement("p");
    location.innerText = el.city;

    desc_left_container.append(company, position,postedAt,location, city ,posted_details);
    left_container.append(image_left_container, desc_left_container);

    let right_container = document.createElement("div");
    right_container.setAttribute("class", "right-container");

    let role = document.createElement("p");
    role.innerText = el.role;

    let level = document.createElement("p");
    level.innerText = el.level;

    let language = document.createElement("p");
    language.innerText = el.language;

    let Contract = document.createElement("p");
    Contract.innerText = el.contract;

    right_container.append(role, level, language,Contract );

    container.append(left_container, right_container);

    div.append(container);

  });
}

let filter_role = document.getElementById("jobrole");
filter_role.addEventListener("change", filterData);

let search_lang = document.getElementById("search-lang");
search_lang.addEventListener("input", searchData);


function filterData() {

  let filterQuery = filter_role.value;
  filterQuery = filterQuery.toLowerCase();

  if (filterQuery == "none") {

    filter = data;
  } else {

    filter = filter.filter((el) => {

      let role = el.role.toLowerCase();

      return role == filterQuery;
    });
  }

  JOBSPage(filter);
}

// Search Functionality based on languages
function searchData() {
  let searchQuery = search_lang.value;
  searchQuery = searchQuery.toLowerCase();

  if (searchQuery == "") {
    filter= filter;
  } else {
    filter = filter.filter((el) => {
      let lang = el.language.toLowerCase();
      return lang.includes(searchQuery);
    });
  }
  JOBSPage(filter);
}