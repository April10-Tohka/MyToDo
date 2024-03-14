<template>
  <div>
    <div class="taskToolbar">
        <div class="taskToolbar-top">
            <div class="taskToolbar-left">
                <el-icon :size="24"><Sunny /></el-icon>
                <span style="color: #292827;font-weight: 600;font-size: 1.4rem; padding: 6px 8px;position: relative;top: -5px">我的一天</span>
            </div>
            <div class="taskToolbar-right">
                <el-button>
                    <template #icon>
                        <el-icon><Sort /></el-icon>
                    </template>
                    排序
                </el-button><el-button>
                    <template #icon>
                        <el-icon><Sort /></el-icon>
                    </template>
                    组
                </el-button><el-button>
                    <template #icon>
                        <el-icon><Sort /></el-icon>
                    </template>
                    建议
                </el-button>
            </div>
        </div>
        <div class="taskToolbar-subline">
            <span style="">{{today}}</span>
        </div>
    </div>
    <div class="main-background">
<!--        TODO:添加任务代码将封装成公用组件-->
        <div class="add-task">
            <svg t="1710402152126" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4245" width="20" height="20"><path d="M510.44304 940.315042c-237.326197 0-430.396447-193.21249-430.396447-430.695253 0-237.502206 193.07025-430.717765 430.396447-430.717765 237.303684 0 430.40668 193.236026 430.40668 430.717765C940.84972 747.101529 747.791749 940.315042 510.44304 940.315042zM510.44304 124.414591c-212.213239 0-384.861368 172.782182-384.861368 385.182686 0 212.403574 172.647105 385.161197 384.861368 385.161197 212.224496 0 384.870578-172.782182 384.870578-385.161197C895.314641 297.196773 722.667535 124.414591 510.44304 124.414591z" p-id="4246" fill="#2564cf"></path></svg>
            <input class="input" placeholder="添加任务" v-model="inputValue"  >
<!--           TODO 1.每次跳转路由的时候自动聚焦该输入框 2.聚焦输入框后显示下方的额外选项 3.未聚焦的时候图标为+，聚焦后图标为o-->
        </div>
        <div class="taskCreation">
            <div class="taskCreation-icon">
<!--                TODO: 给按钮添加弹出框-->
                <div class="dateButton-container">
                    <el-button>
                        <template #icon>
                            <el-icon><Sort /></el-icon>
                        </template>
                    </el-button>
                </div>
                <div class="reminderButton-container">
                    <el-button>
                        <template #icon>
                            <el-icon><Sort /></el-icon>
                        </template>
                    </el-button>
                </div>
                <div class="recurringButton-container">
                    <el-button>
                        <template #icon>
                            <el-icon><Sort /></el-icon>
                        </template>
                    </el-button>
                </div>
            </div>
            <div class="addButton">
                <el-button :disabled="isDisabled" :class="{'custom-button':!isDisabled}">添加</el-button>
            </div>
        </div>
        <div class="tasks"  >任务列表</div>

    </div>
  </div>
</template>
<script setup>
import {computed,  ref} from 'vue';
import { formatDate} from "@/utils/dateUtils.js"
let today=computed(()=>{
    return formatDate(new Date());
})//今日日期星期几
let inputValue=ref("");//任务输入框
let isDisabled=computed(()=>{
    return inputValue.value.trim()!==""?false:true;
})

</script>

<style scoped>

.taskToolbar
{
    margin-left: 24px;
    margin-right: 24px;
}
.taskToolbar-top
{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px    ;
}
.taskToolbar-right .el-button
{
    background-color: inherit;
    border: none;
    color: #605e5c;
    margin-left: -5px;
    font-size: 16px;
}
.taskToolbar-right .el-button:hover
{
    background-color: #ffffff;
}

.taskToolbar-subline
{
    color: #605e5c;
    font-weight: 200;
    font-size: 13px;
    font-family: "Microsoft Yahei", 微软雅黑, STXihei, "Meiryo UI", Meiryo, メイリオ, "ＭＳ Ｐゴシック", "MS PGothic", "Hiragino Kaku Gothic Pro", "Arial Unicode MS", "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin-top: -5px;
}
.main-background
{
    margin-left: 24px;
    margin-right: 24px;
    margin-top: 24px;
}
.add-task
{
    padding-left: 16px;
    min-height: 52px;
    background-color: #ffffff;
    line-height: 52px;
    display: flex;
    align-items: center;
    border-top-left-radius: 5px; /* 左上角圆角 */
    border-top-right-radius: 5px; /* 右上角圆角 */
}
.add-task .icon
{
    margin-left: 6px;
}
.add-task .input
{
    background-color: #ffffff;
    height: 40px;
    font-family: "Microsoft Yahei", 微软雅黑, STXihei, "Meiryo UI", Meiryo, メイリオ, "ＭＳ Ｐゴシック", "MS PGothic", "Hiragino Kaku Gothic Pro", "Arial Unicode MS", "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 16px 14px;
    border: none !important;
    box-shadow: none;
    outline: none;
    flex: 1;
}
.add-task .input::placeholder
{
    color: #326dd2;
}
.add-task .input:focus::placeholder
{
    color: #8d8c8c;
}
.taskCreation
{
    background-color: #faf9f8;
    padding: 0 16px;
    display: flex;
    height: 44px;
    border-top: 1px solid #e1dfdd;
    align-items: center;
    justify-content: space-between;
    transition: height 200ms cubic-bezier(0.25,0.1,0.25,1) 0s;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: 5px; /* 左下角圆角 */
    border-bottom-right-radius: 5px; /* 右下角圆角 */
}
.taskCreation .taskCreation-icon
{
    display: flex;
}

.dateButton-container .el-button,
.reminderButton-container .el-button,
.recurringButton-container .el-button
{
    background-color: inherit;
    border: none;
    color: #605e5c;
    margin-left: -5px;
    font-size: 16px;
}

.dateButton-container .el-button:hover,
.reminderButton-container .el-button:hover,
.recurringButton-container .el-button:hover
{
    background-color: #ffffff;
    cursor: default;
}

.addButton .el-button
{
    background-color: #fdfdfd;
    border: 1px solid #e1dfdd;
    font-size: 12px;
    color: #a19f9d;
    padding: 0 8px;
}
.addButton .custom-button
{
    color: #2564cf;
    font-weight: 800;
}
</style>
