import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as recActions from "../actions/recommendationsAction";
import Recommendations from "../components/Recommendations";

const mapStateToProps = (state) => ({
  user: state.authentication.user,
  recommendations: state.recommendation.recommendations,
  newRecommendation: state.recommendation.newRecommendation,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(recActions, dispatch);

const RecommendationContainer = (props) => {
  const userRecommendations = props.recommendations.map((rec) => {
    <Recommendations recommendation={rec} currentUser={props.user}></Recommendations>;
  });

  return (
    <div className="reccontainer">
      <h3>Recommendations</h3>
      <div className="recBox">
        {userRecommendations}
        <textarea
          onChange={props.updateNewRecommendation}
          value={props.newRecommendation}
        ></textarea>
        <button type='submit' onClick={props.addRecommendation}>Submit</button>
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommendationContainer);
