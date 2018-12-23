import "isomorphic-fetch";
let API_URL_ROOT = "http://localhost:3001/";

export async function post(url, payload) {
  // TODO change to be Authorization Bearer (needs a backend change as well)
  return await fetch(`${API_URL_ROOT}${url}`, {
    method: "POST",
    body: JSON.stringify(payload),
    json: true,
    headers: {
      "cache-control": "no-cache",
      "content-type": "application/json"
    }
  });
}

export async function get(url) {
  return await fetch(`${API_URL_ROOT}${url}`, {
    json: true,
    headers: {
      "cache-control": "no-cache",
      "content-type": "application/json"
    }
  });
}

export async function patch(url, payload) {
  return await fetch(`${API_URL_ROOT}${url}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
    json: true,
    headers: {
      "cache-control": "no-cache",
      "content-type": "application/json"
    }
  });
}

export async function put(url, payload) {
  return await fetch(`${API_URL_ROOT}${url}`, {
    method: "PUT",
    body: JSON.stringify(payload),
    json: true,
    headers: {
      "cache-control": "no-cache",
      "content-type": "application/json"
    }
  });
}
