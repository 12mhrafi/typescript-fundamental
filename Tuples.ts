// const user: (string | number)[] = ["hc",1]
let tUser: (string | number | boolean)[] = ["hc",1]

tUser = ["hads", 3, true]

let rgb: [number, number, number ] = [255,255,255]

type User = [number,string]

const newUser: User = [12, "example@gmail.com"]

newUser[1] = "hc.com"
newUser[0] = 4;

newUser.push(true);