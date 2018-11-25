import Vue from 'vue'
import newEvent from '@/components/inline_page/create'

describe('create.vue', () => {
    it('创建Event Object测试', () => {
      const Constructor = Vue.extend(newEvent)
      const vm = new Constructor().$mount()
      const createBtn = vm.$el.querySelector('Button')
      const clickEvent = new window.Event('click')
      createBtn.dispatchEvent(clickEvent)
      vm._watcher.run()
      expect(vm.$el.querySelector('.create-eve h1').textContent)
        .toEqual(' 创建新的事件 ')
    })
  })