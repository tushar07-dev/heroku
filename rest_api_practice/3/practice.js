let data = []; //to store data;
let fileredData = [];


fetchData();
async function fetchData(){
  data = await fetch('./db.json');
  data = await data.json();
  console.log(data); //* Got Array of Object.
  
  fileredData = data;
  originalData = data;
  
  renderData(data);
}

//!  Rendering job listings
// * Practice appending data on Table.

function renderData(data){  //* received all data.
  let root = document.getElementById('root'); //* div where you want to append Data.
  root.innerHTML = null;  //make it Empty.
  
  
  data.map((el , index)=>{      //*Mapping data to screen by Appending
    
      let container = document.createElement('div');
      container.setAttribute('class' , 'job-listing'); //create container and give className
      
    // * Left Part :
    let left_container = document.createElement('div');
    left_container.setAttribute('class' , 'job-listing');
    
    let image_left_container = document.createElement('div');
    let company_img = document.createElement('img');
    company_img.setAttribute('src' , 'https://d2fltix0v2e0sb.cloudfront.net/dev-rainbow.png');
    company_img.setAttribute('class' , 'company-logo');
    
    image_left_container.append(company_img);
    
    // * Center Part :
    let desc_left_container = document.createElement('div');
    
    let company = document.createElement('p');
    company.setAttribute('class' , 'company');
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

    posted_details.append(postedAt,contract,location);
    desc_left_container.append(company, position, posted_details);
    left_container.append(image_left_container, desc_left_container);
    
    // * Right Part :
    let right_container = document.createElement("div");
    right_container.setAttribute('class', 'right-container');
    
    let role = document.createElement('p');
    role.innerHTML = el.role;
    
    let level = document.createElement('p');
    level.innerHTML = el.level;

    let language = document.createElement('p');
    language.innerHTML = el.language;
    
    right_container.append(role,level, language);
    
    container.append(left_container, right_container);
    
    root.append(container);
  })

}

// ! Filter :
let filter_role = document.getElementById('role-filter');
filter_role.addEventListener('change' , filterData);

function filterData(){
  let filterQuery = filter_role.value; //* OnChange whatever choosen By select Tag.
  // console.log(filterQuery);
  
  if(filterQuery == "none"){
    fileredData = data;
  }
  else{
    fileredData = data;
    fileredData = fileredData.filter((el) => {
      let role = el.role.toLowerCase();
      return role === filterQuery;
    });
  }
  console.log("FILTER" , fileredData);
  // render page according to filter;
  renderPagination(fileredData);
}


// ! PaginaTion :
function renderPagination(data){
  let pagination_root = document.getElementById('pagination');
  pagination_root.innerHTML = null;

  const per_page = 10;
  let current_page = 1;

  let pages = Math.ceil(data.length / per_page); //* Formula tomdetermined number of pages

  paginatedList(data, current_page, per_page); //* appending Data on each page.

  for (let page = 1; page <= pages; page++){      //* Number of Buttons
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

function paginatedList(data, current_page, per_page){
  let start = per_page * (current_page - 1);
  let end = per_page * current_page;
  let paginatedData = data.slice(start, end);
  console.log("Paginated List" , paginatedData)
  renderData(paginatedData);
}


// ! SearchBar

let search_lang = document.getElementById("search-lang");
search_lang.addEventListener("input", searchData);

function searchData() {
  let searchQuery = search_lang.value;
  searchQuery = searchQuery.toLowerCase();

  if(searchQuery.length === ""){
    console.log("Empty")
    return originalData
  }
  
}