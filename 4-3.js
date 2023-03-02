let guessNumber = Math.floor(Math.random()*100)

function makeGuess(invitation) {
    let judge = require('readline').createInterface(process.stdin, process.stdout)
    return new Promise(resolve => {
        judge.question(invitation, answer => {
            judge.close()
            resolve(answer)
        })
    })
}

let invite = 'Guess the number, type exit to exit: '

async function game() {
    let cnt = 0
    
    do {
        guess = await makeGuess(invite)
        cnt++

        if (guess === 'exit') {
            console.log(`Guessed number ${guessNumber} game has been canceled`)
            return 
        } else if (isNaN(guess)) { 
            invite = `Enter a valid number, your attempt ${cnt}`
        } else if (guess > guessNumber) {
            invite = `Too high, your attempt ${cnt} `
        } else if (guess < guessNumber) {
            invite = `Too low, your attempt ${cnt} `
        } else {
            console.log(`You win with ${cnt} attempts`)
        }
    } while (guess != guessNumber)
}

game()