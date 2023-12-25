import React from 'react';
import { useRecoilState } from 'recoil';
import modalAtom from "@/common/recoil/modal";


const ModalManager = () => {

    const [{opened, modal}, setModal] =useRecoilState(modalAtom);

  return (
    <div>
      
    </div>
  );
}

export default ModalManager;
