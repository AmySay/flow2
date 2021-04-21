/**
* Created by OXOYO on 2019/8/22.
*
* App
*/

<style lang="less">
@import "./index.less";
</style>
<template>

  <div class="index-style">
    <svgList @showEventModal = 'handleShowEventModal'></svgList>
    <el-dialog
      title="新增线路故障"
      :visible.sync="showEventModal"
      width="800"
      :before-close="() => {showEventModal = false}">

      <el-form ref="form" :model="form" label-width="150px">
        <el-form-item label="故障线路:">
          <el-input v-model="form.line_key" disabled></el-input>
        </el-form-item>

        <el-form-item label="请输入故障比例:"
                      :rules="[
                        { required: true, message: '请输入故障比例',  },
                        { type: 'number', message: '故障比例范围为0~1', max: 1,
                          min: 0,trigger: ['blur', 'change'] }
                      ]">
          <el-input-number style = 'width: 100%' v-model="form.ratio" :precision="2" :step="0.1" :max="1" :min="0"></el-input-number>
        </el-form-item>

        <el-form-item label="故障线路:">
        <el-date-picker
          style = 'width: 100%'
          :clearable = 'false'
          v-model="form.time"
          format = 'yyyy-MM-dd HH:mm:ss'
          type="datetime"
          placeholder="选择日期时间">
        </el-date-picker>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="showEventModal = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import svgList from "@/svgList";
import moment from 'moment'
import {addLineEvent} from '@/api/yuTao2'

export default {
  name: 'App',
  components: {
    svgList
  },
  data() {
    return {
      showEventModal: false,
      form: {
        line_key: null,
        ratio: '',
        time: moment().format('YYYY-MM-DD HH:mm:ss')
      }
    }
  },
  methods: {
    handleShowEventModal({ lineName, showEventModal}){
      this.form.line_key = lineName
      this.showEventModal = showEventModal
    },
    handleSubmit(values){
      this.$refs.form.validate(valid => {
        if (!valid) return
        console.log(this.form)
        addLineEvent({...this.form}).then(res => {
          this.$message.success('新增线路故障信息成功');
        })
          /*.catch(() => {
          this.$message.error('新增线路故障信息失败');
        })*/
      })
    },
  },
}
</script>
