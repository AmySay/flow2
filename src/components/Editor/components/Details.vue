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
  export default {
    data () {
      return {
        form: {
          tagName: '',
          modelName: ''
        }
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
        this.$X.utils.bus.$emit('submit', { form: this.form, paramList: this.paramList })
      }
    },
    computed: {
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
      paramList () {
        if (this.modelList && this.modelList.paramList) { return this.modelList.paramList }
        return []
      }
    }
  }
</script>
