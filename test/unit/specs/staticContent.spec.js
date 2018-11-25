import Vue from 'vue'
import fixed from '@/components/fix'

describe('fix.vue', () => {
    it('Topbar静态内容测试', () => {
      const Constructor = Vue.extend(fixed)
      const vm = new Constructor().$mount()
      expect(vm.$el.querySelector('.layout-logo p').textContent)
        .toEqual('XM_Note')
    })
    it('sidebar静态内容测试', () => {
      const Constructor = Vue.extend(fixed)
      const vm = new Constructor().$mount()
      expect(vm.$el.querySelector('.menu-title').textContent)
        .toEqual('控制台 ')
    })
  })