<template>
  <div>
    <h2>{{title}}</h2>

    <el-form v-on:submit.prevent="processFormData">
      <el-form-item>
        <label for="newCountryCode">Country code:</label>&nbsp;&nbsp;
        <input
          v-model="countryCode"
          id="newCountryCode"
          placeholder="Country Code"
          required
        >
      </el-form-item>

      <el-form-item>
        <label for="newCountryName">Country name:</label>&nbsp;&nbsp;
        <input
          v-model="countryName"
          id="newCountryName"
          placeholder="Country name"
          required
        >
      </el-form-item>

      <el-form-item>
        <el-button size="mini" type="primary" @click="processFormData()">Save</el-button>
      </el-form-item>
    </el-form>
    <div v-if="countryName=='' && countryCode==''">
      <p v-text="output">{{ output }}</p>
    </div>
    <div v-else>{{getCountries}}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AddItem",
  data: function() {
    return {
      title: "Add a country",
      countryCode: "",
      countryName: "",
      output: "Enter a code and a name"
    };
  },
  methods: {
    processFormData: function() {
      if (this.countryCode !== "" && this.countryName !== "") {
        console.log("Added country: ", this.countryCode, this.countryName);
        this.output =
          "Added country: <b>" +
          this.countryCode +
          "</b> - <b>" +
          this.countryName +
          "</b>";
        this.$store.commit("addCountry", {
          code: this.countryCode,
          name: this.countryName
        });
      } else {
        console.log("Please fill in all fields");
        this.output = "Please fill in all fields";
      }
    }
  },
  computed: {
    ...mapGetters(["getCountries"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

