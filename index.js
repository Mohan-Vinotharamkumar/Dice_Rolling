var player_name;
player_name = prompt("Enter Player Name:");
if(player_name !== "")
{
    document.querySelectorAll("h2")[0].textContent=player_name;
}
else
{
    while(player_name == "")
    {
    alert("Please enter a Valid Player Name");
    var player_name = prompt("Enter Player Name:");
    }
    document.querySelectorAll("h2")[0].textContent=player_name;
}


let chance = 10;
var com_count = 0;
var player_count = 0;

function roll_dice()
{
    chance -= 1;
    if(chance>=0)
    {
        var random_number_1 = Math.floor(Math.random()*6) + 1;
        var random_number_2 = Math.floor(Math.random()*6) + 1;


        var image_src_1 = "./Dice_Images/Dice_"+random_number_1+".png";
        document.querySelectorAll("img")[0].src=image_src_1;

        var image_src_2 = "./Dice_Images/Dice_"+random_number_2+".png";
        document.querySelectorAll("img")[1].src=image_src_2;

        if(random_number_1 > random_number_2)
        {
            document.querySelectorAll("h1")[0].textContent="⛳ "+player_name+" Wins...";
            player_count += 1;
        }
        else if(random_number_1 < random_number_2)
        {
            document.querySelectorAll("h1")[0].textContent="CPU Wins... ⛳";
            com_count += 1;
        }
        else
        {
            document.querySelectorAll("h1")[0].textContent="Match Tied... 😪";
        }
    document.querySelectorAll("h3")[0].textContent="Your Chances : "+chance;
    }
    else
    {
        victory();
        document.querySelectorAll("button")[0].innerHTML="Reload Page";
    }
}


function victory()
{
    if(player_count>com_count)
    {
        document.querySelectorAll("h3")[0].textContent=player_name+" Wins.... ⛳";
    }
    else if(player_count<com_count)
    {
        document.querySelectorAll("h3")[0].textContent="Computer wins.... ⛳";
    }
    else
    {
        document.querySelectorAll("h3")[0].textContent="Match Tied...";
    }
}
