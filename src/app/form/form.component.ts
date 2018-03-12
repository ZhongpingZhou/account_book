import { Component, OnInit } from '@angular/core';
import { FormModel } from './form-model/model';
import { ReturnModel } from './return-model/return-model';
import { RestApiService } from '../rest-api.service';
import { FormControl, Validators } from '@angular/forms';
import { DialogOverviewExample } from '../dialog/dialog.component';



@Component
({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent  
{
  //数据绑定的模型
  formModel:FormModel = 
  {
    blocks:
    [
      {
        name:'链接模式',//配置块名称
        items:         //配置项
        [
          {
            key:'online_mode',
            name:'链接模式', //  配置项名称
            type:'',
            unit:null,
            value:null,
            isSelect:true,
            selects:[
              {
                text:'短在线',
                value:0
              },
              {
                text:'长在线',
                value:1
              }
            ],
            beSelect:null,
          },
          {
            key:'heart_beat_time',
            name:'心跳周期',
            type:'number',
            unit:'分钟',
            value:null,
            isSelect:false,
            max:65536                                 //1
          },

        ]
      },


      {
        name:'报警阈值',//配置块名称
        items:         //配置项
        [
          {
            key:'silence_time',
            name:'静默时间', //  配置项名称
            type:'number',
            unit:'秒',
            value:null,
            isSelect:false,
            max:65535                             //2
          },
          {
            key:'motion_threshold',
            name:'运动阈值',
            type:'number',
            unit:'mg',
            value:null,
            isSelect:false,
            max:65535                           //3
          },
          {
            key:'motion_keep_time',
            name:'运动持续时间', //  配置项名称
            type:'number',
            unit:'毫秒',
            value:null,
            isSelect:false,
            max:65535                            //4
          },
          {
            key:'still_threshold',
            name:'静止阈值',
            type:'number',
            unit:'mg',
            value:null,
            isSelect:false,
            max:65535                               //5
          },
          {
            key:'still_keep_time',
            name:'静止保持时间', //  配置项名称
            type:'number',
            unit:'毫秒',
            value:null,
            isSelect:false,
            max:65535                              //6
          },
          {
            key:'space_holder_1',
            name:'保留',
            type:'',
            unit:null,
            value:null,
            isSelect:true,
            beSelect:null,
            selects:
            [
              {
                text:'保留',
                value:0
              }

            ]
          },

        ]
      },

      {
        name:'加速度零点偏置',//配置块名称
        items:         //配置项
        [
          {
            key:"acceleration_offset_x",
            name:'X轴', //  配置项名称
            type:'number',
            unit:'mg',
            value:null,
            isSelect:false,
            max:65535                //7
          },
          {
            key:'acceleration_offset_y',
            name:'Y轴',
            type:'number',
            unit:'mg',
            value:null,
            isSelect:false,
            max:65535              //8
          },
          {
            key:'acceleration_offset_z',
            name:'Z轴', //  配置项名称
            type:'number',
            unit:'mg',
            value:null,
            isSelect:false,
            max:65535            //9
          },

        ]
      },
      {
        name:'子锁数量',//配置块名称
        items:         //配置项
        [
          {
            key:'slave_number',
            name:'子锁数量', //  配置项名称
            type:'number',
            unit:'台',
            value:null,
            isSelect:false,
            max: 255        //  10
          },
        ]
      }
    ]
  }


  //返回值
  returnValue:string;


  //通过这个方法从绑定表单的数据模型中提取出需要返回的数据
  getReturnValue() 
  {
    var guard=true;
    for(let block of this.formModel.blocks )
    {
      for(let item of block.items)
      {
        if(item.isSelect) 
        {
          for(let select of item.selects)
          {
            if(item.value == select.text)
            {
              this.returnValue = this.returnValue+item.key+'='+select.value+'\r\n';
              guard = false;
            }
          }
          if(guard)
          {
            this.returnValue= this.returnValue+item.key+'='+item.value+'\r\n';
          }
        }
        else
        {
          this.returnValue = this.returnValue+item.key+'='+item.value+'\r\n';
        }
        guard = true;

      }

    }

  }

  returnModel:ReturnModel = {
    content:''
  };
  //保存方法
  save()
  {
    if(this.isLegal())
    {
      this.returnValue ="";
      this. getReturnValue() ;//将returnvalue值初始化
      //console.log(this.returnValue);
      this.returnModel.content =this.returnValue;
      // console.log(this.returnModel);
      this.restApiService.saveFormModel(this.returnModel);

    }
    else
    {
      this.dialog.openDialog();

    }
   


  }

  constructor(private restApiService:RestApiService,private dialog:DialogOverviewExample) 
  {

  }


  //当提交的时候，判断信息是否合法
  isLegal ():boolean
  {
    var guard=true; //哨兵

    for(let block of this.formModel.blocks )
    {
      for(let item of block.items)
      {
        if(item.value===null || item.value=='' || item.value>item.max || item.value < 0)
        {
          guard = false;
          return false;//信息不合法
        }
      }

    }
    if(guard)
    {
      return true;  //信息合法

    }
  }

}
