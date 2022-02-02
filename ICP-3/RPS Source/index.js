
function computer_choice() {
    
    var choice_list = ['rock', 'paper', 'scissors'];
    ///https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/
    random_num = Math.floor(Math.random()*3);
    document.getElementById('computer').innerHTML = 'Computer chose ' + choice_list[random_num] + ',';
    return choice_list[random_num];
}

function compare(player) {
    comp_choice = computer_choice();
    if (player == comp_choice) {
        document.getElementById('winner').innerHTML = "Tie!";
    }
    else if (player == 'rock') {
        if (comp_choice == 'paper') {
            document.getElementById('winner').innerHTML = "Computer Wins!";
        }
        else {
            document.getElementById('winner').innerHTML = "Player Wins!";
        }
    }
    else if (player == 'paper') {
        if (comp_choice == 'scissors') {
            document.getElementById('winner').innerHTML = "Computer Wins!";
        }
        else {
            document.getElementById('winner').innerHTML = "Player Wins!";
        }
    }
    else if (player == 'scissors') {
        if (comp_choice == 'rock') {
            document.getElementById('winner').innerHTML = "Computer Wins!";
        }
        else {
            document.getElementById('winner').innerHTML = "Player Wins!";
        }
    }

}