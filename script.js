window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('whiteNav', window.scrollY > 0);
});

const footer = document.querySelector('footer');

let btn = document.getElementById('newPost');
btn.addEventListener('click', () => {
    let titulo = document.getElementById('postTitle').value;
    let conteudo = document.getElementById('postContent').value;

    let newDiv = document.createElement('div');  
    newDiv.innerHTML = "<div class='card-body'> <h5 class='card-title'>Card title</h5> <h6 class='card-subtitle mb-2 text-muted'>Card subtitle</h6> <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p> </div>";
    newDiv.setAttribute('class', 'card');

    footer.prepend(newDiv);
});