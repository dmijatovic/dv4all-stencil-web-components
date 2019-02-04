//global HC
declare var Highcharts: any;

import { Component, State, Element } from '@stencil/core'

import { options } from './stockPrice.cfg.js'

@Component({
  tag: "dv4-market-cap-stock-price",
  styleUrl: './stockPrice.css',
  shadow: true
})
export class StockPrice {
  @Element() el: HTMLElement
  @State() stocks
  @State() cfg = options
  @State() chart = {}
  @State() loading = true

  onFetchData = (event: Event) => {
    event.preventDefault()
    // console.log("get data...", event)
    this.getStocks()
  }

  getStocks() {
    let symbols = "aapl,googl,amzn,msft,fb,baba,tcehy,baba,brk.a,jpm,xom"
    let url = `https://api.iextrading.com/1.0/stock/market/batch?symbols=${symbols}&types=quote,chart&range=1y`

    //debugger
    //get data
    fetch(url)
      .then(resp => {
        return resp.json();
      })
      .then(d => {
        //return d;
        return this.prepare(d)
      })
      .then(series => {
        console.log("Data ready", series)
        //this.stocks = series
        this.createChart(series)
      })
      .catch(e => {
        console.error(e);
      })
  }

  prepare(data) {
    console.log("Prepare raw data...", data);
    let keys = Object.keys(data);
    let series = [];

    keys.map(key => {
      //get stock from one company
      let stock = data[key];
      //get data serie
      let serie = this.getSerie(stock);
      series.push(serie);
    })

    return series;
  }

  getSerie(stock) {

    let serie = {};

    serie['name'] = this.getName(stock);
    serie['data'] = this.getDataArray(stock);
    //debugger
    return serie;
  }

  getName({ quote }) {

    let name = quote['companyName'];
    //debugger
    return name;
  }

  getDataArray({ chart }) {
    let data = [];

    chart.map(rec => {
      //debugger
      //let row=[]
      let datum = Date.parse(rec['date']);
      let volume = rec['volume'];
      let value = rec['close'];
      let marcap = Math.round(value * volume);
      data.push([datum, marcap]);
    })

    return data;
  }

  createChart(data) {
    //debugger
    //console.log("Chart data...", data);
    let options = {
      ...this.cfg,
      series: [
        ...data
      ]
    }

    let div = this.el.shadowRoot.querySelector('#highcharts-stock-chart')

    if (div) {
      this.chart = Highcharts.chart(div, options);
      this.loading = false
    }

  }

  render() {
    console.log("render")
    let html = []
    // debugger
    if (typeof Highcharts === 'undefined') {
      html.push(<div id="highcharts-stock-chart">
        Highchart library is undefined. Please include refrence to Highcharts in
        the header of the index.html before web components library file (dv4all-base.js)
      </div>)
    } else {
      html.push(<div id="highcharts-stock-chart">Loading...</div>)
      if (this.loading === true) {
        html.push(<dv4-loader data-type="circle" />)
      }
    }

    return html
  }

  componentDidLoad() {
    console.log("componentDidLoad")
    //get stock data
    this.getStocks()
  }

  componentWillUpdate() {
    console.log("componentWilUpdate")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }

  componentDidUnload() {
    console.log("componentDidUnload")
    debugger
    if (this.chart) {
      this.chart['remove']()
    }
  }

}