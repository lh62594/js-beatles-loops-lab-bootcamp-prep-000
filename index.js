function theBeatlesPlay( musicians, instruments) {
  var arr = []
  for(let i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}

function johnLennonFacts(facts) {
  var newFacts = []
  var i = 0
  while(facts[i]) {
    newFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return newFacts
}

function iLoveTheBeatles(n) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!");
    n++;
  } while(n<15)
  return newArray
}
