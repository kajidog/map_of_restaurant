import { firebaseDb } from "../firebase/";
import { libs } from "../libs/libs";

export function loacdComment(storeId) {
  const ref2 = firebaseDb.ref("comments/" + storeId);

  return dispatch => {
    ref2.off();
    ref2.on(
      "value",
      snapshot => {
        dispatch(loadCharactersSuccess(snapshot));
      },
      error => {
        dispatch(loadCharactersError(error));
      }
    );
  };
}
function loadCharactersSuccess(snapshot) {
  let comments = snapshot.val()
  if(comments === null){
    comments = {}}
  return {
    type: "COMMENTS_RECEIVE_DATA",
    comments: comments
  };
}
function loadCharactersError(error) {
  return {
    type: "COMMENTS_RECIVE_ERROR",
    message: error.message
  };
}

export function addComments(newComment) {
  newComment["created"] = libs.getCreaated();
  const ref1 = firebaseDb.ref("comments/" + newComment.storeId);

  return (dispatch, getState) => {



    ref1.push(newComment).catch(error =>
      dispatch({
        type: "ADD_TASK_ERROR",
        message: error.message
      })
    );
  };
}
