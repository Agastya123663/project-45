class Goalkeeper{
    constructor(x,y,width,height){
        this.body = createSprite(x,y,width,height);
        this.body.shapeColor = "white";
       
    }

    consoleDisplay(){
        console.log(this.body.x);
        console.log(this.body.y);
    }

     goalKeeperLeftMovement(){
        this.body.velocityX = -5;
        this.body.velocityY = 3;
        if(this.body.x === 180 && this.body.y === 475 || this.body.x === 177 && this.body.y === 477){
            this.body.velocityX = 0;
            this.body.velocityY = 0;
        }
      }
      
     goalKeeperDownMovement(){
        this.body.velocityX = 6;
        this.body.velocityY = 3;
        if(this.body.x === 720 && this.body.y === 745 || this.body.x === 717 && this.body.y === 747){
            this.body.velocityX = 0;
            this.body.velocityY = 0;
        }
      }
      
    goalKeeperRightMovement(){
        this.body.velocityX = 14;
        this.body.velocityY = -6;
        if(this.body.x === 1322 && this.body.y === 487 || this.body.x === 1319 && this.body.y === 489){
            this.body.velocityX = 0;
            this.body.velocityY = 0;
        }
        
        
      }
      
       goalKeeperUpMovement(){
        this.body.velocityX = -7;
        this.body.velocityY = -4;
        if(this.body.x === 730 && this.body.y === 145 || this.body.x === 727 && this.body.y === 147 || this.body.x === 717 && this.body.y === 145){
            this.body.velocityX = 0;
            this.body.velocityY = 0;
        }
        
      }
}
