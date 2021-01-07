import * as actionTypes from "./actionTypes";
import { v4 } from "uuid";
import axios from "../../axios-api";

export const addBucketSuccess = (bucket) => {
  return {
    type: actionTypes.CREATE_BUCKET,
    bucket: bucket,
  };
};
export const clearBucket = () => {
  return {
    type: actionTypes.CLEAR_BUCKET,
  };
};
export const addBucket = (bucketTitle) => {
  const data = { bucketTitle: bucketTitle };
  return (dispatch) => {
    axios
      .post("/api/v1/bucket", data)
      .then((response) => {
        dispatch(addBucketSuccess(response.data));
      })
      .catch((error) => {
        const data = { bucketId: v4(), bucketTitle: bucketTitle, Todo: [] };
        dispatch(addBucketSuccess(data));
      });
  };
};
