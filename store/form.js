export const actions = {
  async send(context, { action, method, formData }) {
    console.log(JSON.stringify(formData))
    let res = null
    switch (method) {
      case 'GET':
        res = await this.$axios.get('http://httpbin.org/get', formData)
        break
      case 'POST':
        res = await this.$axios.post('http://httpbin.org/post', formData)
        break
    }
    return res
  },
}
