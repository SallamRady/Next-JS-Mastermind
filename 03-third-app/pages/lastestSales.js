import { useEffect, useState } from "react";
import useSWR from "swr";

export default  function latestUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  let { data, error } = useSWR(url);
  const [Users, setUsers] = useState(null);
  useEffect(() => {
    if (data) {
      let arr = [],
        n = data?.length;
      for (let i = 0; i < n; i++) {
        arr.push({
          id: i + 1,
          ...data[i],
        });
      }
      setUsers(arr);
    }
  }, [data]);

  if (error) {
    return <h1>500 | Unexpected error.</h1>;
  }
  console.log("px",data,Users)
  if (!data || !Users) {
    return <h1>Loading...</h1>;
  }

  let singleUser = Users?.map((ele) => {
    return (
      <li key={ele.id}>
        <h1>
          {ele.username} - {ele?.email}
        </h1>
      </li>
    );
  });

  return (
    <div>
      <h1>The Top Users</h1>
      <ul>{singleUser}</ul>
    </div>
  );
}
