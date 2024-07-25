const state = {
  token: "",
  username: "",
  rollen: ""
}

export function setToken(token) {
  state.token = token
}

export function getToken() {
  return state.token
}

export function setUsername(username) {
  state.username = username
}

export function getUsername() {
  return state.username
}

export function setRollen(rollen) {
  state.rollen = rollen
}

export function getRollen() {
  return state.rollen
}
