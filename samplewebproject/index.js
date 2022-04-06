document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const { value } = document.querySelector('input');

    const header = document.querySelector('h1');
    if (value.includes('@')) {
        // consider this a valid email
        header.innerHTML = 'Looks good!';
    } else {
        // consider this an invalid email
        header.innerHTML = 'Invalid email!';
    };
});
