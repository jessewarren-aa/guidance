

export const dragStart = (e) => {
  e.dataTransfer.setData("text", e.target.id);
}

export const dragDrop = (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text");

  const copy = document.getElementById(data).cloneNode(true)
  copy.id = copy.id + (new Date()).toString()
  $(e.target).html(copy);

  $(e.target).addClass("remove-border")
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