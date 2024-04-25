import axios from "axios";
import { URLSearchParams } from "url";

const mapsApi = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const findByText = async (input: string) => {
  try {
    const response = await mapsApi.get('/place/findplacefromtext/json', {
      params: {
        input,
        inputtype: 'textquery',
        fields: 'formatted_address,name',
        key: process.env.NEXT_PUBLIC_GMAP_API_KEY as string
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      withCredentials: false
    })

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

export const autocompleteQuery = async (input: string) => {

  const response = await mapsApi.get('/place/queryautocomplete/json', {
    params: {
      input,
      key: process.env.NEXT_PUBLIC_GMAP_API_KEY
    }
  })

  console.log(response.data);
}

export default mapsApi;