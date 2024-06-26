


export async function getDataAsyncTest(): Promise<any>
{

  const args: RequestInit = {
    method: "GET",
    mode: "no-cors",
    cache: "no-cache",
    

    //referrerPolicy: "strict-origin-when-cross-origin"
  }

  const response = await fetch(
    "https://bored-api.appbrewery.com/random",
    args


  );

  const result = await response.json();

  return result;

};