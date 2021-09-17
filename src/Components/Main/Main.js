import './Main.css';
import Searchbar from "../SearchBar/SearchBar";
import ResultList from "../ResultList/ResultList";
import PageNoList from '../PageNoList/PageNoList';
import { services } from '../../Utils/utils';
import React from 'react';

function Main()
{

  const maxResultInOnePage = 5;

  const [allData, setAllData] = React.useState([]);
  const [results, setResults] = React.useState([]);
  const [shownResults, setShownResults] = React.useState([]);
  const [currentPageNo, setCurrentPageNo] = React.useState(0);
  const [pageAmount, setPageAmount] = React.useState(0);
  const [keyword, setKeyword] = React.useState("");

  // Fetch all data for once and all.
  React.useEffect( ()=> { fetch(services.comments).then(res => res.json()).then(data => setAllData(data)) },[]);


// custom functions----------------------
  // Search keyword in allData and set results from found ones.
  function searchKeyword(event)
  {
    event.preventDefault(); // prevent form submit from reloading entire page
    
    let newResults = [];
    allData.forEach( item=> item.body.includes(keyword) ? newResults.push(item) : undefined);
    setResults(newResults);
    setCurrentPageNo(0);  // Go to first page after each search.
  }
  // Parse the results that we want to show in current page. 
  function parseShownResults()
  {
    let startIndex = currentPageNo * maxResultInOnePage;
    let stopIndex = startIndex + maxResultInOnePage;
    setShownResults(results.slice(startIndex,stopIndex));
  }
// custom functions end------------------


// useEffects----------------------------
  // When results updated, set new total page amount from found results amount.
  // Also when results updated we 
  React.useEffect(()=>
  {
    setPageAmount(Math.ceil(results.length/maxResultInOnePage));
    parseShownResults();
  }, [results]);

  // When currentPageNo got updated, get new show results from current page no.
  React.useEffect(()=>
  {
    parseShownResults();
  }, [currentPageNo]);  
// useEffects end-------------------------


// Args objects.--------------------------
  const searchBarArgs = {
    setKeyword : setKeyword,
    searchKeyword: searchKeyword
  };
  const pageNoListArgs = {
    currentPageNo : currentPageNo,
    setCurrentPageNo : setCurrentPageNo,
    pageAmount : pageAmount,
  }
// Args objets end------------------------


  return (
    <div className="main">

      <span className="title"> Pointless Search </span>
      <Searchbar args={searchBarArgs}/>

      <div className="result-container">
        <ResultList shownResults = {shownResults} />
        <PageNoList args = {pageNoListArgs} />
      </div>
      
    </div>
  );
}

export default Main;
