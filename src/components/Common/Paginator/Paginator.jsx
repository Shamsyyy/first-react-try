import React from "react";
import classes from "./Paginator.module.css"

let Paginator = ({totalUsersCount ,pageSize , onPageChanged, currentPage}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let curP = currentPage;                          //Карусель массива номеров страниц
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;     //Begin
    let curPL = curP + 4;                            //End
    let slicedPages = pages.slice(curPF, curPL);     //сделано через Array.slice():
    debugger

    return (
        <div>
            <div>
                {slicedPages.map(p => {              //заменено pages.map(***)  на slicedPages.map(***)
                    return (
                        <span
                            className={currentPage === p && classes.selectedPage}
                            onClick={(e) => {
                                onPageChanged(p)
                            }}> {p} </span>
                    )
                })}
            </div>
        </div>
    )
}

export default Paginator;