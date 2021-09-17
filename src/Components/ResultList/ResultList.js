import "./ResultList.css";
import ResultBar from "../ResultBar/ResultBar";

function ResultList({shownResults})
{
    return(
        <div className="result-list">
            { 
                shownResults.length
                ?
                shownResults.map( result => <ResultBar key={result.id} result={result}/> )
                :
                <div>Make a search in jsonplaceholder.typicode.com/comments body parameter.</div>
            }
        </div>
    );
}

export default ResultList;