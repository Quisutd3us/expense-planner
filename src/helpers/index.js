// function that generates an id
export const genId = () => {
  let s4 = () => {
    const random = Math.floor((1 + Math.random()) * 0x1000)
        .toString(16)
        .substring(1)
    const date = Date.now().toString(36)
    return random + date
  }
  return s4() + s4() + '-' + s4() + '-' + s4();
}

export const formatDates = (dateBill) => {
  const date = new Date(dateBill);
  const optionsDate = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }
  return date.toLocaleDateString('es-Es', optionsDate)
}