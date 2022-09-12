import Observable from "../shared/observable";

class userService{
    user = {
        username: ''
    }
    userObsv;

    constructor(username){
        this.user.username = username;
        this.userObsv = new Observable();
    }

    next(date){
        this.userObsv.broadcast(data)
    }
}


export let userService = new userService(John123)