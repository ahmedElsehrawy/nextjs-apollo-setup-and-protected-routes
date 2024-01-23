import React from "react";

import Card from "../Others/Card";
import Search from "../Layout/Search";
import AddModal from "./AddModal";
import CustomTable, { ColumnType } from "../Others/Table";

interface DataType {
  id: number;
  consumername: string;
  phoneno: string;
  email: string;
  dateofjoin: string;
  noreturn: number;
  operations: string;
  render?: React.ReactNode;
}

const data: DataType[] = [
  {
    id: 1,
    consumername: "Ahmed Elsehrawy",
    phoneno: "01096803586",
    email: "aelsehrawy1999@gmail.com",
    dateofjoin: "10/10/2020",
    noreturn: 5,
    operations: "ADMIN",
  },
  {
    id: 2,
    consumername: "Ahmed Elsehrawy",
    phoneno: "01096803586",
    email: "aelsehrawy1999@gmail.com",
    dateofjoin: "10/10/2020",
    noreturn: 5,
    operations: "ADMIN",
  },
  {
    id: 3,
    consumername: "Ahmed Elsehrawy",
    phoneno: "01096803586",
    email: "aelsehrawy1999@gmail.com",
    dateofjoin: "10/10/2020",
    noreturn: 5,
    operations: "ADMIN",
  },
];

const columns: ColumnType[] = [
  {
    title: "Id",
  },
  {
    title: "Consumer Name",
  },
  {
    title: "Phone No.",
  },
  {
    title: "E-mail",
  },
  {
    title: "Date Of Join",
  },
  {
    title: "No.Return",
  },
  {
    title: "Operations",
  },
  {
    title: "Delete",
    render: (record: DataType) => (
      <a href={`/consumers?delete=${record.id}`} className="text-rose2">
        delete
      </a>
    ),
  },
];

const Consumers = () => {
  return (
    <div>
      <h2 className="leading-[46px]">Consumers</h2>
      <Card>
        <div className="flex gap-2">
          <Search
            placeholder="Search Name, Mobile, E-mail"
            height="h-14"
            shadow="shadow-sm"
          />
          <AddModal />
        </div>
        <CustomTable<DataType> data={data} columns={columns} />
      </Card>
    </div>
  );
};

export default Consumers;
