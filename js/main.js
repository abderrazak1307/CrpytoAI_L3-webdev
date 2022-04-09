document.getElementById('navbutton').onclick = () => {
    let display = document.getElementById('navbar').style.display;
    if (display == 'block')
        document.getElementById('navbar').style.display = 'none';
    else
        document.getElementById('navbar').style.display = 'block';
}

if (document.getElementById('search'))
    document.getElementById('search').onkeyup = (e) => {
        if(e.keyCode === 13){
            e.preventDefault();
            location.href = 'search.html?q='+encodeURIComponent(e.target.value);
        }
    }