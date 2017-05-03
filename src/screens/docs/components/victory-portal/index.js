import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryPortal extends React.Component {
  render() {
    return (
      <EcologyRecipe
        overview={require("!!raw!./ecology.md")}
        location={this.props.location}
        scope={{}}
      />
    );
  }
}

VictoryPortal.propTypes = {
  location: React.PropTypes.object
};

export default VictoryPortal;
