import {
  getToken,
} from "./../store/utils"

export async function oniLoader() {

  console.log(getToken())
  
  let getRequest = {
    method: "GET",
    headers: { "Authorization": "Bearer " + getToken() }
  }

  let data = await fetch("/api/readRequest", getRequest)

  let txt = await data.text()

  return {data : txt}

}