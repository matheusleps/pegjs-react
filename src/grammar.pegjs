wordCounter = w:(word space?)* {return w.length;}

word = letter+

letter = [a-zA-Z0-9]

space = " "