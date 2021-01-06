import { connect } from "react-redux";
import "./showBuckets.css";

import Bucket from "../Bucket/Bucket";

function ShowBuckets(props) {
  return (
    <div>
      <div className="show-buckets">
        <button
          onClick={() => {
            props.history.push("/create-bucket");
          }}
          className="show-bucket-button"
        >
          Create Bucket
        </button>
      </div>
      {props.buckets.map((bucket) => {
        return (
          <Bucket
            className="show-bucket"
            key={bucket.bucketId}
            BucketId={bucket.bucketId}
            BucketName={bucket.bucketTitle}
          ></Bucket>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("Print STage", state);
  return {
    buckets: state.bucketReducer.buckets,
  };
};

export default connect(mapStateToProps, null)(ShowBuckets);
