let player;
function Player(classType,health,mana,strength,agility,speed){
  this.classType=classType;
  this.health=health;
  this.mana=mana;
  this.strength=strength;
  this.agility=agility;
  this.speed=speed;
}

let playerMoves={
  calcAttack:function(){
       //who attacks first?
       let getPlayerSpeed=player.speed;
       let getEnemySpeed=enemy.speed;
       //player attacks
   let playerAttack=function(){

     let calcBaseDamage;
     if(player.mana>0){
        calcBaseDamage=player.strength*player.mana/1000;
     } else {
       calcBaseDamage=player.strength*player.agility/1000;
     }
     let offsetDamage=Math.floor(Math.random()*Math.floor(10));
     let calcOutputDamage=calcBaseDamage+offsetDamage;
     //number of hits
     let numberofHits=Math.floor(Math.random()*Math.floor(player.agility/10)/2)+1;
     let attackValues=[calcOutputDamage,numberofHits];
     return attackValues;
   }
   //enemy attacks
   let enemyAttack=function(){
     let calcBaseDamage1;
     if(enemy.mana>0){
        calcBaseDamage1=enemy.strength*enemy.mana/1000;
     } else {
       calcBaseDamage1=enemy.strength*enemy.agility/1000;
     }
     let offsetDamage1=Math.floor(Math.random()*Math.floor(10));
     let calcOutputDamage1=calcBaseDamage1+offsetDamage1;
     //number of hits
     let numberofHits1=Math.floor(Math.random()*Math.floor(enemy.agility/10)/2)+1;
     let attackValues1=[calcOutputDamage1,numberofHits1];
     return attackValues1;
   }
   let getPlayerHealth=document.querySelector(".health-player");
   let getEnemyHealth=document.querySelector(".healthenemy");

   //initiate attacks/
   if(getPlayerSpeed>=getEnemySpeed){
     let playerAttackValues=playerAttack();
     let totalDamage=playerAttackValues[0]*playerAttackValues[1];
     enemy.health=enemy.health-totalDamage;
     alert("you hit"+playerAttackValues[0]+" damage "+playerAttackValues[1]+" times. ");
     if(enemy.health<=0){
       alert("you win!refresh borowser to play again.");
       getPlayerHealth.innerHTML='Health:'+player.health;
       getEnemyHealth.innerHTML='Health: 0';
     }else {
         getEnemyHealth.innerHTML='Health:'+enemy.health;
         //Enemy attackValues
         let enemyAttackValues=enemyAttack();
         let totalDamage=enemyAttackValues[0]*enemyAttackValues[1];
         player.health=player.health-totalDamage;
         alert(" enemy hit "+enemyAttackValues[0]+" damage "+enemyAttackValues[1]+" times. ");
         if(player.health<=0){
           alert("you loose!refresh borowser to play again.");
           getPlayerHealth.innerHTML=' Health : 0';
           getEnemyHealth.innerHTML='Health:'+enemy.health;
     }else{
           getPlayerHealth.innerHTML='Health:'+player.health;
       }
     }
   }else if(getEnemySpeed>=getPlayerSpeed){
     let enemyAttackValues=enemyAttack();
     let totalDamage=enemyAttackValues[0]*enemyAttackValues[1];
     player.health=player.health-totalDamage;
     alert("enemy hit"+enemyAttackValues[0]+" damage "+enemyAttackValues[1]+" times. ");
     if(player.health<=0){
       alert("enemy win!refresh borowser to play again.");
       getEnemyHealth.innerHTML='Health:'+enemy.health;
       getPlayerHealth.innerHTML='Health: 0';
     }else {
         getPlayerHealth.innerHTML='Health:'+player.health;
         //Enemy attackValues
         let playerAttackValues=playerAttack();
         let totalDamage=playerAttackValues[0]*playerAttackValues[1];
         enemy.health=enemy.health-totalDamage;
         alert("you hit "+enemyAttackValues[0]+" damage "+enemyAttackValues[1]+" times. ");
         if(enemy.health<=0){
           alert("enemy loose!refresh borowser to play again.");
           getEnemyHealth.innerHTML='Health:0';
           getPlayerHealth.innerHTML='Health:'+player.health;
     }else{
           getEnemyHealth.innerHTML='Health:'+enemy.health;
       }
     }
   }
  }

}
