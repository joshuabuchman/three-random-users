//two quibbles:
//--you could save that URL to a variable and avoid repeating it 3 times
//--you could do the .json() inside the promise and avoid repeating it 3 times
const user1 = fetch(
	"https://acme-users-api-rev.herokuapp.com/api/users/random"
).then(response => response.json())
const user2 = fetch(
	"https://acme-users-api-rev.herokuapp.com/api/users/random"
).then(response => response.json())
const user3 = fetch(
	"https://acme-users-api-rev.herokuapp.com/api/users/random"
).then(response => response.json())

const users = document.querySelector(".allUsers")

//why save this to a variable and then use it on the very next line?
//could just do:
//Promise.all(...)
//.then(...)
const p = Promise.all([user1, user2, user3])

p.then(data => {
	let count = 0
	const html = data
		.map(user => {
			count++
			return `
      <div>
          <h3><a href = '#${count}'>${count}<a></h3>
        <a href = #${count}>
          <div class = 'userBox' data-id = '${count}'>
            <br>
              <p class = 'userName'>
                ${user.fullName}
              </p>
            <br>
              <p class = 'userEmail'>
                ${user.email}
              </p>
            <br>
              <p class = 'userPic' style = 'background-image: url(${user.avatar})'
              </p>
          </div>
        <a>
      </div>
      `
		})
		.join("")
	users.innerHTML = html
})
//forgot to close the <p> on line 41.
//i honestly don't know why it's not breaking
//also why use a p-tag with a background image??? why not just an <img> tag

window.addEventListener("hashchange", () => {
	const idStr = window.location.hash.slice(1)
	const allUsers = [...document.querySelectorAll(".userBox")]
	allUsers.forEach(elem => {
		console.log(elem.getAttribute("data-id"), idStr) //oops left this in. strip out your console.logs!!
		if (elem.getAttribute("data-id") === idStr) {
			elem.classList.add("selected")
			elem.classList.remove("hidden")
		} else {
			elem.classList.add("hidden")
			elem.classList.remove("selected")
		}
	})
})

//weird behavior when you click from one number to another -- the number headings bounce around! need to refine your CSS
