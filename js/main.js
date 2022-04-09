document.getElementById('navbutton').onclick = () => {
    document.getElementById('navbar').classList.toggle('show');
}

document.getElementById('search').onkeyup = (e) => {
    if(e.keyCode === 13){
        e.preventDefault();
        location.href = 'search.html?q='+encodeURIComponent(e.target.value);
    }
}