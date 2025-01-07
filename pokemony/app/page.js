async function Home() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
  const data = await res.json();

  return (
    <div>
      <main></main>
    </div>
  );
}

export default Home;
