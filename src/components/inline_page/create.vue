<template>
<div>
    <Col span = '8' offset='6'>
    <Card class='create-eve'>
        <h1> 创建新的事件 </h1>
        <hr><br>
        <h2> 事件名称 </h2>
        <Input v-model="value1" size="large" placeholder="name" />

        <br><br>
        <h2> 事件地点 </h2>
        <Input v-model="value2" size="large" placeholder="location" />
        
        <br><br>
        <h2> 事件时间 </h2>
        <TimePicker format="HH:mm" placeholder="Select time" v-model="value3"></TimePicker><br><br>
        <router-link to='/'>
        <Button > 取消 </Button>
        </router-link>
        <Button type='primary' style="float:right;" @click='sure'> 确认 </Button>
    </Card>
    </Col>
    
</div>
</template>
<style>
</style>
<script>
export default {
  name: 'workspace',
  data () {
    return {
        numEv: 0,
        value1: '',
        value2: '',
        value3: '',
    }
  },
  methods: {
      sure () {
          window.eventBus = new Vue()
          var newEvent = {
              what: this.value1,
              where: this.value2,
              when: this.value3,
              st: 0
          }
          eventBus.$emit('ne', newEvent)
          numEv += 1
          console.log(newEvent)
      }
  }
}
</script>
