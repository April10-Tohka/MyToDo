<template>
    <el-container style="overflow: hidden;">
        <el-header height="48px" style="padding: 0;background-color: #2564cf; " >
            <el-row :gutter="20" type="flex" justify="space-between" style="height: 100%;">
                <el-col :span="4" style=" padding-left: 90px; line-height: 48px; height: 100%;">
                    <a href="#" style="font-size: 16px; font-weight: 600; color: white; text-decoration: none;" >To Do</a>
                </el-col>
                <el-col :span="8" style=" height: 100%;" :push="2" >
                    <el-input v-model="searchText" style="padding: 8px 0;"  >
                        <template #prefix>
                            <el-icon :size="20"><Search /></el-icon>
                        </template>
                    </el-input>
                </el-col>
                <el-col :span="9" :push="7">
                    <div style="display: flex; position: relative; right: -15px; " >
                        <div style="width: 48px; padding: 10px;"><el-icon :size="24" @click="()=>{console.log(1)}"><Tools /></el-icon></div>
                        <div style="width: 48px; padding: 10px;"><el-icon :size="24" @click="()=>{console.log(1)}"><UserFilled /></el-icon></div>
                    </div>
                </el-col>
            </el-row>
        </el-header>
        <el-container >
            <el-aside :class="{'base-sidebar':true,'collapsed-sidebar':isCollapse}" >
                <!-- 放置折叠左侧栏图标 -->
                <div style="margin: 16px 0 0; padding: 0 23px;">
                    <div @click="isCollapse = !isCollapse">
                        <img src="../assets/折叠菜单.png" alt="">
                    </div>
                </div>
                <!-- 放置左侧菜单栏 -->
                <el-menu   >
                    <el-menu-item style="padding: 0 30px;">
                        <img src="../assets/太阳.png" alt="" height="20px" width="20px">
                        <span style="margin-left: 16px;">我的一天</span>
                    </el-menu-item>
                    <el-menu-item style="padding: 0 30px;">
                        <img src="../assets/星星.png" alt="" height="20px" width="20px">
                        <span style="margin-left: 16px;">重要</span>
                    </el-menu-item>
                    <el-menu-item style="padding: 0 30px;">
                        <img src="../assets/星星.png" alt="" height="20px" width="20px">
                        <span style="margin-left: 16px;">任务</span>
                    </el-menu-item>

                </el-menu>
            </el-aside>
            <el-main >
                main
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
                <h1>1</h1>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import { ref } from "vue";
let isCollapse = ref(false);//是否折叠左侧边栏
let searchText=ref("");//搜索框输入内容
</script>

<style scoped>
/* 侧边栏基础样式 */
.base-sidebar
{
    background-color: #ffffff;
    transition: width 180ms ease;
    width: 363px;
}
/* 折叠后侧边栏样式 */
.collapsed-sidebar
{
    width: 62px;
}

</style>