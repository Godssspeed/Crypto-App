import React, { Component } from "react";
import axios from "axios";
import CoinCard from "./CoinCard";

export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      db: []
    };
  }

  componentDidMount() {
    axios.get("api/getinstruments").then(res => {
      this.setState({ db: res.data });
    });
  }

  render() {
    const { db } = this.state;
    console.log(db);
    const coinMap = db.map((e, i) => {
      console.log(e);
      return (
        <CoinCard
          key={i}
          name={e.name}
          abbreviation={e.underlying}
          instrumentCode={e.code}
        />
      );
    });
    return <div>{coinMap}</div>;
  }
}

export default Dashboard;
