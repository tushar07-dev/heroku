let url = "http://localhost:3000/furniture";

console.log("On Ad Page");

let allData = [];
fetch(url).then(res => res.json())
          .then(data =>   data.map(function(el,id){

            var child_div = document.createElement('div');
            child_div.setAttribute('class', 'child_div')

            let img_container = document.createElement('div');
            let company_img = document.createElement('img');
            company_img.setAttribute('src' , 'https://www.casafurnishing.in/wp-content/uploads/2021/11/L-shaped-corner-wooden-sofa-set-2.jpg?v=1636317199');
            company_img.setAttribute('class' , 'company-logo');
            img_container.append(company_img);
          
            var details_container = document.createElement('div');
            details_container.setAttribute('class' , 'details-container');

          //   description
            var description = document.createElement("h2")
            description.innerText = `One of finest finsih ${el.Description} `;
            
            var type = document.createElement("h1")
            type.innerText = `${el.type}[Honey finish]`;
            
            var Price = document.createElement("h3");
            Price.setAttribute('class' , 'price');

            Price.innerText = `Rs.${el.Price} with 30% off, 
            
            Made in Year: ${el.year}`;

            var footer = document.createElement("div");
            footer.setAttribute("class", "footer");


            var Delete = document.createElement("h3");
            Delete.setAttribute("class", "delete-btn");
            Delete.addEventListener("click", function(e) {
                console.log("remove post",`${url}/${el.id}`);
                
                fetch(`${url}/${el.id}` , {
                    method: 'DELETE',
                }).then(res => res.json())
                //   .then(() => location.reload());
            })
            Delete.innerHTML = "🪣"
            
            var Edit = document.createElement("h3");
            Edit.setAttribute("class", "edit-btn");
            Edit.innerHTML = "✍️";
            Edit.addEventListener("click", function(e) {
                console.log("EDIt");
                const parent = e.target.parentElement;
                
                console.log(titleContent)

            })

            footer.append(Edit , Delete )
            details_container.append(type,description,Price,footer)
            child_div.append(img_container,details_container);
            document.querySelector("#main_div").append(child_div)

          }));



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