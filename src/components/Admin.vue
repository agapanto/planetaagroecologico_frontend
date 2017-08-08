<template>
  <div class="ui container">

    <div class="ui secondary  menu">
      <a class="active item">
        Home
      </a>
      <a class="item">
        Messages
      </a>
      <a class="item">
        Friends
      </a>
      <div class="right menu">
        <div class="item">
          <div class="ui icon input">
            <input placeholder="Search..." type="text">
            <i class="search link icon"></i>
          </div>
        </div>
        <a class="ui item">
          Logout
        </a>
      </div>
    </div>

    <!-- <div class="ui right floated teal buttons">
      <div class="ui button">Nuevo productor</div>
      <div class="ui floating dropdown icon button">
        <i class="dropdown icon"></i>
        <div class="menu">
          <div class="item"><i class="cloud upload icon"></i> Importar desde csv</div>
          <div class="item"><i class="delete icon"></i> Eliminar Productores</div>
          <div class="item"><i class="hide icon"></i> Deshabilitar Productores</div>
        </div>
      </div>
    </div> -->

    <table class="ui black table">
      <thead>
        <tr><th>Food</th>
        <th>Calories</th>
        <th>Protein</th>
      </tr></thead><tbody>
        <tr>
          <td>Apples</td>
          <td>200</td>
          <td>0g</td>
        </tr>
        <tr>
          <td>Orange</td>
          <td>310</td>
          <td>0g</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
