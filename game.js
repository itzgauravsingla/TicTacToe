// Selects all the images in our HTMLdocument
var img = document.querySelectorAll("img");

//Scores
var scoreX = 0;
var scoreO = 0;
document.querySelectorAll("td")[0].innerHTML = scoreX;
document.querySelectorAll("td")[1].innerHTML = scoreO;

// initiating box values
var val = Array(9).fill(-1);

// Changing the image and value
function setX(box, index){
    box.setAttribute("src", "images/X.png");
    val[index] = 1;
}
function setO(box, index){
    box.setAttribute("src", "images/O.png");
    val[index] = 0;
}

// Determining the value of the box
function valueOf(box)
{
    if(box.getAttribute("src") === "images/empty.png")
        return -1;
    else if(box.getAttribute("src") === "images/O.png")
        return 0;
    else if(box.getAttribute("src") === "images/X.png")
        return 1;
}

// Starting the game
var player1 = prompt("What do u want to be?").toUpperCase();
if(!["X", "O"].includes(player1))
{
    alert("Haha! Have you never played TicTacToe?");
    alert("Refresh the page and try x, or o.");
}
var curplayer = player1;

// Adding event listener and waiting for clicks
for(i=0; i<9; i++)
{
    img[i].addEventListener("click", function() {
        var index = this.getAttribute("class");
        if(valueOf(img[index[3]]) === -1)
        {
           update(index[3]);
        }
    })
}

// Updating the scr and values
function update(index)
{
    if(curplayer === "X")
    {
        setX(img[index], index);
        check();
        curplayer = "O";
        
    } 
    else if(curplayer === "O")
    {
        setO(img[index], index);
        check();
        curplayer = "X";
    }
}

// Checking if we have a winner 
var row = [[0,1,2],[3,4,5],[6,7,8]];
var col = [[0,3,6], [1,4,7],[2,5,8]];
var dia = [[0,4,8],[2,4,6]];

function check(){
    if(!val.includes(-1)) 
    {
        alert("It's a tie! Reset the board using Reset button");
        document.querySelectorAll("h1")[0].innerHTML = "It was a TIE";
    }  

    for(var i = 0; i < 3; i++)
    {
        // Check for rows
        if((val[row[i][0]] === val[row[i][1]] 
            && val[row[i][0]] === val[row[i][2]]) && val[row[i][0]] !== -1)
        {
            alert("We have Winner");
            if(curplayer === "X")
                scoreX++;
            else if(curplayer === "O")
                scoreO++;
            document.querySelectorAll("td")[0].innerHTML = scoreX;
            document.querySelectorAll("td")[1].innerHTML = scoreO;
            document.querySelectorAll("h1")[0].innerHTML = curplayer + " Wins horizontally";
            val = Array(9).fill(-1);
        }
        
        // Check for column
        if((val[col[i][0]] === val[col[i][1]] 
            && val[col[i][0]] === val[col[i][2]]) && val[col[i][0]] !== -1)
        {
            alert("We have Winner");
            if(curplayer === "X")
                scoreX++;
            else if(curplayer === "O")
                scoreO++;
            document.querySelectorAll("td")[0].innerHTML = scoreX;
            document.querySelectorAll("td")[1].innerHTML = scoreO;
            document.querySelectorAll("h1")[0].innerHTML = curplayer + " Wins vertically";
            val = Array(9).fill(-1);
        }

        // Check for diameter
        if(i < 2)
        {
            if((val[dia[i][0]] === val[dia[i][1]] 
                && val[dia[i][0]] === val[dia[i][2]]) && val[dia[i][0]] !== -1)
            {
                alert("We have Winner");
                if(curplayer === "X")
                    scoreX++;
                else if(curplayer === "O")
                    scoreO++;
                document.querySelectorAll("td")[0].innerHTML = scoreX;
                document.querySelectorAll("td")[1].innerHTML = scoreO;
                document.querySelectorAll("h1")[0].innerHTML = curplayer + " Wins diagonally";
                val = Array(9).fill(-1);
            }
        }
    }
}

// // Calculating values of the boxes
// for(var i=0; i<9; i++)
// {
//     val[i] = valueOf(img[i]);
// }

// Reset
function clean() {
    alert("Do u want to reset?");
    for(var i=0; i<9; i++)
    {
        val[i] = -1;
        img[i].setAttribute("src", "images/empty.png");
    }

}
        
document.querySelector("input").addEventListener("click", clean);
