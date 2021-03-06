/* NOTE
  all one-line star comments starting with "eslint", "global", or "NOTE"
  will be removed before displaying this document to the user
*/
/* global React, ReactDOM, App, mountNode, window */
/* global VictoryPie, VictoryLabel, VictoryAnimation */
/* eslint-disable react/no-did-mount-set-state */

/* Victory requires `react@^15.5.0` and `prop-types@^15.5.0` */

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      percent: 0, data: this.getData(0)
    };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      const percent = Math.random() * 100;
      this.setState({
        percent, data: this.getData(percent)
      });
    }, 2000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getData(percent) {
    return [{x: 1, y: percent}, {x: 2, y: 100 - percent}];
  }

  render() {
    return (
      <div>
        <svg viewBox="0 0 400 400">
          <VictoryPie
            animate={{duration: 1000}}
            width={400} height={400}
            data={this.state.data}
            innerRadius={120}
            cornerRadius={25}
            labels={() => null}
            style={{
              data: { fill: (d) => {
                const color = d.y > 30 ? "green" : "red";
                return d.x === 1 ? color : "transparent";
              }
             }
            }}
          />
          <VictoryAnimation duration={1000} data={this.state}>
            {(newProps) => {
              return (
                <VictoryLabel
                  textAnchor="middle" verticalAnchor="middle"
                  x={200} y={200}
                  text={`${Math.round(newProps.percent)}%`}
                  style={{ fontSize: 45 }}
                />
              );
            }}
          </VictoryAnimation>
        </svg>
      </div>
    );
  }
}

ReactDOM.render(<App/>, mountNode);
