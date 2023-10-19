window.addEventListener('load', function(){
    console.log('page is load');

    //https://shibe.online/
    fetch("https://shibe.online/api/cats?count=1&urls=true&httpsUrls=true")
    .then(response => response.json())
    .then(data => {
        let imageshibe = document.getElementById('c-img');
        imageshibe.src = data;
        // let randomNumber = Math.floor(Math.random()*100);
        // let shibeChosen = data.randomNumber;
        console.log(data);
    })

    let button = this.document.getElementById('cat-button');
    button.addEventListener('click', function(){
        fetch("https://shibe.online/api/cats?count=1&urls=true&httpsUrls=true")
        .then(response => response.json())
        .then(data => {
            let imageshibe = document.getElementById('c-img');
            imageshibe.src = data;
    })

        console.log("button was clicked");
    })

})

function setup(){
    createCanvas(400,400);
}

function draw(){

}
