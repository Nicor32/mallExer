<template>
  <div id="maintabbar">
    <tab-bar>
      <tab-bar-item path="/home" activecolor="#f66a8d">
      <template  v-slot:item-icon><img src="../../assets/img/tabbar/home.png" alt="" /></template>
      <template v-slot:item-icon-active> <img src="../../assets/img/tabbar/home-active.png" alt=""/></template>
      <template v-slot:item-text><div>首页</div></template>
      </tab-bar-item>
      <tab-bar-item path="/category" activecolor="#f66a8d">
      <template  v-slot:item-icon><img src="../../assets/img/tabbar/category.png" alt="" /></template>
      <template v-slot:item-icon-active> <img src="../../assets/img/tabbar/category-active.png" alt=""/></template>
      <template v-slot:item-text><div>分类</div></template>
      </tab-bar-item>
      <tab-bar-item path="/shopping" activecolor="#f66a8d">
      <template  v-slot:item-icon><img src="../../assets/img/tabbar/shopping.png" alt="" /></template>
      <template v-slot:item-icon-active> <img src="../../assets/img/tabbar/shopping-active.png" alt=""/></template>
      <template v-slot:item-text><div>购物车</div></template>
      </tab-bar-item>
      <tab-bar-item path="/profile" activecolor="#f66a8d">
      <template  v-slot:item-icon><img src="../../assets/img/tabbar/profile.png" alt="" /></template>
      <template v-slot:item-icon-active> <img src="../../assets/img/tabbar/profile-active.png" alt=""/></template>
      <template v-slot:item-text><div>我的</div></template>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from "../common/tabbar/TabBar";
import TabBarItem from "../common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>
