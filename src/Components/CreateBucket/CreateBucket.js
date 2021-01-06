import { useState } from "react";
import { connect } from "react-redux";

import { addBucket } from "../../store/actions/buckets";
import "./CreateBucket.css";

function CreateBucket(props) {
  const [BucketTitle, setBucketTitle] = useState("");
  const [Buckets, setBuckets] = useState([]);

  const onTextChangeHandler = (event) => {
    setBucketTitle(event.target.value);

    const buckets = props.buckets.map((bucket) => bucket.bucketTitle);
    setBuckets(buckets);
  };
  const onListClicked = (bucket) => {
    setBucketTitle(bucket);
    setBuckets([]);
  };
  return (
    <div className="bucket-main">
      <div className="bucket">
        <input
          placeholder="Bucket Title"
          value={BucketTitle}
          onClick={onTextChangeHandler}
          onChange={onTextChangeHandler}
          name="bucket-title"
          className="bucket-input"
        />

        <ul className="bucket-ul">
          {Buckets.map((bucket) => (
            <li
              onClick={() => {
                onListClicked(bucket);
              }}
            >
              {bucket}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => {
          setBucketTitle("");
          props.onCreateBucketHandler(BucketTitle);
          props.history.replace("/home");
        }}
        className="bucket-button"
      >
        Create Bucket
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    buckets: state.bucketReducer.buckets,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onCreateBucketHandler: (bucketTitle) => dispatch(addBucket(bucketTitle)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateBucket);
