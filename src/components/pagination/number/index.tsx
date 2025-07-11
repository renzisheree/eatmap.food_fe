import React from "react";

import {
  ContentListPageNumber,
  Next,
  PageNumber,
  PaginationWrapper,
  Previous,
} from "./styled";
import useWindowResize from "@/hooks/use-window-resize";
import Icons from "@/components/icons";

function pagination(c: number, m: number) {
  var current = c,
    last = m,
    delta = 2,
    left = current - delta,
    right = current + delta + 1,
    range = [],
    rangeWithDots = [],
    l;

  for (let i = 1; i <= last; i++) {
    if (i == 1 || i == last || (i >= left && i < right)) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
}

interface NumberPaginationProps {
  totalPage: number | 1;
  currentPage: number | 1;
  onChangePage: (page: number) => void;
}
function NumberPagination({
  totalPage,
  currentPage,
  onChangePage,
}: NumberPaginationProps) {
  const size = useWindowResize();

  const renderListMobile = () => {
    let result = [];
    if (totalPage <= 4) {
      for (let i = 1; i <= totalPage; i++) {
        result.push(
          <PageNumber
            key={i}
            className={i === currentPage ? "active" : undefined}
            onClick={() => onChangePage(i)}
          >
            {i}
          </PageNumber>
        );
      }
    } else {
      let start = currentPage - 1 <= 0 ? 1 : currentPage - 1;
      let end = currentPage + 2 >= totalPage ? totalPage : currentPage + 2;
      for (let i = start; i <= end; i++) {
        result.push(
          <PageNumber
            key={i}
            className={i === currentPage ? "active" : undefined}
            onClick={() => onChangePage(i)}
          >
            {i}
          </PageNumber>
        );
      }
    }
    return result;
  };

  const renderListDesktop = () => {
    let result = [];
    if (totalPage <= 10) {
      for (let i = 1; i <= totalPage; i++) {
        result.push(
          <PageNumber
            key={i}
            className={i === currentPage ? "active" : undefined}
            onClick={() => onChangePage(i)}
          >
            {i}
          </PageNumber>
        );
      }
    } else {
      const listDot = pagination(currentPage, totalPage);
      result = listDot.map((item, index) => {
        if (item === "...") {
          return (
            <PageNumber dot key={index}>
              {item}
            </PageNumber>
          );
        } else {
          return (
            <PageNumber
              key={index}
              className={item === currentPage ? "active" : undefined}
              onClick={() => onChangePage(item as number)}
            >
              {item}
            </PageNumber>
          );
        }
      });
    }
    return result;
  };

  return (
    <PaginationWrapper>
      <ContentListPageNumber>
        <Previous
          disabled={currentPage === 1}
          onClick={() => onChangePage(currentPage - 1)}
        >
          <Icons
            size={24}
            icon="chevron-left"
            color={currentPage === 1 ? "#b3b6b8" : "#ea580c"}
          />
        </Previous>

        {size && size.width && size.width > 768 ? renderListDesktop() : renderListMobile()}
        <Next
          disabled={currentPage === totalPage}
          onClick={() => onChangePage(currentPage + 1)}
        >
          <Icons
            size={24}
            icon="chevron-right"
            color={currentPage === totalPage ? "#b3b6b8" : "#ea580c"}
          />
        </Next>
      </ContentListPageNumber>
    </PaginationWrapper>
  );
}

export default NumberPagination;
