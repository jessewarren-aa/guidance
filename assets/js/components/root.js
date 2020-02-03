export const createRootComponent = (
  {type, id, classes, content, onclick, src}
) => {
  if (id) id = `id="${id}"`
  if (!id) const id = ""
  if (classes) classes = `class="${classes}"`
  if (!classes) const classes = ""
  if (!content) const content = ""
  if (onclick) onclick = `onclick="${onclick}"`
  if (!onclick) const onclick = ""
  if (src) src = `src="${src}"`
  if (!src) const src = ""
  return `<${type} ${id} ${classes} ${onclick} ${src}>${content}</${type}>`
}

export default {
  createRootComponent
}