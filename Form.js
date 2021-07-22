class Form{
    constructor(){
    }

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(500,100);
        var input = createInput("name");
        var button = createButton('play');
        input.position(500,260);
        button.position(620,300);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            var greeting = createElement('h3');
            greeting.html("Hello "+ name);
            greeting.position(500,260);
        })
        

    }
   
    }

    
