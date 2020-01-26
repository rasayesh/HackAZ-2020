let numPlanets = 10;
(function(){
    let model;

    let aPressed = false;
    let dPressed = false;

    function drawAll(){
        let canvas = document.getElementById("primarystage");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let ctx = canvas.getContext("2d");
        let playerImg = document.getElementById("player");
        let thrustImg = document.getElementById("thrust");
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.translate(model.player.x + model.player.width / 2, model.player.y + model.player.height / 2);
        ctx.rotate(-1 * model.player.direction);
        if (model.spacePressed){
            ctx.drawImage(thrustImg, -1 * playerImg.width / 2, -1 * playerImg.height / 2, playerImg.width, playerImg.height)
        }else{
            ctx.drawImage(playerImg, -1 * playerImg.width / 2, -1 * playerImg.height / 2, playerImg.width, playerImg.height);
        }
        ctx.rotate(model.player.direction);
        ctx.translate(-1 * (model.player.x + model.player.width / 2), -1 * (model.player.y + model.player.height / 2));
        for (let i = 0; i < model.planets.length; i++){
            ctx.beginPath();
            ctx.arc(model.planets[i].x, model.planets[i].y, model.planets[i].radius, 0, 2 * Math.PI);
            if (model.planets[i].goal ){
                ctx.fillStyle = "green";
            }else{
                if(model.planets[i].small){
                    ctx.fillStyle = "orange";
                } else if(model.planets[i].medium){
                    ctx.fillStyle = "red";
                } else if(model.planets[i].large){
                    ctx.fillStyle = "purple";
                }
            }
            ctx.fill();

            ctx.fillStyle = "white";
            ctx.font = "15px Arial";
            ctx.textAlign = "center";
            ctx.fillText(model.planets[i].title, model.planets[i].x, model.planets[i].y);
            ctx.fillText(model.planets[i].hours, model.planets[i].x, model.planets[i].y + 35);
        }
    }

    function gameTick(){
        model.updatePlayer();
        if (aPressed){
            model.player.turnLeft();
        }
        if (dPressed){
            model.player.turnRight();
        }
        drawAll();
    }

    window.onload = function(){
        model = new Model();
        setInterval(gameTick, 10);
        document.onkeydown = function(e){
            if (e.keyCode == "65"){
                console.log("A Down");
                aPressed = true;
            }
            if (e.keyCode == "68"){
                console.log("D Down");
                dPressed = true;
            }
            if (e.keyCode == "32"){
                console.log("Space Pressed");
                model.setSpacePressed(true);
            }
        }
        document.onkeyup = function(e){
            if (e.keyCode == "65"){
                console.log("A up")
                aPressed = false;
            }
            if (e.keyCode == "68"){
                console.log("D Up");
                dPressed = false;
            }
            if (e.keyCode == "32"){
                console.log("Space Released");
                model.setSpacePressed(false);
            }
        }
    }
})();