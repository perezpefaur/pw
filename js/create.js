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
    console.log(votes_to_skip.value);
    console.log(guest_can_pause.checked);
    fetch('http://127.0.0.1:8000/api/create-room', { 
            method: 'POST',
            body: JSON.stringify({
                votes_to_skip: votes_to_skip.value,
                guest_can_pause: guest_can_pause.checked
            }),
            headers: {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*",
                "Access-Control-Allow-Headers":"accept, accept-encoding, authorization, content-type, dnt, origin, user-agent, x-csrftoken, x-requested-with",
                'Access-Control-Allow-Methods': 'DELETE, GET, OPTIONS, PATCH, POST, PUT'
            }
            }).then(response => response.json())
      .then(json => console.log(json)).catch(err => alert(err))
}