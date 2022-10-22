// console.log("game")
// api
// https://www.balldontlie.io/api/v1/games

let y = [];

function search(){
  let start_date = document.getElementById('start_date').value;
  let end_date = document.getElementById('end_date').value;
  console.log(start_date, end_date);
  fetchdata(start_date, end_date ) 
}

window.addEventListener('load', (event) => {
  fetchdata(start_date = "12-08-2018", end_date = "2019-11-12");
  console.log('Games page is fully loaded');
});


function fetchdata(start_date = "12-08-2015",end_date){
  fetch(
    `https://www.balldontlie.io/api/v1/games?start_date=${start_date}&end_date=${end_date}`
  )
    .then((res) => res.json())
    .then((res) => {
      let data = res.data;
      y = data;

      getdata(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });}


    var x = 1;
    function handleclick(value) {
      x = value;
      fetchdata(value);
    }
    function handlechange(sort) {
        
    }
    
    function getdata(product) {
      document.querySelector("#container").innerHTML = "";
      product.map(function (elem) {
        var box = document.createElement("div");
        box.setAttribute("class", "main");

        let maindiv = document.createElement("div");
        maindiv.setAttribute("class", "maindiv");

        let leftdiv = document.createElement("div");
        leftdiv.setAttribute("class", "leftdiv");
        
        let rightdiv = document.createElement("div");
        rightdiv.setAttribute("class", "rightdiv");
        
        let title1 = document.createElement("h1");
        title1.setAttribute("class", "title1");
        title1.innerHTML = elem.home_team.full_name;
        
        let title2 = document.createElement("h1");
        title2.setAttribute("class", "title1");
        title2.innerHTML = elem.visitor_team.full_name;

        

        let date1 = document.createElement("h4");
        date1.setAttribute("class", "date");
        date1.innerHTML = `Date : ${elem.date}`;
        
        let date2 = document.createElement("h4");
        date2.setAttribute("class", "date");
        date2.innerHTML = `Date : ${elem.date}`;
        
        
        let season1 = document.createElement("h4");
        season1.setAttribute("class", "date");
        season1.innerHTML = `Date : ${elem.season}`;
        
        let season2 = document.createElement("h4");
        season2.setAttribute("class", "date");
        season2.innerHTML = `Date : ${elem.season}`;
        
        let status1 = document.createElement("h4");
        status1.setAttribute("class", "date");
        status1.innerHTML = `Status : ${elem.status}`;
        
        let status2 = document.createElement("h4");
        status2.setAttribute("class", "date");
        status2.innerHTML = `Status : ${elem.status}`;
        
        let home_team = document.createElement("h4");
        home_team.setAttribute("class", "date");
        home_team.innerHTML = `HOME Team Score : ${elem.home_team_score}`;
        
        let visit_team = document.createElement("h4");
        visit_team.setAttribute("class", "date");
        visit_team.innerHTML = `HOME Team Score : ${elem.visitor_team_score}`;
        
        let division1 = document.createElement("h4");
        division1.setAttribute("class", "division1");
        division1.innerHTML = `Division : ${elem.home_team.division}`;
        
        let division2 = document.createElement("h4");
        division2.setAttribute("class", "title1");
        division2.innerHTML = `Division : ${elem.visitor_team.division}`;

        let win1 = document.createElement("h1");
        let win2 = document.createElement("h1");
        let lost1 = document.createElement("h1");
        let lost2 = document.createElement("h1");
        if(elem.home_team_score > elem.visitor_team_score){
          win1.setAttribute("class", "win");
          win1.innerHTML = "WIN";
          lost2.setAttribute("class", "lost");
          lost2.innerHTML = "LOST";
          

        }
        else {
          win2.setAttribute("class", "win");
          win2.innerHTML = "WIN";
          lost1.setAttribute("class", "lost");
          lost1.innerHTML = "LOST";
        }


        let img = document.createElement("img");
        img.src =
          "https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-basketball-blue-hobby-icon-image_1185730.jpg"
                  img.style.height = "100px";
    
        // var div = document.createElement("div");
        // div.setAttribute("class", "name");
        // var div2 = document.createElement("div");
        // //  team name
        // var name = document.createElement("h1");
        // name.innerText = elem.home_team.full_name;
    
        // // date
        // var date = document.createElement("p");
        // date.textContent = "date " + elem.date;
        // //    season
    
        // var season = document.createElement("p");
        // season.innerText = "season: " + elem.season;
    
        // var div3 = document.createElement("div");
        // // status
        // var status = document.createElement("p");
        // status.innerText = elem.status;
    
        // //  home_team_score
        // var home_team_score = document.createElement("p");
        // home_team_score.innerText = "score: "+ elem.home_team_score;
    
        // // division
        // var division = document.createElement("p");
        // division.innerText = "Division: "+ elem.home_team.division;
    
        // div2.append(name, date, season, home_team_score,division);
        // // div3.append(gender)
        // div.append(div2, div3);

        leftdiv.append(title1,date1,season1,status1,home_team,division1, win1,lost1)
        rightdiv.append(title2, date2 , season2,status2,visit_team,division2, win2,lost2)
        maindiv.append(leftdiv ,img, rightdiv);
        box.append(maindiv);
    
        document.querySelector("#container").append(box);
      });
    }