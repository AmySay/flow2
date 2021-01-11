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
          @change="handleChange"
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
          @change="handleChange"
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
        originData: [],
        form: {
          tagName: '',
          modelName: ''
        }
      }
    },
    name: 'Details',
    methods: {
      onSubmit () {
        console.log('submit!')
        console.log(this.form)
        console.log(this.paramList)
      },
      handleChange () {
        console.log(this.tagModelList, 'tagModelList')
        console.log(this.modelList, 'modelList')
      }
    },
    mounted () {
      this.originData = [
        {
          'tagId': 1,
          'tagName': 'SynGen',
          'tagModel': [{
            'modelId': 1,
            'modelName': 'GENROU',
            'paramList': [{
              'id': 1,
              'name': 'idx',
              'description': 'unique device idx',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 2,
              'name': 'u',
              'description': 'connection status',
              'defaultValue': '1.0000',
              'unit': 'GUI'
            }, {
              'id': 3,
              'name': 'name',
              'description': 'device name',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 4,
              'name': 'bus',
              'description': 'interface bus id',
              'defaultValue': '',
              'unit': ' GUI'
            }, {
              'id': 5,
              'name': 'gen',
              'description': 'static generator index',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 6,
              'name': 'coi',
              'description': 'center of inertia index',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 7,
              'name': 'Sn',
              'description': 'Power rating',
              'defaultValue': '100.0000',
              'unit': ''
            }, {
              'id': 8,
              'name': 'Vn',
              'description': 'AC voltage rating',
              'defaultValue': '110.0000',
              'unit': ''
            }, {
              'id': 9,
              'name': 'fn',
              'description': 'rated frequency',
              'defaultValue': '60.0000',
              'unit': ''
            }, {
              'id': 10,
              'name': 'D',
              'description': 'Damping coefficient',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 11,
              'name': 'M',
              'description': 'machine start up time (2H)',
              'defaultValue': '6.0000',
              'unit': ''
            }, {
              'id': 12,
              'name': 'ra',
              'description': 'armature resistance',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 13,
              'name': 'xl',
              'description': 'leakage reactance',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 14,
              'name': 'xd1',
              'description': 'd-axis transient reactance',
              'defaultValue': '0.3020',
              'unit': ''
            }, {
              'id': 15,
              'name': 'kp',
              'description': 'active power feedback gain',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 16,
              'name': 'kw',
              'description': 'speed feedback gain',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 17,
              'name': 'S10',
              'description': 'first saturation factor',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 18,
              'name': 'S12',
              'description': 'second saturation factor',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 19,
              'name': 'xd',
              'description': 'd-axis synchronous reactance',
              'defaultValue': '1.9000',
              'unit': ''
            }, {
              'id': 20,
              'name': 'xq',
              'description': 'q-axis synchronous reactance',
              'defaultValue': '1.7000',
              'unit': ''
            }, {
              'id': 21,
              'name': 'xd2',
              'description': 'd-axis sub-transient reactance',
              'defaultValue': '0.2040',
              'unit': ''
            }, {
              'id': 22,
              'name': 'xq1',
              'description': 'q-axis transient reactance',
              'defaultValue': '0.5000',
              'unit': ''
            }, {
              'id': 23,
              'name': 'xq2',
              'description': 'q-axis sub-transient reactance',
              'defaultValue': '0.3000',
              'unit': ''
            }, {
              'id': 24,
              'name': 'Td10',
              'description': 'd-axis transient time constant',
              'defaultValue': '8.0000',
              'unit': ''
            }, {
              'id': 25,
              'name': 'Td20',
              'description': 'd-axis sub-transient time constant',
              'defaultValue': '0.0400',
              'unit': ''
            }, {
              'id': 26,
              'name': 'Tq10',
              'description': 'q-axis transient time constant',
              'defaultValue': '0.8000',
              'unit': ''
            }, {
              'id': 27,
              'name': 'Tq20',
              'description': 'q-axis sub-transient time constant',
              'defaultValue': '0.0200',
              'unit': ''
            }]
          }]
        }, {
          'tagId': 2,
          'tagName': 'Exciter',
          'tagModel': [{
            'modelId': 2,
            'modelName': 'EXDC2',
            'paramList': [{
              'id': 28,
              'name': 'idx',
              'description': 'unique device idx',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 29,
              'name': 'u',
              'description': 'connection status',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 30,
              'name': 'name',
              'description': 'device name',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 31,
              'name': 'syn',
              'description': 'Synchronous generator idx',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 32,
              'name': 'TR',
              'description': 'Sensing time constant',
              'defaultValue': '0.0100',
              'unit': ''
            }, {
              'id': 33,
              'name': 'TA',
              'description': 'Lag time constant in anti-windup lag',
              'defaultValue': '0.0400',
              'unit': ''
            }, {
              'id': 34,
              'name': 'TC',
              'description': 'Lead time constant in lead-lag',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 35,
              'name': 'TB',
              'description': 'Lag time constant in lead-lag',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 36,
              'name': 'TE',
              'description': 'Exciter integrator time constant',
              'defaultValue': '0.8000',
              'unit': ''
            }, {
              'id': 37,
              'name': 'TF1',
              'description': 'Feedback washout time constant',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 38,
              'name': 'KF1',
              'description': 'Feedback washout gain',
              'defaultValue': '0.0300',
              'unit': ''
            }, {
              'id': 39,
              'name': 'KA',
              'description': 'Gain in anti-windup lag TF',
              'defaultValue': '40.0000',
              'unit': ''
            }, {
              'id': 40,
              'name': 'KE',
              'description': 'Gain added to saturation',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 41,
              'name': 'VRMAX',
              'description': 'Maximum excitation limit',
              'defaultValue': '7.3000',
              'unit': ''
            }, {
              'id': 42,
              'name': 'VRMIN',
              'description': 'Minimum excitation limit',
              'defaultValue': '-7.3000',
              'unit': ''
            }, {
              'id': 43,
              'name': 'E1',
              'description': 'First saturation point',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 44,
              'name': 'SE1',
              'description': 'Value at first saturation point',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 45,
              'name': 'E2',
              'description': 'Second saturation point',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 46,
              'name': 'SE2',
              'description': 'Value at second saturation point',
              'defaultValue': '1.0000',
              'unit': ''
            }]
          }, {
            'modelId': 3,
            'modelName': 'IEEEX1',
            'paramList': [{
              'id': 47,
              'name': 'idx',
              'description': 'unique device idx',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 48,
              'name': 'u',
              'description': 'connection status',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 49,
              'name': 'name',
              'description': 'device name',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 50,
              'name': 'syn',
              'description': 'Synchronous generator idx',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 51,
              'name': 'TR',
              'description': 'Sensing time constant',
              'defaultValue': '0.0100',
              'unit': ''
            }, {
              'id': 52,
              'name': 'TA',
              'description': 'Lag time constant in anti-windup lag',
              'defaultValue': '0.0400',
              'unit': ''
            }, {
              'id': 53,
              'name': 'TC',
              'description': 'Lead time constant in lead-lag',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 54,
              'name': 'TB',
              'description': 'Lag time constant in lead-lag',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 55,
              'name': 'TE',
              'description': 'Exciter integrator time constant',
              'defaultValue': '0.8000',
              'unit': ''
            }, {
              'id': 56,
              'name': 'TF1',
              'description': 'Feedback washout time constant',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 57,
              'name': 'KF1',
              'description': 'Feedback washout gain',
              'defaultValue': '0.0300',
              'unit': ''
            }, {
              'id': 58,
              'name': 'KA',
              'description': 'Gain in anti-windup lag TF',
              'defaultValue': '40.0000',
              'unit': ''
            }, {
              'id': 59,
              'name': 'KE',
              'description': 'Gain added to saturation',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 60,
              'name': 'VRMAX',
              'description': 'Maximum excitation limit',
              'defaultValue': '7.3000',
              'unit': ''
            }, {
              'id': 61,
              'name': 'VRMIN',
              'description': 'Minimum excitation limit',
              'defaultValue': '-7.3000',
              'unit': ''
            }, {
              'id': 62,
              'name': 'E1',
              'description': 'First saturation point',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 63,
              'name': 'SE1',
              'description': 'Value at first saturation point',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 64,
              'name': 'E2',
              'description': 'Second saturation point',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 65,
              'name': 'SE2',
              'description': 'Value at second saturation point',
              'defaultValue': '1.0000',
              'unit': ''
            }]
          }, {
            'modelId': 4,
            'modelName': 'ESDC2A',
            'paramList': [{
              'id': 66,
              'name': 'idx',
              'description': 'unique device idx',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 67,
              'name': 'u',
              'description': 'connection status',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 68,
              'name': 'name',
              'description': 'device name',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 69,
              'name': 'syn',
              'description': 'Synchronous generator idx',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 70,
              'name': 'TR',
              'description': 'Sensing time constant',
              'defaultValue': '0.0100',
              'unit': ''
            }, {
              'id': 71,
              'name': 'KA',
              'description': 'Regulator gain',
              'defaultValue': '80.0000',
              'unit': ''
            }, {
              'id': 72,
              'name': 'TA',
              'description': 'Lag time constant in regulator',
              'defaultValue': '0.0400',
              'unit': ''
            }, {
              'id': 73,
              'name': 'TB',
              'description': 'Lag time constant in lead-lag',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 74,
              'name': 'TC',
              'description': 'Lead time constant in lead-lag',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 75,
              'name': 'VRMAX',
              'description': 'Max. exc. limit (0-unlimited)',
              'defaultValue': '7.3000',
              'unit': ''
            }, {
              'id': 76,
              'name': 'VRMIN',
              'description': 'Min. excitation limit',
              'defaultValue': '-7.3000',
              'unit': ''
            }, {
              'id': 77,
              'name': 'KE',
              'description': 'Saturation feedback gain',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 78,
              'name': 'TE',
              'description': 'Integrator time constant',
              'defaultValue': '0.8000',
              'unit': ''
            }, {
              'id': 79,
              'name': 'KF',
              'description': 'Feedback gain',
              'defaultValue': '0.1000',
              'unit': ''
            }, {
              'id': 80,
              'name': 'TF1',
              'description': 'Feedback washout time constant',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 81,
              'name': 'Switch',
              'description': 'Switch that PSS/E did not implement',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 82,
              'name': 'E1',
              'description': 'First saturation point',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 83,
              'name': 'SE1',
              'description': 'Value at first saturation point',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 84,
              'name': 'E2',
              'description': 'Second saturation point',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 85,
              'name': 'SE2',
              'description': 'Value at second saturation point',
              'defaultValue': '0.0000',
              'unit': ''
            }]
          }, {
            'modelId': 5,
            'modelName': 'EXST1',
            'paramList': [{
              'id': 86,
              'name': 'idx',
              'description': 'unique device idx',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 87,
              'name': 'u',
              'description': 'connection status',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 88,
              'name': 'name',
              'description': 'device name',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 89,
              'name': 'syn',
              'description': 'Synchronous generator idx',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 90,
              'name': 'TR',
              'description': 'Measurement delay',
              'defaultValue': '0.0100',
              'unit': ''
            }, {
              'id': 91,
              'name': 'VIMAX',
              'description': 'Max. input voltage',
              'defaultValue': '0.2000',
              'unit': ''
            }, {
              'id': 92,
              'name': 'VIMIN',
              'description': 'Min. input voltage',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 93,
              'name': 'TC',
              'description': 'LL numerator',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 94,
              'name': 'TB',
              'description': 'LL denominator',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 95,
              'name': 'KA',
              'description': 'Regulator gain',
              'defaultValue': '80.0000',
              'unit': ''
            }, {
              'id': 96,
              'name': 'TA',
              'description': 'Regulator delay',
              'defaultValue': '0.0500',
              'unit': ''
            }, {
              'id': 97,
              'name': 'VRMAX',
              'description': 'Max. regulator output',
              'defaultValue': '8.0000',
              'unit': ''
            }, {
              'id': 98,
              'name': 'VRMIN',
              'description': 'Min. regulator output',
              'defaultValue': '-3.0000',
              'unit': ''
            }, {
              'id': 99,
              'name': 'KC',
              'description': 'Coef. for Ifd',
              'defaultValue': '0.2000',
              'unit': ''
            }, {
              'id': 100,
              'name': 'KF',
              'description': 'Feedback gain',
              'defaultValue': '0.1000',
              'unit': ''
            }, {
              'id': 101,
              'name': 'TF',
              'description': 'Feedback delay',
              'defaultValue': '1.0000',
              'unit': ''
            }]
          }, {
            'modelId': 6,
            'modelName': 'ESST3A',
            'paramList': [{
              'id': 102,
              'name': 'idx',
              'description': 'unique device idx',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 103,
              'name': 'u',
              'description': 'connection status',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 104,
              'name': 'name',
              'description': 'device name',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 105,
              'name': 'syn',
              'description': 'Synchronous generator idx',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 106,
              'name': 'TR',
              'description': 'Sensing time constant',
              'defaultValue': '0.0100',
              'unit': ''
            }, {
              'id': 107,
              'name': 'VIMAX',
              'description': 'Max. input voltage',
              'defaultValue': '0.8000',
              'unit': ''
            }, {
              'id': 108,
              'name': 'VIMIN',
              'description': 'Min. input voltage',
              'defaultValue': '-0.1000',
              'unit': ''
            }, {
              'id': 109,
              'name': 'KM',
              'description': 'Forward gain constant',
              'defaultValue': '500.0000',
              'unit': ''
            }, {
              'id': 110,
              'name': 'TC',
              'description': 'Lead time constant in lead-lag',
              'defaultValue': '3.0000',
              'unit': ''
            }, {
              'id': 111,
              'name': 'TB',
              'description': 'Lag time constant in lead-lag',
              'defaultValue': '15.0000',
              'unit': ''
            }, {
              'id': 112,
              'name': 'KA',
              'description': 'Gain in anti-windup lag TF',
              'defaultValue': '50.0000',
              'unit': ''
            }, {
              'id': 113,
              'name': 'TA',
              'description': 'Lag time constant in anti-windup lag',
              'defaultValue': '0.1000',
              'unit': ''
            }, {
              'id': 114,
              'name': 'VRMAX',
              'description': 'Maximum excitation limit',
              'defaultValue': '8.0000',
              'unit': ''
            }, {
              'id': 115,
              'name': 'VRMIN',
              'description': 'Minimum excitation limit',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 116,
              'name': 'KG',
              'description': 'Feedback gain of inner field regulator',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 117,
              'name': 'KP',
              'description': 'Potential circuit gain coeff.',
              'defaultValue': '4.0000',
              'unit': ''
            }, {
              'id': 118,
              'name': 'KI',
              'description': 'Potential circuit gain coeff.',
              'defaultValue': '0.1000',
              'unit': ''
            }, {
              'id': 119,
              'name': 'VBMAX',
              'description': 'VB upper limit',
              'defaultValue': '18.0000',
              'unit': ''
            }, {
              'id': 120,
              'name': 'KC',
              'description': 'Rectifier loading factor proportional to commutating reactance',
              'defaultValue': '0.1000',
              'unit': ''
            }, {
              'id': 121,
              'name': 'XL',
              'description': 'Potential source reactance',
              'defaultValue': '0.0100',
              'unit': ''
            }, {
              'id': 122,
              'name': 'VGMAX',
              'description': 'VG upper limit',
              'defaultValue': '4.0000',
              'unit': ''
            }, {
              'id': 123,
              'name': 'THETAP',
              'description': 'Rectifier firing angle',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 124,
              'name': 'TM',
              'description': 'Inner field regulator forward time constant',
              'defaultValue': '0.1000',
              'unit': ''
            }, {
              'id': 125,
              'name': 'VMMAX',
              'description': 'Maximum VM limit',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 126,
              'name': 'VMMIN',
              'description': 'Minimum VM limit',
              'defaultValue': '0.1000',
              'unit': ''
            }]
          }, {
            'modelId': 7,
            'modelName': 'SEXS',
            'paramList': [{
              'id': 127,
              'name': 'idx',
              'description': 'unique device idx',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 128,
              'name': 'u',
              'description': 'connection status',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 129,
              'name': 'name',
              'description': 'device name',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 130,
              'name': 'syn',
              'description': 'Synchronous generator idx',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 131,
              'name': 'TATB',
              'description': 'Time constant TA/TB',
              'defaultValue': '0.4000',
              'unit': ''
            }, {
              'id': 132,
              'name': 'TB',
              'description': 'Time constant TB in LL',
              'defaultValue': '5.0000',
              'unit': ''
            }, {
              'id': 133,
              'name': 'K',
              'description': 'Gain',
              'defaultValue': '20.0000',
              'unit': ''
            }, {
              'id': 134,
              'name': 'TE',
              'description': 'AW Lag time constant',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 135,
              'name': 'EMIN',
              'description': 'lower limit',
              'defaultValue': '-99.0000',
              'unit': ''
            }, {
              'id': 136,
              'name': 'EMAX',
              'description': 'upper limit',
              'defaultValue': '99.0000',
              'unit': ''
            }]
          }]
        }, {
          'tagId': 3,
          'tagName': 'TurbineGov',
          'tagModel': [{
            'modelId': 8,
            'modelName': 'TG2',
            'paramList': [{
              'id': 137,
              'name': 'idx',
              'description': 'unique device idx',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 138,
              'name': 'u',
              'description': 'connection status',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 139,
              'name': 'name',
              'description': 'device name',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 140,
              'name': 'syn',
              'description': 'Synchronous generator idx',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 141,
              'name': 'Tn',
              'description': 'Turbine power rating. Equal to Sn if not provided.',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 142,
              'name': 'wref0',
              'description': 'Base speed reference',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 143,
              'name': 'R',
              'description': 'Speed regulation gain (mach. base default)',
              'defaultValue': '0.0500',
              'unit': ''
            }, {
              'id': 144,
              'name': 'pmax',
              'description': 'Maximum power output',
              'defaultValue': '999.0000',
              'unit': ''
            }, {
              'id': 145,
              'name': 'pmin',
              'description': 'Minimum power output',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 146,
              'name': 'dbl',
              'description': 'Deadband lower limit',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 147,
              'name': 'dbu',
              'description': 'Deadband upper limit',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 148,
              'name': 'dbc',
              'description': 'Deadband neutral value',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 149,
              'name': 'T1',
              'description': 'Transient gain time',
              'defaultValue': '0.2000',
              'unit': ''
            }, {
              'id': 150,
              'name': 'T2',
              'description': 'Governor time constant',
              'defaultValue': '10.0000',
              'unit': ''
            }]
          }, {
            'modelId': 9,
            'modelName': 'TGOV1',
            'paramList': [{
              'id': 151,
              'name': 'idx',
              'description': 'unique device idx',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 152,
              'name': 'u',
              'description': 'connection status',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 153,
              'name': 'name',
              'description': 'device name',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 154,
              'name': 'syn',
              'description': 'Synchronous generator idx',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 155,
              'name': 'Tn',
              'description': 'Turbine power rating. Equal to Sn if not provided.',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 156,
              'name': 'wref0',
              'description': 'Base speed reference',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 157,
              'name': 'R',
              'description': 'Speed regulation gain (mach. base default)',
              'defaultValue': '0.0500',
              'unit': ''
            }, {
              'id': 158,
              'name': 'VMAX',
              'description': 'Maximum valve position',
              'defaultValue': '1.2000',
              'unit': ''
            }, {
              'id': 159,
              'name': 'VMIN',
              'description': 'Minimum valve position',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 160,
              'name': 'T1',
              'description': 'Valve time constant',
              'defaultValue': '0.1000',
              'unit': ''
            }, {
              'id': 161,
              'name': 'T2',
              'description': 'Lead-lag lead time constant',
              'defaultValue': '0.2000',
              'unit': ''
            }, {
              'id': 162,
              'name': 'T3',
              'description': 'Lead-lag lag time constant',
              'defaultValue': '10.0000',
              'unit': ''
            }, {
              'id': 163,
              'name': 'Dt',
              'description': 'Turbine damping coefficient',
              'defaultValue': '0.0000',
              'unit': ''
            }]
          }, {
            'modelId': 10,
            'modelName': 'IEEEG1',
            'paramList': [{
              'id': 164,
              'name': 'idx',
              'description': 'unique device idx',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 165,
              'name': 'u',
              'description': 'connection status',
              'defaultValue': '1.0000',
              'unit': 'bool'
            }, {
              'id': 166,
              'name': 'name',
              'description': 'device name',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 167,
              'name': 'syn',
              'description': 'Synchronous generator idx',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 168,
              'name': 'Tn',
              'description': 'Turbine power rating. Equal to Sn if not provided.',
              'defaultValue': '',
              'unit': 'MVA'
            }, {
              'id': 169,
              'name': 'wref0',
              'description': 'Base speed reference',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 170,
              'name': 'syn2',
              'description': 'Optional SynGen idx',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 171,
              'name': 'K',
              'description': 'Gain (1/R) in mach. base',
              'defaultValue': '20.0000',
              'unit': ''
            }, {
              'id': 172,
              'name': 'T1',
              'description': 'Gov. lag time const.',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 173,
              'name': 'T2',
              'description': 'Gov. lead time const.',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 174,
              'name': 'T3',
              'description': 'Valve controller time const.',
              'defaultValue': '0.1000',
              'unit': ''
            }, {
              'id': 175,
              'name': 'UO',
              'description': 'Max. valve opening rate',
              'defaultValue': '0.1000',
              'unit': ''
            }, {
              'id': 176,
              'name': 'UC',
              'description': 'Max. valve closing rate',
              'defaultValue': '-0.1000',
              'unit': ''
            }, {
              'id': 177,
              'name': 'PMAX',
              'description': 'Max. turbine power',
              'defaultValue': '5.0000',
              'unit': ''
            }, {
              'id': 178,
              'name': 'PMIN',
              'description': 'Min. turbine power',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 179,
              'name': 'T4',
              'description': 'Inlet piping/steam bowl time constant',
              'defaultValue': '0.4000',
              'unit': ''
            }, {
              'id': 180,
              'name': 'K1',
              'description': 'Fraction of power from HP',
              'defaultValue': '0.5000',
              'unit': ''
            }, {
              'id': 181,
              'name': 'K2',
              'description': 'Fraction of power from LP',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 182,
              'name': 'T5',
              'description': 'Time constant of 2nd boiler pass',
              'defaultValue': '8.0000',
              'unit': ''
            }, {
              'id': 183,
              'name': 'K3',
              'description': 'Fraction of HP shaft power after 2nd boiler pass',
              'defaultValue': '0.5000',
              'unit': ''
            }, {
              'id': 184,
              'name': 'K4',
              'description': 'Fraction of LP shaft power after 2nd boiler pass',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 185,
              'name': 'T6',
              'description': 'Time constant of 3rd boiler pass',
              'defaultValue': '0.5000',
              'unit': ''
            }, {
              'id': 186,
              'name': 'K5',
              'description': 'Fraction of HP shaft power after 3rd boiler pass',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 187,
              'name': 'K6',
              'description': 'Fraction of LP shaft power after 3rd boiler pass',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 188,
              'name': 'T7',
              'description': 'Time constant of 4th boiler pass',
              'defaultValue': '0.0500',
              'unit': ''
            }, {
              'id': 189,
              'name': 'K7',
              'description': 'Fraction of HP shaft power after 4th boiler pass',
              'defaultValue': '0.0000',
              'unit': ''
            }, {
              'id': 190,
              'name': 'K8',
              'description': 'Fraction of LP shaft power after 4th boiler pass',
              'defaultValue': '0.0000',
              'unit': ''
            }]
          }]
        }, {
          'tagId': 4,
          'tagName': 'PSS',
          'tagModel': [{
            'modelId': 11,
            'modelName': 'IEEEST',
            'paramList': [{
              'id': 191,
              'name': 'idx',
              'description': 'unique device idx',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 192,
              'name': 'u',
              'description': 'connection status',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 193,
              'name': 'name',
              'description': 'device name',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 194,
              'name': 'avr',
              'description': 'Exciter idx',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 195,
              'name': 'MODE',
              'description': 'Input signal',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 196,
              'name': 'busr',
              'description': 'Optional remote bus idx',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 197,
              'name': 'busf',
              'description': 'BusFreq idx for mode 2',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 198,
              'name': 'A1',
              'description': 'filter time const. (pole)',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 199,
              'name': 'A2',
              'description': 'filter time const. (pole)',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 200,
              'name': 'A3',
              'description': 'filter time const. (pole)',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 201,
              'name': 'A4',
              'description': 'filter time const. (pole)',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 202,
              'name': 'A5',
              'description': 'filter time const. (zero)',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 203,
              'name': 'A6',
              'description': 'filter time const. (zero)',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 204,
              'name': 'T1',
              'description': 'first leadlag time const. (zero)',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 205,
              'name': 'T2',
              'description': 'first leadlag time const. (pole)',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 206,
              'name': 'T3',
              'description': 'second leadlag time const. (pole)',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 207,
              'name': 'T4',
              'description': 'second leadlag time const. (pole)',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 208,
              'name': 'T5',
              'description': 'washout time const. (zero)',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 209,
              'name': 'T6',
              'description': 'washout time const. (pole)',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 210,
              'name': 'KS',
              'description': 'Gain before washout',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 211,
              'name': 'LSMAX',
              'description': 'Max. output limit',
              'defaultValue': '0.3000',
              'unit': ''
            }, {
              'id': 212,
              'name': 'LSMIN',
              'description': 'Min. output limit',
              'defaultValue': '-0.3000',
              'unit': ''
            }, {
              'id': 213,
              'name': 'VCU',
              'description': 'Upper enabling bus voltage',
              'defaultValue': '999.0000',
              'unit': ''
            }, {
              'id': 214,
              'name': 'VCL',
              'description': 'Upper enabling bus voltage',
              'defaultValue': '-999.0000',
              'unit': ''
            }, {
              'id': 215,
              'name': 'idx',
              'description': 'unique device idx',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 216,
              'name': 'u',
              'description': 'connection status',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 217,
              'name': 'name',
              'description': 'device name',
              'defaultValue': '',
              'unit': ''
            }]
          }, {
            'modelId': 12,
            'modelName': 'ST2CUT',
            'paramList': [{
              'id': 218,
              'name': 'avr',
              'description': 'Exciter idx',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 219,
              'name': 'MODE',
              'description': 'Input signal 1',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 220,
              'name': 'busr',
              'description': 'Remote bus 1',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 221,
              'name': 'busf',
              'description': 'BusFreq idx for signal 1 mode 2',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 222,
              'name': 'MODE2',
              'description': 'Input signal 2',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 223,
              'name': 'busr2',
              'description': 'Remote bus 2',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 224,
              'name': 'busf2',
              'description': 'BusFreq idx for signal 2 mode 2',
              'defaultValue': '',
              'unit': ''
            }, {
              'id': 225,
              'name': 'K1',
              'description': 'Transducer 1 gain',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 226,
              'name': 'K2',
              'description': 'Transducer 2 gain',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 227,
              'name': 'T1',
              'description': 'Transducer 1 time const.',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 228,
              'name': 'T2',
              'description': 'Transducer 2 time const.',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 229,
              'name': 'T3',
              'description': 'Washout int. time const.',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 230,
              'name': 'T4',
              'description': 'Washout delay time const.',
              'defaultValue': '0.2000',
              'unit': ''
            }, {
              'id': 231,
              'name': 'T5',
              'description': 'Leadlag 1 time const. (1)',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 232,
              'name': 'T6',
              'description': 'Leadlag 1 time const. (2)',
              'defaultValue': '0.5000',
              'unit': ''
            }, {
              'id': 233,
              'name': 'T7',
              'description': 'Leadlag 2 time const. (1)',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 234,
              'name': 'T8',
              'description': 'Leadlag 2 time const. (2)',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 235,
              'name': 'T9',
              'description': 'Leadlag 3 time const. (1)',
              'defaultValue': '1.0000',
              'unit': ''
            }, {
              'id': 236,
              'name': 'T10',
              'description': 'Leadlag 3 time const. (2)',
              'defaultValue': '0.2000',
              'unit': ''
            }, {
              'id': 237,
              'name': 'LSMAX',
              'description': 'Max. output limit',
              'defaultValue': '0.3000',
              'unit': ''
            }, {
              'id': 238,
              'name': 'LSMIN',
              'description': 'Min. output limit',
              'defaultValue': '-0.3000',
              'unit': ''
            }, {
              'id': 239,
              'name': 'VCU',
              'description': 'Upper enabling bus voltage',
              'defaultValue': '999.0000',
              'unit': ''
            }, {
              'id': 240,
              'name': 'VCL',
              'description': 'Upper enabling bus voltage',
              'defaultValue': '-999.0000',
              'unit': ''
            }]
          }]
        }]
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
    },
    watch: {
      model (val) {
        if (val && val.model) {
          // const id = JSON.parse(val.model).id
          // getSvgById(id).then(res => {
          //   this.originData = res.data
          // })
        }
      }
    },
    props: {
      devices: {
        type: Object,
        default: () => ({})
      },
      model: {
        type: Object,
        default: () => ({})
      }
    }
  }
</script>
