


export async function getDataAsyncTest()
{

  const args: RequestInit = {
    method: "GET",
    mode: "no-cors",
    cache: "no-cache",
    headers: {
      "Accept": "*/*"
    }
    

    //referrerPolicy: "strict-origin-when-cross-origin"
  }

  const response = await fetch(
    "https://cat-fact.herokuapp.com/facts",
    args


  );

  
  const result = await response.text();

  return result;

};