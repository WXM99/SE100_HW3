<style scoped>
  .layout {
    border: 0px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 0px;
    overflow: hidden;
    text-align: left;
  }

  .layout-logo {
    width: 100px;
    height: 35px;
    border-radius: 3px;
    float: left;
    position: inherit;
    top: 7px;
    align-self: center;
    text-align: center;
  }
  .layout-logo:hover {
    width: 100px;
    height: 35px;
    border-radius: 3px;
    float: left;
    position: inherit;
    top: 7px;
    align-self: center;
    text-align: center;
  }

  .layout-nav {
    margin-top: -5px;
    margin-right: -102px;
    float: right;
  }

  .topbar {
    background: #54ac80;
    height: 50px;
  }

  .logo-min {
    margin: -11px;
    max-width:90%;
    opacity: 1.0;
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
  .ivu-menu-item {
    color: rgb(35, 85, 54);
  }
  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after {
    content: '';
    display: block;
    width: 2px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    background: rgba(47, 189, 130, 0.2);
}
.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    color: #000;
    background: rgba(35, 167, 134, 0.514);
    z-index: 2;
}

.ivu-menu :hover{
    color: #29472a;
}
</style>
<template>
  <div class="layout" style='min-height: 100%'>
    <Layout >
      <Header class='topbar'>
        <Menu mode="horizontal" theme="dark" active-name="1" class='topbar'>
          <Row>
            <Col span='3' offset='0' class="layout-logo" style="overflow: hidden;">
              <Button type="primary" style="margin-top:-25px;" @click='showCon'>
                <p style="font-size: 20px; margin-left: -8px;font-family: cursive">
                  <strong style="color: #fff">XM_Note</strong>
                </p>
              </Button>
            </Col>
            <Col class="layout-nav">
            <MenuItem name='i'>
              <Button icon="md-add" type="primary" @click='newEvn'>New</Button>
            <instruct></instruct>
            <Icon type="md-notifications"></Icon>
            <Poptip trigger="hover" title='最近通知'>
              <noticeTop></noticeTop>
              <div class="api" slot="content" style="color:#000">
                test
              </div>
            </Poptip>
            </MenuItem>
            </Col>
          </Row>
        </Menu>
      </Header>
      <Layout :style="{padding: '30px 50px'}">
        <Row>
          <Col span='4'>
          <Content :style="{padding: '24px 0', background: '#fff', width: '190px', overflow: 'hidden'}">
            <Layout>
              <Sider hide-trigger :style="{background: '#fff'}">
                <Menu theme="light" width="auto">
                  <Submenu name="1">
                    <template slot="title">
                      <Icon type="ios-navigate"></Icon>
                      我的事件
                    </template>
                    <MenuItem name="1-1"> <div  @click ='showCon'  class = 'menu-title'>控制台 </div></MenuItem>
                  </Submenu>
                  <Submenu name="2">
                    <template slot="title">
                      <Icon type="ios-keypad"></Icon>
                      创建事件
                    </template>
                    <MenuItem name="2-1" > <div @click='newEvn'>添加 </div></MenuItem>
                  </Submenu>
                  <Submenu name="3">
                    <template slot="title">
                      <Icon type="ios-analytics"></Icon>
                      存档
                    </template>
                    <MenuItem name="3-1" ><div @click='showSaved'>所有存档</div></MenuItem>
                    <MenuItem name="3-2"><div  @click='showSaved'>最近存档</div></MenuItem>
                  </Submenu>
                </Menu>
              </Sider>
            </Layout>
          </Content>
          </Col>
          <Col span = '20'>
            <div width=100%, height=100%, margin-left=-50px v-if='show == true'>
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
          
            <div v-if='create == true'>
                <Col span = '8' offset='6'>
                <Card>
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
                    <Button @click='showCon'> 取消 </Button>
                    <Button type='primary' style="float:right;" @click='sure'> 确认 </Button>
                </Card>
                </Col>
            </div>

            <div width=100%, height=100%, margin-left=-50px v-if='saved == true'>
                <Col span ='7' offset='1'>
                <Card>
                  <div style="font-size: 20px;">
                  <p >存档事件</p>
                  </div>
                  <Card v-for='event in events' v-if='event.st == 3'>
                    <p style="font-size:30px"><strong>{{event.what}}</strong></p>
                    <p>{{event.when}}, at {{event.where}}</p>
                    <p></p>
                  </Card>
                </Card>
              </Col>
              </div>
          </Col>
        </Col>
        </Row>
      </Layout>
      <Footer class="layout-footer-center" style="text-align: center">2018 &copy; School of Software, Shanghai Jiao Tong Univ. WXM</Footer>
    </Layout>
  </div>
  </div>
</template>
<script>
import noticeTop from './widgets/display/notification-top.vue'
import instruct from './widgets/display/instruction.vue'
import homepage from '../components/inline_page/homepage'
export default {
  name: 'fix',
  components: {
    noticeTop,
    instruct,
    homepage
  },
  data () {
    return {
      value1: '',
      value2: '',
      value3: '',
      show: true,
      create: false,
      saved: false,
      status: [0, 1, 2],
      events: [
        {what: 'ICS course', where: '东上院102', when: '10：00 AM +1d', st: 0},
        {what: 'ALG coures', where: '东上院202', when: '2：00 PM +1d', st: 0},
        {what: 'SE100 HW', where: 'Dorm', when: '12:00 AM + 3d', st: 0},
        {what: 'SE100 HW', where: 'Dorm', when: '12:00 AM + 3d', st: 1},
        {what: 'SE100 HW', where: 'Dorm', when: '12:00 AM + 3d', st: 2},
        {what: 'SE100 HW', where: 'Dorm', when: '12:00 AM + 3d', st: 2}
      ]
    }
  },
  methods: {
    newEvn () {
      this.create = true
      this.show = false
      this.saved = false
    },
    showCon () {
      this.create = false
      this.show = true
      this.saved = false
    },
    showSaved () {
      this.create = false
      this.show = false
      this.saved = true
    },
    sure () {
      var newEvent = {
        what: this.value1,
        where: this.value2,
        when: this.value3,
        st: 0
      }
      var newEvs = []
      for(var i =0; i < this.events.length; i++){
        newEvs[i] = this.events[i]
      }
      newEvs[this.events.length] = newEvent
      this.events = newEvs
      this.create = false
      this.show = true
      this.saved = false
    }
  }
}
</script>
