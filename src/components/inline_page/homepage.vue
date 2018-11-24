<template>
<div width=100%, height=100%, margin-left=-50px>
  <Col span ='7' offset='1'  v-for='st in status'>
  <Card>
    <div style="font-size: 20px;">
    <p v-if='st === 0'>待进行</p>
    <p v-if='st === 1'>进行中</p>
    <p v-if='st === 2'>已完成</p>
    </div>

    <Card v-for='event in events' v-if='event.st == st'>
      <p style="font-size:30px"><strong>{{event.what}}</strong></p>
      <p>{{event.when}}, at {{event.where}}</p>
      <p></p>
      <Button-group style="width: 100%">
          <Button v-on:click='event.st -= 1' style="width: 33%" v-if='st==0' disabled>⬅ back</Button>
        <Button v-on:click='event.st -= 1' style="width: 33%" v-if='st!=0'>⬅ back</Button>
        <Button  v-on:click='event.st = -1' style="width: 33%">delete</Button>
        <Button type="primary" v-on:click='event.st += 1' style="width: 33%" v-if='st!=2'>next ➡</Button>
        <Button type="primary" v-on:click='event.st += 1' style="width: 33%" v-if='st==2'>save ➡</Button>
      </Button-group>
    </Card>
  </Card>
</Col>
</div>
</template>

<script>
export default {
  name: 'homepage',
  data () {
    return {
      modal1: false,
      status: [0, 1, 2],
      events: [
        {what: 'ICS course', where: '东上院102', when: '10：00 AM +1d', st: 0},
        {what: 'ALG course', where: '东上院202', when: '2：00 PM +1d', st: 0},
        {what: 'SE100 HW', where: 'Dorm', when: '12:00 AM + 3d', st: 0},
        {what: 'SE100 HW', where: 'Dorm', when: '12:00 AM + 3d', st: 1},
        {what: 'SE100 HW', where: 'Dorm', when: '12:00 AM + 3d', st: 2},
        {what: 'SE100 HW', where: 'Dorm', when: '12:00 AM + 3d', st: 0}
      ]
    }
  }
}
</script>

<style>
.el-col-6 {
    padding-right: 0px!important;
    padding-left: 20px!important;
}
  .time {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
</style>
