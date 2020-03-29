<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>Cases: {{ stats[53].cases }}</li>
      <li>Active: {{ stats[53].active }}</li>
      <li>Recovered: {{ stats[53].cases - stats[53].active - stats[53].deaths }}</li>
      <!--<li>Critical: {{ stats[52].critical }}</li>-->
      <li>Deaths: {{ stats[53].deaths }}</li>
    </ul>
    <h1>Today's New Cases: {{ stats[53].todayCases }}</h1>
    <h1>Today's Deaths: {{ stats[53].todayDeaths }}</h1>
    <a><img class="sillu" src="https://pbs.twimg.com/media/EUR96mbXsAAjSbT?format=jpg&name=large" width="100%" alt="PR" /></a>
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
    axios.get('https://corona.lmao.ninja/states')
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
