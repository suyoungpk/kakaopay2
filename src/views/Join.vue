<template>
  <section class="join">
    <h1 class="title">회원가입</h1>
    <div class="member_wrapper">
      <form action="" name="frm">
         <dl>
            <dt><Icon text="필수" require />아이디 (이메일)</dt>
            <dd>
              <Input type="text" label="아이디를 입력해주세요." name="pwd" id="" width="" fill />
            </dd>
            <dt>
              <Icon text="필수" require />비밀번호
              <p>6자 이상 20자 이하</p>
            </dt>
            <dd>
              <Input type="password" label="비밀번호를 입력해 주세요." name="pwd" id="pwd" width="" fill />
            </dd>
            <dt>
              <span class="ico required">필수</span> 성별
            </dt>
            <dd>
              <div class="radio-box">
                <input type="radio" id="man" name="gender">
                <label for="man">남자</label>
              </div>
              <div class="radio-box">
                <input type="radio" id="woman" name="gender">
                <label for="woman">여자</label>
              </div>
            </dd>
            <dt><span class="ico required">필수</span>생일</dt>
            <dd>
              <div class="select-box">
                  
              </div>
            </dd>
            <dt><span class="ico required">필수</span>전화</dt>
            <dd>
              <div class="input-box validator">
                <div>
                  <label for="phone">'-'없이 입력해 주세요</label>
                  <input type="text" value="" name="phone" id="phone">
                  <div class="float">
                    <button type="button" class="text btn-send" onclick="sendRegNum(this)">인증번호 전송</button>
                  </div>
                  <p></p>
                </div>
              </div>
            </dd>
            <dd id="regnum" style="display:none">
              <div class="input-box validator">
                <div>
                  <label for="phone2">인증번호를 입력해 주세요</label>
                  <input type="text" value="" name="phone2" id="phone2">
                  <div class="float noline">
                    <span class="timer"></span>
                    <button type="button" class="btn btn-blue btn-reg" onclick="cfmRegNum(this)">인증</button>
                  </div>
                  <p></p>
                </div>									
              </div>
            </dd>
            <dt><span class="ico required">필수</span>이용약관 동의
              <div class="right">
                <span class="chk-box allchk">
                  <input type="checkbox" name="chk" id="all-chk">
                  <label for="all-chk">전체동의</label>
                </span>
              </div>
            </dt>
            <dd>
              <ul class="terms-list">
                <li>
                  <span class="chk-box">
                    <input type="checkbox" name="chk" id="terms01" class="required">
                    <label for="terms01">(필수) 개인정보 수집 및 이용 동의</label>
                  </span>
                  <button type="button" class="btn-view">내용보기</button>
                </li>
                <li>
                  <span class="chk-box">
                    <input type="checkbox" name="chk" id="terms02" class="required">
                    <label for="terms02">(필수) 이용약관 동의 </label>
                  </span>
                  <button type="button" class="btn-view" >내용보기</button>
                </li>
                <li>
                  <span class="chk-box">
                    <input type="checkbox" name="chk" id="terms03" class="required">
                    <label for="terms03">(필수) 만 14세 이상입니다.</label>
                  </span>
                </li>
              </ul>
            </dd>
          </dl>
          <div class="btn-area">
            <button type="button" class="btn btn-blue-line big">취소</button>
            <button type="button" class="btn btn-blue  big" disabled>회원가입</button>
          </div>
      </form>
    <!--
      <form action="" name="frm">
        <h1 class="hidden">회원가입 양식</h1>
        <main>
          <dl>
            <dt><span class="ico required">필수</span>아이디 (이메일)</dt>
            <dd>
              <div class="input-box validator">
                <div>
                  <label for="userid">이메일을 입력해 주세요.</label>
                  <input type="text" value="" name="userid" id="userid" class="required">
                  <p></p>
                </div>
              </div>
            </dd>
            <dt>
              <span class="ico required">필수</span>비밀번호
              <p>6자 이상 20자 이하</p>
            </dt>
            <dd>
              <div class="input-box validator password">
                <label for="pw">비밀번호를 입력해 주세요.</label>
                <input type="password" value="" name="pwd1" id="pw" class="required">
                <p></p>
              </div>
            </dd>
            <dd>
              <div class="input-box validator passwordcheck">
                <label for="chkpw">비밀번호를 한번 더 입력해 주세요.</label>
                <input type="password" value="" name="pwd2" id="chkpw" class="required">
                <p></p>
              </div>
            </dd>
            <dt>
              <span class="ico required">필수</span> 성별
            </dt>
            <dd>
              <div class="radio-box">
                <input type="radio" id="man" name="gender">
                <label for="man">남자</label>
              </div>
              <div class="radio-box">
                <input type="radio" id="woman" name="gender">
                <label for="woman">여자</label>
              </div>
            </dd>
            <dt><span class="ico required">필수</span>생일</dt>
            <dd>
              <div class="select-box">
                  
              </div>
            </dd>
            <dt><span class="ico required">필수</span>전화</dt>
            <dd>
              <div class="input-box validator">
                <div>
                  <label for="phone">'-'없이 입력해 주세요</label>
                  <input type="text" value="" name="phone" id="phone">
                  <div class="float">
                    <button type="button" class="text btn-send" onclick="sendRegNum(this)">인증번호 전송</button>
                  </div>
                  <p></p>
                </div>
              </div>
            </dd>
            <dd id="regnum" style="display:none">
              <div class="input-box validator">
                <div>
                  <label for="phone2">인증번호를 입력해 주세요</label>
                  <input type="text" value="" name="phone2" id="phone2">
                  <div class="float noline">
                    <span class="timer"></span>
                    <button type="button" class="btn btn-blue btn-reg" onclick="cfmRegNum(this)">인증</button>
                  </div>
                  <p></p>
                </div>									
              </div>
            </dd>
            <dt><span class="ico required">필수</span>이용약관 동의
              <div class="right">
                <span class="chk-box allchk">
                  <input type="checkbox" name="chk" id="all-chk">
                  <label for="all-chk">전체동의</label>
                </span>
              </div>
            </dt>
            <dd>
              <ul class="terms-list">
                <li>
                  <span class="chk-box">
                    <input type="checkbox" name="chk" id="terms01" class="required">
                    <label for="terms01">(필수) 개인정보 수집 및 이용 동의</label>
                  </span>
                  <button type="button" class="btn-view">내용보기</button>
                </li>
                <li>
                  <span class="chk-box">
                    <input type="checkbox" name="chk" id="terms02" class="required">
                    <label for="terms02">(필수) 이용약관 동의 </label>
                  </span>
                  <button type="button" class="btn-view" >내용보기</button>
                </li>
                <li>
                  <span class="chk-box">
                    <input type="checkbox" name="chk" id="terms03" class="required">
                    <label for="terms03">(필수) 만 14세 이상입니다.</label>
                  </span>
                </li>
              </ul>
            </dd>
          </dl>
          <div class="btn-area">
            <button type="button" class="btn btn-blue-line big">취소</button>
            <button type="button" class="btn btn-blue  big" disabled>회원가입</button>
          </div>
        </main>
      </form>
      -->
      <Btn />
      <ComboBox />
      <Input />
      <Radio />
    </div>
  </section><!--// content -->
</template>

<script>
import Alert from '../components/Alert'
import Btn from '../components/Button'
import Icon from '../components/Icon'
import ComboBox from '../components/ComboBox'
import Input from '../components/Input'
import Radio from '../components/Radio'

export default {
  name: 'Join',
  props: {
   
  },
  components:{
    Alert,Icon,Btn,ComboBox,Input,Radio
  }
}
</script>
