import Vue from 'vue'
import { expect } from 'chai'
import { mount, RouterLinkStub } from '@vue/test-utils'
import HomePage from '@/components/pages/HomePage.vue'

describe('HomePage.vue', () => {
  let recipe = {
    id: '4c3fa0e0-85b3-11ea-be04-7daee699048f',
    name: 'The Best Chicken Tikka Masala Recipe'
  }

  let wrapper = mount(HomePage, {
    computed: {
      recipes: function () {
        return [recipe]
      }
    },
    stubs: {
      RouterLink: RouterLinkStub
    }
  });

  it('displays the home page', () => {
    const description = 'This app is for determining what to make for dinner';
    expect(wrapper.text()).to.include(description);
  })

  it('finds a random recipe when button clicked', async () => {
    wrapper.find('button').trigger('click');

    await Vue.nextTick();

    expect(wrapper.text()).to.include('The Best Chicken Tikka Masala Recipe');
  })
})
