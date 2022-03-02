//opret1
const greeting = "hej verden"

//opret2
const firstName ="john"
const middleName ="f"
const lastName ="kennedy"
console.log(firstName)

const fullName = firstName + " " + middleName + " "  + lastName



//opret3
const salary = 5000

//opret4
const calculate1 = 5
const calculate2 = 5
const calculate3 = 3
const regnestykket = calculate1 + calculate2
const regnestykket1 = regnestykket * calculate3


//opret5
const decl1 = 2.25
const decl2 = 3.50

const sum2 = decl1 + decl2
console.log(Math.round(sum2));

//opret6
const decl3 = 2.55
const decl4 = 1.44

const rounddown = decl3 + decl4
console.log(Math.floor(rounddown));

//opret7
const a = Math.sqrt(65);
console.log(a);

//opret8
const str = "John Doe is 25 years old";
const part = str.slice(5, 8);
console.log(part);

//opret9
const compare = false

//opret10
console.log(typeof fullName + " " + typeof salary +" " + typeof decl3 + " " + typeof compare);

//opre11

const type1 = "10"
const type2 = "2"
const type3 = 20
const type4 = 10

console.log(type1 + type2);
console.log(type1 + type3);
console.log(type4 + type2);
console.log(type3 + type4);
console.log("Resultatet af type3 + type4 er: " + type3 + type4);
console.log(type3 + type4 + type2);
console.log(type4 / type2);
console.log(type2 * type3 + type1);
console.log(parseInt(type1) + parseInt(type2));
console.log(type3.toString() + type4.toString());
