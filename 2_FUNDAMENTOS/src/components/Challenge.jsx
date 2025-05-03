const Challenge = () => {
  const user = {
    name: "Adriano",
    age: 29,
    job: "meneger",
  };
  return (
    <>
      <h1>Dados do usuário!</h1>
      <p>Name:{user.name}</p>
      <p>Age:{user.age}</p>
      <p>Job:{user.job}</p>
    </>
  );
};

export default Challenge;
