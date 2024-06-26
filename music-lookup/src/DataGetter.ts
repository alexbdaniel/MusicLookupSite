import axios, { AxiosRequestConfig } from "axios";
//@ts-nocheck 
const endpoint: string = "/search/lookup";
let url: string = "http://192.168.0.175:32770/api/search/lookup";
url = "https://music.alexbdaniel.com/api/search/lookup";

const getArgs = (searchUrl: string): RequestInit => {

  const args: RequestInit = {
    method: "GET",
    credentials: "same-origin",
    mode: "cors",
    cache: "no-cache",

    referrerPolicy: "strict-origin-when-cross-origin",
    headers: {
      "url": searchUrl
    }
  }

  return args;
}

//https://open.spotify.com/track/2nd8s7IEIZD0sByOxvSHjS?autoplay=true
export interface IResult {
  id: string,
  trackName: string,
  artistName: string,
  released: string,
  url: string
}


export const getDataAsync = async (searchUrl: string): Promise<IResult[]> => {


  const args = getArgs(searchUrl);

  // url = "http://192.168.0.175:32770/api/search/test";
  const response = await fetch(url, args);

  const results: IResult[]  = await response.json();


  return results;

}

export async function getDataAsync2(searchUrl: string): Promise<IResult[]> {

  const config: AxiosRequestConfig = {
    headers: {"url": searchUrl},
    method: "get",
    baseURL: url,
    url: endpoint
    
  }



  const response = await axios.get<IResult[]>(url, config);

  if (response.status !== 200){
    throw Error;
  }

  const result = response.data;

  return result;



}