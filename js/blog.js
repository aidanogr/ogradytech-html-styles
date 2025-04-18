document.addEventListener('DOMContentLoaded', () => {
    let c = document.getElementsByClassName('dropdown-button-container')[0];
    let t = document.getElementsByClassName('blog_dropdown')[0];
    c.addEventListener('click', () => {
        c.classList.toggle('active');
        t.classList.toggle('active');
    });

    const iframe = document.getElementById('myIframe');

    window.addEventListener('message', (event) => {
        if (typeof event.data === 'number') {
            iframe.style.height = event.data + 'px';
        }
    });
});