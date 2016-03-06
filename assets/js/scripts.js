var board = [
  ['&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;',' &#9820;'],
  ['&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;'],
  ['&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9815;',' &#9816;','&#9814;'] ];

board.join('\n') + '\n\n';

function currentBoard(){
$(".1-1").html(board[0][0]);
$(".1-2").html(board[0][1]);
$(".1-3").html(board[0][2]);
$(".1-4").html(board[0][3]);
$(".1-5").html(board[0][4]);
$(".1-6").html(board[0][5]);
$(".1-7").html(board[0][6]);
$(".1-8").html(board[0][7]);
$(".2-1").html(board[1][0]);
$(".2-2").html(board[1][1]);
$(".2-3").html(board[1][2]);
$(".2-4").html(board[1][3]);
$(".2-5").html(board[1][4]);
$(".2-6").html(board[1][5]);
$(".2-7").html(board[1][6]);
$(".2-8").html(board[1][7]);
$(".3-1").html(board[2][0]);
$(".3-2").html(board[2][1]);
$(".3-3").html(board[2][2]);
$(".3-4").html(board[2][3]);
$(".3-5").html(board[2][4]);
$(".3-6").html(board[2][5]);
$(".3-7").html(board[2][6]);
$(".3-8").html(board[2][7]);
$(".4-1").html(board[3][0]);
$(".4-2").html(board[3][1]);
$(".4-3").html(board[3][2]);
$(".4-4").html(board[3][3]);
$(".4-5").html(board[3][4]);
$(".4-6").html(board[3][5]);
$(".4-7").html(board[3][6]);
$(".4-8").html(board[3][7]);
$(".5-1").html(board[4][0]);
$(".5-2").html(board[4][1]);
$(".5-3").html(board[4][2]);
$(".5-4").html(board[4][3]);
$(".5-5").html(board[4][4]);
$(".5-6").html(board[4][5]);
$(".5-7").html(board[4][6]);
$(".5-8").html(board[4][7]);
$(".6-1").html(board[5][0]);
$(".6-2").html(board[5][1]);
$(".6-3").html(board[5][2]);
$(".6-4").html(board[5][3]);
$(".6-5").html(board[5][4]);
$(".6-6").html(board[5][5]);
$(".6-7").html(board[5][6]);
$(".6-8").html(board[5][7]);
$(".7-1").html(board[6][0]);
$(".7-2").html(board[6][1]);
$(".7-3").html(board[6][2]);
$(".7-4").html(board[6][3]);
$(".7-5").html(board[6][4]);
$(".7-6").html(board[6][5]);
$(".7-7").html(board[6][6]);
$(".7-8").html(board[6][7]);
$(".8-1").html(board[7][0]);
$(".8-2").html(board[7][1]);
$(".8-3").html(board[7][2]);
$(".8-4").html(board[7][3]);
$(".8-5").html(board[7][4]);
$(".8-6").html(board[7][5]);
$(".8-7").html(board[7][6]);
$(".8-8").html(board[7][7]);
};


currentBoard();
// Move Queen's Pawn from d2 to d4 - move 1
function move1(){
board[4][3] = board[6][3];
board[6][3] = ' ';
board.join('\n');
currentBoard();
};

function remove1(){
  if(board[4][3] != ' '){
    board[6][3] = board[4][3];
    board[4][3] = ' ';
    board.join('\n');
    currentBoard();
  }
};



// // Move black knight from g8 to f6 - move 2
function move2(){
board[2][5] = board[0][6];
board[0][6] = ' ';
board.join('\n');
currentBoard();
};

function remove2(){
  if(board[2][5] != ' '){
    board[0][6] = board[2][5];
    board[2][5] = ' ';
    board.join('\n');
    currentBoard();
  }
};


//
// // Move white pawn from c2 to c4 - move 3
function move3(){
board[4][2] = board[6][2];
board[6][2] = ' ';
board.join('\n');
currentBoard();
};

function remove3(){
  if(board[4][2] != ' '){
    board[6][2] = board[4][2];
    board[4][2] = ' ';
    board.join('\n');
    currentBoard();
  }
};


// //Move black pawn from e7 to e6 - move 4
function move4(){
board[2][4] = board[1][4];
board[1][4] = ' ';
board.join('\n');
currentBoard();
};

function remove4(){
  if(board[2][4] === '&#9823;'){
    board[1][4] = board[2][4];
    board[2][4] = ' ';
    board.join('\n');
    currentBoard();
  }
};


