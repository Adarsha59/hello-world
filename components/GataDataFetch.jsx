async function getdata(params) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

const GataDataFetch = async () => {
  const data = await getdata();
  console.log("data is: ", data);

  return (
    <>
      {data.map((data) => {
        return (
          <div key={data.id}>
            Title is
            <hr />
            {data.title}
            <hr />
            <div>
              body is
              <hr />
              {data.body}
            </div>
            <div>{data.UseerId}</div>
          </div>
        );
      })}
    </>
  );
};

export default GataDataFetch;
