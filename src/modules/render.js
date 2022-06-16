const renderScore = async (scores) => {
  const scoreArea = document.querySelector('.scores');
  scoreArea.innerHTML = '';
  scores.forEach((element) => {
    const cont = document.createElement('div');
    cont.classList.add('cont');
    const name = document.createElement('div');
    const score = document.createElement('div');
    name.textContent = element.user;
    score.textContent = element.score;
    [name, score].forEach((element) => cont.appendChild(element));
    scoreArea.appendChild(cont);
  });
};
export default renderScore;