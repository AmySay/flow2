/**
* Created by OXOYO on 2019/7/1.
*
*/

<style scoped lang="less" rel="stylesheet/less">
  .nodeDetails {
    display: inline-block;
    width: calc(100% - 20px);
    box-sizing: content-box;
    padding: 0 10px;
    padding-top: 10px;
    height: 100%;
    overflow: hidden;
  }
</style>

<template>
  <div class="nodeDetails">
    <el-button type="primary"  @click="onSubmit">提交</el-button>
    <el-form :model="form" label-position='top' label-width="100px">
      <el-form-item label="tagName" prop="tagName" class='el-form-details'>
        <el-select
          v-model="form.tagName"
          style='width:100%'
          clearable
        >
          <el-option
            v-for="item in tagNameList"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="modelName" prop="modelName" class='el-form-details'>
        <el-select
          v-model="form.modelName"
          style='width:100%'
          clearable
        >
          <el-option
            v-for="item in modelNameList"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          />
        </el-select>
      </el-form-item>

      <div v-for='item in paramList'>
        <el-form-item :prop="item.name" class='el-form-details'>
            <span :label="item.name" :prop="item.name" class='el-form-item__label'>
              {{item.name}}
              <el-tooltip  slot="label" v-show = 'item.description' effect="dark" :content="item.description"
                           placement="top">
              <i
                class="el-icon-question el-input__icon"
              >
              </i>
              </el-tooltip>

            </span>
          <el-input v-model="item.defaultValue" :placehold='item.description'>
            <template v-if='item.unit' slot="append">{{item.unit}}</template>
          </el-input>
        </el-form-item>
      </div>
    </el-form>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        form: {
          tagName: '',
          modelName: ''
        },
        firstItem: null
      }
    },
    name: 'Details',
    props: {
      originData: {
        type: Array,
        default: () => { return [] }
      }
    },
    methods: {
      onSubmit () {
        console.log(this.editor)
        console.log(this.currentItem)
        // this.$X.utils.bus.$emit('submit', { form: this.form, paramList: this.paramList })
        let _t = this
        if (_t.currentItem.length) {
          const model = _t.currentItem[0]
          const params = { form: this.form, paramList: this.paramList }
          if (!model.params || JSON.stringify(model.params) !== JSON.stringify(params)) {
            _t.currentItem[0].model.params = {}
            _t.currentItem[0].model.params = params
          }
        }
        // 广播事件
        _t.$X.utils.bus.$emit('editor/currentItem/update', _t.currentItem)
      }
    },
    watch: {
      currentItem: {
        handler (val) {
          let _t = this
          // 取第一个节点
          _t.firstItem = val[0]
          if (_t.firstItem) {
            const params = JSON.parse(JSON.stringify(_t.firstItem.model.params))
            this.form = params.form
            this.paramList = params.paramList
          } else {
            _t.formData = {}
          }
        },
        deep: true
      }
    },
    computed: {
      ...mapGetters([
        'editor',
        'currentItem'
      ]),
      tagNameList () {
        return this.originData.map(item => {
          return {
            label: item.tagName,
            value: item.tagName
          }
        })
      },
      tagModelList () {
        if (this.form.tagName && this.originData.length) {
          return this.originData.filter(item =>
            item.tagName === this.form.tagName
          )[ 0 ] || {}
        } else {
          return {}
        }
      },
      modelNameList () {
        if (this.tagModelList && this.tagModelList.tagModel) {
          return this.tagModelList.tagModel.map(item => {
            return {
              label: item.modelName,
              value: item.modelName
            }
          })
        }
        return []
      },
      modelList () {
        if (this.form.modelName && this.tagModelList.tagModel && this.tagModelList.tagModel.length) {
          return this.tagModelList.tagModel.filter(item =>
            item.modelName === this.form.modelName
          )[ 0 ] || {}
        } else {
          return {}
        }
      },
      paramList: {
        get: function () {
          if (this.modelList && this.modelList.paramList) { return this.modelList.paramList }
          return []
        },
        set: function (val) {
          this.paramList = val
        }
      }
    }
    /* watch: {
      currentItem: {
        handler (val) {
          let _t = this
          // 取第一个节点
          _t.firstItem = val[0]
          if (_t.firstItem) {
            const { form, paramList } = JSON.parse(JSON.stringify(_t.firstItem))
            _t.form = form
            // _t.paramList = paramList
          } else {
            _t.form = {}
            // _t.paramList = []
          }
        },
        deep: true
      }
    } */
  }
</script>
