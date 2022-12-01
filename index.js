const cats = ["Milo", "Otis", "Garfield"]

 const destructivelyAppendCat = cats.push('Ralph')
 const destructivelyPrependCat = cats.unshift('Bob')
 const destructivelyRemoveLastCat = cats.pop()
 const destructivelyRemoveFirstCat = cats.shift()
 const appendCat = ['Broom', ...cats]
 const prependCat = [...cats,'Arnold']
 const removeLastCat = cats.slice(2)
 const removeFirstCat = cats.splice(0,1)