import "./PageNoBox.css";

function PageNoBox({args})  // args : pageNo, setCurrentPageNo, isSelected
{
    // To visualize we are using pageNo+1 so pages starts from number 1.
    // Since pageNo is iterated from pageAmount and pageAmount is calculated from results.length, it starts from 0.

    return (
        <button className={`page-no-box ${args.isSelected ? "selected" : ""}`} onClick={ ()=>args.setCurrentPageNo(args.pageNo) }>
            {args.pageNo+1}
        </button>
    );
}


export default PageNoBox;