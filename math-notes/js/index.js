let notes=[];


fetch("data/notes.json")

.then(res=>res.json())

.then(data=>{

notes=data;

showNotes(notes);

});



function showNotes(list){


let box=document.getElementById("cards");


box.innerHTML="";


list.forEach(note=>{


let tags=
note.tags
.map(t=>`
<span class="tag">${t}</span>
`)
.join("");



box.innerHTML+=`

<div class="card">

<div class="category">
${note.category}
</div>


<h2>
${note.title}
</h2>


<p>
${note.question}
</p>


<div>
${tags}
</div>


<p class="star">
难度：
${"★".repeat(note.difficulty)}
</p>


<a href="note.html?id=${note.id}">
查看解析 →
</a>


</div>


`;

});


}



function filterNotes(type){


if(type==="全部"){

showNotes(notes);

return;

}


showNotes(
notes.filter(
n=>n.category===type
)
);


}