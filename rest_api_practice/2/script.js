// Getting data from db.json
let data = [];
let fileredData = [];
let sortingData = [];
let sortDirection = false;

let pagination_root = document.getElementById("pagination");
async function fetchData() {
  data = await fetch("./db.json");
  data = await data.json();
  fileredData = data;
  originalData = data;
  renderData(data);
  renderPagination(data);
}

window.addEventListener('load', (event) => {
  fetchData();
  console.log('page is fully loaded');
});


//Pagination Variables and Functionality
const per_page = 10;
let current_page = 1;

//Pagination buttons
function renderPagination(data) {
  pagination_root.innerHTML = null;
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
    pagination_root.append(button);
  }
}

//Paginated list
function paginatedList(data, current_page, per_page) {
  let start = per_page * (current_page - 1);
  let end = per_page * current_page;
  let paginatedData = data.slice(start, end);
  console.log("paginatedData", paginatedData)
  sortData = paginatedData;
  renderData(paginatedData);
}

//!  Rendering job lisitings
function renderData(data) {
  let root = document.getElementById("root");
  root.innerHTML = null;

  data.map((el, index) => { 
    let container = document.createElement("div");
    container.setAttribute("class", "job-listing");

    let left_container = document.createElement("div");
    left_container.setAttribute("class", "left-container");

    let image_left_container = document.createElement("div");
    let company_img = document.createElement("img");
    company_img.setAttribute(
      "src",
      "https://d2fltix0v2e0sb.cloudfront.net/dev-rainbow.png"
    );
    company_img.setAttribute("class", "company-logo");

    image_left_container.append(company_img);

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

    posted_details.append(postedAt, contract, location);
    desc_left_container.append(company, position, posted_details);
    left_container.append(image_left_container, desc_left_container);

    let right_container = document.createElement("div");
    right_container.setAttribute("class", "right-container");

    let role = document.createElement("p");
    role.innerText = el.role;

    let level = document.createElement("p");
    level.innerText = el.level;

    let language = document.createElement("p");
    language.innerText = el.language;
    
    let salary = document.createElement("p");
    salary.innerText = el.salary;

    right_container.append(role, level, language , salary);

    container.append(left_container, right_container);

    root.append(container);
  });
}


// ! FILTER 

let filter_role = document.getElementById("role-filter");
filter_role.addEventListener("change", filterData);

// Filter functionality based on role
function filterData() {
  console.log("fileredData", fileredData)

  var filterQuery = filter_role.value;
  filterQuery = filterQuery.toLowerCase();

  if (filterQuery == "none") {
    fileredData = data;
  } else {
    fileredData = data;
    fileredData = fileredData.filter((el) => {
      let role = el.role.toLowerCase();
      return role == filterQuery;
    });
  }
  console.log("FIlter" , fileredData);
  renderPagination(fileredData);
}

// Search Functionality based on languages
// ! SEARCH
let search_lang = document.getElementById("search-lang");
search_lang.addEventListener("input", searchData);

function searchData() {
  let searchQuery = search_lang.value;
  searchQuery = searchQuery.toLowerCase();
  // fileredData = originalData;
  if(searchQuery == "" && filterQuery == "none"){
    console.log("Empty",originalData)
   return  renderPagination(originalData);
  }
  
  // if (searchQuery == "") {
  //   fileredData = fileredData;
  // }
   else {
    fileredData = fileredData.filter((el) => {
      let lang = el.language.toLowerCase();
      return lang.includes(searchQuery);
    });
    
  }
  console.log("Search" , searchQuery , fileredData );
  renderPagination(fileredData);
}


// ! SOrting

let sorting = document.getElementById("salary-sort");
sorting.addEventListener("change", sortData);

function sortData() {

sortDirection = !sortDirection;

// let sortedData = sortData.sort((p1,p2) => {
//   console.log("p1", p1["salary"]);
//   // console.log("p2", p2);
//    sortDirection ? p1["salary"] -p2["salary"] : p2["salary"] -p1["salary"];
// });

// console.log("p1", sortData);
// console.log(sortData.sort(sort_by('salary', true, parseInt)));
let sorted =  sortData.sort(sort_by('salary', sortDirection, parseInt));
renderData(sorted);
}

const sort_by = (field, reverse, primer) => {

  const key = primer ?
    function(x) {
      return primer(x[field])
    } :
    function(x) {
      return x[field]
    };

  reverse = !reverse ? 1 : -1;

  return function(a, b) {
    return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
  }
}