// //Move white pawn from g2 to g3 - move 5
function move5(){
board[5][6] = board[6][6];
board[6][6] = ' ';
board.join('\n');
currentBoard();
};

function remove5(){
  if(board[5][6] === '&#9817;'){
    board[6][6] = board[5][6];
    board[5][6] = ' ';
    board.join('\n');
    currentBoard();
  }
};


// //move black pawn from d7 to d5 - move 6
function move6(){
board[3][3] = board[1][3];
board[1][3] = ' ';
board.join('\n');
currentBoard();
};

function remove6(){
if(board[3][3] != ' '){
  board[1][3] = board[3][3];
  board[3][3] = ' ';
  board.join('\n');
  currentBoard();
  }
};




// //move white bishop from f1 to g2 - move 7
function move7(){
board[6][6] = board[7][5];
board[7][5] = ' ';
board.join('\n');
currentBoard();
};

function remove7(){
  if(board[6][6] != ' ' || board[6][6] != '&#9815'){
    board[7][5] = board[6][6];
    board[6][6] = ' ';
    board.join('\n');
    currentBoard();
  }
};


// //move black bishop from f8 to e7 - move 8
function move8(){
board[1][4] = board[0][5];
board[0][5] = ' ';
board.join('\n');
currentBoard();
};

function remove8(){
  if(board[1][4] != ' ' || board[1][4] != '&#9821;'){
    board[0][5] = board[1][4];
    board[1][4] = ' ';
    board.join('\n');
    currentBoard();
  }
};


// //move white knight from g1 to f3 - move 9
function move9(){
board[5][5] = board[7][6];
board[7][6] = ' ';
board.join('\n');
currentBoard();
};

function remove9(){
  if(board[5][5] != ' '){
   board[7][6] = board[5][5];
   board[5][5] = ' ';
   board.join('\n');
   currentBoard();
  };
};

//this function progresses moves 1 by 1
$(".fw-btn").on("click", function(){
  if(board[4][3] === ' '){
    move1();
  }else if(board[2][5] === ' '){
    move2();
  }else if(board[4][2] === ' '){
    move3();
  }else if(board[2][4] === ' '){
    move4();
  }else if(board[5][6] === ' '){
    move5();
  }else if(board[3][3] === ' '){
    move6();
  }else if(board[6][6] === ' '){
    move7();
  }else if(board[1][4] === ' '){
    move8();
  }else if(board[5][5] === ' '){
    move9();
}
});


//this function reverses moves 1 by 1
$(".bk-btn").on("click", function(){
  if(board[5][5] != ' '){
    console.log('hi');
    remove9();
  }else if(board[1][4] === '&#9821;'){
    remove8();
      console.log("remove8");
  }else if(board[6][6] === '&#9815;'){
    remove7();
      console.log("remove7");
  }else if(board[3][3] === '&#9823;'){
    remove6();
      console.log("remove6");
  }else if(board[5][6] === '&#9817;'){
    remove5();
      console.log("remove5");
  }else if(board[2][4] === '&#9823;'){
    remove4();
      console.log("remove4");
  }else if(board[4][2] === '&#9817;'){
    remove3();
      console.log("remove3");
  }else if(board[2][5] != ' '){
    remove2();
      console.log("remove2");
  }else if(board[4][3] === '&#9817;'){
    remove1();
    console.log("remove1");
  }
});

//this function fast-forwards
$('.ffw-btn').on('click', function(){
  setTimeout(move1, 500);
  setTimeout(move2, 1000);
  setTimeout(move3, 1500);
  setTimeout(move4, 2000);
  setTimeout(move5, 2500);
  setTimeout(move6, 3000);
  setTimeout(move7, 3500);
  setTimeout(move8, 4000);
  setTimeout(move9, 4500);
});

//this function rewinds
$('.rw-btn').on('click', function(){
  setTimeout(remove9, 500);
  setTimeout(remove8, 1000);
  setTimeout(remove7, 1500);
  setTimeout(remove6, 2000);
  setTimeout(remove5, 2500);
  setTimeout(remove4, 3000);
  setTimeout(remove3, 3500);
  setTimeout(remove2, 4000);
  setTimeout(remove1, 4500);
})






//http://www.experts-exchange.com/articles/3488/2D-Arrays-in-JavaScript.html
