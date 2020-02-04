

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
          <h3><a href = '#${count}'>${count}<a></h3>
        <a href = #${count}>
          <div class = 'userBox' data-id = '${count}'>
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

    const idStr = window.location.hash.slice(1);
    const allUsers = [...document.querySelectorAll('.userBox')];
    allUsers.forEach( elem =>
    {
        console.log(elem.getAttribute('data-id'),idStr)
        if(elem.getAttribute('data-id')===idStr)
        {
            
            elem.classList.add('selected')
            elem.classList.remove('hidden')
        }
        else
        {
            elem.classList.add('hidden')
            elem.classList.remove('selected')
        }
    })
    
});
