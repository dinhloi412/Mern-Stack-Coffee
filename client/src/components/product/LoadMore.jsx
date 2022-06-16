import React, { useContext } from "react";
import { GlobalState } from "../../GlobalState";

function LoadMore() {
  const state = useContext(GlobalState);
  const [page, setPage] = state.ProductsAPI.page;
  const [result] = state.ProductsAPI.result;

  return (
    <div className="load_more">
      {result < page * 10 ? (
        ""
      ) : (
        <div className="see-detail__products">
          <button className="btn-new btn-fix" onClick={() => setPage(page + 1)}>
            Xem tất cả
          </button>
        </div>
      )}
    </div>
  );
}

export default LoadMore;
