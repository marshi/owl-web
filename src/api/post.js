/**
 * Created by a13178 on 2017/07/19.
 */
import fetch from "isomorphic-fetch";

export default function(path, body) {
  console.log(fetch);
  console.log(path);
  console.log(body);
  return fetch(
    path,
    Object.assign(
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify(body),
      }
    )
  )
    .then(res => {console.log(res); return res.json});
}