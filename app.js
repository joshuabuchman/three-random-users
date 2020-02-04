

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
      user.dataID = count;
      return `
      <div>
        <div>
          <h3><a href>${count}<a></h3>
        </div>
          <a href>
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
          <a>
      </div>
      `;
    }).join('');
    users.innerHTML = html;
});

window.addEventListener('hashchange', () =>
{
    singleUser();
})

const singleUser = () =>
{
    const page = window.location.hash.slice(1);

}
