// discount
// compolsory

interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin"|"ta"|"learner"
}

const rafi: Admin = {
  email: "rafi@gmail.com",
  userId: 4,
  role: "admin", 
  githubToken: "github",

  startTrial: () => {
    return "trial started";
  },

  getCoupon: (name: "mahdi hasan", off: 10) => {
    return 10;
  },
  dbId: 34,
  googleId: "asdf",
};




