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

const destroyRoutine = (e) => {
  const routineId = $(e.target).parent().parent().attr('id')
  window.localStorage.removeItem(routineId)
  $(e.target).parent().parent().remove()
}

window.addRoutine = addRoutine
window.destroyRoutine = destroyRoutine

export default {
  addRoutine,
  destroyRoutine
}