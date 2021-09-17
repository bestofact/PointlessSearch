import "./ResultBar.css";

function ResultBar({result})
{
    return (
        <div className="result-bar">
            <span className="name">{result.name}</span>
            <span className="body">{result.body}</span>
            <span className="email">{result.email}</span>
        </div>
    );
}

export default ResultBar;