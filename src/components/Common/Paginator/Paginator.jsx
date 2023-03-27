import React, {useState} from "react";
import classes from "./Paginator.module.css"
import cn from "classnames";

let Paginator = ({totalItemsCount ,pageSize , onPageChanged, currentPage, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    // previous version
/*     let curP = currentPage;                          //Карусель массива номеров страниц
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;     //Begin
    let curPL = curP + 4;                            //End
    let slicedPages = pages.slice(curPF, curPL);     //сделано через Array.slice():
    debugger*/

    return (
        <div className={classes.paginator}>
            { portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }
            {pages
                .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map((p) => {
                    return <span className={ cn({
                        [classes.selectedPage]: currentPage === p
                    }, classes.pageNumber) }
                                 key={p}
                                 onClick={(e) => {
                                     onPageChanged(p);
                                 }}>{p}</span>
                })}
            { portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
        </div>
    )
}

export default Paginator;