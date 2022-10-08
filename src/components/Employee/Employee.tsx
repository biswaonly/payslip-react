import { useEffect, useState } from "react";
import { Stack } from "@mui/material";

import { employeeCardArr } from "./constants";
import EmployeeCard from "./EmployeeCard";
import Table from "./Table";

const Employee = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/user`);
      const userData = await res.json();
      setUserList(userData.map((e: any) => ({ ...e, id: e._id })));
    })();
  }, []);

  return (
    <>
      <Stack direction={"row"} gap={4}>
        {employeeCardArr.map(({ title }) => {
          return <EmployeeCard title={title} key={title} />;
        })}
      </Stack>

      <Table userList={userList} />
    </>
  );
};

export default Employee;
