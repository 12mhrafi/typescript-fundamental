function addTwo(num: number): number {
  return num + 2;
  // return "hello world"
}

addTwo(4);

function getUpper(val: string) {
  return val.toUpperCase();
}

getUpper("my name is Rafi");

function singUpUser(name: string, emailL: string, isPaid: boolean) {}
singUpUser("mahdi hasan rafi", "rafi@gmail.com", false);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("mahdi", "mahdi@gmail.com");

// function getValue(myVal: number): boolean{
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [2,3, 3]

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}
