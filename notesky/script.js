var overlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".popupbox")
var popupbutton=document.getElementById("onee")

function addtext()
{
    overlay.style.display="block"
    popupbox.style.display="block"
}

var remove=document.getElementById("remove")
remove.addEventListener("click",function(event)
{
    event.preventDefault()
    overlay.style.display="none"
    popupbox.style.display="none"
})

var container=document.querySelector(".container")
var addbutton=document.getElementById("addbutton")
var inputone=document.getElementById("inputone")
var inputtwo=document.getElementById("inputtwo")
var inputthree=document.getElementById("inputthree")

addbutton.addEventListener("click",function(event)
{
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","containerbox")
    div.innerHTML=`<h3>${inputone.value}</h3>
    <h5>${inputtwo.value}</h5>
    <p>${inputthree.value}</p>
    <button onclick="deletebox(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none"
    popupbox.style.display="none"
})

function deletebox(event)
{
    event.target.parentElement.remove()
}