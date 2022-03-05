<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>Cases: {{ stats.cases }}</li>
      <li>Active: {{ stats.active }}</li>
      <li>Recovered: {{ stats.cases - stats.active - stats.deaths }}</li>
      <!--<li>Critical: {{ stats[52].critical }}</li>-->
      <li>Deaths: {{ stats.deaths }}</li>
    </ul>
    <h1>Today's New Cases: {{ stats.todayCases }}</h1>
    <h1>Today's Deaths: {{ stats.todayDeaths }}</h1>
    <a><img class="sillu" src="https://static01.nyt.com/newsgraphics/2021/coronavirus-tracking/images/maps/USA-72/cases_percap.png" width="40%" alt="PR" /></a>
  </div>
</template>

<script src="/client/src/main.js"></script>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Puerto Rico statistics for Covid19',
      stats: null
    }
  },
  mounted: function () {
    axios.get('https://corona.lmao.ninja/v3/covid-19/states/Puerto Rico')
      .then(response => (this.stats = response.data))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
