<template>
  <main>
    <TheWelcome />
    <Cbtn msg="hello" @change="change" @update="_delete"></Cbtn>
  </main>
</template>
<script setup lang="ts">
import { Cbtn } from "@mzmuping/components";
import TheWelcome from "@/components/TheWelcome.vue";
import { userApi } from "@mzmuping/apis";
import { arrayUtil } from "@mzmuping/utils";
import { ref, onMounted } from "vue";
const _delete = (value) => {
  console.log("_delete");
};
const change = (value) => {
  console.log("change", value);
};
onMounted(() => {
  userApi
    .getUser(20)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  userApi
    .getUserByUid()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  arrayUtil();
});
</script>
