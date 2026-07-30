let questions=[];



fetch("data/questions.json")

.then(res=>res.json())

.then(data=>{

questions=data;

show(questions);


});




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



<p>

${q.题目}

</p>


<div>

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


}





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
