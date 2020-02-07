import { animationBind } from "./animations.js"

export const addRoutine = (e) => {
  const targetElement = $(".new-routine")
  const timeStamp = Date.parse(new Date().toString())

  const routineElement = `
    <div 
      id="routine-${timeStamp}"
      class="border-bottom border-top mb-3 d-flex-center routine-creating animated bounceInDown faster"
    >
      <div id="reward-${timeStamp}" class="margin-r-10 add-reward-icon no-padding display-font add-reward-icon-div" ondragover="allowDrop(event)" ondrop="dragRewardDrop(event)">
      </div>
      <div class="border-left no-padding mr-2 ml-2"></div>
      <div 
        id="drop-1-${timeStamp}"
        class="no-padding grey-icon-div" ondragover="allowDrop(event)" ondrop="dragDrop(event)"
      ></div>
      <div 
        id="drop-2-${timeStamp}"
        class="no-padding grey-icon-div" ondragover="allowDrop(event)" ondrop="dragDrop(event)"
      ></div>
      <div 
        id="drop-3-${timeStamp}"
        class="no-padding grey-icon-div" ondragover="allowDrop(event)" ondrop="dragDrop(event)"
      ></div>
      <div 
        id="drop-4-${timeStamp}"
        class="no-padding grey-icon-div" ondragover="allowDrop(event)" ondrop="dragDrop(event)"
      ></div>
      <div 
        id="drop-5-${timeStamp}"
        class="no-padding grey-icon-div" ondragover="allowDrop(event)" ondrop="dragDrop(event)"
      ></div>

      <div class="border-left no-padding mr-2 ml-2"></div>

      <div 
        class="margin-l-10 no-padding display-font cancel-icon-div"
      >
        <img class="icon-sizer-ui cancel-icon img-fluid clickable" src="assets/images/ui/cancel.svg" onclick="destroyRoutine(event)" />
      </div>
    </div>
  `

  $(targetElement).before(routineElement)

  window.localStorage.setItem(`routine-${timeStamp}`, JSON.stringify({
    [`reward-${timeStamp}`]: "",
    [`drop-1-${timeStamp}`]: "",
    [`drop-2-${timeStamp}`]: "",
    [`drop-3-${timeStamp}`]: "",
    [`drop-4-${timeStamp}`]: "",
    [`drop-5-${timeStamp}`]: ""
  }))

  animationBind("add-reward")
  // animationBind("cancel")

  // $(targetElement).addClass("routine-creating")
}

