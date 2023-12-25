import React from 'react';
import {motion} from 'framer-motion'

const Canvas = () => {
    const { canvasRef, bgRef, undoRef, redoRef } = useRefs();
  return (
    <div className='relative h-full w-full overflow-hidden'>
        <motion.canvas />
      
    </div>
  );
}

export default Canvas;
