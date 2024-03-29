let $ = document
let cg = console.log

let sectionElem = $.querySelector("#home")
let inputElem = $.querySelector("#input-field")
let colorsBox = $.querySelectorAll(".color-box")
let btnSave = $.querySelector("#btn-save")
let btnDelete = $.querySelector("#btn-delete")
let list = $.querySelector("#listed")
let newNoteDiv
let newNoteP


colorsBox.forEach(function(colorsBox){
  colorsBox.addEventListener('click',function(event){
    let mainColor = event.target.style.backgroundColor
    inputElem.style.backgroundColor = mainColor
  })
})

btnDelete.addEventListener('click',function(){
    inputElem.value = ''
    inputElem.style.backgroundColor = "#fff"
})

btnSave.addEventListener('click',function(){
    if(inputElem.value){
        newNoteDiv = $.createElement("div")
        newNoteDiv.className = "card shadow-sm rounded"
        newNoteP = $.createElement("p")
        newNoteP.className = "card-text p-3"
        newNoteP.innerHTML = inputElem.value
        newNoteDiv.append(newNoteP)
        list.append(newNoteDiv)
        let inputBg = inputElem.style.backgroundColor
        newNoteDiv.style.backgroundColor = inputBg
    
        inputElem.value = ''
        inputElem.style.backgroundColor = "#fff"
        
        newNoteDiv.addEventListener('click',removeNote)
    }     

})
function removeNote(event){
event.target.parentElement.remove()
}
    inputElem.addEventListener('keyup',function(event){
        if(event.key == "Enter" && inputElem.value){
            newNoteDiv = $.createElement("div")
            newNoteDiv.className = "card shadow-sm rounded"
            newNoteP = $.createElement("p")
            newNoteP.className = "card-text p-3"
            newNoteP.innerHTML = inputElem.value
            newNoteDiv.append(newNoteP)
            list.append(newNoteDiv)
            let inputBg = inputElem.style.backgroundColor
            newNoteDiv.style.backgroundColor = inputBg
           
            inputElem.value = ''
            inputElem.style.backgroundColor = "#fff"

            newNoteDiv.addEventListener('click',removeNote)
                
        }
    })







