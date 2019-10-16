/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global binding: this keyword refers to the window or console object, unless when in strict mode.
* 2. Implicit binding: when a function is called followed by a (.), the object before the (.) is what this keyword is refering to
* 3. Explicit binding: when call, apply, or bind method is used, allows us to explicitly state what the this keyword is in any given function
* 4. New binding: when a construstor function is used, the new object that is created and returned by the constructor function is what 
*    this keyword is refering to
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this)


// Principle 2
// code example for Implicit Binding
const favoriteAnimal = {
    name: 'Daisy',
    speak: function(sound){
        console.log(`${this.name} says ${sound}`)
    }
};
favoriteAnimal.speak('woof')


// Principle 3
// code example for New Binding
function Outdoor(favorite){
    this.outside = favorite;
}
const myFavoriteOutdoorActivity = new Outdoor('Kayaking');
console.log(`My favorite outdoor activity is ${myFavoriteOutdoorActivity.outside}`);


// Principle 4
// code example for Explicit Binding
function sports(){
    console.log(this.sport2);
}
const myFavoriteSports = {
    sport1: 'Football',
    sport2: 'Soccer',
}
sports.call(myFavoriteSports);
