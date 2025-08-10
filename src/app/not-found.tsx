import { LinkHome, NotFoundContent } from "./not-found.styles";

export default function NotFound() {
  return (
    <section>
      <NotFoundContent>
        <h1>Page Not Found</h1>
        <LinkHome href={"/"}>Go Home</LinkHome>
      </NotFoundContent>
    </section>
  );
}
