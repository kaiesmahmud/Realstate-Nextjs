import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': '659c0cca67msh3a104163ebc3bc3p16d4fbjsn4ba1b4071db3',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
        
    })
    return data;
}