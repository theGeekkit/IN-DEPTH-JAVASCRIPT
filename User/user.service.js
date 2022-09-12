class userService{
    user = {
        username: ''
    }
    userObsv;

    constructor(username){
        this.user.username = username;
        this.userObsv = new Observable();
    }
}