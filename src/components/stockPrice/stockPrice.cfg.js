/**
 * Highcharts configuration object
 *
 * v.0.0.1
 */
export const options = {
  chart:{
    style:{
      fontFamily:'brandon_text_regular',
      fontSize: '1rem'
    }
  },

  title: {
    text: 'Market cap of market leaders'
  },

  subtitle: {
    text: 'Source: IEX trading'
  },

  credits: {
    text: 'Data source: IEX trading API',
    href: 'https://iextrading.com/developer/'
  },

  xAxis: {
    type: 'datetime',
    title:{
      text: '12 months'
    }
  },

  yAxis: {
    title: {
      text: 'USD'
    }
  },
  legend: {
    floating: false,
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'top'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      }
    }
  },

  series: [{
    name: 'Installation',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
  }, {
    name: 'Manufacturing',
    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
  }, {
    name: 'Sales & Distribution',
    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
  }, {
    name: 'Project Development',
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
  }, {
    name: 'Other',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
  }],

}

export default options;