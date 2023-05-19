import React, {useEffect, useState} from "react";
import classes from "./Paginator.module.css"
import cn from "classnames";

type PropsType = {
    totalItemsCount: number,
    pageSize: number,
    onPageChanged: (pageNumber: number) => void,
    currentPage: number,
    portionSize?: number
    setCurrentPage: any
}

let Paginator: React.FC<PropsType> = ({totalItemsCount,
                                          pageSize ,
                                          onPageChanged,
                                          currentPage,
                                          setCurrentPage,
                                          portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: Array<number> = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState<number>(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    useEffect(() => {
        let portionNumber = Math.ceil(currentPage / portionSize);
        setPortionNumber(portionNumber);
    }, [currentPage, portionSize]);

    return (
        <div className={classes.paginator}>
            { portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }
            {pages
                .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber&& p<=rightPortionPageNumber)
                .map((p) => {
                    return <span className={ cn({
                        [classes.selectedPage]: currentPage === p
                    }, classes.pageNumber) }
                                 key={p}
                                 onClick={(e) => {
                                     onPageChanged(p);
                                     setCurrentPage(p); // обновляем currentPage
                                 }}>{p}</span>
                })}
            { portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
        </div>
    )
}

export default Paginator;