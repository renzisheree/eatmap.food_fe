import React from "react";
import NumberPagination from "./number";
import SelectLimited from "./select-limited";
import { WrapperListNumber, WrapperPagination } from "./styled";

interface PaginationProps extends React.HTMLAttributes<HTMLButtonElement> {
  limited?: number;
  totalPage?: number;
  currentPage?: number;
  haveSelectLimit?: boolean;
  onChangePage?: (page: number) => void;
  onChangeLimited?: (limited: number) => void;
}

const Pagination = ({
  onChangeLimited,
  onChangePage,
  limited = 6,
  totalPage = 1,
  currentPage = 1,
  haveSelectLimit = true,
  // ...props
}: PaginationProps) => {
  return (
    <WrapperPagination $showLimit={!!limited}>
      {haveSelectLimit && (
        <SelectLimited value={limited} onChange={onChangeLimited} />
      )}
      <WrapperListNumber>
        <NumberPagination
          totalPage={totalPage}
          currentPage={currentPage}
          onChangePage={onChangePage || (() => {})}
        />
      </WrapperListNumber>
    </WrapperPagination>
  );
};

export default Pagination;
