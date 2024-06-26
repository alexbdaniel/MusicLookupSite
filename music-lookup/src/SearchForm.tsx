import "./SearchForm.css";
import "./DataGetter";
import { getDataAsync } from "./DataGetter";
import { useState } from "react";
import { iNotification, NOTIFICATION_TYPE, Store } from "react-notifications-component";




export interface IResult {
  id: string,
  trackName: string,
  artistName: string,
  released: string,
  url: string
}

interface IProps {
  setResults: (results: IResult[]) => void,
  setResultsLoading: (resultsLoading: boolean) => void,
  setNoResultsFound: (noResultsFound: boolean) => void
}

const notification: iNotification = {
  //title: "Wonderful!",
  //message: "hello",
  //type: "success",
  insert: "top",
  container: "top-right",
  animationIn: ["animate__animated", "animate__fadeIn"],
  animationOut: ["animate__animated", "animate__fadeOut"],
  dismiss: {
    duration: 5000,
    onScreen: true,
    pauseOnHover: true,
    showIcon: true
  }
}

function notify(message: string, type: NOTIFICATION_TYPE){
  Store.addNotification({
    ...notification,
    message: message,
    type: type
  })
}



function notifyError(){
  Store.addNotification({
    ...notification,
    title: "A problem occured",
    message: "Your request failed. Try again later.",
    type: "danger"
  })
}



export const SearchForm = ({setResults, setResultsLoading, setNoResultsFound}: IProps ) => {
  const [enteredUrl, setEnteredUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const url = form.get("url")?.toString().trim();

    //tood its own validation method
    if (!url){
      notify("Enter a valid url", "danger");
      return;
    }

    setResultsLoading(true);

    try {
      
      const results: IResult[] = await getDataAsync(url);
      setResults(results);
      setResultsLoading(false);
      setNoResultsFound(results != null && results.length === 0);

    } catch (error) {
      notifyError();
      console.log(error);
    }
    finally
    {
      setResultsLoading(false);
    }
  }

  return(
    <form className="search-form" onSubmit={handleSubmit}>
      <h2><label htmlFor="url">What is the url?</label></h2>
      <input title="URL input" name="url" type="text" defaultValue={enteredUrl} onChange={e => setEnteredUrl(e.target.value)} ></input>
      <button type="submit" >Find</button>


    </form>
  )

}

