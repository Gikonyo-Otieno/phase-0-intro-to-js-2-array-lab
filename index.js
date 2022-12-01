const cats = ["Milo", "Otis", "Garfield"]

 function destructivelyAppendCat(name){ 
    cats.push('Ralph')
 } 
 destructivelyaAppendCat('Ralph');  

 function destructivelyPrependCat(name){
    cats.unshift('Bob')
 }
destructivelyPrependCat('Bob');

 function destructivelyRemoveLastCat() {
    cats.pop()
 }
 destructivelyRemoveLastCat();

 function destructivelyRemoveFirstCat(){
    cats.shift()
 } 
 destructivelyRemoveFirstCat();

 function appendCat (name) {
    ['Broom', ...cats]
 }
 appendCat('Broom');

 function prependCat (name) {
    [...cats,'Arnold']
 }
 prependCat('Arnold');

 function removeLastCat() {
    cats.slice(2)
 }
 removeLastCat()
 function removeFirstCat() {
    cats.splice(0,1)
 }
 removeFirstCat();