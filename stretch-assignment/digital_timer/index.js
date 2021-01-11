const msTens = document.querySelector("#msTens")
const secondTens = document.querySelector("#secondTens")
const secondOnes = document.querySelector("#secondOnes")
const colon = document.querySelector("#colon")
const msHundreds = document.querySelector("#msHundreds")

const hands = {
    msTens,
    secondTens,
    secondOnes,
    colon,
    msHundreds,
}

class Timer {
    constructor(hands) {
        this.msTens = hands.msTens  
        this.secondOnes = hands.secondOnes
        this.secondTens = hands.secondTens
        this.colon = hands.colon
        this.msHundreds= hands.msHundreds
    }

    startTimer() {
        let tensCounter = 1
        let msHundredsCounter = 1
        let secondOnesCounter = 1
        let secondTensCounter = 1
            setInterval(x => {
                if(tensCounter > 10) {
                    tensCounter = 1 
                }

                if(tensCounter === 10) {
                    this.msTens.textContent = 0 
                } else {
                    this.msTens.textContent = tensCounter 
                } 

                if(tensCounter === 10) {
                    if(msHundredsCounter > 10) {
                        msHundredsCounter = 1 
                    }
                    if(msHundredsCounter === 10) {
                        this.msHundreds.textContent = 0 

                        if(msHundredsCounter === 10) {
                                if(secondOnesCounter > 10) {
                                    secondOnesCounter = 1 
                                }
                                if(secondOnesCounter === 10) {
                                    this.secondOnes.textContent = 0 

                                    if(secondOnesCounter === 10) {
                                            if(secondTensCounter > 10) {
                                                secondTensCounter = 1 
                                            }
                                            if(secondTensCounter === 10) {
                                                this.secondTens.textContent = 0 

                                            } else {
                                                this.secondTens.textContent = secondTensCounter 
                                            }
                                            secondTensCounter++
                                    }

                                } else {
                                    this.secondOnes.textContent = secondOnesCounter 
                                }
                                secondOnesCounter++
                        }

                    } else {
                        this.msHundreds.textContent = msHundredsCounter 
                    }
                    msHundredsCounter++

                }

                tensCounter++
            }, 10)
    }
}

const Clock = new Timer(hands)

const button = document.querySelector(".startButton")
button.addEventListener("click", () => {
    Clock.startTimer()
})