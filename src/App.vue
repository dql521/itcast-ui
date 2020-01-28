<template>
  <div class="app">
    <div class="row">
      <do-button>按钮</do-button>
      <do-button type="primary">按钮</do-button>
      <do-button type="success">按钮</do-button>
      <do-button type="info">按钮</do-button>
      <do-button type="warning">按钮</do-button>
      <do-button type="danger">按钮</do-button>
    </div>
    <div class="row">
      <do-button plain>按钮</do-button>
      <do-button plain type="primary">按钮</do-button>
      <do-button plain type="success">按钮</do-button>
      <do-button plain type="info">按钮</do-button>
      <do-button plain type="warning">按钮</do-button>
      <do-button plain type="danger">按钮</do-button>
    </div>
    <div class="row">
      <do-button round>按钮</do-button>
      <do-button round type="primary">按钮</do-button>
      <do-button round type="success">按钮</do-button>
      <do-button round type="info">按钮</do-button>
      <do-button round type="warning">按钮</do-button>
      <do-button round type="danger">按钮</do-button>
    </div>
    <div class="row">
      <do-button icon="do-icon-check" circle></do-button>
      <do-button icon="do-icon-check" circle type="primary"></do-button>
      <do-button icon="do-icon-check" circle type="success"></do-button>
      <do-button icon="do-icon-check" circle type="info"></do-button>
      <do-button icon="do-icon-check" circle type="warning"></do-button>
      <do-button icon="do-icon-check" circle type="danger"></do-button>
    </div>
    <div class="row">
      <do-button disabled>按钮</do-button>
      <do-button disabled type="primary">按钮</do-button>
      <do-button disabled type="success">按钮</do-button>
      <do-button disabled type="info">按钮</do-button>
      <do-button disabled type="warning">按钮</do-button>
      <do-button disabled type="danger">按钮</do-button>
    </div>
    <do-button @click="visible=true" type="">按钮</do-button>
    <do-dialog title="温馨提示" :visible.sync="visible">
      <input type="text" placeholder="请输入用户名">
      <template v-slot:footer>
        <do-button type="primary" @click="visible=false">确定</do-button>
        <do-button @click="visible=false">取消</do-button>
      </template>
    </do-dialog>
    <do-input type="text" placeholder="请输入内容"></do-input>
    <do-input type="password" placeholder="请输入密码" showPassword></do-input>
</div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .row{
    margin-bottom: 20px;
    .do-button{
      margin-right: 20px;
    }
  }
  .app{
    .do-input{
      width: 30%;
    }
  }
</style>
