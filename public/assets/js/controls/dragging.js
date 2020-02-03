

export const dragStart = (e) => {
  e.dataTransfer.setData("text", e.target.id);
}

export const dragDrop = (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text");

  const copy = document.getElementById(data).cloneNode(true)
  copy.id = copy.id + Date.parse((new Date()).toString())
  console.log("HTML DISPLAY", $(e.target).html())

  if ($(e.target).html() === "") {
    $(e.target).addClass("remove-border")
  }

  // $(e.target).remove("img");

  $(e.target).html(copy);
}

export const allowDrop = (e) => {
  e.preventDefault()
}


window.dragStart = dragStart
window.dragDrop = dragDrop
window.allowDrop = allowDrop

export default {
  dragStart,
  dragDrop,
  allowDrop
}