"use client";
import React, { useState } from "react";
//@ts-ignore
import { UilPlus } from "@iconscout/react-unicons";
import Button from "../Others/Button";
import Modal from "../Others/Modal";
import Input from "../Others/Input";

const addConsumerInputs = [
  { label: "First Name", name: "firstname", type: "text" },
  { label: "Last Name", name: "lastname", type: "text" },
  { label: "E-mail", name: "email", type: "text" },
  { label: "Phone Number", name: "phonenumber", type: "number" },
  { label: "Password", name: "password", type: "password" },
  { label: "Confirm Password", name: "confirmpassword", type: "password" },
];

interface ConsumerInput {
  name: string;
  label: string;
  type: any;
}

const AddModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button height="h-14" icon={<UilPlus />} onClick={() => setIsOpen(true)}>
        Add New Consumer
      </Button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        width="w-11/12 lg:w-5/6 xl:w-4/6"
      >
        <div className="w-full h-full text-center p-2 lg:p-4 z-10">
          <h3>Add New Consumer</h3>
          <span>Consumer details</span>
          <div className="flex flex-wrap flex-row">
            {addConsumerInputs.map((consumer: ConsumerInput) => {
              return (
                <div
                  key={consumer.name}
                  className="w-full md:w-1/2 p-1 lg:p-2 text-start "
                >
                  <Input
                    label={consumer.label}
                    name={consumer.name}
                    type={consumer.type}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex justify-center gap-3 mt-2">
            <Button width="w-48" onClick={() => {}}>
              Ok
            </Button>
            <Button
              width="w-48"
              type="secondary"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddModal;
