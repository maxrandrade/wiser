import axios from 'axios'

const apiUrl = 'https://run.mocky.io/v3/9649968d-be77-42f1-a8ff-e1125729bb27'

export const auth = async (params: any) => await axios.get(apiUrl, {
  params: { ...params },
  // Had to do it because of an axios bug
  // https://github.com/axios/axios/issues/1723
  transformResponse: [data => JSON.parse(JSON.stringify(data))]
})
