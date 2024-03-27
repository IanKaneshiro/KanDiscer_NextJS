export default async function Page({ params }: { params: { slug: string } }) {
  const data = await fetch(
    `https://kandiscer.onrender.com/api/bags/${params.slug}`
  ).then((res) => res.json());

  return <div>My Post: {JSON.stringify(data)}</div>;
}
