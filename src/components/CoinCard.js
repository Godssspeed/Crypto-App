import React, { Component } from "react";
import axios from "axios";
import CoinDetails from "./CoinDetails";

export class CoinCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      market: []
    };
  }

  componentDidMount() {
    const { instrumentCode } = this.props;
    console.log(instrumentCode);

    const codeFix = instrumentCode.split("/");
    codeFix.splice(1, 0, "%2F");
    const fix = codeFix.join("");
    //ERROR WITH THE API DOCS NEEDED SNIPPET FOR GET REQUEST
    console.log(fix);

    axios
      .get(`https://api.seedcx.com/instruments/${fix}/time_and_sales`)
      .then(res => {
        this.setState({ market: res.data.message });
      });
  }

  render() {
    const { name, abbreviation } = this.props;
    const { market } = this.state;
    console.log(market);
    console.log(this.props);

    return (
      <div>
        <h2>{abbreviation}</h2>
        <p>{name}</p>
        <CoinDetails market={this.state.market} />
      </div>
    );
  }
}

export default CoinCard;
