import styled, { keyframes } from "styled-components";

export const ShowDown = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
}
`;

const NotificationStyled = styled.span`
  display: block;
  position: fixed;
  bottom: 0.5rem;
  right: 0.5rem;
  background-color: var(--main-color);
  border-radius: var(--border-radius);
  padding: 1rem;
  font-size: 1.25rem;
  z-index: 999;
  color: var(--background-color);
  opacity: 0;
  transform: translateY(20px);
  animation: ${ShowDown} 0.3s forwards;
`;
export default function Notification({ message }: { message: string }) {
  return <NotificationStyled>{message}</NotificationStyled>;
}
