const urlLocationHandler = async (location) => {
    if (location.length == 0) {
        location = "/";
    }

    const route = urlRoutes[location] || urlRoutes[404];
    const html = await fetch(route.template).then((response) => {
        response.text().then((data) => {
            document.getElementById("content").innerHTML = data;
        });
    });
}


function create() {
    let votes_to_skip = document.getElementById('votes_to_skip');
    let guest_can_pause = document.getElementById('guest_can_pause');
    let errorElement = document.getElementById('error');
    if (votes_to_skip.value == '' || votes_to_skip.value == null){
        errorElement.innerText = 'Tienes que ingresar un numero valido.'
    }
    if (votes_to_skip.value < 1) {
        votes_to_skip.value = 1
    }
    fetch('http://127.0.0.1:8000/api/create-room', { 
            method: 'POST',
            body: JSON.stringify({
                votes_to_skip: votes_to_skip.value,
                guest_can_pause: guest_can_pause.checked
            }),
            headers: {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
            }).then(response => response.json())
      .then(json => {
            console.log(json);
            urlLocationHandler('/room');
            }).catch(err => alert(err))
}