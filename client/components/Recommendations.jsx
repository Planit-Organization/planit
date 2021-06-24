import React from "react";

const Recommendations = (props) => {
  return (
    <div className="recommendation">
      <section>
        <p>
          {props.user}{" "}
          <span id="recdate">
            {props.createdAt}
            {props.currentUser == props.user ? (
              <button
                onClick={() =>
                  props.deleteRecommendation({
                    recommendation: props.recommendation,
                    user: props.user,
                  })
                }
              >
                Delete
              </button>
            ) : null}
          </span>
        </p>
        <p>{recommendation}</p>
      </section>
    </div>
  );
};

export default Recommendations;
