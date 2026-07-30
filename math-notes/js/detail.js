let id =
new URLSearchParams(location.search)
.get("id");


fetch("data/questions.json")

.then(res=>res.json())

.then(data=>{

let q=data.find(
item=>item.id==id
);


document.title=q.标题;


document.getElementById("title")
.innerHTML=q.标题;


document.getElementById("question")
.innerHTML=q.题目;


document.getElementById("hard")
.innerHTML=q.难点.replace(/\n/g,"<br>");


document.getElementById("answer")
.innerHTML=q.答案.replace(/\n/g,"<br>");


document.getElementById("analysis")
.innerHTML=q.思路.replace(/\n/g,"<br>");


// 所有内容加载完成后，再渲染公式
renderMath();


});


function renderMath(){

renderMathInElement(document.body,{

delimiters:[

{
left:"$$",
right:"$$",
display:true
},

{
left:"$",
right:"$",
display:false
}

]

});

}
