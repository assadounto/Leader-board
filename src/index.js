import './styles/style.css';
import Api from './modules/ConsumeApi.js';

const displayData = async () => {
  const data = await Api.getScores();
  Api.renderScore(data);
};

displayData();
document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = document.getElementById('form');
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  const data = {
    user: name.value,
    score: score.value,
  };
  await Api.addScore(data);
  form.reset();
});

document.getElementById('refresh').addEventListener('click', async () => {
  displayData();
});
