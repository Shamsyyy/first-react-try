import React, {useState} from "react";
import { create } from "react-test-renderer";
import Paginator from "./Paginator";

describe("Paginator component tests", () => {
    test("pages count is 11 but should be showed only 10", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />);
        const root = component.root;
        let spans = root.findAllByType("span");
        expect(spans.length).toBe(10);
    });

    test("if pages count is more then 10 button NEXT should be present", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />);
        const root = component.root;
        let button = root.findAllByType("button");
        expect(button.length).toBe(1);
    });
});


//test for chatGPT
describe("Pagination", () => {
  // Declare variables for total items count, page size, and portion size
  const totalItemsCount = 25;
  const pageSize = 5;
  const portionSize = 3;

    it("should calculate the correct number of pages", () => {
        const pagesCount = Math.ceil(totalItemsCount / pageSize);

        expect(pagesCount).toEqual(5); // We expect 5 pages for 25 items with a page size of 5.
    });

    it("should generate an array of page numbers", () => {
        const pagesCount = Math.ceil(totalItemsCount / pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        expect(pages).toEqual([1, 2, 3, 4, 5]); // We expect an array of page numbers from 1 to 5.
    });

    it("should calculate the correct number of portions", () => {
        const pagesCount = Math.ceil(totalItemsCount / pageSize);
        const portionCount = Math.ceil(pagesCount / portionSize);

        expect(portionCount).toEqual(2); // We expect 2 portions with a portion size of 3.
    });

    it("should calculate the correct left portion page number", () => {
        const portionNumber = 2;
        const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;

        expect(leftPortionPageNumber).toEqual(4); // We expect the left portion page number to be 4 with a portion size of 3 and a portion number of 2.
    });

    it("should calculate the correct right portion page number", () => {
        const portionNumber = 2;
        const rightPortionPageNumber = portionNumber * portionSize;

        expect(rightPortionPageNumber).toEqual(6); // We expect the right portion page number to be 6 with a portion size of 3 and a portion number of 2.
    });
});