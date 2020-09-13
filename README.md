# singlePlayerNim

## How To Set Up
1. Clone the repo
2. Navigate to the root folder of the repo
3. Run `<npm install>` - (actually you shouldn't need this step)

## How To Use
1. Run `<npm run start>` from your CLI
2. Follow the prompts to set the number of coins per pile
3. The AI player *ALWAYS GOES FIRST* - this is for faster testing
4. When the game is over, hit `<CTRL + C>` to end the game

## How To Make Your Own AI
1. Look in nim-game.js
2. Follow the instructions on changing the import and file name
3. Look in the newly renamed AI file
4. Follow the instructions on like 3 to give the AI a name
5. Comment out the code for the current takeTurn() function
6. Comment in the code for the new takeTurn() function
7. Bonus points for making code that's easy to read

##  How Does Nim Work?

This version of the game is played with 3 piles of coins.  Players take turns choosing a single pile and removing any number of coins from that pile.  The player who removes the final coin wins.  

https://www.youtube.com/watch?v=Kg1-x26NRo8
