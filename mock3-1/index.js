let y = []
function fetchdata(page = 1) {
    console.log(page)
    fetch(`https://www.balldontlie.io/api/v1/players?page=${page}&per_page=${10}`).
        then((res) => res.json()).
        then((res) => {
            let data = res.data
            y = data

            getdata(data)
            console.log(data)

        }).catch((err) => {
            console.log(err)
        })
}

window.addEventListener('load', (event) => {
    fetchdata();
    console.log('page is fully loaded');
});

let search = document.getElementById("search");
search.addEventListener("input", searchData);

// MODAL----------:



// MODAL-------------

function searchData() {
    console.log("search", search.value);

    fetch(`https://www.balldontlie.io/api/v1/players?search=${search.value}`).
        then((res) => res.json()).
        then((res) => {
            let data = res.data
            y = data

            getdata(data)
            console.log(data)

        }).catch((err) => {
            console.log(err)
        })
}

var x = 1
function handleclick(value) {
    x = value
    fetchdata(value)
}

function getdata(product) {
    let btn_flag = true;

    document.querySelector("#container").innerHTML = ""
    product.map(function (elem) {
        var box = document.createElement("div");
        box.setAttribute("class", "maindiv")
        let img = document.createElement("img");
        img.src = "https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png";
        img.style.height = "200px";

        var div = document.createElement("div")
        div.setAttribute("class", "name")
        var div2 = document.createElement("div")
        var name = document.createElement("p");
        name.innerText = "Name: " + elem.first_name + " " + elem.last_name
            ;
        var title = document.createElement("p");
        title.textContent = "Position " + elem.position;

        // team detail btn
        var team_btn = document.createElement("button");
        team_btn.setAttribute("class", "myBtn")
        team_btn.innerHTML = "TEAM DETAILS";

        var modalDiv = document.createElement("div");
        modalDiv.setAttribute("class", "modal");


        var modalContainer = document.createElement("div");
        modalContainer.setAttribute("class", "modalContainer");
        // team

        var ModSpan = document.createElement("span");
        ModSpan.setAttribute("class", "close");




        var team = document.createElement("p");
        team.style.display = "none";
        team.innerHTML = "TEAM: " + elem.team.city

        var div3 = document.createElement("div")

        var abbreviation = document.createElement("p");
        abbreviation.style.display = "none";
        abbreviation.innerHTML = "Abbreviation: " + elem.team.abbreviation


        //  conference
        var conference = document.createElement("p");
        conference.style.display = "none";
        conference.innerHTML = "Conference: " + elem.team.conference
        // division

        var division = document.createElement("p");
        division.style.display = "none";
        division.innerHTML = "Abbreviation: " + elem.team.division

        // full_name of city

        var city = document.createElement("p");
        city.style.display = "none";
        city.innerHTML = "City: " + elem.team.full_name

        team_btn.onclick = function () {
            if(btn_flag === true){
                btn_flag = false;
                modalDiv.style.display = "block";
                team.style.display = "block";
                abbreviation.style.display = "block";
                conference.style.display = "block";
                division.style.display = "block";
                city.style.display = "block";
                console.log("54");
            }
            else{
                btn_flag = true;
                modalDiv.style.display = "none";
                team.style.display = "none";
                abbreviation.style.display = "none";
                conference.style.display = "none";
                division.style.display = "none";
                city.style.display = "none";
            }
           
        }

        div.append(div2, div3)
        box.append(img, name, title, team_btn,team, abbreviation, conference, division, city);

        document.querySelector("#container").append(box);
    });

}