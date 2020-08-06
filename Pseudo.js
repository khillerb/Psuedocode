/*Solitaire  
2 Important class/obj/var 
3 Card => (inherits board) color, number,suit 
4 —Deck (inherits cards&board)=> position, inDeck 
5 ----Board => board positions(default=0/false) 
6 ----Best for deck/card to do list of object, board too. 

7 Game methods: 
8 	validatePlay => pull color and number of previous card where a play is attempted 
9 	play => adds passed card onto board at attempted position 
10	aces => only accepts aces of same suit. once ace is down next must be 2,3,4,5,etc 
11	win => no more cards in hand, deck. all cards on back for aces 
12	iterateDeck => move forward (i) positions in deck 
13	swapdeck => AAAA//,,  Switches between i values using swapdeck method, probably 1,3) 

Extra Polish: 
16 >Really lock down board look html,css 17 >add something to spice up solitaire 18 19 20 21 