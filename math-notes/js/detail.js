let id=
new URLSearchParams(location.search)
.get("id");



fetch("data/notes.json")

.then(res=>res.json())

.then(notes=>{


let n=
notes.find(
x=>x.id==id
);



document.title=n.title;


title.innerHTML=n.title;


question.innerHTML=n.question;


hard.innerHTML=n.hard;


answer.innerHTML=
n.answer.replace(/\n/g,"<br>");


analysis.innerHTML=n.analysis;



});