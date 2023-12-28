let score: number | string | boolean  = 44;
score = 55;
score = "88"
score = true

type User = {
    name: string,
    id: number
}
type Admin = {
    username: string;
    id: number
}

let hasan: User  = {name: "rafi",id: 43}
hasan = {name:"mahdi", id: 4}

getDbId(3)
getDbId("3")
function getDbId(id: number | string){
    if(typeof id === "string"){
        id.toLowerCase();
    }
}



// array 

const data: number[] = [1,2,3,4,5,6];
const data2:string[] = ["3","3"]
const data3: (string | number | boolean ) [] = ['1','2', 3, true]

let pi:3.14 = 3.14
pi = 3.14

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"