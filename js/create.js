const votes_to_skip = document.getElementsById('votes_to_skip')
const guest_can_pause = document.getElementsById('guest_can_pause')
const form = document.getElementsById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
})
console.log('matias');
console.log(votes_to_skip);
console.log(guest_can_pause);
console.log(form);