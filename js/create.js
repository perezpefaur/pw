function create() {
    let votes_to_skip = document.getElementsById('votes_to_skip');
    let guest_can_pause = document.getElementsById('guest_can_pause');
    let form = document.getElementsById('form');
    console.log(votes_to_skip.value);
    console.log(guest_can_pause.value);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
})
console.log('matias');
console.log(votes_to_skip);
console.log(guest_can_pause);
console.log(form);