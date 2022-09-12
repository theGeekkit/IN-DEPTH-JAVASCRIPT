export default class Settings{
    constructor(){
        this.render();
    }

    render(){
        let appElem = document.getElementById("app");

        appElem.insertAdjacentHTML(
            "beforeend", 
            `<h1 class='text-center'>Settings</h1>
                <div class="container">
                <form>
                    <div class="mb-3">
                        <label class="form-label">username: </label>
                        <input type="text" class="form-control" id="user-input"> 
                    </div>
                    <div class="text-center">                    
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
                </div>
            `         
        );
    }
}