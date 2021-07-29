const questionData = [
    {
        Question : 'What is the full meaning of XML?',
        a : 'Extensible mark-up language',
        b : 'Extension mark-up language',
        c : 'External mark-up language',
        d : 'All of the above',
        correct: 'a'
    },

    {
        Question : 'What\'s the basic knowledge for coding?',
        a : 'xml, python, css',
        b : 'javascripts, php, html',
        c : 'html css, bootstrap',
        d : 'css,bootstarp and xml',
        correct : 'c'
    },

    {
        Question: 'Javascript was introduce in what year?',
        a : '2004',
        b : '1996',
        c : '2015',
        d : '1995',
        correct : 'd'
    },

    {
        Question: 'All these are css framework Expect',
        a : 'skeleton',
        b : 'foundation',
        c : 'materialize',
        d : 'All of the above',
        correct : 'd'
    },

    {
        Question: 'Who created the first Apple system?',
        a : 'steve wozniak',
        b : 'carlos job',
        c : 'grace hopper',
        d : 'alan turing',
        correct : 'a'
    },

    {
        Question: 'Best way to output javascrip is?',
        a : 'document.write()',
        b : 'console.log()',
        c : 'document.echo()',
        d : 'document.innerhtml()',
        correct : 'b'
    },

    {
        Question: 'All are reference type in javascripts expect',
        a : 'object',
        b : 'symbol',
        c : 'string',
        d : 'null',
        correct : 'c'
    },

    {
        Question: 'Javascripts basically is used for?',
        a : 'mobile apps',
        b : 'games and desktop apps',
        c : 'web apps and dynamic web pages',
        d : 'none of the above',
        correct : 'c'
    },

    {
        Question : 'Which is known for client-side',
        a : 'php',
        b : 'javascripts',
        c : 'java',
        d : 'html and css',
        correct : 'b'
    },

    {
        Question: 'Choose the odd one among all',
        a : 'php',
        b : 'javascripts',
        c : 'html',
        d : 'css',
        correct : 'a'
    },

];


//showalert 
class Alert{
    constructor(){
    }
    showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        //insert
        const container = document.querySelector('.container');
        const card  = document.querySelector('.card');

        container.insertBefore(div, card);
        //settimeout
        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 2000);
    }
}

// getting the Dom elements
const answerEl = document.querySelectorAll('.answer');
const container = document.querySelector('.container');
const question = document.getElementById('question');
const answer_a = document.getElementById('answer_a');
const answer_b = document.getElementById('answer_b');
const answer_c = document.getElementById('answer_c');
const answer_d = document.getElementById('answer_d');
const button = document.querySelector('.button');

//initializing the questiondata
let currentQuestion = 0;


Math.random(loadQuiz());


//laoding Question
function loadQuiz(){

    UnselectRadio();

    const currentQuizData = questionData[currentQuestion];

    question.textContent = currentQuizData.Question;

    answer_a.textContent = currentQuizData.a;
    answer_b.textContent = currentQuizData.b;
    answer_c.textContent = currentQuizData.c;
    answer_d.textContent = currentQuizData.d;
};



//getting the answers
function getAnswers(){
    let answer;

    answerEl.forEach(answers =>{
       if(answers.checked){
         answer = answers.id;
       }
    })

    return answer;
}



//deselecting the radio button
function UnselectRadio(){
    answerEl.forEach(answers =>{
        if(answers.checked = false){
        }
     })
}


//play Again refresh button
button.addEventListener('click', ()=>{

    //Init alert
    const alert = new Alert;

   const answer = getAnswers();

   //console.log(answer)

    if(answer){

        if(answer === questionData[currentQuestion].correct){
            alert.showAlert('The answer is Correct!','alert-success float-right  mt-3 w-50');
         }else{
            alert.showAlert('The answer is InCorrect!','alert-danger float-left  mt-3 w-50');
         }

        currentQuestion++;

     if(currentQuestion < questionData.length){
        loadQuiz();

    }else{
       const alert = new Alert;
       alert.showAlert('You\'re Done!');

        button.value = 'Play-Again';
        button.id += 'Play-Again';
    }

    }
    


});

//listening for the play Again button
container.addEventListener('mousedown', (e)=>{
    if(e.target.id === 'Play-Again'){
        window.location.reload();
    }
});






