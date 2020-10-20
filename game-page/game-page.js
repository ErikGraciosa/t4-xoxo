import { renderHeader } from '../header/header.js';
import { getFromLocalStorage } from '../utils.js';
import { renderUserInfo, renderScoreBoard, pushNewRoundToLocalStorage, getUserInfo, resetGameBoardDOM, populateBoardElement, executeFullTurn } from './game-page-utils.js';

const boardForm = document.getElementById('board-form');
const mostRecentRound = getFromLocalStorage('roundsData');
const mostRecentBoard = mostRecentRound[mostRecentRound.length - 1].board;
const newGameButton = document.getElementsByTagName('button')[0];
const resetSeriesButton = document.getElementsByTagName('button')[1];

renderHeader();

renderUserInfo();

renderScoreBoard();

populateBoardElement(boardForm, mostRecentBoard);

boardForm.addEventListener('click', (e) => {
    executeFullTurn(e);    
});

newGameButton.addEventListener('click', () => {
    pushNewRoundToLocalStorage();
    resetGameBoardDOM();
    const userInfo = getUserInfo();
    const userName = document.getElementById('user-name');
    userName.textContent = `User: ${userInfo.name}`;
    const difficultyElem = document.getElementById('difficulty');
    difficultyElem.textContent = `Difficulty: ${userInfo.difficulty}`;
});

resetSeriesButton.addEventListener('click', () => {
    window.location.replace('../index.html');
});

