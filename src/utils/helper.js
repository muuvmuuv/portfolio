export function updateLocationHash(newHash) {
  if (window.history.pushState) {
    window.history.pushState(null, null, `#${newHash}`)
  } else {
    window.location.hash = newHash
  }
}
