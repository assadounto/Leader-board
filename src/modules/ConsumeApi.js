const myUrl= 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/uBjkXQG2z5rv8yctQctd/scores/';

  export default class Api {

    static getScores= async () => {
           const { result } = await fetch(myUrl).then(response => response.json())
           .catch((error)=> new Error(error)
           );
           return result
    }

    static addScore = async (score)=> {
        await fetch(myUrl, {
            method: 'POST',
            body:JSON.stringify(score),
            headers:{'Content-type': 'application/json; charset=UTF-8'},
        })
    }
    static renderScore = async (scores) => {
            const scoreArea = document.querySelector('.scores');
            scoreArea.innerHTML='';
            scores.forEach(element => {
                const cont = document.createElement('div')
                cont.classList.add('cont')
                const name = document.createElement('div');
                const score = document.createElement('div');
                name.textContent= element.user;
                score.textContent=element.score;
                [name,score].forEach(element=> cont.appendChild(element));
                scoreArea.appendChild(cont)
            });
        }
    }
