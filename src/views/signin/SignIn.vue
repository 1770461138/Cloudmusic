<template>
  <div id="sign-in">
    <div class="logo">
      <img src="~@/assets/img/logo.jpg" alt="">
    </div>
    <div class="content">
      <div class="input" >
        <el-input
          placeholder="手机号或邮箱"
          clearable
          v-model="userID"
          autofocus
          ref="user"
          ></el-input>
        <p/>
        <el-input 
          placeholder="请输入密码" 
          show-password
          clearable
          v-model="password"
          ref="password"></el-input>
      </div>
      <div class="button">
        <div class="signin"> 
          <el-button  round style="background:#cc051c;color:white;border:1px solid white">注 册</el-button>
          <el-button  round style="border:none;color:black;" @click="_SignIn">登 录</el-button>
        </div>
      </div>
    </div>
    <div class="footer">
      <span>登录即代表阅读并同意</span>
      <span style="color:black">服务协议</span>
    </div>
  </div>
</template>
<script>
import {PSignIn,Register} from '@/network/signin.js'
import {Dialog} from 'vant'
import {mapGettemapGetters, mapGetters} from 'vuex'
export default {
  name:'SignIn',
  data() {
    return{
      userID: null,
      password: '',
      code: 0,
      token: ''
    }
  },
  computed: {
    ...mapGetters(['getSignInfo'])
  },
  mounted() {
    if(this.getSignInfo.token !== undefined){
      console.log('token存在');
    }
    
  },
  methods: {
    _SignIn() {
      if(this.userID === null) {
        Dialog.confirm({
          message: '账号不能为空',
          width: '200px',
        }).then(()=>{
          this.$nextTick(()=>{//获取焦点
            this.$refs.user.focus()
          })
        })
      }else {
        if(!(/^1[3456789]\d{9}$/.test(this.userID))){ //正则判断
            Dialog.confirm({
              message: '请输入正确的手机号',
              width: '200px',
            }).then(()=>{
              this.$nextTick(()=>{//获取焦点
                this.$refs.user.focus()
              })
            })
            return false; 
          }else {
            Register(this.userID).then(res=>{//检查用户是否存在
              console.log(res);
              const exist = res.exist
              if(exist === -1) {//用户不存在
                Dialog.confirm({
                  message: '用户不存在，请先注册',
                  width: '200px',
                })
              }else if(exist === 1) {//用户存在
                if(this.password === '') {
                  Dialog.confirm({
                    message: '请输入密码',
                    width: '200px',
                  }).then(()=>{
                    this.$nextTick(()=>{//获取焦点
                      this.$refs.password.focus()
                    })
                  })
                }else {
                  this._PSignIn(this.userID,this.password)
                }
              }
            })
          }
      }
    },
    _PSignIn(phone,password) {//手机号登录
      PSignIn(phone,password).then(res=>{
        console.log(res);
        this.code = res.code
        if(this.code ===502) {
          Dialog.confirm({
            message: '密码错误，请重新输入！',
            width: '200px',
          }).then(()=>{
            this.$nextTick(()=>{//获取焦点
              this.$refs.password.focus()
            })
          }).catch(()=>{
            console.log('点击取消时触发');
          })
        }else if(this.code === 200) {
          console.log('登录成功');
          this.$store.commit('SetSignInfo',res)
          this.$router.push('/find')
        }
      })
    },
    _ESignIn() {//网易邮箱登录
      ESignIn(this.userID,this.password).then(res=>{
        console.log(res);
        this.code = res.code
        if(this.code ===502) {
          Dialog.confirm({
            message: '密码错误，请重新输入！',
            width: '200px',
          }).then(()=>{
            console.log('----------');
          }).catch(()=>{
            console.log('++++++++++');
          })
        }else if(this.code === 200) {
          console.log('登录成功');
          this.$router.push('/find')
        }
      })
    },
  },
}
</script>
<style scoped>
  #sign-in {
    display: flex;
    background: #cc051c;
    flex-direction: column;
    height: 100vh;
  }
  .logo {
    height: 40%;
    text-align: center;
  }
  .logo img {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    margin-top: 100px;
  }
  .content {
    flex: 1;
    
  }
  .input {
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
  }
  .signin {
    text-align: center;
    margin-top: 30px;
  }
  .footer {
    height: 70px;
    color: rgb(240, 234, 234);
    text-align: center;
    font-size: 14px;
  }
</style>