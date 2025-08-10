import styled from "styled-components";

const ErrorStyled = styled.p`
  color: var(--main-color);
`;
export default function ErrorMessage({ error }: { error: string | null }) {
  if (error === "" || error === null) return null;
  return <ErrorStyled>{error}</ErrorStyled>;
}
