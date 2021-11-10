// TODO: Declare any global variables we need
let headsCount = 0
let tailsCount = 0 


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('flip').addEventListener('click', function(){
        let headsFlip = Math.random() < 0.5
        if (headsFlip) {
            console.log('Heads')
            document.getElementById('pennyPic').src = 'assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = 'You Flipped Heads!'
            headsCount += 1
        } 
        else {
            console.log('tails')
            document.getElementById('pennyPic').src = 'assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'You Flipped Tails!'
            tailsCount += 1
        }   
        
        // Update Scoreboard
        let total = headsCount + tailsCount
        let headPercent = 0
        let tailPercent = 0
        
        if (total > 0) {
            headPercent = Math.round((headsCount / total) * 100)
            tailPercent = Math.round((tailsCount / total) * 100)
        }
        document.getElementById('heads').textContent = headsCount
        document.getElementById('heads-percent').textContent = headPercent + '%'
        document.getElementById('tails').textContent = tailsCount
        document.getElementById('tails-percent').textContent = tailPercent + '%'
    })
    
    // Clear Button Click Handler
     document.getElementById('clear').addEventListener('click', function() {
        console.log('resetClicked')
        document.getElementById('message').textContent = 'Let\'s Get Fliping Again'
        let total = headsCount + tailsCount
        headsCount = 0
        tailsCount = 0
        if (total > 0) {
            headPercent = Math.round((headsCount / total) * 100)
            tailPercent = Math.round((tailsCount / total) * 100)
        }

        document.getElementById('heads').textContent = headsCount
        document.getElementById('heads-percent').textContent = headPercent + '%'
        document.getElementById('tails').textContent = tailsCount
        document.getElementById('tails-percent').textContent = tailPercent + '%'
    })
            
})