const loadRoutine = (timeStamp) => {
  const targetElement = $(".new-routine")

  const localStorageObject = JSON.parse(window.localStorage.getItem(`routine-${timeStamp}`))

  const reward = localStorageObject["reward-" + timeStamp] || ""
  const rewardItems = reward.split(":SEPARATOR:")
  const rewardContent = `<img 
        id="${rewardItems[2]}" 
        class="${rewardItems[0]}" src="${rewardItems[1]}" 
        alt="assets/images/rewards/ribbon.svg"
        />`

  const drop1 = localStorageObject["drop-1-" + timeStamp] || ""
  const drop1Items = drop1.split(":SEPARATOR:")
  const drop1Content = `<img 
        id="${drop1Items[2]}" 
        draggable="true" ondragstart="dragStart(event)"
        class="${drop1Items[0]}" src="${drop1Items[1] !== "assets/images/rewards/ribbon.svg" ? drop1Items[1] : drop1Items[3]}" 
        alt="assets/images/rewards/ribbon.svg"
        />`

  const drop2 = localStorageObject["drop-2-" + timeStamp] || ""
  const drop2Items = drop2.split(":SEPARATOR:")
  const drop2Content = `<img 
        id="${drop2Items[2]}" 
        draggable="true" ondragstart="dragStart(event)"
        class="${drop2Items[0]}" src="${drop2Items[1] !== "assets/images/rewards/ribbon.svg" ? drop2Items[1] : drop2Items[3]}" 
        alt="assets/images/rewards/ribbon.svg"
        />`

  const drop3 = localStorageObject["drop-3-" + timeStamp] || ""
  const drop3Items = drop3.split(":SEPARATOR:")
  const drop3Content = `<img 
        id="${drop3Items[2]}" 
        draggable="true" ondragstart="dragStart(event)"
        class="${drop3Items[0]}" src="${drop3Items[1] !== "assets/images/rewards/ribbon.svg" ? drop3Items[1] : drop3Items[3]}" 
        alt="assets/images/rewards/ribbon.svg"
        />`

  const drop4 = localStorageObject["drop-4-" + timeStamp] || ""
  const drop4Items = drop4.split(":SEPARATOR:")
  const drop4Content = `<img 
        id="${drop4Items[2]}" 
        draggable="true" ondragstart="dragStart(event)"
        class="${drop4Items[0]}" src="${drop4Items[1] !== "assets/images/rewards/ribbon.svg" ? drop4Items[1] : drop4Items[3]}" 
        alt="assets/images/rewards/ribbon.svg"
        />`

  const drop5 = localStorageObject["drop-5-" + timeStamp] || ""
  const drop5Items = drop5.split(":SEPARATOR:")
  const drop5Content = `<img 
        id="${drop5Items[2]}" 
        draggable="true" ondragstart="dragStart(event)"
        class="${drop5Items[0]}" src="${drop5Items[1] !== "assets/images/rewards/ribbon.svg" ? drop5Items[1] : drop5Items[3]}" 
        alt="assets/images/rewards/ribbon.svg"
        />`
  
  const routineElement = `
    <div 
      id="routine-${timeStamp}"
      class="border-bottom border-top mb-3 d-flex-center routine-creating animated bounceInDown faster"
    >
      <div 
        id="reward-${timeStamp}"
        class="no-padding  ${reward === "" ? "" : "remove-border"} display-font add-reward-icon add-reward-icon-div" ondragover="allowDrop(event)" ondrop="dragRewardDrop(event)"
      >${reward === "" ? '' : rewardContent}</div>
      <div class="border-left no-padding mr-2 ml-2"></div>
      <div 
        id="drop-1-${timeStamp}"
        class="no-padding ${drop1 === "" ? "" : "remove-border"} grey-icon-div" ondragover="allowDrop(event)" ondrop="dragDrop(event)"
      >${drop1 === "" ? "" : drop1Content}</div>
      <div 
        id="drop-2-${timeStamp}"
        class="no-padding ${drop2 === "" ? "" : "remove-border"} grey-icon-div" ondragover="allowDrop(event)" ondrop="dragDrop(event)"
      >${drop2 === "" ? "" : drop2Content}</div>
      <div 
        id="drop-3-${timeStamp}"
        class="no-padding ${drop3 === "" ? "" : "remove-border"} grey-icon-div" ondragover="allowDrop(event)" ondrop="dragDrop(event)"
      >${drop3 === "" ? "" : drop3Content}</div>
      <div 
        id="drop-4-${timeStamp}"
        class="no-padding ${drop4 === "" ? "" : "remove-border"} grey-icon-div" ondragover="allowDrop(event)" ondrop="dragDrop(event)"
      >${drop4 === "" ? "" : drop4Content}</div>
      <div 
        id="drop-5-${timeStamp}"
        class="no-padding ${drop5 === "" ? "" : "remove-border"} grey-icon-div" ondragover="allowDrop(event)" ondrop="dragDrop(event)"
      >${drop5 === "" ? "" : drop5Content}</div>

      <div class="border-left no-padding mr-2 ml-2"></div>

      <div 
        class="margin-l-10 no-padding display-font cancel-icon-div"
      >
        <img class="icon-sizer-ui cancel-icon img-fluid clickable" src="assets/images/ui/cancel.svg" onclick="destroyRoutine(event)" />
      </div>
    </div>
  `

  $(targetElement).before(routineElement)
  animationBind("add-reward")
}

