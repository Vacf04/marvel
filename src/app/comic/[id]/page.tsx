import Comic from "@/components/comic/Comic";

export default async function ComicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <Comic id={id} />;
}
