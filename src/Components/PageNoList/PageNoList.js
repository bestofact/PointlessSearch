import "./PageNoList.css";
import PageNoBox from "../PageNoBox/PageNoBox";


function PageNoList({args}) //args : currentPageNo, setCurrentPageNo, pageAmount
{    
    return(
        <div className="page-no-list">
            { 
                args.pageAmount
                ?
                Array.from({length: args.pageAmount}, (x,pageNo) => 
                    <PageNoBox key={pageNo} 
                        args =
                        {
                            {
                            pageNo:pageNo,
                            setCurrentPageNo:args.setCurrentPageNo,
                            isSelected:pageNo===args.currentPageNo
                            }  
                        }
                    />) 
                :
                <div/>
            }
        </div>
    );
}

export default PageNoList;