const loadUsedRoutine = (timeStamp) => {
  const targetElement = $(".use-page-placer")

  const localStorageObject = JSON.parse(window.localStorage.getItem(`routine-${timeStamp}`))

  const reward = localStorageObject["reward-" + timeStamp] || ""
  const rewardItems = reward.split(":SEPARATOR:")
  const rewardContent = `<img 
        id="${rewardItems[2]}" 
        class="${rewardItems[0]}" 
        src="${rewardItems[1]}" 
        />`

  const drop1 = localStorageObject["drop-1-" + timeStamp] || ""
  const drop1Items = drop1.split(":SEPARATOR:")
  const drop1Content = `<img id="${drop1Items[2]}" class="${drop1Items[0]}" src="${drop1Items[1]}" alt="${drop1Items[3]}" />`

  const drop2 = localStorageObject["drop-2-" + timeStamp] || ""
  const drop2Items = drop2.split(":SEPARATOR:")
  const drop2Content = `<img id="${drop2Items[2]}" class="${drop2Items[0]}" src="${drop2Items[1]}" alt="${drop2Items[3]}" />`

  const drop3 = localStorageObject["drop-3-" + timeStamp] || ""
  const drop3Items = drop3.split(":SEPARATOR:")
  const drop3Content = `<img id="${drop3Items[2]}" class="${drop3Items[0]}" src="${drop3Items[1]}" alt="${drop3Items[3]}" />`

  const drop4 = localStorageObject["drop-4-" + timeStamp] || ""
  const drop4Items = drop4.split(":SEPARATOR:")

  const drop4Content = `<img id="${drop4Items[2]}" class="${drop4Items[0]}" src="${drop4Items[1]}" alt="${drop4Items[3]}" />`

  const drop5 = localStorageObject["drop-5-" + timeStamp] || ""
  const drop5Items = drop5.split(":SEPARATOR:")
  const drop5Content = `<img id="${drop5Items[2]}" class="${drop5Items[0]}" src="${drop5Items[1]}" alt="${drop5Items[3]}" />`

  const routineElement = `
    <div 
      id="use-routine-${timeStamp}"
      class="border-bottom border-top mb-3 d-flex-center routine-creating"
    >
      <div
        id="reward-${timeStamp}"
        class="margin-r-10 no-padding display-font add-reward-icon-div"
      >${reward === "" ? '' : rewardContent}</div>
      <div class="border-left no-padding mr-2 ml-2"></div>

      <div 
        id="use-drop-1-${timeStamp}"
        class="no-padding ${drop1 === "" ? "" : "remove-border"} grey-icon-div" onclick="toggleCompletion(event)">${drop1 === "" ? "" : drop1Content}</div>

      <div 
        id="use-drop-2-${timeStamp}"
        class="no-padding ${drop2 === "" ? "" : "remove-border"} grey-icon-div" onclick="toggleCompletion(event)">${drop2 === "" ? "" : drop2Content}</div>

      <div 
        id="use-drop-3-${timeStamp}"
        class="no-padding ${drop3 === "" ? "" : "remove-border"} grey-icon-div" onclick="toggleCompletion(event)">${drop3 === "" ? "" : drop3Content}</div>

      <div 
        id="use-drop-4-${timeStamp}"
        class="no-padding ${drop4 === "" ? "" : "remove-border"} grey-icon-div" onclick="toggleCompletion(event)">${drop4 === "" ? "" : drop4Content}</div>

      <div 
        id="use-drop-5-${timeStamp}"
        class="no-padding ${drop5 === "" ? "" : "remove-border"} grey-icon-div" onclick="toggleCompletion(event)">${drop5 === "" ? "" : drop5Content}</div>
    </div>
  `

  

  if (reward) {
    $(targetElement).before(routineElement)
    setRewardOpacity(`routine-${timeStamp}`)
    animationBind("add-reward")
  }
}

const destroyRoutine = (e) => {
  const routineId = $(e.target).parent().parent().attr('id')
  window.localStorage.removeItem(routineId)
  $(e.target).parent().parent().remove()
}

const generateLocalStorageRoutines = () => {
  Object.keys(localStorage).forEach(localStorageKey => {
    if (localStorageKey.toString().startsWith("routine-")) {
      loadRoutine(localStorageKey.split("-")[1])
      loadUsedRoutine(localStorageKey.split("-")[1])
    } // else, ignored key
  })
}

export const generateLocalStorageRoutinesUsePage = () => {
  $("#use-page-id").html(`<div class="display-font no-padding d-flex-center">rewards earned</div>
  <div id="use-rewards-earned" class="no-padding"></div>
  <hr class="mb-0" />
  <div class="display-font d-flex-center">routines</div>
  <div class="use-page-placer no-padding"></div>`)
  Object.keys(localStorage).forEach(localStorageKey => {
    if (localStorageKey.toString().startsWith("routine-")) {
      loadUsedRoutine(localStorageKey.split("-")[1])
    } // else, ignored key
  })
}

