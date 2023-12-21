// Mock data from the JSON
const mockData = [{"first_name":"Martainn","last_name":"Bubeer","email":"mbubeer0@reddit.com","avatar":"https://robohash.org/quovoluptasatque.png?size=50x50&set=set1","department":"Support"},
{"first_name":"Marlo","last_name":"Walthall","email":"mwalthall1@timesonline.co.uk","avatar":"https://robohash.org/iureinab.png?size=50x50&set=set1","department":"Research and Development"},
{"first_name":"Phyllys","last_name":"Fidoe","email":"pfidoe2@amazon.co.jp","avatar":"https://robohash.org/dolorexplicabomolestiae.png?size=50x50&set=set1","department":"Product Management"},
{"first_name":"Kienan","last_name":"Tregonna","email":"ktregonna3@prweb.com","avatar":"https://robohash.org/quiaetest.png?size=50x50&set=set1","department":"Services"},
{"first_name":"Clayborne","last_name":"Harvison","email":"charvison4@gmpg.org","avatar":"https://robohash.org/consequunturdebitisasperiores.png?size=50x50&set=set1","department":"Human Resources"},
{"first_name":"Hailey","last_name":"Roach","email":"hroach5@cdbaby.com","avatar":"https://robohash.org/inblanditiisquisquam.png?size=50x50&set=set1","department":"Training"},
{"first_name":"Lowe","last_name":"Dibnah","email":"ldibnah6@comsenz.com","avatar":"https://robohash.org/etevenietsit.png?size=50x50&set=set1","department":"Support"},
{"first_name":"Yorker","last_name":"Mapp","email":"ymapp7@dyndns.org","avatar":"https://robohash.org/sapientevoluptatumomnis.png?size=50x50&set=set1","department":"Legal"},
{"first_name":"Barrett","last_name":"Antecki","email":"bantecki8@ca.gov","avatar":"https://robohash.org/distinctiolaborerepudiandae.png?size=50x50&set=set1","department":"Human Resources"},
{"first_name":"Shawna","last_name":"Cheston","email":"scheston9@umn.edu","avatar":"https://robohash.org/nisisedplaceat.png?size=50x50&set=set1","department":"Legal"}
];

// Landing Page
if (window.location.pathname === "/index.html") {
    document.querySelector('main').innerHTML = `
        <section>
            <h2>About Us</h2>
            <p>Welcome to Fake Business! We are dedicated to providing...</p>
        </section>
    `;
}

// Meet the Team Page
if (window.location.pathname === "/team.html") {
    document.querySelector('main').innerHTML = `
        <section>
            <h2>Meet the Team</h2>
            <div id="team-members"></div>
        </section>
    `;

    const teamMembersContainer = document.getElementById('team-members');
    mockData.forEach(member => {
        teamMembersContainer.innerHTML += `
            <div class="team-member">
                <img src="${member.avatar}" alt="${member.first_name} ${member.last_name}">
                <h3>${member.first_name} ${member.last_name}</h3>
                <p>Email: ${member.email}</p>
                <!-- Add other details as needed -->
            </div>
        `;
    });
}

// Contact Us Page
if (window.location.pathname === "/contact.html") {
    document.querySelector('main').innerHTML = `
        <section>
            <h2>Contact Us</h2>
            <form id="contact-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Submit</button>
            </form>
        </section>
    `;

    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        console.log(`Message from ${name}: ${message} (Sent on ${new Date().toLocaleString()})`);
    });
}
