<template>
  <div class="index-tpl">
    <div class="tpl-column">
      <div class="tpl-column-header">
        <div style="flex:1;text-align:left;">
          <el-input v-model="tplInfo.title" style="width:160px;" size="mini" placeholder="显示标题"/>
        </div>
        <!-- <div>
          <el-upload
            :show-file-list="false"
            :on-success="handleAvatarSuccessBg"
            :before-upload="beforeAvatarUpload"
            :action="base_api+'/material/index/upload'"
            class="upload-demo">
            <el-button type="info" size="mini" plain>设置背景</el-button>
          </el-upload>
        </div>
        <div v-if="content.bg_img">
          <el-button type="info" size="mini" plain @click="clearBgImg()">取消背景</el-button>
        </div> -->
      </div>
      <draggable
        :list="content.list"
        :options="options"
        :on-update="updateList"
        :style="{backgroundImage: 'url('+ content.bg_img +')'}"
        class="tpl-column-content">
        <div v-for="(item,index) in content.list" :style="{marginTop:item.top+'px',marginBottom:item.bottom+'px',paddingLeft:item.left+'px',paddingRight:item.right+'px'}" :key="index" class="tpl-item">
          <div class="tpl-item-box">
            <div v-if="item.type!=2&&item.type!=4&&item.type!=10" class="tpl-item-box1">
              <div v-for="(item1,index1) in item.floor_data" :key="index1" class="item-box-item">
                <img v-if="item1.img_url" :src="item1.img_url">
                <div v-if="!item1.img_url&&item.type!=1&&item.type!=3&&item.type!=6&&item.type!=7&&item.type!=8&&item.type!=9&&item.type!=10&&item.type!=11&&item.type!=12&&item.type!=13&&item.type!=14" class="no-img">
                  未配置
                </div>
                <div v-if="!item1.img_url&&item.type==3" class="no-img notice">
                  <span>公告栏</span>
                </div>
                <div v-if="item.type==6" class="no-img hot-goods">
                  <!-- <div class="item-box-item__mask" /> -->
                  <span>热门商品</span>
                </div>
                <div v-if="item.type==7" class="no-img new-goods">
                  <span>新品推荐</span>
                </div>
                <div v-if="item.type==8" class="no-img shop">
                  <span>推荐店铺</span>
                </div>
                <div v-if="item.type==9" class="no-img spike">
                  <span>秒杀板块</span>
                </div>
                <div v-if="item.type==12" class="no-img spike2">
                  <span>团购板块</span>
                </div>
                <div v-if="item.type==13" class="no-img spike1">
                  <span>秒杀横向</span>
                </div>
                <div v-if="item.type==14" class="no-img spike3">
                  <span>团购横向</span>
                </div>
                <div v-if="item.type==11" class="no-img coupon">
                  <span>优惠券</span>
                </div>
                <div v-if="!item1.img_url&&item.type==1" class="search-bar">
                  <div style="flex:1;">
                    <el-input
                      style="width:100%;border-radius: 20px;"
                      placeholder="请输入内容"
                      prefix-icon="el-icon-search"/>
                  </div>
                  <div style="padding-left:15px;">
                    <el-button size="mini" icon="el-icon-more-outline" circle/>
                  </div>
                </div>
              </div>
            </div>

            <el-carousel v-if="item.type==2" trigger="click" height="150px" indicator-position="none">
              <el-carousel-item v-for="(item3,index3) in item.floor_data" :key="index3" >
                <!-- <img v-if="item3.img_url" :src="item3.img_url"> -->
                <div v-if="item3.img_url" :style="{backgroundImage: 'url('+ item3.img_url +')'}" style="width:100%;height:100%;background-position: center center;background-size: cover;"/>
                <div v-if="!item3.img_url" class="no-img">
                  未配置
                </div>
              </el-carousel-item>
            </el-carousel>

            <div v-if="item.type==4" class="tpl-item-box2">
              <div v-for="(item1,index1) in item.floor_data" :key="index1" class="item-box-item">
                <img v-if="item1.img_url" :src="item1.img_url">
                <div v-if="item1.img_url" class="c-text">{{ item1.title }}</div>
                <div v-if="!item1.img_url&&item.type!=1&&item.type!=3&&item.type!=6&&item.type!=7&&item.type!=8" class="no-img">
                  未配置
                </div>
              </div>
            </div>

            <div v-if="item.type==10" class="tpl-item-box1">
              <div class="item-box-item">
                <div v-if="item.type==10" class="no-img vae">
                  <span>自定义商品列表</span>
                </div>
              </div>
            </div>

          </div>
          <div :class="item.active?'f-block':''" class="box-tool">
            <el-popover
              v-model="item.active"
              placement="right"
              width="660"
              trigger="manual">
              <div class="edit-panel">
                <span class="panel-close" @click="closePanel(item)"><i class="el-icon-close"/></span>
                <div class="one-row">
                  <span v-if="item.type==1" style="font-weight:600;color: #1f2f3d;">搜索栏配置</span>
                  <span v-if="item.type==2" style="font-weight:600;color: #1f2f3d;">轮播图配置<span style="color: red;">(图片尺寸推荐：650*300。每张一致。)</span></span>
                  <span v-if="item.type==3" style="font-weight:600;color: #1f2f3d;">公告配置</span>
                  <span v-if="item.type==4" style="font-weight:600;color: #1f2f3d;">分类导航配置<span style="color: red;">(图片尺寸推荐：120*120。每张一致。)</span></span>
                  <span v-if="item.type==5" style="font-weight:600;color: #1f2f3d;">图层配置<span style="color: red;">(图片尺寸推荐：每张一致。)</span></span>
                  <span v-if="item.type==6" style="font-weight:600;color: #1f2f3d;">热门商品</span>
                  <span v-if="item.type==7" style="font-weight:600;color: #1f2f3d;">新品推荐</span>
                  <span v-if="item.type==8" style="font-weight:600;color: #1f2f3d;">推荐店铺</span>
                  <span v-if="item.type==9" style="font-weight:600;color: #1f2f3d;">秒杀板块</span>
                  <span v-if="item.type==10" style="font-weight:600;color: #1f2f3d;">自定义商品列表</span>
                  <span v-if="item.type==11" style="font-weight:600;color: #1f2f3d;">优惠券</span>
                  <span v-if="item.type==12" style="font-weight:600;color: #1f2f3d;">团购专区</span>
                  <span v-if="item.type==13" style="font-weight:600;color: #1f2f3d;">秒杀横向</span>
                  <span v-if="item.type==14" style="font-weight:600;color: #1f2f3d;">团购横向</span>
                </div>
                <div class="one-row">
                  <div class="row-col">
                    <div class="col-label">
                      顶部间隙
                    </div>
                    <div>
                      <el-input-number v-model="item.top" :min="0" :max="20" style="width:110px;" size="mini" label="顶部间隙"/>
                    </div>
                  </div>
                  <div class="row-col">
                    <div class="col-label">
                      底部间隙
                    </div>
                    <div>
                      <el-input-number v-model="item.bottom" :min="0" :max="20" style="width:110px;" size="mini" label="底部间隙"/>
                    </div>
                  </div>
                  <div class="row-col">
                    <div class="col-label">
                      显示等级
                    </div>
                    <div>
                      <el-select v-model="item.show_level" style="width:120px;" size="mini" placeholder="请选择">
                        <el-option :key="0" :label="'全部'" :value="0"/>
                        <el-option :key="1" :label="'普通用户'" :value="1"/>
                        <el-option :key="2" :label="'VIP会员'" :value="2"/>
                      </el-select>
                    </div>
                  </div>
                </div>
                <div class="one-row">
                  <div class="row-col">
                    <div class="col-label">
                      左边间隙
                    </div>
                    <div>
                      <el-input-number v-model="item.left" :min="0" :max="20" style="width:110px;" size="mini" label="顶部间隙"/>
                    </div>
                  </div>
                  <div class="row-col">
                    <div class="col-label">
                      右边间隙
                    </div>
                    <div>
                      <el-input-number v-model="item.right" :min="0" :max="20" style="width:110px;" size="mini" label="底部间隙"/>
                    </div>
                  </div>
                  <div class="row-col">
                    <div class="col-label"/>
                    <div/>
                  </div>
                </div>
                <div v-if="item.type==6||item.type==7||item.type==8||item.type==9||item.type==10||item.type==12||item.type==13||item.type==14" class="two-row">
                  <el-row style="line-height:32px;display:flex;">
                    <span v-if="item.type!=10" style="padding-right:15px;">显示个数</span>
                    <el-select v-if="item.type!=10" v-model="item.nums" style="width:110px;padding-right:15px;" size="mini" placeholder="显示个数" @change="setNums(index,item.type)">
                      <el-option label="选择" value="0"/>
                      <el-option label="2" value="2"/>
                      <el-option label="4" value="4"/>
                      <el-option label="6" value="6"/>
                      <el-option label="8" value="8"/>
                      <el-option label="10" value="10"/>
                      <el-option label="12" value="12"/>
                      <el-option label="14" value="14"/>
                      <el-option label="16" value="16"/>
                      <el-option label="18" value="18"/>
                      <el-option label="20" value="20"/>
                    </el-select>
                    <span style="padding-right:15px;">显示标题</span>
                    <el-input v-model="item.title" style="width:200px;" size="mini" placeholder="显示标题"/>
                  </el-row>
                </div>
                <div v-if="item.type!=1&&item.type!=6&&item.type!=7&&item.type!=8&&item.type!=9&&item.type!=10&&item.type!=11&&item.type!=12&&item.type!=13&&item.type!=14" class="two-row">
                  <div v-for="(item2,index2) in item.floor_data" :key="index2" class="two-row-item">
                    <div class="item-btns">
                      <el-row>
                        <el-button style="margin-bottom:5px;" icon="el-icon-arrow-down" size="mini" circle @click="downImg(index,index2)"/>
                        <el-button style="margin-bottom:5px;" icon="el-icon-arrow-up" size="mini" circle @click="upImg(index,index2)"/>
                        <el-button type="danger" icon="el-icon-delete" size="mini" circle @click="delImg(index,index2)"/>
                      </el-row>
                    </div>
                    <div class="item-content">
                      <div v-if="item.type!=3" class="img-box" @click="setIndex(index,index2)">
                        <el-upload
                          :data="{index:index,index2:index2}"
                          :show-file-list="false"
                          :on-success="handleAvatarSuccess"
                          :before-upload="beforeAvatarUpload"
                          :action="base_api+'/material/index/upload'"
                          class="avatar-uploader">
                          <div v-if="item2.img_url" :style="{backgroundImage: 'url('+ item2.img_url +')'}" class="avatar"/>
                          <i v-else class="el-icon-plus avatar-uploader-icon"/>
                        </el-upload>
                      </div>
                      <div class="data-box">
                        <el-row v-if="item.type==3" style="line-height:32px;display:flex;">
                          <span style="padding-right:4px;">公告内容：</span>
                          <el-input v-model="item2.title" style="width:350px;" size="mini" placeholder="公告内容" @change="setTime(index,index2)"/>
                        </el-row>
                        <el-row v-if="item.type==4" style="line-height:32px;display:flex;">
                          <span style="padding-right:4px;">分类标题：</span>
                          <el-input v-model="item2.title" style="width:350px;" size="mini" placeholder="分类标题" />
                        </el-row>
                        <el-row style="line-height:34px;">
                          <span style="font-size:12px;">打开页面：</span>
                          <el-select v-model="item2.type" style="width:160px;" size="mini" placeholder="打开页面">
                            <el-option label="无" value="0"/>
                            <el-option label="商品" value="1"/>
                            <el-option v-if="tplInfo.shop_id==0" label="礼包商品" value="15"/>
                            <el-option label="装修页" value="9"/>
                            <el-option v-if="tplInfo.shop_id==0" label="新人必买" value="10"/>
                            <el-option v-if="tplInfo.shop_id==0" label="品牌精选" value="11"/>
                            <el-option v-if="tplInfo.shop_id==0" label="VIP专区" value="12"/>
                            <el-option v-if="tplInfo.shop_id==0" label="签到领币" value="13"/>
                            <el-option label="富文本" value="7"/>
                            <el-option label="外链" value="8"/>
                            <el-option v-if="tplInfo.shop_id==0" label="分类商品列表" value="2"/>
                            <el-option label="店铺" value="3"/>
                            <el-option v-if="tplInfo.shop_id==0" label="热门商品列表" value="4"/>
                            <el-option v-if="tplInfo.shop_id==0" label="新品推荐列表" value="5"/>
                            <el-option v-if="tplInfo.shop_id==0" label="推荐店铺列表" value="6"/>
                            <el-option v-if="tplInfo.shop_id==0" label="礼包列表" value="14"/>
                          </el-select>
                        </el-row>
                        <el-row v-if="item2.type==1||item2.type==15" style="line-height:34px;">
                          <span style="font-size:12px;">商品名字：{{ item2.good_info.title }}</span>
                        </el-row>
                        <el-row style="line-height:32px;display:flex;">
                          <span style="padding-right:4px;font-size:12px;">页面参数：</span>
                          <el-input v-model="item2.param" :disabled="item2.type==1||item2.type==2||item2.type==3" style="width:300px;" size="mini" class="input-with-select">
                            <el-button slot="append" size="mini" icon="el-icon-search" @click="selectItem(item2.type,index,index2)"/>
                          </el-input>
                          <span v-if="item2.type==0" style="color:red;">(不必填)</span>
                          <span v-if="item2.type==1" style="color:red;">(商品id)</span>
                          <span v-if="item2.type==2" style="color:red;">(商品分类id)</span>
                          <span v-if="item2.type==3" style="color:red;">(店铺id)</span>
                          <span v-if="item2.type==4" style="color:red;">(不必填)</span>
                          <span v-if="item2.type==5" style="color:red;">(不必填)</span>
                          <span v-if="item2.type==6" style="color:red;">(不必填)</span>
                          <span v-if="item2.type==7" style="color:red;">(富文本id)</span>
                          <span v-if="item2.type==8" style="color:red;">(外链链接)</span>
                          <span v-if="item2.type==9" style="color:red;">(装修页id)</span>
                          <span v-if="item2.type==10" style="color:red;">(不必填)</span>
                          <span v-if="item2.type==11" style="color:red;">(不必填)</span>
                          <span v-if="item2.type==13" style="color:red;">(不必填)</span>
                          <span v-if="item2.type==14" style="color:red;">(不必填)</span>
                          <span v-if="item2.type==15" style="color:red;">(礼包商品id)</span>
                        </el-row>
                        <el-row v-if="item.type==5" style="line-height:32px;display:flex;">
                          <span style="padding-right:4px;font-size:12px;">图片标题：</span>
                          <el-input v-model="item2.imgtit" style="width:300px;" size="mini" class="input-with-select" placeholder="(选填)"/>
                        </el-row>
                      </div>
                    </div>
                  </div>

                  <div v-if="item.floor_data.length<11" style="line-height:32px;text-align:center;">
                    <el-button type="primary" icon="el-icon-plus" size="mini" circle @click="addImg(index,item.type)"/>
                  </div>
                </div>

                <!-- 自定义商品选择 -->
                <div v-if="item.type==10" class="two-row">
                  <div v-for="(item2,index2) in item.floor_data" :key="index2" class="two-row-item">
                    <div class="item-btns">
                      <el-row>
                        <el-button style="margin-bottom:5px;" icon="el-icon-arrow-down" size="mini" circle @click="downImg(index,index2)"/>
                        <el-button style="margin-bottom:5px;" icon="el-icon-arrow-up" size="mini" circle @click="upImg(index,index2)"/>
                        <el-button type="danger" icon="el-icon-delete" size="mini" circle @click="delImg(index,index2)"/>
                      </el-row>
                    </div>
                    <div class="item-content">
                      <div class="img-box">
                        <div v-if="item2.good_info.img_url" :style="{backgroundImage: 'url('+ item2.good_info.img_url +')'}" class="avatar"/>
                      </div>
                      <div class="data-box">
                        <el-row style="line-height:32px;display:flex;">
                          <span style="padding-right:4px;">商品名称：{{ item2.good_info.title }}</span>
                        </el-row>
                        <el-row style="line-height:32px;display:flex;">
                          <span style="padding-right:4px;">商品id：{{ item2.good_info.item_id }}</span>
                        </el-row>
                        <el-row style="line-height:32px;display:flex;">
                          <span style="padding-right:4px;">商品价格：￥{{ item2.good_info.price }}</span>
                        </el-row>
                        <!-- <el-row style="line-height:32px;display:flex;">
                          <span style="padding-right:4px;font-size:12px;">选择商品：</span>
                          <el-input v-model="item2.param" :disabled="true" style="width:300px;" size="mini" class="input-with-select">
                            <el-button slot="append" size="mini" icon="el-icon-search" @click="selectItem(item2.type,index,index2)"/>
                          </el-input>
                        </el-row> -->
                      </div>
                    </div>
                  </div>
                  <!-- 配置自定义商品的蓝色按钮 ↓-->
                  <div v-if="item.floor_data.length<11" style="line-height:32px;text-align:center;">
                    <el-button type="primary" icon="el-icon-plus" size="mini" circle @click="addImg(index,item.type)"/>
                  </div>
                </div>

              </div>

              <div slot="reference" class="box-tool-panel" @click="openThisFloor(index)">
                <div class="floor-del" @click.stop="delTpl(index)">
                  删除
                </div>
              </div>
            </el-popover>
          </div>

        </div>
      </draggable>
    </div>
    <div class="f-tools">
      <div class="tool-box">
        <!-- <div class="tool-item">
          <el-button type="primary" style="width:100px;" size="mini" icon="el-icon-plus" @click="addTpl(1)">搜索栏</el-button>
        </div> -->
        <div class="tool-item">
          <el-button type="primary" style="width:100px;" size="mini" icon="el-icon-plus" @click="addTpl(2)">banner</el-button>
        </div>
        <div class="tool-item">
          <el-button type="primary" style="width:100px;" size="mini" icon="el-icon-plus" @click="addTpl(3)">公告</el-button>
        </div>
        <div class="tool-item">
          <el-button type="primary" style="width:100px;" size="mini" icon="el-icon-plus" @click="addTpl(4)">分类导航</el-button>
        </div>
        <div class="tool-item">
          <el-button type="primary" style="width:100px;" size="mini" icon="el-icon-plus" @click="addTpl(5)">单(多)图</el-button>
        </div>
        <div class="tool-item">
          <el-button v-if="tplInfo.shop_id==0" type="primary" style="width:100px;" size="mini" icon="el-icon-plus" @click="addTpl(6)">热门商品</el-button>
        </div>
        <div class="tool-item">
          <el-button v-if="tplInfo.shop_id==0" type="primary" style="width:100px;" size="mini" icon="el-icon-plus" @click="addTpl(7)">新品推荐</el-button>
        </div>
        <!-- <div class="tool-item">
          <el-button v-if="tplInfo.shop_id==0" type="primary" style="width:100px;" size="mini" icon="el-icon-plus" @click="addTpl(8)">推荐店铺</el-button>
        </div> -->
        <div class="tool-item">
          <el-button v-if="tplInfo.shop_id==0" type="primary" style="width:100px;" size="mini" icon="el-icon-plus" @click="addTpl(9)">秒杀专区</el-button>
        </div>
        <div class="tool-item">
          <el-button type="primary" style="width:100px;" size="mini" icon="el-icon-plus" @click="addTpl(10)">自定义商品</el-button>
        </div>
        <div class="tool-item">
          <el-button type="primary" style="width:100px;" size="mini" icon="el-icon-plus" @click="addTpl(11)">优惠券</el-button>
        </div>
        <div class="tool-item">
          <el-button v-if="tplInfo.shop_id==0" type="primary" style="width:100px;" size="mini" icon="el-icon-plus" @click="addTpl(12)">团购专区</el-button>
        </div>
        <div class="tool-item">
          <el-button v-if="tplInfo.shop_id==0" type="primary" style="width:100px;" size="mini" icon="el-icon-plus" @click="addTpl(13)">秒杀横向</el-button>
        </div>
        <div class="tool-item">
          <el-button v-if="tplInfo.shop_id==0" type="primary" style="width:100px;" size="mini" icon="el-icon-plus" @click="addTpl(14)">团购横向</el-button>
        </div>
      </div>
      <div class="tool-box">
        <div style="height:5px;flex:1;"/>
        <div class="tool-item">
          <el-button type="success" style="width:100px;" size="mini" round @click="saveTplInfo()">保存</el-button>
        </div>
        <div class="tool-item">
          <el-button type="warning" style="width:100px;" size="mini" round @click="getTplInfo()">还原</el-button>
        </div>
        <div class="tool-item">
          <el-button type="warning" style="width:100px;" size="mini" round @click="goBack()">返回列表</el-button>
        </div>
      </div>
    </div>

    <el-dialog :width="'700px'" :visible.sync="dialogTableVisible" title="选择">
      <!-- <button style="height:30px;" @click="giftFlag=!giftFlag">{{giftFlag?'切换普通商品':'切换礼包商品'}}</button>//后台不支持普通商品VIP商品一起请求，暂时废弃 -->
      <el-row>
        <el-col v-show="!giftFlag" :span="5">
          <el-menu
            style="min-height: 400px;"
            default-active="0"
            class="el-menu-vertical-demo"
          >
            <el-menu-item v-for="(item,index) in class1" :index="index+''" :key="index" style="padding:0 5px;height: 42px;line-height: 42px;" @click="selectClass1(item)">
              <i class="el-icon-caret-right"/>
              <span slot="title">{{ item.name }}</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col v-show="!giftFlag" :span="5" style="min-height:100px">
          <div v-if="class2.length>0" >
            <el-menu
              style="min-height: 400px;"
              default-active="0"
              class="el-menu-vertical-demo"
            >
              <el-menu-item v-for="(item1,index1) in class2" :index="index1+''" :key="index1" style="padding:0 5px;height: 42px;line-height: 42px;" @click="selectClass2(item1)">
                <i class="el-icon-circle-check-outline"/>
                <span slot="title">{{ item1.name }}</span>
              </el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col v-if="select_type==1" v-show="!giftFlag" :span="14">
          <div style="padding:5px 10px;">
            <el-input v-model="key_word1" placeholder="请输入内容" prefix-icon="el-icon-search" size="mini" class="input-with-select">
              <el-button slot="append" icon="el-icon-search" @click="getGoods()"/>
            </el-input>
          </div>
          <el-table
            :data="goods"
            style="width: 100%">
            <el-table-column
              label="商品名称"
              prop="title"/>
            <el-table-column
              label="备注"
              prop="remark"/>
            <el-table-column
              align="right"
              label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="primary"
                  @click="sureSelect(scope.row)">选择</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            :page-size="6"
            :total="total_pages1"
            background
            layout="prev, pager, next"
            @current-change="handleCurrentChange1"/>
        </el-col>

        <el-table
          v-show="giftFlag"
          :data="gifts"
          style="width: 100%">
          <el-table-column
            label="礼包名称"
            prop="title"/>
          <el-table-column
            label="备注"
            prop="remark"/>
          <el-table-column
            align="right"
            label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="sureSelectGift2(scope.row)">选择</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          v-show="giftFlag"
          :page-size="6"
          :total="total_pages3"
          background
          layout="prev, pager, next"
          @current-change="handleCurrentChange3"/>

      </el-row>
      <!-- <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
      </div> -->
    </el-dialog>

    <el-dialog :width="'700px'" :visible.sync="dialogTable1Visible" title="选择店铺">
      <div style="padding:5px 10px;">
        <el-input v-model="key_word2" placeholder="请输入店铺名称" prefix-icon="el-icon-search" size="mini" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="getShops()"/>
        </el-input>
      </div>
      <el-table
        :data="shops"
        style="width: 100%">
        <el-table-column
          label="店铺名称"
          prop="name"/>
        <el-table-column
          label="备注"
          prop="remark"/>
        <el-table-column
          align="right"
          label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="sureSelectShop(scope.row)">选择</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :page-size="6"
        :total="total_pages2"
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange2"/>
    </el-dialog>

    <el-dialog :width="'700px'" :visible.sync="dialogTableVisible2" title="选择礼包">
      <!-- <div style="padding:5px 10px;">
        <el-input v-model="key_word2" placeholder="请输入店铺名称" prefix-icon="el-icon-search" size="mini" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="getShops()"/>
        </el-input>
      </div> -->
      <el-table
        :data="gifts"
        style="width: 100%">
        <el-table-column
          label="礼包名称"
          prop="title"/>
        <el-table-column
          label="备注"
          prop="remark"/>
        <el-table-column
          align="right"
          label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="sureSelectGift(scope.row)">选择</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :page-size="6"
        :total="total_pages3"
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange3"/>
    </el-dialog>

    <el-dialog :width="'700px'" :visible.sync="dialogTableVisible3" title="选择装修页">
      <el-table
        :data="floors"
        style="width: 100%">
        <el-table-column
          label="装修名称"
          prop="name"/>
        <el-table-column
          label="装修id"
          prop="position_code"/>
        <el-table-column
          align="right"
          label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="sureSelectfloor(scope.row)">选择</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- <el-pagination
        :page-size="6"
        :total="total_pages3"
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange3"/> -->
    </el-dialog>

    <el-dialog :width="'700px'" :visible.sync="dialogTableVisible4" title="选择商品">
      <div style="display:flex;margin:10px 0;">
        <div style="width:150px">
          <el-input
            v-model="inpItemId"
            :disabled="true"
            placeholder="请输入商品id"/>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div style="width:150px">
          <el-input
            v-model="all_keyWord"
            placeholder="请输入商品名称"/>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div style="width:150px">
          <el-select v-model="inpclass1" placeholder="一级分类" @change="allSelectOne">
            <el-option
              v-for="item in class1"
              :key="item.mcid"
              :label="item.name"
              :value="item.mcid"/>
          </el-select>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div style="width:150px">
          <el-select v-model="all_mcid" placeholder="二级级分类" @change="allSelectTwo">
            <el-option
              v-for="item in Allclass2"
              :key="item.mcid"
              :label="item.name"
              :value="item.mcid"/>
          </el-select>
        </div>
        &nbsp;&nbsp;&nbsp;
        <el-button
          size="mini"
          type="primary"
          @click="AllResat()"
        >复位</el-button>
        &nbsp;&nbsp;&nbsp;
        <el-button
          size="mini"
          type="primary"
          @click="AllSearch()"
        >搜索</el-button>

      </div>
      <el-table
        :data="all_showList"
        style="width: 100%">
        <el-table-column
          label="商品id"
          width="70"
          prop="item_id"/>
        <el-table-column
          label="首图"
          align="left"
          width="100"
        >
          <template slot-scope="scope">
            　　　　    <img :src="scope.row.img_url" width="60" height="60">
            　　     </template>
        </el-table-column>
        <el-table-column
          label="名称"
          prop="title"/>
        <el-table-column
          align="right"
          label="操作">
          <template slot-scope="scope">
            <el-button
              v-if="scope.row.select!=1"
              size="mini"
              type="primary"
              @click="AllsureSelect(scope.row)">选择</el-button>
            <el-button
              v-if="scope.row.select==1"
              size="mini"
              type="success"
              @click="AllsureDelete(scope.row)">已选择</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div style="margin:10px 0;display:flex;justifyContent:space-between;padding:0 10px;">
        <el-pagination
          :page-size="5"
          :total="all_total"
          background
          layout="prev, pager, next"
          @current-change="handleCurrentChange4"/>
        <el-button
          size="mini"
          type="warning"
          @click="SaveAllGoods()"
        >保存</el-button>
      </div>

    </el-dialog>

  </div>
