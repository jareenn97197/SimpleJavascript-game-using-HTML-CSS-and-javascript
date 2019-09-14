
let Gamemanager = {
   setgameStart:function(classType){
     this.resetPlayer(classType);
     this.setPreFight();
   },
   resetPlayer:function(classType){
    switch (classType) {
      case "warrior":
      player=new Player(classType,200,0,200,100,50);
      break;
      case "rogue":
      player=new Player(classType,150,0,100,150,200);
      break;
      case "maze":
      player=new Player(classType,80,0,50,200,100);
      break;
      case "hunter":
      player=new Player(classType,200,0,50,200,100);
      break;
    }
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML='<img src="stylesheet/img/warrior/'+classType+'.jpg" class="img-avatar"><div><h3>'+ classType +'</h3><p class="health-player">Health:'+ player.health +'</p><p>mana:'+ player.mana+'</p><p>strength:'+ player.strength +'</p><p>agility:'+ player.agility +'</p><p>speed:'+ player.speed +'</p></div>';
  },
   setPreFight:function(){
      let getHeader=document.querySelector(".header");
      let getActions=document.querySelector(".actions");
      let getArena=document.querySelector(".arena");
      getHeader.innerHTML='<p>Task: Find and Enemy!</p>';
      getActions.innerHTML='<a href="#" class="btn-prefight" onclick="Gamemanager.setFight()">Search for Enemy</a>'
      getArena.style.visibility="visible";
   },
   setFight:function()
   {
     let getHeader=document.querySelector(".header");
     let getActions=document.querySelector(".actions");
     let getEnemy=document.querySelector(".enemy");
     //Create enemy!
     let enemy00=new Enemy("goblin",100,0,50,100,100);
     let enemy01=new Enemy("troll",200,0,150,100,150);
      let enemy02=new Enemy("stranger",150,0,100,150,200);
       let enemy03=new Enemy("poison",100,0,150,100,150);
     let chooseRandomEnemy=Math.floor(Math.random()*Math.floor(4));
     switch (chooseRandomEnemy) {
       case 0:
       enemy=enemy00;
       break;
       case 1:
       enemy=enemy01;
         break;
         case 2:
         enemy=enemy02;
           break;
           case 3:
            enemy=enemy03;
              break;

     }
         getHeader.innerHTML='<p>Task:choose your move</p>';
         getActions.innerHTML='<a href="#" class="btn-prefight" onclick="playerMoves.calcAttack()">Attack!!!!</a>';
         getEnemy.innerHTML='<img src="stylesheet/img/enemies/'+enemy.enemyType+'.jpg" class="img-avatar"><div><h3>'+ enemy.enemyType +'</h3><p class="healthenemy">Health:'+enemy.health +'</p><p>mana:'+ enemy.mana+'</p><p>strength:'+ enemy.strength +'</p><p>agility:'+ enemy.agility +'</p><p>speed:'+ enemy.speed +'</p></div>';

   }
}
