<template>
  <div class="index_nav">
    <div
      class="index_nav_c"
      v-for="(item, index) in list"
      :key="item.title"
      @click="goto(index)"
    >
      {{ item.title }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          title: "首页",
          path: "/",
        },
        {
          title: "我的",
          path: "/my",
        },
      ],
    };
  },
  methods: {
    goto(index) {
      this.$router.push(this.list[index].path);
    },
  },
};
</script>
<style lang="scss">
.index_nav {
  width: 100%;
}
</style>
