console.log('what up')
const stopBtn = document.getElementById('stop')
let images = []
const redditEndpoint = 'https://www.reddit.com/search.json?q='
const inputBox = document.getElementById('input')
const picTube = document.getElementById('screen')
let slideIndex = 0
let slides;


form.addEventListener('submit', (event) => {
    event.preventDefault()
    fetch(redditEndpoint + inputBox.value)
    .then((fetchObj) => {
        return fetchObj.json()
    })
    .then((jsonData) => {
        jsonData.data.children.forEach((result) => {
            if(result.data.thumbnail != 'default' && result.data.thumbnail != 'self') {
                images.push(result.data.thumbnail)
            }
        })  
        console.log(images)
        slides = setInterval(() => {
            slideShow()
        }, 3000);
    })
    .catch((error => {
        console.log('oh no you did NOt make fetch happen')
    }))
})

function slideShow() {
    picTube.src = images[slideIndex]
    if(slideIndex < images.length-1) {
        slideIndex++
    } else {
        slideIndex = 0
    }
} 



function stopSlideShow(){
    clearInterval(slides)
}

stopBtn.addEventListener('click', () => {
    stopSlideShow()
}) 

function vanish() {
document.getElementById('submit')
if (submit.style.display === 'none') {
    submit.style.display = 'block'
    } else {
        submit.style.display = 'none'
    }
    document.getElementById('input')
    if (input.style.display === 'none') {
        input.style.display = 'block'
    } else {
        input.style.display = 'none'
    }
    let pic = document.getElementById('title')
    if (title.style.display === 'none') {
        title.style.display = 'block'
    } else {
        title.style.display = 'none'
    }
}



// function disappear() {
//     let box = document.getElementById('input')
//     if(input.style.display === 'none') {
//         input.syle.display = 'block'
//     } else {
//         input.style.display = 'none'
//     }
// }

