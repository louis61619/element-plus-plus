<script lang="tsx">
import { defineComponent, ref, Ref, reactive, watchEffect } from 'vue'

import MonacoEditor from './components/ManocoEditor.vue'

import demos from './demos'

// import SchemaForm from '../lib'

// TODO: 在lib中export
type Schema = any
type UISchema = any

function toJson(data: any) {
  return JSON.stringify(data, null, 2)
}

// interface Config {
//   name: string
// }

export default defineComponent({
  setup() {
    const selectedRef: Ref<number> = ref(0)

    const demo: {
      schema: Schema | null
      data: any
      uiSchema: UISchema | null
      schemaCode: string
      dataCode: string
      uiSchemaCode: string
    } = reactive({
      schema: null,
      data: {},
      uiSchema: {},
      schemaCode: '',
      dataCode: '',
      uiSchemaCode: ''
    })

    watchEffect(() => {
      const index = selectedRef.value
      const d = demos[index]
      demo.schema = d.schema
      demo.data = d.default
      demo.uiSchema = d.uiSchema
      demo.schemaCode = toJson(d.schema)
      demo.dataCode = toJson(d.default)
      demo.uiSchemaCode = toJson(d.uiSchema)
    })

    const methodRef: Ref<any> = ref()

    // const handleChange = (v: any) => {
    //   demo.data = v
    //   demo.dataCode = toJson(v)
    // }

    function handleCodeChange(
      filed: 'schema' | 'data' | 'uiSchema',
      value: string
    ) {
      try {
        const json = JSON.parse(value)
        demo[filed] = json
        ;(demo as any)[`${filed}Code`] = value
      } catch (err) {
        // some thing
      }
    }

    const handleSchemaChange = (v: string) => handleCodeChange('schema', v)
    const handleDataChange = (v: string) => handleCodeChange('data', v)
    const handleUISchemaChange = (v: string) => handleCodeChange('uiSchema', v)

    return () => {
      // const selected = selectedRef.value

      console.log(methodRef)

      return (
        // <StyleThemeProvider>
        // <VJSFThemeProvider theme={theme as any}>
        <div class="main">
          <div>
            <h1>Vue3 JsonSchema Form</h1>
            <div>
              {demos.map((demo, index) => (
                <button onClick={() => (selectedRef.value = index)}>
                  {demo.name}
                </button>
              ))}
            </div>
          </div>
          <div class="content">
            <div class="code">
              <MonacoEditor
                code={demo.schemaCode}
                class="panel"
                onChange={handleSchemaChange}
                title="Schema"
              />
              <div>
                <MonacoEditor
                  code={demo.uiSchemaCode}
                  class="panel"
                  onChange={handleUISchemaChange}
                  title="UISchema"
                />
                <MonacoEditor
                  code={demo.dataCode}
                  class="panel"
                  onChange={handleDataChange}
                  title="Value"
                />
              </div>
            </div>
            <div></div>
          </div>
        </div>
        // </VJSFThemeProvider>
        // </StyleThemeProvider>
      )
    }
  }
})
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 1200px;
  margin: 0 auto;
}
.panel {
  min-height: 400px;
  margin-bottom: 20;
}
.content {
  display: flex;
}
.code {
  width: 600px;
}
</style>
