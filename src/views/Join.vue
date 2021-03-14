<template>
  <section class="join">
    <header>
       <h1 class="title">회원가입</h1>
    </header>
    <div class="member_wrapper sub_wrap">
      <form action="" name="frm">
         <dl>
            <dt class="hidden">아이디</dt>
            <dd>
              <Input type="text" label="아이디를 입력해주세요." name="userId" id="userId" invaild="이미 존재하는 아이디입니다." vaild="사용가능한 아이디입니다."  @keyup="isIdVaild" :isPass="idPass" />
            </dd>
            <dt class="hidden">비밀번호</dt>
            <dd>
              <Input type="password" label="비밀번호를 입력해 주세요." invaild="비밀번호를 다시 입력해주세요." vaild="비밀번호를 정상으로 입력하셨습니다." name="userPw" id="userPw" @keyup="isPwdVaild" :isPass="pwdPass"/>
            </dd>
            <dt>성별</dt>
            <dd class="gender"> <!-- 디자인 스타일 : theme1, theme2 -->
              <Radio id="man" name="gender" label="남자"  type="theme2"/>
              <Radio id="woman" name="gender" label="여자"  type="theme2"/>
            </dd>
            <dt>생일</dt>
            <dd class="birth">
              <ComboBox :items="yearsList" label="년도" id="" name=""/>
              <ComboBox :items="monthList" label="월" id="" name=""/>
              <ComboBox :items="dayList" label="일" id="" name=""/>
            </dd>
            <dt>전화</dt>
            <dd class="phone">
              <ComboBox :items="phoneList" label="" id="" name=""/>
              <Input type="tel" label="-없이 번호를 입력해주세요." invaild="숫자만 입력가능합니다." :maxlength="8" name="phone" id="phone" @keyup="isNumVaild" :isPass="numPass"/>
              <Btn text="인증" type="small"/>
            </dd>
          </dl>
          <div class="agreement">
             <!-- 디자인 스타일 : theme1, theme2 -->
            <CheckBox label="모든 약관 내용에 동의합니다." id="agreement" name="agreement" type="theme2"/>
          </div>
          <div class="btn-area">
            <Btn text="가입하기"  />
          </div>
      </form>
    </div>
  </section><!--// content -->
</template>

<script>
import '../assets/css/member.css'
import Btn from '../components/Button'
import CheckBox from '../components/CheckBox'
import ComboBox from '../components/ComboBox'
import Input from '../components/Input'
import Radio from '../components/Radio'

export default {
  name: 'Join',
  props: { },
  components:{
    Btn,ComboBox,Input,Radio,CheckBox
  },
  data(){
    return {
        yearsList:[],
        monthList:[],
        dayList:[],
        phoneList:['02','031','032','033','041','043','042','044','051','052','053','054','055','061','062','063','064','070',{text:'010',value:'010',selected:'true'},'011','016','017','019'],
        idPass:'',
        pwdPass:'',
        numPass:''
    }
  }, mounted() {
       let now = new Date();
      let nyear = now.getFullYear();
      for(let i = 1960 ; i <= nyear ; i++) 
        this.yearsList.push({text:`${i}년`,value:i}); 
      for(let i = 1 ; i <= 12 ; i++) 
        this.monthList.push({text:`${i}월`,value:i});  
      for(let i = 1 ; i <= 31 ; i++) 
        this.dayList.push({text:`${i}일`,value:i});   
  },
  methods: {
    isIdVaild(e){
      if(e.target.value.length  == 0  ) this.idPass = undefined;
      else if(e.target.value.length > 5 ) this.idPass = "true";
    },
    isPwdVaild(e){
      if(e.target.value.length  == 0  ) this.pwdPass = undefined;
      else{
        if(e.target.value.length <= 6 ) this.pwdPass = "false";
        if(e.target.value.length > 6 && e.target.value.length > 12)  this.pwdPass = "true";
      }
    },
     isNumVaild(e){
      if(e.target.value.length  == 0  ) this.numPass = undefined;
      else{
        if(e.target.value.length > 8 ) return false;
        if(e.keyCode<48 || e.keyCode>57) this.numPass = "false";
        else this.numPass = "true";
      }
    }
  },
}
</script>
