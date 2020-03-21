<template>
  <div class="infogram-embed" data-id="dab81851-e3af-4767-b1f5-9b54eb900274" data-type="interactive" data-title="Estatus de casos bajo evaluación por COVID-2019"></div>
</template>

<script src="/client/src/main.js"></script>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'GOVERMENT',
      stats: null
    }
  },
  mounted: function () {
    axios.get('https://coronavirus-19-api.herokuapp.com/countries/Puerto%20Rico')
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
