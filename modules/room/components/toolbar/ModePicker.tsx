import { useEffect } from "react";

import { AiOutlineSelect } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";
import { FaEraser } from "react-icons/fa";

import { useOptions, useSetSelection } from "@/common/recoil/options";

const ModePicker = () => {
  const [options, setOptions] = useOptions();
  const { clearSelection } = useSetSelection();

  console.log('options======', options);
  

  useEffect(() => {
    clearSelection();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.mode]);

  return (
    <>
      <button
        className={`btn-icon text-xl h-[40px] w-[40px] ${
          options.mode === "draw" && "bg-blue-950"
        }`}
        onClick={() => {
          setOptions((prev) => ({
            ...prev,
            mode: "draw",
          }));
        }}
      >
        <BsPencilFill />
      </button>

      <button
        className={`btn-icon text-xl h-[40px] w-[40px] ${
          options.mode === "eraser" && "bg-blue-950"
        }`}
        onClick={() => {
          setOptions((prev) => ({
            ...prev,
            mode: "eraser",
          }));
        }}
      >
        <FaEraser />
      </button>

      <button
        className={`btn-icon text-2xl h-[40px] w-[40px] ${
          options.mode === "select" && "bg-blue-950"
        }`}
        onClick={() => {
          setOptions((prev) => ({
            ...prev,
            mode: "select",
          }));
        }}
      >
        <AiOutlineSelect />
      </button>
    </>
  );
};

export default ModePicker;
