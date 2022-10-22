const postList = document.querySelector('.post-list');
let outpu= '';

let url = 'http://localhost:5500/api/posts';

// ! GEY REQ : Read the post by Method => GET:

fetch(url)
          .then(res => res.json())
          .then(data => {
            output += `<div class="card mt-4 col-md-6 bg-light">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="card-link">EDIT</a>
              <a href="#" class="card-link">DELECT</a>
            </div>
          </div>
          `;
          });
          postList.inht

