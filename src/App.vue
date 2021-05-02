/**
* Created by OXOYO on 2019/8/22.
*
* App
*/

<style lang="less">

@import "./index.less";

</style>
<template>
  <div class = 'yutao'>

  <div class="svg-box">
    <h4 class="title">负荷转供</h4>
    <div class="index-style">
      <svgList @showEventModal = 'handleShowEventModal'></svgList>
      <el-dialog
        title="新增线路故障"
        :visible.sync="showEventModal"
        width="500"
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

          <el-form-item label="故障时间:">
            <el-input placeholder="请输入故障时间" :min = '0' v-model="form.time" type = 'number'> <template slot="append">单位（秒）</template></el-input>
          </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer">
            <el-button @click="showEventModal = false">取 消</el-button>
            <el-button type="primary" @click="handleSubmit">确 定</el-button>
          </span>
      </el-dialog>
    </div>
  </div>

    <div class="right_content">

      <div class='button_content'>
        <el-button @click="dialogVisible = true">开始仿真</el-button>
        <el-button type="" @click='getRegtogglers'>获取开关倒闸方案</el-button>
        <div style="margin-top: 10px">
          <el-button @click='getelementparasFn'>查看仿真波形</el-button>
        </div>
      </div>
      <div class="flex_layout">
        <div class="table flex—item">
          <el-divider content-position="left">负荷转供倒闸方案</el-divider>
          <el-card class="box-card">
            <el-table
              :data="tableData"
              border
              empty-text='暂无数据'
              height="250px"
              style="width: 100%">
              <el-table-column
                v-for='item in tableHeader'
                :key  = 'item.prop'
                align="center"
                :prop="item.prop"
                :label="item.label">
              </el-table-column>

            </el-table>
          </el-card>
        </div>

        <div class='history flex—item'>
          <el-divider content-position="left">操作轨迹</el-divider>
          <el-card class="box-card">
          </el-card>
        </div>

        <div class="flex—item">
          <el-divider content-position="left">曲线图</el-divider>
          <div id="main">
          </div>
        </div>
      </div>
    </div>



  </div>

</template>

<script>
import svgList from "@/svgList";
import moment from 'moment'
import {addLineEvent,settingparameters,
  startrunning,
  regtogglers,
  settoggleraction,
  getelementparas} from '@/api/yuTao2'


import * as echarts from 'echarts/core';
import {BarChart} from 'echarts/charts';
import {LineChart} from 'echarts/charts';
import {GridComponent} from 'echarts/components';
// 注意，新的接口中默认不再包含 Canvas 渲染器，需要显示引入，如果需要使用 SVG 渲染模式则使用 SVGRenderer
import {CanvasRenderer} from 'echarts/renderers';

echarts.use([LineChart, GridComponent, CanvasRenderer]);

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
        time: ''
      },
      tableData: [],
      tableHeader: [
        {
          label: '开关编号',
          prop: 'name'
        },
        {
          label: '操作时间',
          prop: 'date'
        }
      ],
    }
  },
  methods: {
    settingparametersFn(){
      console.log(this.formData)
      settingparameters({...this.formData}).then(() => {
        startrunning()
      })
    },
    getelementparasFn() {
      getelementparas({"eleNo": 123})
      let res = {
        "element_paras": {
          "qSlack": 777,
          "aBus": 444,
          "pSlack": 666,
          "time": 15129,
          "deltaGENROU": 30,
          "vBou": 555,
          "omegaGENROU": 45,
          "iLine": 5
        }
      }
      let option = {
        xAxis: {
          type: 'category',
          data: ['15129', '15130', '15131', '15132', '15133', '15134', '15135']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [620, 732, 801, 934, 1090, 1130, 1320],
          type: 'line',
          smooth: true
        }]
      };
      this.drawChart(option)
    },
    settoggleractionFn() {
      settoggleraction({"togglerNo": 123})
    },
    getRegtogglers() {
      regtogglers().then(res => {
        this.tableData = res.reg_togglers.map(item => {
          return {
            name: item,
            date: moment().format("YYYY-MM-DD")
          }
        })
      })
    },
    async drawChart(option) {
      if (option) {
        let myChart = echarts.init(document.getElementById("main"));
        myChart.setOption(option);
      }
    },
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
          this.showEventModal = false
        })
      })
    },
  },
}
</script>
