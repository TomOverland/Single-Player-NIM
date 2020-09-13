class AI {
    constructor () {
        this.name = "baseAI" // CHANGE THIS TO '[yourName]AI' PLEASE
    }

    // COMMENT OUT THE AI CODE THAT IS RUNNING AND UNCOMMENT THE CODE IN THIS takeTurn FUNCTION AND SET YOUR OWN CODE
    // IT SHOULD RETURN PILE, WHICH IS 'pileA', 'pileB', or 'pileC'
    // IT SHOULD RETURN COINS, WHICH IS A VALID INT GREATER THAN 0
    // THE CHALLENGE IS FIGURING OUT WHICH PILE TO TAKE FROM AND HOW MANY COINS TO TAKE PROGRAMATICALLY

    // I STRONGLY RECOMMEND NOT LOOKING UP 3 PILE NIM CODE SAMPLES ON THE INTERNET AS YOU'RE GOING TO FIND STRAIGHT UP SOLUTIONS


    // // ********** BEGIN COMMENT IN **************

    // takeTurn(gameState) {
    // // YOUR CODE HERE!
    //     let pile = 'pileA'
    //     let coins = 1
    //     return { pile, coins }
    // }

    // // *********** END COMMENT IN ***************

    // // ************ BEGIN COMMENT OUT ***********

    takeTurn(gameState) {
        let pile = 'pileA';
        let coins = 1;
        if (gameState.pileA > 0) {
        } else if (gameState.pileB > 0) {
            pile = 'pileB';
        } else if (gameState.pileC > 0) {
            pile = 'pileC'
        }
        return { pile, coins }
    }
    // // ************ END COMMENT OUT *************

}

export { AI }