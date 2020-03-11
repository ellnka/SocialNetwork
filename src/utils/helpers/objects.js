
export const updateObjectInArrayByValue = (items, itemValue, objPropName, newObjProps) => {
  return items.map(item => {
    if (item[objPropName] === itemValue) {
      return { ...item, ...newObjProps }
    }
    return item
  })
}
