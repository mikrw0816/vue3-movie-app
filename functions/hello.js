exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringfy({
      name: 'kim',
      age: 99
    })
  }
}