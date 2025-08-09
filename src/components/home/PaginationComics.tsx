"use client";
import { useComics } from "@/context/ComicsContext";
import styled from "styled-components";

const ButtonPage = styled.button`
  background-color: transparent;
  border: none;
  transition: var(--transition);
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0.5rem;
  display: ${(props) => (props.disabled ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) =>
    props["aria-current"] === "page"
      ? "var(--main-color)"
      : "var(--primary-color)"};
  &:hover {
    color: var(--main-color);
  }

  @media (max-width: 350px) {
    padding: 0.25rem;
  }
`;

const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
`;

const PaginationMenu = styled.nav`
  margin-top: 2rem;
`;

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
          >
            First
          </ButtonPage>
        </li>
        <li>
          <ButtonPage onClick={goPrevPage} disabled={currentPage === 1}>
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
          >
            Last
          </ButtonPage>
        </li>
      </PaginationList>
    </PaginationMenu>
  );
}
