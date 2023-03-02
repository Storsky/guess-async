let guessNumber = Math.floor(Math.random()*100)
let judge = require('readline').createInterface(process.stdin, process.stdout)
let cnt = 0;

function game() {
    judge.question('Guess the number. To exit type exit ', (guess) => {
        cnt += 1
        switch (true) {
            case guess === 'exit' :
                console.log('You exit the game')
                judge.close()
                return
            case guess == guessNumber :
                console.log(`All righty then! You win by ${cnt} try!`)
                judge.close()
                return
            case (isNaN(guess)) :
                console.log(`Input value is not number, try again ${cnt}`)
                break
            case (guess > guessNumber) :
                console.log(`Too big, try again, ${cnt}`)
                break
            case (guess < guessNumber) :
                console.log(`Too low, try again, ${cnt}`)
                break
        }
        game()
    })
}

game()