

export const dragStart = (e) => {
  e.dataTransfer.setData("text", e.target.id);
}

export const dragRewardStart = (e) => {
  e.dataTransfer.setData("text", e.target.id);
}

export const dragDrop = (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text");

  const copy = document.getElementById(data).cloneNode(true)
  copy.id = copy.id + Date.parse((new Date()).toString())

  if ($(e.target).html() === "") {
    $(e.target).addClass("remove-border")
  }

  const routineId = $(e.target).parent().attr('id')
  const dropId = $(e.target).attr('id')
  const localStorageObject = JSON.parse(window.localStorage.getItem(routineId))

  localStorageObject[dropId] = $(copy).attr('class') + ":SEPARATOR:" + $(copy).attr('src') + ":SEPARATOR:" + $(copy).attr('id')

  window.localStorage.setItem(routineId, JSON.stringify(localStorageObject))

  // $(e.target).remove("img");

  $(e.target).html(copy);
}

export const dragRewardDrop = (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text");

  const copy = document.getElementById(data).cloneNode(true)
  copy.id = copy.id + Date.parse((new Date()).toString())

  

  const routineId = $(e.target).parent().attr('id')
  const dropId = $(e.target).attr('id')

  console.log(routineId)
  console.log(dropId)


    $(`#${dropId}`).addClass("remove-border")
  
  console.log($(e.target))

  const localStorageObject = JSON.parse(window.localStorage.getItem(routineId))

  localStorageObject[dropId] = $(copy).attr('class') + ":SEPARATOR:" + $(copy).attr('src') + ":SEPARATOR:" + $(copy).attr('id')

  window.localStorage.setItem(routineId, JSON.stringify(localStorageObject))

  // $(e.target).remove("img");

  $(e.target).html(copy);
}

export const allowDrop = (e) => {
  e.preventDefault()
}


window.dragStart = dragStart
window.dragRewardStart = dragRewardStart
window.dragDrop = dragDrop
window.dragRewardDrop = dragRewardDrop
window.allowDrop = allowDrop

export default {
  dragStart,
  dragRewardStart,
  dragDrop,
  dragRewardDrop,
  allowDrop
}