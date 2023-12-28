// discount
// compolsory

interface User {
    email: string,
    userId: number,
    googleId?: string,
    startTrial(): string,
    getCoupon(couponname:string, value: number):number
}

const rafi: User = {email: "rafi@gmail.com",userId: 4, startTrial: () => {
    return "trial started";
},
getCoupon: (name: "mahdi hasan", off: 10) => {
    return 10;
}

}
rafi.email = "d@gmail.com"

interface User {
    githubToken: "github" 
}