function setItem(key, data) {
  return new Promise((resolve, reject) => {
    if (!key || !data) {
      reject('No key or data provided!')
    }
    localStorage.setItem(key, JSON.stringify(data))
    resolve()
  })
}

function getItem(key) {
  return new Promise((resolve, reject) => {
    if (!key) {
      reject('No key provided!')
    }
    let content = localStorage.getItem(key)
    content = JSON.parse(content)
    resolve(content)
  })
}

function removeItem(key) {
  return new Promise((resolve, reject) => {
    if (!key) {
      reject('No key provided!')
    }
    localStorage.removeItem(key)
    resolve()
  })
}

function clearAll() {
  return new Promise((resolve) => {
    localStorage.clear()
    resolve()
  })
}

const Storage = { setItem, getItem, removeItem, clearAll }
export default Storage
