let questions = [];


// 加载题库

fetch("data/questions.json")

.then(res=>res.json())

.then(data=>{


questions = data;


// 初始显示全部题目

show(questions);


// 渲染数学公式

renderMath();


})

.catch(err=>{

console.error("题库加载失败:",err);

});




// 显示卡片

function show(data){


let box=document.getElementById("list");


box.innerHTML="";



data.forEach(q=>{


let tags=q.标签
.map(t=>
`
<span class="tag">
${t}
</span>
`
)
.join("");



box.innerHTML+=`

<div class="card">


<div class="category">

${q.分类}

</div>



<h2>

${q.标题}

</h2>



<p class="question">

${q.题目}

</p>



<div class="tags">

${tags}

</div>



<p class="level">

难度：
${q.难度}

</p>



<a href="detail.html?id=${q.id}">

查看解析 →

</a>



</div>

`;

});



// 每次重新生成卡片后重新渲染公式

renderMath();


}





// 分类筛选

function filterCategory(type){


if(type==="全部"){

show(questions);

}

else{


show(

questions.filter(

q=>q.分类===type

)

);


}


}




// KaTeX渲染

function renderMath(){


if(typeof renderMathInElement==="undefined"){

return;

}



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

],


throwOnError:false


});


}
