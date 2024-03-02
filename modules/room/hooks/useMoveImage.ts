import * as React from "react"
import { roomContext } from "../context/Room.context"

export const useMoveImage = () =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {moveImage, setMoveImage} = React.useContext(roomContext);
    return {moveImage, setMoveImage}
}