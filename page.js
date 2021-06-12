class Page{
    constructor(){
        this.button = createButton("click me");
        this.textmsg = createElement("h3");
        this.msg = createElement("h2");
    }
    display(){
        
        this.textmsg.html(" I am class Page");
        this.textmsg.position(400,100);
        this.button.position(400,250);
        
        this.button.mousePressed(()=>{
            this.textmsg.hide();
            this.msg.position(300,200);
            this.msg.html("hello you clicked me")
        })
        
    }
}