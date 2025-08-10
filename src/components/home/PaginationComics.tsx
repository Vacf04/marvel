"use client";
import { useComics } from "@/context/ComicsContext";
import {
  ButtonPage,
  PaginationList,
  PaginationMenu,
} from "./paginationComics.styles";
export default function PaginationComics() {
  const { setPagination, currentPage, setCurrentPage, totalResults } =
    useComics();

  const totalPages = Math.ceil(totalResults / 20);

  const goPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((currentPage) => currentPage - 1);
      setPagination((prevPagination) => prevPagination - 20);
    }
  };

  const goNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      setPagination((prevPagination) => prevPagination + 20);
    }
  };

  return (
    <PaginationMenu>
      <PaginationList>
        <li>
          <ButtonPage
            onClick={() => {
              setPagination(0);
              setCurrentPage(1);
            }}
            disabled={currentPage <= 2}
            data-cy="first-page-button"
          >
            First
          </ButtonPage>
        </li>
        <li>
          <ButtonPage
            onClick={goPrevPage}
            disabled={currentPage === 1}
            data-cy="prev-page-button"
          >
            {currentPage - 1}
          </ButtonPage>
        </li>
        <li>
          <ButtonPage aria-current="page">{currentPage}</ButtonPage>
        </li>
        <li>
          <ButtonPage
            onClick={goNextPage}
            disabled={currentPage === totalPages}
            data-cy="next-page-button"
          >
            {currentPage + 1}
          </ButtonPage>
        </li>
        <li>
          <ButtonPage
            onClick={() => {
              setPagination(totalPages * 20 - 20);
              setCurrentPage(totalPages);
            }}
            disabled={currentPage === totalPages}
            data-cy="last-page-button"
          >
            Last
          </ButtonPage>
        </li>
      </PaginationList>
    </PaginationMenu>
  );
}
