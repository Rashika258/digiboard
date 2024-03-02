import * as React from 'react';
import { Portal } from '../../portal/components/Portal';
import {motion} from "framer-motion"
export interface IModalManagerProps {
}

export function ModalManager (props: IModalManagerProps) {
  return (
<Portal>
    <motion.div
    >

    </motion.div>
</Portal>
  );
}
