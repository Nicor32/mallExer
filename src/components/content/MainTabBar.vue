<template>
  <div id="maintabbar">
    <tab-bar>
      <tab-bar-item path="/home" activecolor="#f66a8d">
        <img slot="item-icon" src="../../assets/img/tabbar/home.png" alt="" />
        <img
          slot="item-icon-active"
          src="../../assets/img/tabbar/home-active.png"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activecolor="#f66a8d">
        <img
          slot="item-icon"
          src="../../assets/img/tabbar/category.png"
          alt=""
        />
        <img
          slot="item-icon-active"
          src="../../assets/img/tabbar/category-active.png"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopping" activecolor="#f66a8d">
        <img
          slot="item-icon"
          src="../../assets/img/tabbar/shopping.png"
          alt=""
        />
        <img
          slot="item-icon-active"
          src="../../assets/img/tabbar/shopping-active.png"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activecolor="#f66a8d">
        <img
          slot="item-icon"
          src="../../assets/img/tabbar/profile.png"
          alt=""
        />
        <img
          slot="item-icon-active"
          src="../../assets/img/tabbar/profile-active.png"
          alt=""
        />
        <div slot="item-text">我的</div>
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
