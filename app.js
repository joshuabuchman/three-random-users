

const user1 = fetch('https://acme-users-api-rev.herokuapp.com/api/users/random').then(response => response.json());
const user2 = fetch('https://acme-users-api-rev.herokuapp.com/api/users/random').then(response => response.json());
const user3 = fetch('https://acme-users-api-rev.herokuapp.com/api/users/random').then(response => response.json());

const users = document.querySelector('.allUsers');

const p = Promise.all([user1, user2, user3]);

p.then(data => 
{
    let count = 0;
    const html = data.map( user => 
    {
      count++;
      return `
      <div>
        <div>
          <h3>${count}</h3>
        </div>
          <div class = 'userBox'>
            <br>
              <p class = 'userName'>
                ${ user.fullName }  
              </p>
            <br>
              <p class = 'userEmail'>
                ${ user.email }  
              </p>
            <br>
              <p class = 'userPic' style = 'background-image: url(${user.avatar})'
              </p>
          </div>
      </div>
      `;
    }).join('');
    users.innerHTML = html;
});

window.addEventListener('hashchange', () =>
{
    loadData();
})

const loadData = () =>
{
    const page = window.location.hash.slice(1);
    fetch(`https://acme-users-api-rev.herokuapp.com/api/users/random}`)
    .then( response => response.json())
    .then( results => 
    {

    });
}
