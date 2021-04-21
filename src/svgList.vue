
<script>
import {renderApp} from './renderApp'
import {getSwitchList,toggleSwitch} from '@/api/yuTao2'
import * as d3 from "d3";
export default {
  name: "svgList",
  data(){
    return {
      switchList:[],
      svg : "",
      zoomgroup : "",
      trans : [0, 0],
      scale : 0.4,
    }
  },
  render(h) {
    return renderApp.call(this,h)
  },
  beforeDestroy() {
    this.removeRectListenner()
  },
  mounted() {
    this.init()
    this.addRectListenner()
  },
  methods:{
    init(){
      this.svg = d3.select("#caozhenT943");
      this.zoomgroup = d3.select("#caozhenT943_g");
      this.svg.on("dblclick.zoom", null).call(d3.zoom().on("zoom", this._rescale));
      this.getSwitchList();
    },
    removeRectListenner(){
      const self = this;
      let rectDoms = document.getElementsByClassName('rect');
      for(let i = 0;i<rectDoms.length;i++){
        rectDoms[i] && rectDoms[i].removeEventListener('click',(e) => {self.showAddEventModal(e)});
      }
    },
    addRectListenner(){
      let rectDoms = document.getElementsByClassName('rect');
      const self = this;
      for(let i = 0;i<rectDoms.length;i++){
        rectDoms[i] && rectDoms[i].addEventListener('click',(e) => {self.showAddEventModal(e)});
      }
    },
    getSwitchList(){
      getSwitchList().then(res => {
       this.switchList= (res.data || {}).data || []
      })
        /*.catch(() => {
        this.$message.error('获取数据失败');
      })*/
    },
    toggleSwitch(switchId){
      toggleSwitch({
        id:switchId,
        status:(this.switchList[switchId - 1] || {}).status == 0 ? 1 :0
      }).then(res => {
        this.$message.success('更新开关状态成功');
        this.getSwitchList();
      })
        /*.catch((e) => {
        this.$message.error(e.msg || '更新开关状态失败');
      })*/
    },

    _rescale(e) {
      // console.log(e)
      // console.log(d3)
      let scale = e.transform.k;
      let trans = [e.transform.x,e.transform.y];
      this.trans = trans;
      this.scale = scale;
      this.zoomgroup.attr("transform", "translate(" + trans + ")" + " scale(" + scale + ")");
    },
    getSwitchClsName(switchId){
      return (this.switchList[switchId - 1] || {}).status == 0 ? 'switch close':'switch open';
    },
    showAddEventModal(e){
      let lineName = e.target.getAttribute('data-line');
      this.$emit('showEventModal',{
        lineName,
        showEventModal:true
      })
    },
  }
}
</script>

<style scoped>

</style>
