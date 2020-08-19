// this should do discord auth stuff at some point.
export function handler(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      msg: "Hello, World!",
    }),
  })
}
