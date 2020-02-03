export const createRootComponent = (
  {type, id, classes, content, onclick, src}
) => {
  if (id) id = `id="${id}"`
  if (!id) id = ""
  if (classes) classes = `class="${classes}"`
  if (!classes) classes = ""
  if (!content) content = ""
  if (onclick) onclick = `onclick="${onclick}"`
  if (!onclick) onclick = ""
  if (src) src = `src="${src}"`
  if (!src) src = ""
  return `<${type} ${id} ${classes} ${onclick} ${src}>${content}</${type}>`
}

export default {
  createRootComponent
}
