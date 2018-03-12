import { Select } from "./select";

export class Item
{
    key:string;
    name:string; //配置项名称
    type:string;     //限定用户输入类型
    unit?:string; //用户输入单位
    value;        //输入框绑定
    isSelect:boolean; //是下拉框选择还是输入框输入
    selects?:Select[];//如果是下拉框选择,那么他有这些选项
    beSelect?:string; // 如果是select ,则数据绑定到这里
    max?:number;
}