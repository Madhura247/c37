class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{ //When mouse is pressed on the button
      this.input.hide();
      this.button.hide(); //Both input and button element will be hidden

      player.name = this.input.value();
      
      playerCount+=1; //playerCount will increased by 1 in database.
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      
      this.greeting.html("Hello " + player.name ) //Respective player name will get displayed on the canvas.
      this.greeting.position(130, 160);
    });
  }

  hide() {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

}
