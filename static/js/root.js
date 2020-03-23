// const dateTime = new Date()
// const currentHour = dateTime.getHours()
// const currentMinute = dateTime.getMinutes()
// const currentDay = dateTime.getDay()
// const currentMonth = dateTime.getMonth() + 1
// const currentDate = dateTime.getDate()

// const renderPage = () => {
//   if (!window.localStorage.getItem(`shower-${currentMonth}-${currentDate}`)) {
//     $("#body-content").html(
//       createIcon('routines/shower.svg', `shower-${currentMonth}-${currentDate}`)
//     )
//   } else {
//     $("#body-content").html(
//       createReward('heartreward.svg')
//     )
//   }
// }

// const createIcon = (iconURL, key) => {
//   return `
//     <div 
//       class="col-md-2 d-flex flex-wrap"
//       onclick="setToStorage('${key}', 'complete')"
//     >
//       <div class="content-card d-flex-around">
//         <div class="row d-flex-center">
//           <div>
//             <img
//               class="icon-sizer"
//               src='static/images/icons/${iconURL}'
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   `
// }

// const setToStorage = (key, value) => {
//   window.localStorage.setItem(key, value);
//   renderPage()
// }

// const createReward = (iconURL) => {
//   return `
//     <div class="col-md-2 d-flex flex-wrap">
//       <div class="reward-card d-flex-around">
//         <div class="row d-flex-center">
//           <div>
//             <img
//               class="icon-sizer"
//               src='static/images/icons/rewards/${iconURL}'
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   `
// }



// // $("#body-content").append(
// //   `${currentHour}, ${currentMinute}, ${currentDay}, ${currentDate}`
// // )

// const iconAnimationType = "example-animation"

// $(".content-card").bind("webkitAnimationEnd mozAnimationEnd animationend", function () {
//   $(this).removeClass(`animated ${iconAnimationType}`)
// })

// $(".content-card").mouseenter(function () {
//   $(this).addClass(`animated ${iconAnimationType}`);
// })

const renderPage = () => {
  // First Stage
  // updateContainer("#warning-content", `<div class="alert alert-danger" role="alert">This is a danger alert—check it out!</div>`)

  let currentStage = window.localStorage.getItem("current_stage")
  if (!currentStage) {
    currentStage = "1_intro_1"
    window.localStorage.setItem("current_stage", "1_intro_1")
  }

  renderStages(currentStage)
}

const updateContainer = (containerId, content) => {
  $(containerId).html(content)
}

renderPage()