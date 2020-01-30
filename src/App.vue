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
    <do-button @click="visible=true" type="">点击显示</do-button>
    <do-dialog title="温馨提示" :visible.sync="visible">
      <input type="text" placeholder="请输入用户名">
      <template v-slot:footer>
        <do-button type="primary" @click="visible=false">确定</do-button>
        <do-button @click="visible=false">取消</do-button>
      </template>
    </do-dialog>
   <do-form :model="model" label-width="100px">
     <do-form-item label="用户名:">
       <do-input placeholder="请输入用户名" v-model="model.username"></do-input>
     </do-form-item>
     <do-form-item label="开通:">
       <do-switch v-model="model.active"></do-switch>
     </do-form-item>
     <do-form-item label="性别:">
       <do-radio-group v-model="model.gender">
         <do-radio label="男"></do-radio>
       <do-radio label="女"></do-radio>
       </do-radio-group>
     </do-form-item>
     <do-form-item label="爱好:">
       <do-checkbox-group v-model="model.hobby">
         <do-checkbox label="打篮球"></do-checkbox>
       <do-checkbox label="打游戏"></do-checkbox>
       <do-checkbox label="敲代码"></do-checkbox>
       </do-checkbox-group>
     </do-form-item>
   </do-form>
</div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      name: '',
      model: {
        username: '',
        active: false,
        gender: '1',
        hobby: []
      }
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
