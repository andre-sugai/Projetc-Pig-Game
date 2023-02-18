'use strict';

// Selecting Elements
// dua maneiras de selecionar id's
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions
//Apesar de serem number o javascript converte para string quando mostra na página
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
