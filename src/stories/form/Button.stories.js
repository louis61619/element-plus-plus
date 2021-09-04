import { ref } from 'vue'
import ProForm from 'packages/form'
import { example1Config } from './config/example1.config'
import { example2Config } from './config/example2.config'

export default {
  title: 'Example/form',
  component: ProForm,
  argTypes: {
    // backgroundColor: { control: 'color' },
    // size: {
    //   control: { type: 'select', options: ['small', 'medium', 'large'] }
    // },
    // onClick: {}
    formItems: [
      {
        //       field: string
        // label: string
        // rules?: any[]
        // placeholder?: string
        // type?: IFormType
        // options?: any[]
        // isHidden?: boolean
        // // 其他的屬性
        // otherOptions?: any
        // slotName?: string
      }
    ]
  }
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ProForm },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const model = ref({})
    return { args, model }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<pro-form v-bind="args" v-model="model" />'
})

export const Example1 = Template.bind({})
Example1.args = example1Config

export const Example2 = Template.bind({})
Example2.args = example2Config
