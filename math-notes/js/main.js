let questions = [];


// 当前筛选状态

let currentChapter = "全部";

let currentCategory = "全部";




// 加载题库

fetch("data/questions.json")

.then(res=>res.json())

.then(data=>{


questions = data;


// 初始显示

applyFilter();

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



// 重新渲染公式

renderMath();


}






// =====================
// 章节筛选
// =====================


function filterChapter(chapter){

console.log("章节点击:", chapter);


currentChapter = chapter;


applyFilter();


}





// =====================
// 分类筛选
// =====================


function filterCategory(type){


currentCategory = type;


applyFilter();


}






// =====================
// 综合筛选
// =====================


function applyFilter(){


let result = questions.filter(q=>{


// 分类判断

let categoryPass =
currentCategory==="全部"
||
q.分类===currentCategory;



// 章节判断
// 目前 JSON 没有章节字段
// 所以不通过

let chapterPass =
currentChapter==="全部"
||
q.章节===currentChapter;



return categoryPass && chapterPass;


});



show(result);


}






// =====================
// KaTeX渲染
// =====================


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
