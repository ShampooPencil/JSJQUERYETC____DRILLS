
// function timesANum(x) {
//     var result;
//     result = x * 5;
//     return result;//i did use console.log(result) for return
// }
// timesANum(5);

function shootArrow() {
    var miss;
    var hit;
    var shoot = Math.floor(Math.random() * 10) + 1;
    console.log(shoot);
    if (shoot >= 5) {
        console.log("miss");
    } else if (shoot < 5) {
        console.log("hit");
    }
}

//shootArrow();

var Zelda = {
    weapon: [],
    hearts: 3,
    shirt: undefined,
    pants: "tatoored",
    shoot: shootArrow
    
}
Zelda.shoot();