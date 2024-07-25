const state = {
  token: "",
  username: ""
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

