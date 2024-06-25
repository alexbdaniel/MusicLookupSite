import { iNotification,  Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import '../App.css';

interface IResult {
  id: string,
  trackName: string,
  artistName: string,
  released: string,
  url: string
}

const notification: iNotification = {
  //title: "Wonderful!",
  //message: "hello",
  type: "success",
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


const handleCopy = (toCopy: string) => {
  Store.addNotification({
    ...notification,
    message: "Copied to clipboard"
  });

  navigator.clipboard.writeText(toCopy);

}

function notify(message: string){
  Store.addNotification({
    ...notification,
    message: message
  })
}


//3 states
//initial load
//loading
//no results found/or found


export const Results = ({results, loading}:{results: IResult[], loading: boolean }) => {

  const resultsFound: boolean = loading === false && results.length > 0;
  


  const items = results.map(result => 
    <tr key={result.id}>
      <td>
        <a href={result.url} target="_blank" rel="noopener noreferrer">{result.trackName}</a> <br/>
        {result.artistName}
      </td>
      <td>
        {result.released}
      </td>
      <td>
        <button type="button" onClick={() => handleCopy(result.url)}>Copy</button>
      </td>
      <td>
        <button onClick={() => notify("Sent")} >Send to Alex</button>
      </td>
    </tr>
  )


  const itemsTable = (
    <table className={!resultsFound ? "results-table hide" : "results-table"} >
        <tbody>
          {items}
        </tbody>
      </table>
  )


  





  return(
    <>
      {itemsTable}

        

    </>
  )
}