const earnReward = (routineId) => {
  const REWARD_KEY = 'guidance-rewards'
  const timeStamp = routineId.split("-")[1]

  if (!localStorage.getItem(REWARD_KEY)) {
    localStorage.setItem(REWARD_KEY, JSON.stringify({}))
  }

  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth() + 1  
  const day = currentDate.getDate()
  const dateStamp = year + "-" + month + "-" + day

  const rewardDiv = $(`#use-${routineId}`).children(`#reward-${timeStamp}`)
  const rewardDivHTML = rewardDiv.clone().wrap("<div/>").parent().html()

  const rewardStorage = JSON.parse(localStorage.getItem(REWARD_KEY))

  if (!rewardStorage[dateStamp]) {
    rewardStorage[dateStamp] = {}
  }

  if (!rewardStorage[dateStamp][`#reward-${timeStamp}`]) {
    rewardStorage[dateStamp][`#reward-${timeStamp}`] = rewardDivHTML
  } // else, this reward has already been earned today, good job!

  localStorage.setItem(REWARD_KEY, JSON.stringify(rewardStorage))
  
}

const setRewardOpacity = (routineId) => {
  const timeStamp = routineId.split("-")[1]
  
  const completedTasks = $(`#use-${routineId}`).children().children(".completed").length
  const totalTasks = $(`#use-${routineId}`).children(".remove-border").length

  const imageTarget = $(`#use-${routineId}`).children(`#reward-${timeStamp}`).children("img")
  const currentOpacity = (completedTasks * (1.0 / totalTasks)) + 0.1

  if (currentOpacity === 1) {
    // Check that reward isn't already in rewards
    earnReward(routineId)
  }

  imageTarget.css("opacity", currentOpacity)
}

const toggleCompletion = (e) => {
  e.preventDefault()
  const alt = $(e.target).attr('alt') || 'assets/images/rewards/ribbon.svg'
  const src = $(e.target).attr('src')

  $(e.target).toggleClass("completed")
  $(e.target).attr('alt', src)
  $(e.target).attr('src', alt)

  const routineId = $(e.target).parent().parent().attr('id').slice(4)
  const timeStamp = routineId.split("-")[1]

  setRewardOpacity(routineId)

  const routineObject = JSON.parse(localStorage[routineId])
  const actionId = $(e.target).parent().attr('id').slice(4)

  const rewardObject = $(e.target).parent().parent().children(`#reward-${timeStamp}`).children('img')
  const rewardId = rewardObject.attr('id')
  
  routineObject[rewardId] = rewardObject.attr('class') + ":SEPARATOR:" + rewardObject.attr('src') + ":SEPARATOR:" + rewardObject.attr('id') + ":SEPARATOR:"

  routineObject[actionId] = $(e.target).attr('class') + ":SEPARATOR:" + $(e.target).attr('src') + ":SEPARATOR:" + $(e.target).attr('id') + ":SEPARATOR:" + $(e.target).attr('alt')

  localStorage[routineId] = JSON.stringify(routineObject)
}

window.toggleCompletion = toggleCompletion
window.addRoutine = addRoutine
window.destroyRoutine = destroyRoutine
window.generateLocalStorageRoutinesUsePage = generateLocalStorageRoutinesUsePage
// window.setRewardOpacity = setRewardOpacity
const currentDate = new Date()
const year = currentDate.getFullYear()
const month = currentDate.getMonth() + 1
const day = currentDate.getDate()
const dateStamp = year + "-" + month + "-" + day
const localStorageDateStamp = localStorage.getItem('guidance-date-stamp')
if (!localStorageDateStamp) {
  localStorage.setItem("guidance-date-stamp", dateStamp)
}

const clearCompleted = () => {
  $(".completed").toArray().forEach(completedAction => {
    const actionParentId = $(completedAction).parent().attr('id')
    if (actionParentId.startsWith('use-')) {
      toggleCompletion({ "target": $(completedAction), "preventDefault":() => {}})
    }
  })
}

if (dateStamp !== localStorageDateStamp) {
  clearCompleted()
  localStorage.setItem("guidance-date-stamp", dateStamp)
}

generateLocalStorageRoutines()

export default {
  addRoutine,
  destroyRoutine
}
