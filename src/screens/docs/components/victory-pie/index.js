import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";
import markdown from "../../../../markdown";
const overview = require("!!raw!./ecology.md");

class VictoryPie extends React.Component {
  static toc() {
    return markdown.parseToc(overview);
  }

  render() {
    return (
      <EcologyRecipe
        overview={overview}
        location={this.props.location}
        updateTocArray={this.props.updateTocArray}
        scope={{}}
      />
    );
  }
}

VictoryPie.propTypes = {
  location: React.PropTypes.object.isRequired,
  updateTocArray: React.PropTypes.func.isRequired
};

export default VictoryPie;