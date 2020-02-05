import { animationBind } from "./animations.js"

export const addRoutine = (e) => {
  const targetElement = $(".new-routine")
  const timeStamp = Date.parse(new Date().toString())

  const routineElement = `
    <div 
      id="routine-${timeStamp}"
      class="border-bottom border-top mb-3 d-flex-center routine-creating animated bounceInDown faster"
    >
      <div class="margin-r-10 no-padding-x display-font add-reward-icon-div border-right clickable">
        <img class="icon-sizer-ui add-reward-icon img-fluid" src="assets/images/ui/gems.svg" />
      </div>

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

      <div 
        class="margin-l-10 no-padding-x display-font cancel-icon-div border-left clickable"
        onclick="destroyRoutine(event)"
      >
        <img class="icon-sizer-ui cancel-icon img-fluid" src="assets/images/ui/cancel.svg" />
      </div>
    </div>
  `

  $(targetElement).before(routineElement)

  window.localStorage.setItem(`routine-${timeStamp}`, JSON.stringify({
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
  const drop1 = localStorageObject["drop-1-" + timeStamp] || ""
  const drop1Items = drop1.split(":SEPARATOR:")
  const drop1Content = `<img 
        id="${drop1Items[2]}" 
        draggable="true" ondragstart="dragStart(event)"
        class="${drop1Items[0]}" src="${drop1Items[1]}" 
        />`

  const drop2 = localStorageObject["drop-2-" + timeStamp] || ""
  const drop2Items = drop2.split(":SEPARATOR:")
  const drop2Content = `<img 
        id="${drop2Items[2]}" 
        draggable="true" ondragstart="dragStart(event)"
        class="${drop2Items[0]}" src="${drop2Items[1]}" 
        />`

  const drop3 = localStorageObject["drop-3-" + timeStamp] || ""
  const drop3Items = drop3.split(":SEPARATOR:")
  const drop3Content = `<img 
        id="${drop3Items[2]}" 
        draggable="true" ondragstart="dragStart(event)"
        class="${drop3Items[0]}" src="${drop3Items[1]}" 
        />`

  const drop4 = localStorageObject["drop-4-" + timeStamp] || ""
  const drop4Items = drop4.split(":SEPARATOR:")
  const drop4Content = `<img 
        id="${drop4Items[2]}" 
        draggable="true" ondragstart="dragStart(event)"
        class="${drop4Items[0]}" src="${drop4Items[1]}" 
        />`

  const drop5 = localStorageObject["drop-5-" + timeStamp] || ""
  const drop5Items = drop5.split(":SEPARATOR:")
  const drop5Content = `<img 
        id="${drop5Items[2]}" 
        draggable="true" ondragstart="dragStart(event)"
        class="${drop5Items[0]}" src="${drop5Items[1]}" 
        />`
  
  const routineElement = `
    <div 
      id="routine-${timeStamp}"
      class="border-bottom border-top mb-3 d-flex-center routine-creating animated bounceInDown faster"
    >
      <div 
        id="reward-${timeStamp}"
        class="margin-r-10 no-padding-x display-font add-reward-icon-div border-right clickable"
        onclick="chooseReward(event)"
      >
        <img class="icon-sizer-ui add-reward-icon img-fluid" src="assets/images/ui/gems.svg" />
      </div>

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
      <div 
        class="margin-l-10 no-padding-x display-font cancel-icon-div border-left clickable"
        onclick="destroyRoutine(event)"
      >
        <img class="icon-sizer-ui cancel-icon img-fluid" src="assets/images/ui/cancel.svg" />
      </div>
    </div>
  `

  $(targetElement).before(routineElement)
  animationBind("add-reward")
}

const loadUsedRoutine = (timeStamp) => {
  const targetElement = $(".use-page-placer")

  const localStorageObject = JSON.parse(window.localStorage.getItem(`routine-${timeStamp}`))
  const drop1 = localStorageObject["drop-1-" + timeStamp] || ""
  const drop1Items = drop1.split(":SEPARATOR:")
  const drop1Content = `<img id="${drop1Items[2]}" class="${drop1Items[0]}" src="${drop1Items[1]}" />`

  const drop2 = localStorageObject["drop-2-" + timeStamp] || ""
  const drop2Items = drop2.split(":SEPARATOR:")
  const drop2Content = `<img id="${drop2Items[2]}" class="${drop2Items[0]}" src="${drop2Items[1]}" />`

  const drop3 = localStorageObject["drop-3-" + timeStamp] || ""
  const drop3Items = drop3.split(":SEPARATOR:")
  const drop3Content = `<img id="${drop3Items[2]}" class="${drop3Items[0]}" src="${drop3Items[1]}" />`

  const drop4 = localStorageObject["drop-4-" + timeStamp] || ""
  const drop4Items = drop4.split(":SEPARATOR:")
  const drop4Content = `<img id="${drop4Items[2]}" class="${drop4Items[0]}" src="${drop4Items[1]}" />`

  const drop5 = localStorageObject["drop-5-" + timeStamp] || ""
  const drop5Items = drop5.split(":SEPARATOR:")
  const drop5Content = `<img id="${drop5Items[2]}" class="${drop5Items[0]}" src="${drop5Items[1]}" />`

  const routineElement = `
    <div 
      id="use-routine-${timeStamp}"
      class="border-bottom border-top mb-3 d-flex-center routine-creating animated bounceInDown faster"
    >
      <div 
        id="use-reward-${timeStamp}"
        class="margin-r-10 no-padding-x display-font add-reward-icon-div border-right clickable"
      >
        <img class="icon-sizer-ui add-reward-icon img-fluid" src="assets/images/ui/gems.svg" />
      </div>

      <div class="no-padding ${drop1 === "" ? "" : "remove-border"} grey-icon-div">${drop1 === "" ? "" : drop1Content}</div>
      <div class="no-padding ${drop2 === "" ? "" : "remove-border"} grey-icon-div" >${drop2 === "" ? "" : drop2Content}</div>
      <div class="no-padding ${drop3 === "" ? "" : "remove-border"} grey-icon-div" >${drop3 === "" ? "" : drop3Content}</div>
      <div class="no-padding ${drop4 === "" ? "" : "remove-border"} grey-icon-div" >${drop4 === "" ? "" : drop4Content}</div>
      <div class="no-padding ${drop5 === "" ? "" : "remove-border"} grey-icon-div" >${drop5 === "" ? "" : drop5Content}</div>
    </div>
  `

  $(targetElement).before(routineElement)
  animationBind("add-reward")
}

const destroyRoutine = (e) => {
  const routineId = $(e.target).parent().parent().attr('id')
  window.localStorage.removeItem(routineId)
  $(e.target).parent().parent().remove()
}

const chooseReward = (e) => {
  console.log("Choosing reward!")
  console.log($(e.target).parent().parent().attr('id'))
  const timeStamp = $(e.target).parent().parent().attr('id').split("-")[1]
  
  // $(e.target).parent().parent().addClass("pushed-aside")

  // $(e.target).after(`<div class="caret"></div>`)
}

const generateLocalStorageRoutines = () => {
  Object.keys(localStorage).forEach(localStorageKey => {
    if (localStorageKey.toString().startsWith("routine-")) {
      loadRoutine(localStorageKey.split("-")[1])
      loadUsedRoutine(localStorageKey.split("-")[1])
    } // else, ignored key
  })
}

window.addRoutine = addRoutine
window.destroyRoutine = destroyRoutine
window.chooseReward = chooseReward

generateLocalStorageRoutines()

export default {
  addRoutine,
  destroyRoutine
}