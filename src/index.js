if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log(registration);
    }).catch(error => {
        console.error(error);
    });
}

const votes_to_skip = document.getElementsById('votes_to_skip')
const guest_can_pause = document.getElementsById('guest_can_pause')
const form = document.getElementsById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
})