import readline from "readline"
import { AI } from "./base-ai.js" // PLEASE CHANGE THIS IMPORT TO 'import { API } from "./[yourName]-ai.js"
// this means you're also going to need to change the actual file name

// YOU SHOULD NOT NEED TO EDIT ANYTHING IN THIS FILE OTHER THAN THE IMPORT ABOVE
// THAT SAID, FEEL FREE TO POKE AROUND AND SEE HOW THE APP RUNS

class NimGame {
    constructor() {
        this.pileA = 0,
        this.pileB = 0,
        this.pileC = 0
    }

    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    AI = new AI();

    run() {
        console.log('\n', " Welcome to Three Pile Nim vs AI")
        this.rl.question("  How many coins should be in Pile A?  ", pileACoins => {
            this.pileA = pileACoins
            this.rl.question("  How many coins should be in Pile B?  ", pileBCoins => {
                this.pileB = pileBCoins
                this.rl.question("  How many coins should be in Pile C?  ", pileCCoins => {
                    this.pileC = pileCCoins
                    this.aiTurn()
                })
            })
        })
    }

    takeFromPileCoins({ pile, coins }) {
        if(this[pile] < coins || isNaN(coins) || coins === 0) {
            throw new Error('INVALID PILE OR COINS')
        }
        this[pile] -= coins;
        return;
    }

    playerTurn() {
        console.log('\n',"Here is the current Game State", '\n')
        this.printPiles();
        console.log('\n','Which pile would you like to take from?')
        this.rl.question(' Please type A, B, or C and hit ENTER  ', pileLetter => {
            const pile = `pile${pileLetter.toUpperCase()}`;
            console.log('\n', 'How many coins would you like to remove?')
            this.rl.question(' Please type an integer and hit ENTER  ', coins => {
                this.takeFromPileCoins({ pile, coins })
                if(this.gameShouldEnd()) {
                    this.endGame('Human player')
                } else {
                    this.aiTurn()
                }
            })
        })
    }

    aiTurn() {
        const turnObject = this.AI.takeTurn({
            pileA: this.pileA,
            pileB: this.pileB,
            pileC: this.pileC
        })
        this.takeFromPileCoins(turnObject)
        if(this.gameShouldEnd()) {
            this.endGame('AI player')
        } else {
            this.playerTurn()
        }
    }

    gameShouldEnd() {
        let gameShouldEnd = false;
        if(this.pileA === 0 && this.pileB === 0 && this.pileC === 0) {
            gameShouldEnd = true
        }
        return gameShouldEnd;
    }

    endGame(player) {
        console.log('\n', '  THE GAME HAS ENDED!')
        console.log(`  The winner is ${player}!`)
    }

    printPiles(){
        console.log(` ${this.pileA} ${this.pileB} ${this.pileC}`)
        let pileA = this.pileA;
        let pileB = this.pileB;
        let pileC = this.pileC;
        let maxHeight = Math.max(pileA, pileB, pileC)
        console.log("")
        while (maxHeight > 0) {
            console.log( ` ${pileA >= maxHeight ? 'O' : ' '} ${pileB >= maxHeight ? 'O' : ' '} ${pileC >= maxHeight ? 'O' : ' '}`)
            maxHeight--
        }
        console.log('=======')
        console.log(' A B C')
    }

}

export { NimGame }
