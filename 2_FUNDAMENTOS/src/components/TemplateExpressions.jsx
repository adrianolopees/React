const TemplateExpressions = () => {
  const name = "Adriano";
  const data = {
    age: 29,
    job: "Programer",
  };

  return (
    <>
      <h1>Olá {name}</h1>
      <p>
        Você atua como : {data.job} e tem {data.age} anos de idade
      </p>
    </>
  );
};

export default TemplateExpressions;
