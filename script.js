// start with strings, numbers and booleans

let age = 100
let age2 = age
console.log(age, age2)
age = 200
console.log(age, age2)

let name = 'Monika'
let name2 = name
console.log(name, name2)
name = 'Łukasz'
console.log(name, name2)

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy']

let team = players

console.log(players, team)

team[3] = 'Maria'
console.log(players, team)

// dlaczego zmienia się tablica players?
// To zjawisko wynika z faktu, że w JavaScript zmienne przechowują referencje do obiektów, a nie same obiekty. W przypadku tablic i innych obiektów złożonych, takich jak tablice, obie zmienne players i team wskazują na ten sam obiekt (tj. tę samą tablicę), więc zmiany dokonane za pomocą jednej zmiennej są widoczne przez drugą zmienną. Innymi słowy, obie zmienne players i team wskazują na ten sam obszar w pamięci, więc zmiana jednej tablicy (np. poprzez zmianę elementu) zostanie odzwierciedlona w obu zmiennych. Aby uniknąć tego zachowania, można skopiować tablicę, na którą wskazuje zmienna, np. za pomocą metody slice() lub concat()

// and we want to make a copy of it.
// You might think we can just do something like this:
// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!
const team2 = players.slice()
// tworzymy nową tablicę, jeśli nie chcemy żeby pierwotna się popsuła↑
// one way
// or create a new array and concat the old one in
const team3 = [].concat(players)

// or use the new ES6 Spread
const team4 = [...players]
team4[1] = 'weeee'
console.log(team4)
console.log(players)

const team5 = Array.from(players)
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
	name: 'Wes Bos',
	age: 80,
}

// and think we make a copy:

// const captain = person
// captain.number = 99
// console.log(person)

// how do we take a copy instead?
const captain2 = Object.assign({}, person, { number: 99, age: 12 })
console.log(captain2)
console.log(person)

// We will hopefully soon see the object ...spread
const captain3 = { ...person }
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const user = {
	name: 'Monika',
	age: 35,
	social: {
		fb: '@fb',
		x: '@x',
	},
}
console.clear()
console.log(user)

const dev = Object.assign({}, user)
console.log(dev)
// taki sposób kopiowania jest płytki, kopiuje tylko obiekt najwyższy rangą, a reszta pozostaje referencją do oryginalnego obiektu. Więc jeśli coś zmienimy w podległym obiekcie to zmiana będzie widoczna również w jego oryginale!↓
// dev.social.x = '@coolWoman'
// console.log(dev);
// console.log(user);

const dev2 = JSON.parse(JSON.stringify(user))
console.log(JSON.stringify(user));
console.log(typeof JSON.stringify(user));
// to już nie obiekt, tylko string↑
console.log(dev2);
// ↑ głębokie klonowanie obiektu - niezalecane
// Kod JSON.parse(JSON.stringify(user)) wykonuje głębokie klonowanie obiektu user. Oto jak to działa:

// JSON.stringify(user): Konwertuje obiekt user na jego reprezentację w formacie JSON. JSON jest formatem danych tekstowych, więc w wyniku tej operacji otrzymujemy ciąg znaków zawierający wszystkie informacje z obiektu user.
// JSON.parse(...): Następnie funkcja JSON.parse() analizuje ten ciąg znaków JSON i tworzy na jego podstawie nowy obiekt. Ponieważ ta operacja parsowania JSON i ponownego tworzenia obiektu jest głęboka, oznacza to, że obiekty zagnieżdżone w user również zostaną sklonowane.
// Ostatecznie dev2 będzie identyczną kopią obiektu user, co oznacza, że zmiany wprowadzone do jednego z tych obiektów nie będą miały wpływu na drugi. Jest to często używane do tworzenia głębokich kopii obiektów, szczególnie gdy chcemy uniknąć referencji do tych samych danych w różnych miejscach naszego programu.