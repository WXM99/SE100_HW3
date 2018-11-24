<template>
        <Poptip v-model="visible">
            <Button class = 'instr' icon="md-information-circle" type="primary">instruction</Button>
            <div slot="title" class='ins-title'><i>欢迎使用！</i></div>
            <div slot="content" class='ins-con'>
                <Row>
                
                </Row>
                <Row>
                这是一些引导内容。
                </Row>
                <br>
                <Button @click="close">close</Button>
                <Button type="primary" class='next-ins' @click='next'>下一条</Button>
            </div>
        </Poptip>
</template>
<style>
.next-ins{
    float:right;
}
.ins-con{
    color: black;
    font-size: 15px;
}
.ins-title{
    color: black;
    font-size: 25px;
}
.ivu-btn-primary {
    color: #fff;
    background-color: #296d43;
    border-color: #1f6843;
  }
  .ivu-btn-primary:hover {
    color: rgb(17, 25, 43);
    background-color: #9deb9d;
    border-color: #9deba7
  }
.ivu-btn {
    font-size: 15px;
  }
</style>
<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    close () {
      this.visible = false
    },
    next () {
      console.log('next')
    }
  }
}
</script>
