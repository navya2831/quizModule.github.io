var questions = [
    {
      question:"what colour is green",
      options: [ "red","blue","green","brown" ],
      right_answer: "green"
    },
    {
      question:"what is the full form of HTML",
      options: [ "high markup language",
                  "hyper text mockup language",
                  "hyper text markup language",
                  "none of the above" 
                ],
      right_answer: "hyper text markup language"
    },
    {
      question:"html is programming language",
      options: [ "yes","no"],
      right_answer: "no"
    },
    {
      question:"There are no array in js",
      options: [ "yes","no","strictly no", "maybe" ],
      right_answer: "yes"
    },
     {
      question:"Chocolate or Waffle",
      options: [ "chocolate","waffle","both", "none" ],
      right_answer: "chocolate"
    },
    {
      question:"Car or bike?",
      options: [ "bike", "car" ],
      right_answer: "car"
    },
    {
      question:"Gym or walk?",
      options: [ "gym","walk","both", "sleep"],
      right_answer: "sleep"
    },
  ];

var question_container=document.getElementById("question_container");
var title=document.getElementById("title");//question
var options=document.getElementById("option");// question ke options
var result=document.getElementById("result");//correct or incorrect
var submit=document.getElementById("submit");
var next=document.getElementById("next");
var fieldset=document.getElementById("fi");
var answersheet=document.getElementById("answersheet");
var restart=document.getElementById("restart");

restart.style.display="none";


var score=0;
var current_question=0;
function createquestion()
{
  fieldset.removeAttribute("disabled");
  restart.style.display="none";
  next.style.display="none";
  submit.style.display="block";
  title.innerHTML=questions[current_question].question;

  questions[current_question].options.forEach(function(option)
  {

    var li=document.createElement("li");

    var radio=document.createElement("input");
    var label_for_radio=document.createElement("label");
    radio.setAttribute("type","radio");
    radio.setAttribute("name","opo");
    label_for_radio.innerHTML=option;

    li.appendChild(radio);
    li.appendChild(label_for_radio);
   
      options.appendChild(li);

  });


}
createquestion();


submit.addEventListener("click",function()
{
  fieldset.setAttribute("disabled","");
  var flag=0;
  var selected_option="";
  var options=document.getElementsByName("opo");
  options.forEach(function(option,index)
  {
    if(option.checked)
    {
      flag=1;
      selected_option=index;
    }
  })
  if(flag==0)
  {
    alert("pls select an option");
  }
  else
  {
    if(questions[current_question].right_answer===questions[current_question].options[selected_option])
    {
      score++;
    result.innerHTML="correct";
    result.classList.add("correct");
    }
    else
    {
      result.innerHTML="incorrect";
      result.classList.add("incorrect");
    }
    submit.style.display="none";
    next.style.display="block";


  }

});



next.addEventListener("click",function()
{
  options.innerHTML="";
  result.innerHTML="";
  result.classList.remove("correct");
  result.classList.remove("incorrect");

  current_question++;
  if(!questions[current_question])
  {
    console.log("hello");
    
  show_answer_sheet();
  }
  else
  {
    console.log(questions[current_question].question);
  createquestion();
    
  }

});

function show_answer_sheet()
{
 question_container.style.display="none";
  next.style.display="none";
  restart.style.display="block";
 answersheet.style.display="block";
  document.getElementById("heading").innerHTML="SCORE : "+score;
   var ol=document.createElement("ol");

    questions.forEach(function(question)
    {
var list_item=document.createElement("li");

var label=document.createElement("label");
label.innerHTML=question.question +" - " ;
var label2=document.createElement("label");
label2.setAttribute("id","label2");
label2.innerHTML=question.right_answer;

list_item.appendChild(label);
list_item.appendChild(label2);
var br=document.createElement("br");
ol.appendChild(list_item);
ol.appendChild(br);


    });
    answersheet.appendChild(ol);

   restart.addEventListener("click",function()
    {
       // location.reload();
        current_question=0;
        score=0;
        console.log(questions[current_question].question)
        questions[current_question].options.forEach(function(option)
        {
          console.log(option);
        })
        answersheet.style.display="none";
        question_container.style.display="block";
        createquestion();
     }) 



}