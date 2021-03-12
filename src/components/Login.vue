<template>
    <main class="login">
         <h1>Messenger</h1> 
         <div>
            <form>
               <div class="input-box">
                  <input type="text" value="" id="userId" > 
                  <label for="userId">아이디(이메일)</label>
               </div>
              <div class="input-box">
                  <input type="password" value="" id="userPwd">
                  <label for="userPwd">비밀번호</label>
              </div>
               <button class="btn btn-login" type="button">로그인</button>
            </form>
         </div>
         <a href="#" class="btn btn-find">아이디/비밀번호 찾기</a>
      </main>
      <div class="tray">
          <Join />
      </div>
</template>

<script>
import '../assets/css/member.css'
import Join from './Join'
export default {
  name: 'Login',
  props: {
   
  },
  components: {
    Join
  }
}
</script>
