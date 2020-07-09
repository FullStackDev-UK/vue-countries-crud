<template>
  <div class="hello">
    <h2>{{ title }}</h2>
    <el-dialog :visible.sync="visible" title="Edit country" align="center">
      <el-form>
        <el-form-item>
          <label>Code:</label>
          <input type="text" v-model="countryCode" v-text="countryCode" name="code">
        </el-form-item>
        <el-form-item>
          <label>Name:</label>
          <input type="text" v-model="countryName" v-text="countryName" name="name">
        </el-form-item>
        <input type="hidden" v-model="index" name="index">

        <el-form-item>
          <el-button type="primary" size="mini" @click="handleSave()">Save</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <h3>{{countryCode}} - {{countryName}}</h3>

    <table style="width: 100%" v-if="getCountries!==null">
      <tr
        v-for="(country, index) in getCountries"
        :key="index"
        @click="startEdit(index, country.code, country.name)"
        @blur="endEdit(index, country.code, country.name, $event)"
        contenteditable
      >
        <td>{{country.code}}</td>
        <td>{{country.name}}</td>
        <td>
          <el-button size="mini" type="primary" @click="showEditForm(index, country)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(index, country)">Delete</el-button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "CountryList",
  data: function() {
    return {
      title: "Country list",
      search: "",
      visible: false,
      index: null,
      countryCode: "Select code",
      countryName: "Select name"
    };
  },
  methods: {
    handleSave() {
      this.visible = false;
      this.$store.commit("editCountry", {
        index: this.index,
        code: this.countryCode,
        name: this.countryName
      });
    },
    showEditForm(index, country) {
      this.index = index;
      this.countryCode = country.code;
      this.countryName = country.name;
      this.visible = true;
    },
    startEdit(index, code, name) {
      this.index = index;
      this.countryCode = code;
      this.countryName = name;
    },
    endEdit(index, code, name, event) {
      this.index = index;
      let srcArray = event.target.innerText.split("\t");
      this.countryCode = srcArray[0];
      this.countryName = srcArray[1];
      this.handleSave();
    },
    handleDelete(index, row) {
      let name = row.name;
      this.$store.commit("deleteCountry", { index: index, name: name });
    }
  },
  computed: {
    getCountries() {
      return this.$store.state.countries;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
