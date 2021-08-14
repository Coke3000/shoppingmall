<template>
  <div id="tabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
#tabBar{
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 49px;
  background-color:#f6f6f6;
  box-shadow: 0px -1px 10px rgb(173, 173, 173);
  z-index: 99999;
}

</style>