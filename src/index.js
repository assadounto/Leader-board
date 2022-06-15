///* eslint-disable linebreak-style */
import './styles/style.css';
import Api from './modules/ConsumeApi.js';
// Game with ID: uBjkXQG2z5rv8yctQctd


const displayData = async ()=> {
    const data = await Api.getScores();
    Api.renderScore(data)
}
displayData()
document.getElementById('form').addEventListener('submit', async(e)=>{
    e.preventDefault();
    //const execute=document.getElementById('form')
   const name =document.getElementById('name')
   const score = document.getElementById('score')
    const data ={
        user: name.value,
        score: score.value,
    }
    await Api.addScore(data)
    form.reset()
})

document.getElementById('refresh').addEventListener('click', async()=>{
    displayData()
})
