window.addEventListener('load', function(){
    console.log('page is load');

    //https://shibe.online/
    fetch("https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true")
    .then(response => response.json())
    .then(data => {
        let imageshibe = document.getElementById('s-img');
        imageshibe.src = data;
        // let randomNumber = Math.floor(Math.random()*100);
        // let shibeChosen = data.randomNumber;
        console.log(data);
    })

    let button = this.document.getElementById('shibe-button');
    button.addEventListener('click', function(){
        fetch("https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true")
        .then(response => response.json())
        .then(data => {
            let imageshibe = document.getElementById('s-img');
            imageshibe.src = data;
    })

        console.log("button was clicked");
    })

})
