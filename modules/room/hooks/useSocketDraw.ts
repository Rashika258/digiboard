import { socket } from "@/common/lib/socket";
import { useSetUsers } from "@/common/recoil/room";
import * as React from "react";

const useSocketDraw = (drawing: boolean) => {
  const { handleAddMoveToUser, handleRemoveMoveFromUser } = useSetUsers();


  React.useEffect(() => {
    let moveToDrawLater: Move | undefined;
    let userIdLater = "";

    socket.on("user_draw", (move, userId) => {
      if (!drawing) {
        handleAddMoveToUser(userId, move);
      } else {
        moveToDrawLater = move;
        userIdLater = userId;
      }
    });

    return () => {
      socket.off("user_draw");

      if (moveToDrawLater && userIdLater) {
        handleAddMoveToUser(userIdLater, moveToDrawLater);
      }
    };
  }, [drawing, handleAddMoveToUser]);

  React.useEffect(() =>{
    socket.on("user_undo", (userId) =>{
        handleRemoveMoveFromUser(userId);
    })

    return () =>{
        socket.off("user_undo")
    }
  },[handleRemoveMoveFromUser])

 
};

export default useSocketDraw;
