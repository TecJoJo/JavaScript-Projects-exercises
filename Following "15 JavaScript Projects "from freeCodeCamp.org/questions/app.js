//line from 5 to 13 is my own solution which i figured it out without
//whatching the tutorialXD 



// const questionBtns = document.querySelectorAll(".question-btn")


// questionBtns.forEach(function(questionbtn){
//     questionbtn.addEventListener("click",function(event){
//         const questionContainer = event.currentTarget.parentNode.parentNode
//         questionContainer.classList.toggle("show-text")
//     })
// })

const questions = document.querySelectorAll(".question")

questions.forEach(function(question){
    const btn = question.querySelector(".question-btn")
    btn.addEventListener("click",function(){
        questions.forEach(function(item){
            if(item !==question){
                item.classList.remove("show-text")
            }
        })

        question.classList.toggle("show-text")
    })
})

