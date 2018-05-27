 let planes = ['airbus', 'boeing', 'atr'];

 for(var k = 0, max = b.length; k < max; k++){
 	console.log( 'Position' + k + 'is for the company ' + b[k])
 }
								 forEach Method, arrowFunction

planes.forEach(
	(plane, index) => 
		// console.log( index + ' for' + plane)
		console.log(`This position ${index} goes for the ${plane}`)
	);



									map 
	function hello(n) {
		return n * 2;
	}
a = [2,4,5].map(hello)

class Article {

	custructor(name) {
		this.name = "Human";
	}
	get walk() {
	 console.log('My name is ' + name)
	}
}
let data = new Article('Lol')

console.log(data.walk)
	
let sum = a.reduce((pv, cv) => { return pv + cv; }, 0);
console.log(sum)

								reduce 

 var user = new Map();
 user.set(1, 'Oussama')
 user.set(2, 'Estelle');

 console.log(user.size);
		let hi = "Hello world";
		a = document.getElementById('root');	
		console.log(a)	
var psales = [ 100, 230, 55];
totalAfterTaxSales = psales.map( (amount) => amount * 1.5 ).reduce( (acc,val) => acc + val );

            
console.log(totalAfterTaxSales)

let str = String('Hey');
let newStr = new String ('Hello')
console.log(newStr
	)
let text = "This is a list of items:cherries, limes, oranges, apples."

let start = text.indexOf(':');

let end = text.indexOf('.', start)

let fruits = text.substring(start +1, end)
let fruitList =fruits.split(',');
console.log(fruitList)

fruitList.forEach( function(element, index) {
	console.log(element)
});












