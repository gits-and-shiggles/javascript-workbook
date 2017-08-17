'use strict';

document.addEventListener('DOMContentLoaded', () => {
// Your code here
  let toggle = true;
  let gb = [];
  document.querySelectorAll('[data-cell]').forEach((div) => {
    gb.push(div.innerHTML);
  });
  let announceWin = () => {
    return(`Player ${toggle ? 'X' : 'O'} wins!`);
  };

  let checkForX = (i) => {
    if (i === 'X') {return true;}
    return false;
  }

  let checkForO = (i) => {
    if (i === 'O') {return true;}
    return false;
  }



  document.querySelectorAll('[data-cell]').forEach((div) => {
    div.addEventListener('click', (e) => {
      if (!e.target.innerHTML) {
        e.target.innerHTML = toggle ? 'X' : 'O';
        gb[e.target.attributes[0].value] = e.target.innerHTML;

        let winCombos = [[gb[0],gb[1],gb[2]],
        [gb[3],gb[4],gb[5]],
        [gb[6],gb[7],gb[8]],
        [gb[0],gb[3],gb[6]],
        [gb[1],gb[4],gb[7]],
        [gb[2],gb[5],gb[8]],
        [gb[0],gb[4],gb[8]],
        [gb[2],gb[4],gb[6]]];

        let checkForWin = () => {
          winCombos.forEach((arr) => {
            if (arr.every(checkForX)) {
              document.getElementById('announce-winner').innerHTML = announceWin();
            }
            if (arr.every(checkForO)) {
              document.getElementById('announce-winner').innerHTML = announceWin();
            }
          });
        };

        checkForWin();
        toggle = !toggle;

      } else {
        alert('stop it!');
      }
    });
  });







  document.querySelector('button').addEventListener('click', (e) =>   {
    document.querySelectorAll('[data-cell]').forEach((div) => {
      div.innerHTML = '';
    });
    document.getElementById('announce-winner').innerHTML = '';
  });
});
