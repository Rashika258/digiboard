import { useModal } from "@/common/recoil/modal";
import * as React from "react";
import { AiOutlineClose } from "react-icons/ai";

export interface INotFoundModalProps {
  id: string;
}

export function NotFoundModal({ id }: INotFoundModalProps) {
  const { closeModal } = useModal();

  return (
    <div className="relative flex flex-col items-center rounded-md bg-slate-900 p-10 ">
      <button onClick={closeModal} className="absolute top-5 right-5">
        <AiOutlineClose />
      </button>
      <h2 className="text-lg font-bold">
        Room with id &quot;{id}&quot; does not exist or is full!
      </h2>
      <h3>Try to join room later.</h3>
    </div>
  );
}
