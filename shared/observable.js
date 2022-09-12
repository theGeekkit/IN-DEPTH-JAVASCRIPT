class Observable{
    subscribers = [];

    subscribe(fn){
        this.subscribers.push(fn)
    }

    unSubscribe(removeFn){
        this.subscribers = this.subscribers.filter((fn)=>{
            return fn != removeFn
        })
    }
    broadcast(value){
        this.subscribers.forEach((fn)=>{
            fn(value)
        })
    }

}