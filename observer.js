class Observable{
    subscribers = [];

    subscribe(fn){
        this.subscribers.push(fn)
    }


}

let celebrityObsv = new Observable();
celebrityObsv.subscribe(() =>{
    console.log('Test');
})

console.log(celebrityObsv)