

export const dragStart = (e) => {
  e.dataTransfer.setData("text", e.target.id);
}

export const dragRewardStart = (e) => {
  e.dataTransfer.setData("text", e.target.id);
}

export const dragDrop = (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text");

  let copy = null
  let movedAction = false

  const dragId = $(`#${data}`).parent().attr('id')

  if (!dragId.startsWith("drop-")) {
    // moving from choice of actions to routine
    copy = document.getElementById(data).cloneNode(true)
    copy.id = copy.id + Date.parse((new Date()).toString())
  } else {
    // moving from routine to routine
    copy = document.getElementById(data)
    movedAction = true
  }

  

  let routineId = $(e.target).parent().attr('id')
  let dropId = $(e.target).attr('id')

  if (routineId.startsWith("drop-")) {
    routineId = $(`#${routineId}`).parent().attr('id')
  }

  if (dropId.startsWith("dragRoutine")) {
    dropId = $(`#${dropId}`).parent().attr('id')
  }
  

  if (copy.id.startsWith("dragRoutine")) {
    if ($(e.target).attr('id').startsWith("drop-")) {
      $(e.target).addClass("remove-border")
    }

    const localStorageObj = JSON.parse(window.localStorage.getItem(routineId))

    localStorageObj[dropId] = $(copy).attr('class') + ":SEPARATOR:" + $(copy).attr('src') + ":SEPARATOR:" + $(copy).attr('id') + ":SEPARATOR:" + ($(e.target).attr('alt') || "")

    if (movedAction) {
      const dragRoutineId = $(`#${data}`).parent().parent().attr('id')

      if (dragRoutineId === routineId) {
        localStorageObj[dragId] = ""
      } else {
        const lSOld = JSON.parse(window.localStorage.getItem(dragRoutineId))
        lSOld[dragId] = ""

        window.localStorage.setItem(dragRoutineId, JSON.stringify(lSOld))
      }
    }

    $(`#${dragId}`).removeClass("remove-border")

    window.localStorage.setItem(routineId, JSON.stringify(localStorageObj))

    if ($(e.target).attr('id').startsWith("drop-")) {
      $(e.target).html(copy);
    } else {
      $(e.target).parent().html(copy);
    }
    
  }


  
}

export const dragRewardDrop = (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text");

  const copy = document.getElementById(data).cloneNode(true)
  copy.id = copy.id + Date.parse((new Date()).toString())

  const routineId = $(e.currentTarget).parent().attr('id');

  const dropId = $(e.currentTarget).attr('id')

  

  if (copy.id.startsWith("dragReward")) {
    $(`#${dropId}`).addClass("remove-border")
    const localStorageObj = JSON.parse(window.localStorage.getItem(routineId))

    localStorageObj[dropId] = $(copy).attr('class') + ":SEPARATOR:" + $(copy).attr('src') + ":SEPARATOR:" + $(copy).attr('id')

    window.localStorage.setItem(routineId, JSON.stringify(localStorageObj))

    $(e.currentTarget).html(copy);
  }
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