</template>
<script>
import request from '@/utils/request'
import { getBaseApi } from '@/utils'
import draggable from 'vuedraggable'
export default {
  name: 'TplEdit',
  components: {
    draggable
  },
  data() {
    return {
      floors: '', // 装修模板
      giftFlag: false, // 在普通商品选择框中切换至礼包
      gifts: '',
      total_pages3: 0,
      start_page3: 0,
      loading: false,
      total_pages1: 0,
      total_pages2: 0,
      start_page1: 0,
      start_page2: 0,
      key_word1: '',
      key_word2: '',
      dialogTableVisible: false,
      dialogTable1Visible: false,
      dialogTableVisible2: false,
      dialogTableVisible3: false,
      dialogTableVisible4: false,
      class1: [],
      class1_act: '',
      class2: [],
      class2_act: '',
      select_type: 1,
      select_index: 0,
      select_index1: 0,
      goods: [],
      shops: [],
      base_api: getBaseApi(),
      active_index1: '',
      active_index2: '',
      floor_id: '',
      headerText: '首页装修', // 模板名称
      tplInfo: {
        shop_id: '',
        title: '',
        abstract: '',
        content: '',
        floor_id: ''
      },
      options: {// 拖动配置
        group: 'mission'
      },
      content: {
        bg_img: '', // 背景图片
        list: [

        ]
      },
      tj_shops: [],
      hot_goods: [],
      tj_goods: [],
      hot_goods_num: 0,
      tj_goods_num: 0,
      tj_shop_num: 0,
      // ·················以下数据专供自定义商品使用
      all_start: 0, // 起始页  以下数据专供自定义商品选择页面233333
      theIndex: '', // 属于楼层位置顺位
      all_total: '', // 全部页面
      all_mcid: '', // 品类id
      all_keyWord: '', // 搜索关键字
      all_showList: '', // 展示用列表
      all_dataList: [], // 选中的数据列表
      all_idList: [], // 选中的id列表
      inpItemId: '',
      inpclass1: '',
      Allclass2: [], // 选中一级分类后二级分类数据
      inpclass2: ''
      // ························以上数据专供自定义商品使用
    }
  },
  created() {
    this.floor_id = this.$route.query.floor_id
    this.tplInfo.shop_id = this.$route.query.shop_id
    this.getTplInfo()
    this.getClass1()
    this.getHots()
    this.getNews()
    this.getTJShops()
  },
  methods: {
    closePanel(item) {
      item.active = false
    },
    setNums(index, type) {
      // const self = this
      // if (type === '6') {
      //   self.content.list[index].goods_list = []
      //   for (let i = 0; i < self.content.list[index].nums; i++) {
      //     if (self.hot_goods[i]) {
      //       self.content.list[index].goods_list.push(self.hot_goods[i])
      //     } else {
      //       break
      //     }
      //   }
      // } else if (type === '7') {
      //   self.content.list[index].goods_list = []
      //   for (let i = 0; i < self.content.list[index].nums; i++) {
      //     if (self.tj_goods[i]) {
      //       self.content.list[index].goods_list.push(self.tj_goods[i])
      //     } else {
      //       break
      //     }
      //   }
      // } else if (type === '8') {
      //   self.content.list[index].shops_list = []
      //   for (let i = 0; i < self.content.list[index].nums; i++) {
      //     if (self.tj_shops[i]) {
      //       self.content.list[index].shops_list.push(self.tj_shops[i])
      //     } else {
      //       break
      //     }
      //   }
      // }
    },
    getHots() {
      const self = this
      request({
        method: 'post',
        url: '/item/me-item-api/index',
        data: {
          start_page: 0,
          pages: 20,
          item_type: 0,
          is_hot: 1
        }
      }).then(function(res) {
        self.hot_goods = res.data.data.list
        if (res.data.data.list && res.data.data.list.length > 0) {
          self.hot_goods_num = res.data.data.list.length
        }
      })
    },
    getNews() {
      const self = this
      request({
        method: 'post',
        url: '/item/me-item-api/index',
        data: {
          start_page: 0,
          pages: 20,
          item_type: 0,
          is_new: 1
        }
      }).then(function(res) {
        self.tj_goods = res.data.data.list
        if (res.data.data.list && res.data.data.list.length > 0) {
          self.tj_goods_num = res.data.data.list.length
        }
      })
    },
    getTJShops() {
      const self = this
      request({
        method: 'post',
        url: '/shop/shop-api/index',
        data: {
          start_page: 0,
          pages: 20,
          is_recommend: 1
        }
      }).then(function(res) {
        self.tj_shops = res.data.data.list
        if (res.data.data.list && res.data.data.list.length > 0) {
          self.tj_shop_num = res.data.data.list.length
        }
      })
    },
    updateList(d) {
      console.log(d)
    },
    selectItem(type, index, index1) {
      console.log(type)
      if (type === '1' || type === '2') {
        this.select_type = type
        this.select_index = index
        this.select_index1 = index1
        this.dialogTableVisible = true
        this.getGift()
      } else if (type === '3') {
        this.select_type = type
        this.select_index = index
        this.select_index1 = index1
        this.dialogTable1Visible = true
        this.getShops()
      } else if (type === '15') { // 打开礼包选择页面
        this.select_type = type
        this.select_index = index
        this.select_index1 = index1
        this.dialogTableVisible2 = true
        this.getGift()
      } else if (type === '9') { // 打开楼层装修页
        this.select_type = type
        this.select_index = index
        this.select_index1 = index1
        this.dialogTableVisible3 = true
        this.getfloor()
      } else if (type === '111') { // 打开选择商品页面
        this.select_type = type
        this.select_index = index
        this.select_index1 = index1
        this.dialogTableVisible4 = true
        this.getfloor()
      }
    },
    goBack() {
      this.$router.go(-1)
    },
    /**
     * set上传图片对于数组索引
     * params：index(1层位置索引)，index2(2层位置索引)
    */
    setIndex(index, index2) {
      const self = this
      self.active_index1 = index
      self.active_index2 = index2
    },
    /**
     * 图片上传成功
     * res(返回值)，file(返回文件)
    */
    handleAvatarSuccess(res, file) {
      const self = this
      var image = new Image()
      image.src = res.data.url
      image.onload = function() {
        self.content.list[self.active_index1].floor_data[self.active_index2].img_width = image.width
        self.content.list[self.active_index1].floor_data[self.active_index2].img_height = image.height
      }
      self.content.list[self.active_index1].floor_data[self.active_index2].img_url = res.data.url
    },
    handleAvatarSuccessBg(res, file) {
      const self = this
      self.content.bg_img = res.data.url
    },
    clearBgImg() {
      const self = this
      self.content.bg_img = ''
    },
    /**
     * 图片上传前验证
     * file(文件)
    */
    beforeAvatarUpload(file) {
      const isLt3M = file.size / 1024 / 1024 < 3
      const isWEBP = file.type === 'image/webp'
      if (!isLt3M) {
        this.$message.error('上传图片大小不能超过 3MB!')
      }
      if (isWEBP) {
        this.$message.error('上传图片不能是webp格式!')
      }
      return isLt3M && !isWEBP
    },
    /**
     * 选中打开楼层编辑
     * params：index(楼层位置索引)
    */
    openThisFloor(index) {
      const self = this
      for (let i = 0; i < self.content.list.length; i++) {
        self.content.list[i].active = false
      }
      self.content.list[index].active = true
    },
    /**
     * 选中打开楼层编辑
     * params：type(楼层类型)
    */
    addTpl(type) {
      const self = this
      for (let i = 0; i < self.content.list.length; i++) {
        self.content.list[i].active = false
      }
      const tpl_obj = {
        title: '',
        active: false, // 是否选中当前楼层（后台配置时使用，前端显示接口不使用）
        type: '', // 搜索栏：1，--  banner：2，--  公告：3，--  分类导航（一层5个）：4，--  图层（一层可1-4张）：5。（公告和搜索栏，这里只控制是否显示，展示功能前端自行实现，banner图样式自行实现）
        top: 0, // 楼层上间距
        bottom: 0, // 楼层下间距
        left: 0, // 楼层左间距
        right: 0, // 楼层右间距
        is_opacity: false, // 是否半透明（是：true，否：false）
        goods_list: [], // 热门商品新品推荐列表
        shops_list: [], // 推荐店铺列表
        nums: 10, // 商品店铺显示个数
        show_level: 0, // 显示限制：0：全部显示。1：普通用户显示。2：会员显示。
        floor_data: [// 每层显示张数
          {
            good_info: {}, // 商品信息
            title: '设置标题', // 分类导航需要标题时使用（占不使用）
            img_url: '', // 显示图片
            img_width: 0, // 显示宽度
            img_height: 0, // 显示高度
            type: '', // 点击效果类型 ——  商品：1，-- 分类对应列表：2，-- 店铺：3，-- 热门商品列表：4，-- 新品推荐列表：5，-- 推荐店铺列表：6，-- 富文本：7，-- 外链：8，
            param: '', // 点击效果对应参数(热门商品列表：4，新品推荐列表：5，推荐店铺列表：6；没有参数)
            imgtit: ''
          }
        ]
      }
      if (type === 1) {
        // 搜索栏
        tpl_obj.type = '1'
      } else if (type === 2) {
        // banner
        tpl_obj.type = '2'
        tpl_obj.floor_data = [
          {
            good_info: {}, // 商品信息
            title: '设置标题', // 分类导航需要标题时使用
            img_url: '', // 显示图片
            type: '', // 点击效果类型 ——  商品：1，分类对应列表：2，店铺：3，热门商品列表：4，新品推荐列表：5，推荐店铺列表：6，富文本：7，外链：8，
            param: '', // 点击效果对应参数
            imgtit: ''
          },
          {
            good_info: {}, // 商品信息
            title: '设置标题', // 分类导航需要标题时使用
            img_url: '', // 显示图片
            img_width: 0, // 显示宽度
            img_height: 0, // 显示高度
            type: '', // 点击效果类型 ——  商品：1，分类对应列表：2，店铺：3，热门商品列表：4，新品推荐列表：5，推荐店铺列表：6，富文本：7，外链：8，
            param: '', // 点击效果对应参数
            imgtit: ''
          },
          {
            good_info: {}, // 商品信息
            title: '设置标题', // 分类导航需要标题时使用
            img_url: '', // 显示图片
            img_width: 0, // 显示宽度
            img_height: 0, // 显示高度
            type: '', // 点击效果类型 ——  商品：1，分类对应列表：2，店铺：3，热门商品列表：4，新品推荐列表：5，推荐店铺列表：6，富文本：7，外链：8，
            param: '', // 点击效果对应参数
            imgtit: ''
          }
        ]
      } else if (type === 3) {
        // 公告
        tpl_obj.type = '3'
      } else if (type === 4) {
        // 分类导航
        tpl_obj.type = '4'
        tpl_obj.floor_data = [
          {
            good_info: {}, // 商品信息
            title: '设置标题', // 分类导航需要标题时使用
            img_url: '', // 显示图片
            img_width: 0, // 显示宽度
            img_height: 0, // 显示高度
            type: '', // 点击效果类型 ——  商品：1，分类对应列表：2，店铺：3，热门商品列表：4，新品推荐列表：5，推荐店铺列表：6，富文本：7，外链：8，
            param: '', // 点击效果对应参数
            imgtit: ''
          },
          {
            good_info: {}, // 商品信息
            title: '设置标题', // 分类导航需要标题时使用
            img_url: '', // 显示图片
            img_width: 0, // 显示宽度
            img_height: 0, // 显示高度
            type: '', // 点击效果类型 ——  商品：1，分类对应列表：2，店铺：3，热门商品列表：4，新品推荐列表：5，推荐店铺列表：6，富文本：7，外链：8，
            param: '', // 点击效果对应参数
            imgtit: ''
          },
          {
            good_info: {}, // 商品信息
            title: '设置标题', // 分类导航需要标题时使用
            img_url: '', // 显示图片
            img_width: 0, // 显示宽度
            img_height: 0, // 显示高度
            type: '', // 点击效果类型 ——  商品：1，分类对应列表：2，店铺：3，热门商品列表：4，新品推荐列表：5，推荐店铺列表：6，富文本：7，外链：8，
            param: '', // 点击效果对应参数
            imgtit: ''
          },
          {
            good_info: {}, // 商品信息
            title: '设置标题', // 分类导航需要标题时使用
            img_url: '', // 显示图片
            img_width: 0, // 显示宽度
            img_height: 0, // 显示高度
            type: '', // 点击效果类型 ——  商品：1，分类对应列表：2，店铺：3，热门商品列表：4，新品推荐列表：5，推荐店铺列表：6，富文本：7，外链：8，
            param: '', // 点击效果对应参数
            imgtit: ''
          },
          {
            good_info: {}, // 商品信息
            title: '设置标题', // 分类导航需要标题时使用
            img_url: '', // 显示图片
            img_width: 0, // 显示宽度
            img_height: 0, // 显示高度
            type: '', // 点击效果类型 ——  商品：1，分类对应列表：2，店铺：3，热门商品列表：4，新品推荐列表：5，推荐店铺列表：6，富文本：7，外链：8，
            param: '', // 点击效果对应参数
            imgtit: ''
          }
        ]
      } else if (type === 5) {
        // 单图
        tpl_obj.type = '5'
      } else if (type === 6) {
        // 双图
        tpl_obj.type = '6'
        tpl_obj.title = '热门商品'
      } else if (type === 7) {
        // 三图
        tpl_obj.type = '7'
        tpl_obj.title = '推荐商品'
      } else if (type === 8) {
        // 四图
        tpl_obj.type = '8'
        tpl_obj.title = '推荐店铺'
      } else if (type === 9) {
        // 四图
        tpl_obj.type = '9'
        tpl_obj.title = '秒杀专区'
      } else if (type === 10) {
        // 四图
        tpl_obj.type = '10'
        tpl_obj.title = '设置自定义商品板块标题'
        tpl_obj.floor_data = [
          // {
          //   good_info: {}, // 商品信息
          //   title: '设置标题', // 分类导航需要标题时使用
          //   img_url: '', // 显示图片
          //   img_width: 0, // 显示宽度
          //   img_height: 0, // 显示高度
          //   type: '111', // 点击效果类型 ——  商品：1，分类对应列表：2，店铺：3，热门商品列表：4，新品推荐列表：5，推荐店铺列表：6，富文本：7，外链：8，
          //   param: '', // 点击效果对应参数
          //   imgtit: ''
          // }
        ]
      } else if (type === 11) {
        tpl_obj.type = '11'
        tpl_obj.title = '优惠券'
      } else if (type === 12) {
        tpl_obj.type = '12'
        tpl_obj.title = '团购专区'
      } else if (type === 13) {
        tpl_obj.type = '13'
        tpl_obj.title = '秒杀专区'
      } else if (type === 14) {
        tpl_obj.type = '14'
        tpl_obj.title = '团购专区'
      }
      self.content.list.push(tpl_obj)
      setTimeout(function() {
        self.content.list[self.content.list.length - 1].active = true
        const h = document.body.scrollHeight - 1400
        window.scrollTo(0, h)
      }, 300)
    },
    /**
     * 删除楼层
     * index(楼层索引)
    */
    delTpl(index) {
      const self = this
      console.log(index)
      self.content.list.splice(index, 1)
    },
    /**
     * 删除图片
     * index(楼层索引)
    */
    delImg(index, index1) {
      const self = this
      self.content.list[index].floor_data.splice(index1, 1)
      self.content.list[index].goods_list = []
      for (let i = 0; i < self.content.list[index].floor_data.length; i++) {
        self.content.list[index].goods_list.push(self.content.list[index].floor_data[i].good_info.item_id)
      }
    },
    /**
     * 添加图片
     * index(楼层索引)
    */
    addImg(index, t) {
      if (t != 10) {
        const self = this
        const obj = {
          good_info: {}, // 商品信息
          title: '设置标题', // 分类导航需要标题时使用
          img_url: '', // 显示图片
          img_width: 0, // 显示宽度
          img_height: 0, // 显示高度
          type: '1', // 点击效果类型 ——  商品：1，分类对应列表：2，店铺：3，热门商品列表：4，新品推荐列表：5，推荐店铺列表：6，富文本：7，外链：8，
          param: '' // 点击效果对应参数
        }
        self.content.list[index].floor_data.push(obj)
      } else { // 这是自定义商品
        this.theIndex = index
        this.dialogTableVisible4 = true
        this.getAllGoods()
      }
    },
    allSelectOne(d) { // 一级分类选择
      console.log(d) // Allclass2
      this.Allclass2 = []
      this.inpclass2 = ''
      this.all_mcid = ''
      const self = this
      request({
        method: 'post',
        url: '/item/me-category-api/get-category-list',
        data: {
          shop_id: self.tplInfo.shop_id,
          pid: d
        }
      }).then(function(res) {
        self.Allclass2 = res.data.data
      }).catch(function(error) {
        console.log(error)
      })
    },
    allSelectTwo(d) { // 二级分类选择
      console.log(d)
      this.inpMcid = d
    },
    AllResat() {
      this.all_keyWord = ''
      this.inpclass1 = ''
      this.inpclass2 = ''
      this.all_mcid = ''
    },
    AllSearch() { // 搜索
      const self = this
      console.log(this.inpItemId)// 商品id
      console.log(this.all_keyWord)// 商品名字
      console.log(this.all_mcid)// 分类mcid
      // 清空一切数据，干干净净再来请求一次
      self.all_start = 0
      self.all_total = ''
      self.all_showList = []
      // self.all_dataList=[];
      // self.all_idList=[];
      self.getAllGoods()
    },
    // 获取全部商品列表
    getAllGoods() {
      const self = this
      request({
        method: 'post',
        url: '/item/me-item-api/index',
        data: {
          start_page: self.all_start,
          pages: 5,
          shop_id: self.tplInfo.shop_id == 0 ? '' : self.tplInfo.shop_id,
          key_word: self.all_keyWord,
          mcid: self.all_mcid
        }
      }).then(function(res) {
        self.all_total = parseInt(res.data.data.total_pages)
        self.all_showList = res.data.data.list
        setTimeout(function() {
          self.markItem()
        }, 150)
      }).catch(function(error) {
        console.log(error)
      })
    },
    handleCurrentChange4(val) {
      const self = this
      self.all_start = (val - 1)
      self.getAllGoods()
    },
    AllsureSelect(item) {
      console.log(item)
      this.all_dataList.push(item)
      this.all_idList.push(item.item_id)
      this.markItem()
      console.log('已经选中的数据', this.all_dataList)
    },
    AllsureDelete(item) {
      const self = this
      // 从我创建的目前选中的临时data中删除
      this.all_showList.forEach(function(v, i, a) {
        if (item.item_id == v.item_id) {
          self.$set(self.all_showList[i], 'select', 0)
        }
      })
      const newArr1 = []
      const newArr2 = []
      this.all_idList.forEach(function(v, i, a) {
        if (v != item.item_id) {
          newArr1.push(v)
        }
      })
      this.all_dataList.forEach(function(v, i, a) {
        if (v.item_id != item.item_id) {
          newArr2.push(v)
        }
      })
      this.all_idList = newArr1
      this.all_dataList = newArr2
      console.log('已经选中的数据', this.all_dataList)

      // 从已经被保存好的以前的data中删除  因为不存在连续数据，用splice没事
      self.content.list[self.theIndex].floor_data.forEach(function(v, i, a) {
        if (v.param == item.item_id) {
          self.content.list[self.theIndex].floor_data.splice(i, 1)
        }
      })

      this.markItem() // 完美
    },
    markItem() { // 根据all_idList给被选好的数据进行标记  还要根据已经被选好存在的 丧心病狂
      const self = this
      // 根据我选好的
      this.all_idList.forEach(function(val, item, arr) {
        self.all_showList.forEach(function(v, i, a) {
          if (val == v.item_id) { // 被展示的该商品是被选中的
            self.$set(self.all_showList[i], 'select', 1)
          }
        })
      })
      // 根据已经存在的
      console.log('已经存在的自定义商品', self.content.list[self.theIndex].floor_data)
      self.content.list[self.theIndex].floor_data.forEach(function(val, item, index) {
        self.all_showList.forEach(function(v, i, a) {
          if (val.param == v.item_id) { // 被展示的该商品是被选中的
            self.$set(self.all_showList[i], 'select', 1)
          }
        })
      })
    },

    SaveAllGoods() {
      const self = this
      const arr1 = []
      const arr2 = []
      const obj = {
        good_info: {}, // 商品信息
        title: '设置标题', // 分类导航需要标题时使用
        img_url: '', // 显示图片
        img_width: 0, // 显示宽度
        img_height: 0, // 显示高度
        type: '111', // 点击效果类型 ——  商品：1，分类对应列表：2，店铺：3，热门商品列表：4，新品推荐列表：5，推荐店铺列表：6，富文本：7，外链：8，
        param: '', // 点击效果对应参数
        imgtit: ''
      }
      self.all_dataList.forEach(function(val, ind, arr) {
        const ddd = JSON.stringify(obj)
        const obj2 = JSON.parse(ddd)
        arr1.push(obj2)
      })
      console.log('空数据的', arr1)
      self.all_dataList.forEach(function(val, ind, arr) {
        arr1[ind].param = val.item_id
        arr1[ind].good_info = val
      })
      console.log('有数据的', arr1)
      console.log('老数组', self.content.list[self.theIndex].floor_data)
      arr1.forEach(function(v, i, a) {
        self.content.list[self.theIndex].floor_data.push(v)
      })
      console.log('保存拼接后的', self.content.list[self.theIndex].floor_data)
      for (let i = 0; i < arr1.length; i++) {
        self.content.list[self.theIndex].goods_list.push(arr1[i].good_info.item_id)
      }
      // 删除data中数据。等等还需要判断刷新页面之后数据是否在之前已经被保存2333333
      // all_start:0, //起始页  以下数据专供自定义商品选择页面233333
      // theIndex:'',//属于楼层位置顺位
      // all_total:'',//全部页面
      // all_mcid:'', //品类id
      // all_keyWord:'', //搜索关键字
      // all_showList:'',  //展示用列表
      // all_dataList:[],  //选中的数据列表
      // all_idList:[],  //选中的id列表
      self.all_start = 0
      self.theIndex = ''
      self.all_total = ''
      self.all_mcid = ''
      self.all_keyWord = ''
      self.all_showList = []
      self.all_dataList = []
      self.all_idList = []

      self.dialogTableVisible4 = false
    },
    /**
     * 图片下移
     * index(楼层索引)
    */
    downImg(index, index1) {
      const self = this
      if (index1 === (self.content.list[index].floor_data.length - 1)) {
        return
      }
      const obj = self.content.list[index].floor_data[index1]
      const obj1 = self.content.list[index].floor_data[index1 + 1]
      self.$set(self.content.list[index].floor_data, index1, obj1)
      self.$set(self.content.list[index].floor_data, (index1 + 1), obj)

      const dd1 = self.content.list[index].goods_list[index1]
      const dd2 = self.content.list[index].goods_list[index1 + 1]
      self.$set(self.content.list[index].goods_list, index1, dd2)
      self.$set(self.content.list[index].goods_list, (index1 + 1), dd1)
    },
    setTime(index, index1) {
      const self = this
      const newDate = self.getNowDate()
      self.content.list[index].floor_data[index1].time = newDate
    },
    getNowDate() {
      const date = new Date()
      const seperator1 = '-'
      // const year = date.getFullYear()
      let month = date.getMonth() + 1
      let strDate = date.getDate()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      const currentdate = month + seperator1 + strDate
      return currentdate
    },
    /**
     * 图片上移
     * index(楼层索引)
    */
    upImg(index, index1) {
      if (index1 === 0) {
        return
      }
      const self = this
      const obj = self.content.list[index].floor_data[index1]
      const obj1 = self.content.list[index].floor_data[index1 - 1]
      self.$set(self.content.list[index].floor_data, index1, obj1)
      self.$set(self.content.list[index].floor_data, (index1 - 1), obj)

      const dd1 = self.content.list[index].goods_list[index1]
      const dd2 = self.content.list[index].goods_list[index1 - 1]
      self.$set(self.content.list[index].goods_list, index1, dd2)
      self.$set(self.content.list[index].goods_list, (index1 - 1), dd1)
    },
    // 获取模板信息
    getTplInfo() {
      const self = this
      request({
        method: 'post',
        url: '/floor/floor-api/get-floor',
        data: {
          floor_id: self.floor_id
        }
      }).then(function(res) {
        self.tplInfo.title = res.data.data.title
        self.tplInfo.abstract = res.data.data.abstract
        self.tplInfo.content = res.data.data.content
        self.tplInfo.floor_id = res.data.data.id
        const bList = JSON.parse(res.data.data.content)
        console.log(bList)
        console.log(2222)
        if (bList.list) {
          for (let i = 0; i < bList.list.length; i++) {
            bList.list[i].active = false
          }
          self.content = bList
        }
      }).catch(function(error) {
        console.log(error)
      })
    },
    // 保存模板信息
    saveTplInfo() {
      const self = this
      self.tplInfo.content = JSON.stringify(self.content)
      if (!self.tplInfo.content) {
        self.$message({
          type: 'info',
          message: '数据不能为空，会刷新页面重试!'
        })
        return
      }
      request({
        method: 'post',
        url: '/floor/floor-api/update-floor',
        data: self.tplInfo
      }).then(function(res) {
        self.$message({
          message: '保存成功！',
          type: 'success'
        })
      }).catch(function(error) {
        console.log(error)
      })
    },
    // 获取商品分类
    getClass1() {
      const self = this
      request({
        method: 'post',
        url: '/item/me-category-api/index',
        data: {
          shop_id: 0
        }
      }).then(function(res) {
        self.class1 = res.data.data.list
        if (res.data.data.list.length > 0) {
          self.class1_act = res.data.data.list[0].mcid
        }
        self.class2 = []
        self.getClass2()
      }).catch(function(error) {
        console.log(error)
      })
    },
    selectClass1(item) {
      const self = this
      self.class1_act = item.mcid
      self.class2 = []
      self.goods = []
      self.getClass2()
    },
    // 获取商品2级分类
    getClass2() {
      const self = this
      request({
        method: 'post',
        url: '/item/me-category-api/get-category-list',
        data: {
          shop_id: self.tplInfo.shop_id,
          pid: self.class1_act
        }
      }).then(function(res) {
        self.class2 = res.data.data
        self.class2_act = res.data.data[0].mcid
        self.getGoods()
      }).catch(function(error) {
        console.log(error)
      })
    },
    selectClass2(item) {
      const self = this
      self.start_page1 = 0
      self.key_word1 = ''
      if (this.select_type === '1') {
        self.class2_act = item.mcid
        self.goods = []
        self.getGoods()
      } else if (this.select_type === '2') {
        self.content.list[this.select_index].floor_data[this.select_index1].param = item.mcid
        self.content.list[this.select_index].floor_data[this.select_index1].title = item.name
        // 点击分类的 时候不让他自动替换
        // self.content.list[this.select_index].floor_data[this.select_index1].img_url = item.img_url
        self.dialogTableVisible = false
      }
    },
    // 获取商品列表
    getGoods() {
      const self = this
      request({
        method: 'post',
        url: '/item/me-item-api/index',
        data: {
          start_page: self.start_page1,
          pages: 5,
          shop_id: self.tplInfo.shop_id,
          key_word: self.key_word1,
          mcid: self.class2_act
        }
      }).then(function(res) {
        self.total_pages1 = parseInt(res.data.data.total_pages)
        self.goods = res.data.data.list
      }).catch(function(error) {
        console.log(error)
      })
    },
    sureSelect(item) {
      const self = this
      console.log(8888888888888, item)
      self.content.list[this.select_index].floor_data[this.select_index1].param = item.item_id
      self.content.list[this.select_index].floor_data[this.select_index1].good_info = item
      self.content.list[this.select_index].goods_list = []
      for (let i = 0; i < self.content.list[this.select_index].floor_data.length; i++) {
        self.content.list[this.select_index].goods_list.push(self.content.list[this.select_index].floor_data[i].good_info.item_id)
      }
      self.dialogTableVisible = false
    },
    sureSelectGift2(item) {
      const self = this
      console.log(8888888888888, item)
      self.content.list[this.select_index].floor_data[this.select_index1].param = item.item_id
      self.content.list[this.select_index].floor_data[this.select_index1].good_info = item
      self.content.list[this.select_index].goods_list = []
      for (let i = 0; i < self.content.list[this.select_index].floor_data.length; i++) {
        self.content.list[this.select_index].goods_list.push(self.content.list[this.select_index].floor_data[i].good_info.item_id)
      }
      self.dialogTableVisible = false
    },
    handleCurrentChange1(val) {
      const self = this
      self.start_page1 = (val - 1)
      self.getGoods()
    },
    // 获取店铺列表
    getShops() {
      const self = this
      request({
        method: 'post',
        url: '/shop/shop-api/index',
        data: {
          start_page: self.start_page2,
          pages: 6,
          key_word: self.key_word2
        }
      }).then(function(res) {
        self.total_pages2 = parseInt(res.data.data.total_pages)
        self.shops = res.data.data.list
        console.log(self.shops)
      }).catch(function(error) {
        console.log(error)
      })
    },
    sureSelectShop(item) {
      const self = this
      self.content.list[this.select_index].floor_data[this.select_index1].param = item.id
      self.dialogTable1Visible = false
    },
    handleCurrentChange2(val) {
      const self = this
      self.start_page2 = (val - 1)
      self.getShops()
    },
    // 获取店礼包列表
    getGift() {
      const self = this
      request({
        method: 'post',
        url: '/item/me-item-api/index',
        data: {
          'token': '',
          'start_page': self.start_page3,
          'pages': 6,
          'item_type': 4
        }
      }).then(function(res) {
        self.total_pages3 = parseInt(res.data.data.total_pages)
        self.gifts = res.data.data.list
        console.log('gifts', self.shops)
      }).catch(function(error) {
        console.log(error)
      })
    },
    sureSelectGift(item) {
      const self = this
      self.content.list[this.select_index].floor_data[this.select_index1].param = item.item_id
      self.content.list[this.select_index].floor_data[this.select_index1].good_info = item
      self.dialogTableVisible2 = false
    },
    handleCurrentChange3(val) {
      const self = this
      self.start_page3 = (val - 1)
      self.getGift()
    },
    // 获取楼层
    getfloor() {
      const self = this
      request({
        method: 'post',
        url: '/floor/floor-api/get-use-position-list',
        data: {
          shop_id: self.tplInfo.shop_id
        }
      }).then(function(res) {
        self.floors = res.data.data
        console.log('floors', self.floors)
      }).catch(function(error) {
        console.log(error)
      })
    },
    sureSelectfloor(item) {
      const self = this
      self.content.list[this.select_index].floor_data[this.select_index1].param = item.position_code
      self.dialogTableVisible3 = false
    }
    // handleCurrentChange3(val) {
    //   const self = this
    //   self.start_page3 = (val - 1)
    //   self.getGift()
    // },
  }

}
</script>
<style lang="scss">
.index-tpl {
  width: 100%;
  padding: 0px;
  margin-bottom: 500px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  .f-tools{
    position: fixed;
    bottom:0;
    top:0;
    right:0px;
    width:140px;
    background-color: #f7f7f7;
    z-index: 10;
    padding: 0px;
    box-sizing: border-box;
    box-shadow: 0 0 9px 0 rgba(0,0,0,.4);
    height: 100%;
    overflow-y: auto;
    .tool-box{
      line-height: 36px;
      .tool-item{
        padding: 0 5px;
      }
    }
  }
  .tpl-column {
    width: 322px;
    min-height: 570px;
    border: solid 1px #999999;
    height: auto;
    background-color: #f0f0f0;
    overflow: hidden;
    .tpl-column-header {
      height: 50px;
      line-height: 50px;
      overflow: hidden;
      padding: 0 20px;
      text-align: center;
      background: #333333;
      display: flex;
      color: #fff;
    }

    .tpl-column-content {
      background-position: 0 0;
      background-repeat: no-repeat;
      background-size: 100%;
      height: auto;
      overflow: hidden;
      min-height: 518px;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: center;
      .tpl-item {
        cursor: pointer;
        width: 100%;
        position: relative;
        min-height: 40px;
        height: auto;
        // background-color: #fff;
        text-align: left;
        line-height: 44px;
        box-sizing: border-box;
        .tpl-item-box{
          display: block;
          box-sizing: border-box;
          .tpl-item-box1{
            display: flex;
            box-sizing: border-box;
            .item-box-item{
              flex:1;
              span{
                padding: 2px 10px;
                border-radius: 12px;
                background-color: rgba(0, 0, 0, .8);
                display: block;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                z-index: 99;
                line-height: 1.4;
              }
              img{
                width: 100%;
                display: block;
              }
              .no-img{
                background-size: cover;
                background-repeat: no-repeat;
                background-position: 50% 50%;
                width: 100%;
                border: 1px dashed rgb(110, 109, 108);
                text-align: center;
                // background-color: #7ac0e0;
                color: #ffffff;
                &.hot-goods{
                  height: 200px;
                  background-image:url('../../assets/screenshot/hot.png');
                }
                &.new-goods{
                  height: 200px;
                  background-image:url('../../assets/screenshot/new.png');
                }
                &.spike{
                  height: 240px;
                  background-image:url('../../assets/screenshot/spike.png');
                }
                &.spike1{
                  height: 240px;
                  background-image:url('../../assets/screenshot/spike2.png');
                }
                &.spike2{
                  height: 240px;
                  background-image:url('../../assets/screenshot/spike1.png');
                }
                &.spike3{
                  height: 240px;
                  background-image:url('../../assets/screenshot/spike3.png');
                }
                &.notice{
                  height: 40px;
                  background-image:url('../../assets/screenshot/notice.png');
                }
                &.shop{
                  height: 250px;
                  background-image:url('../../assets/screenshot/shop.png');
                }
                &.vae{
                  height: 200px;
                  background-image:url('../../assets/screenshot/vae.png');
                }
                &.coupon{
                  height: 50px;
                  background-image:url('../../assets/screenshot/coupon.png');
                }
              }
              .item-box-item__mask{
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0,0,0,.4);
                z-index: 10;
              }
              .search-bar{
                display: flex;
                line-height: 34px;
                padding: 5px 10px;
                .el-input--medium .el-input__inner {
                    border-radius: 18px;
                    opacity: 0.6;
                }
              }
            }
          }
          .tpl-item-box2{
            overflow: hidden;
            box-sizing: border-box;
            background-color: #ffffff;
            padding: 5px;
            .item-box-item{
              width: 20%;
              padding: 4px;
              text-align: center;
              float: left;
              img{
                width: 40px;
                height: 40px;
                margin: 0 auto;
                border-radius: 20px;
                display: block;
              }
              .c-text{
                line-height: 22px;
                color: #1F1F1E;
                text-align: center;
                font-weight:300;
                font-size:12px;
              }
              .no-img{
                width: 100%;
                line-height: 44px;
                border: 1px dashed rgb(110, 109, 108);
                text-align: center;
                background-color: #7ac0e0;
                color: #ffffff;
              }
              .search-bar{
                display: flex;
                line-height: 34px;
                padding: 5px 10px;
                .el-input--medium .el-input__inner {
                    border-radius: 18px;
                    opacity: 0.6;
                }
              }
            }
          }

        }
        .box-tool{
          position: absolute;
          display: none;
          top:0;
          left:0;
          width: 100%;
          height: 100%;
          border: 2px dashed #fa0;
          z-index: 2000;
          .box-tool-panel{
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            font-size: 12px;
            position: relative;
            .floor-del{
              position: absolute;
              text-align: center;
              bottom: 5px;
              right:5px;
              width: 40px;
              height: 25px;
              box-sizing: border-box;
              line-height: 25px;
              background: rgba(0,0,0,.4);
              color: #fff;
            }
            .floor-edit{
              position: absolute;
              text-align: center;
              bottom: 5px;
              right:5px;
              width: 40px;
              height: 25px;
              box-sizing: border-box;
              line-height: 25px;
              background: rgba(0,0,0,.4);
              color: #fff;
            }
          }
        }
        .f-block{
          display: block;
        }
      }
      .tpl-item:hover{
          .box-tool{
            display: block;
          }
      }

    }
  }
}
.panel-close{
  position: absolute;
  right: 5px;
  top: 5px;
}
.edit-panel{
  padding: 0px;
  position: relative;
  cursor: pointer;
  .one-row{
    margin-bottom: 5px;
    display: flex;
    .row-col{
      flex: 1;
      display: flex;
      padding: 0 10px 0 0;
      line-height: 32px;
      .col-label{
        padding-right: 15px;
      }
    }
  }
  .two-row{
    padding: 0;
    max-height: 500px;
    overflow-y: auto;
    .two-row-item{
      border: solid 1px #dddddd;
      margin-bottom: 5px;
      position: relative;
      min-height: 110px;
      .item-btns{
        position: absolute;
        z-index: 10;
        right: 0;
        top:0;
        width: 60px;
        text-align: right;
        padding: 5px;
        box-sizing: border-box;
      }
      .item-content{
        display: flex;
        padding: 5px;
        overflow: hidden;
        .img-box{
          width: 100px;
          height: 100px;
          margin-right: 10px;
        }
        .data-box{
          flex: 1;
          min-height: 80px;
        }
      }
    }
  }
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .el-carousel{
    width: 100%;
  }

.el-carousel__item--card {
    width: 86%;
    left:-18%;
    -webkit-transition: -webkit-transform .4s ease-in-out;
    transition: -webkit-transform .4s ease-in-out;
    transition: transform .4s ease-in-out;
    transition: transform .4s ease-in-out, -webkit-transform .4s ease-in-out;
    transition: transform .4s ease-in-out,-webkit-transform .4s ease-in-out;
}
.el-dialog__body{
  padding: 0;
  border: solid 1px #f1f1f1;
  min-height: 400px;
}
.el-radio--mini.is-bordered {
    padding: 6px 3px 0 3px;
    border-radius: 3px;
    height: 28px;
}
.el-radio__label {
    padding-left: 3px;
}
.el-popover {
    padding: 3px;
}
</style>

