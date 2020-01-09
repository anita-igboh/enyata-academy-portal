<template>
      <div class="all">
           <div class="first_sec">
              <img src="../assets/white logo.png" id="same" alt="enyata_logo">
            <div class="f_s_txt">
              <h5>enyata</h5>
              <h6>Admin Log In</h6>
            </div>
          </div>
        <div class="txt_box">
            <form class="input-form">
              <div class="form-item">
                <p><label for="email">Email Address</label></p>
                    <input type="text" id="uname" name="username">
              </div>
              <div class="form-item">
                  <p><label for="password">Password</label></p>
                    <input type="password" id="uname" name="username">
              </div>
            </form>
            <router-link to ='/adminDash'><button class="btn_sign">Sign In</button></router-link>
            <div class="account">
            <p class="password">Forgot password?</p>
            </div>
        </div>
      </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    
  }
}
</script>
<style scoped>
.all {
  background-image: url("../assets/background-logo.png"); 
  background-repeat: no-repeat;
  background:#122A3A;
}
.first_sec {
  max-width: 400px;
  margin: 0 auto;
}
.form-item{
  text-align: center;

}
h5{
  font-size: 30px;
  font-weight: bold;
  color:white;
  margin-top: 20px;
  margin-bottom: 0;
}
h6{
    font-size: 20px;
    font-style: italic;
  margin-top: 20px;
  margin-bottom:40px;
  color:white;
}
.account{
  display: flex;
  font-style: italic;
  font-size: 12px;
}
button{
  margin:0 auto;
  background-color:white;
  color: #2B3C4E;
  border-radius: 4px;
  width:379px;
  height:50px;
  border:none;
  margin-top: 40px;
}
.password{
  padding-left: 755px;
  color:white;
}
.input-form {
  margin: 0 auto;
}
input {
  width:379px;
  height: 41px;
  border: 1.5px solid white;
  box-sizing: border-box;
  border-radius: 4px;
  background:#122A3A; 
}
label{
  color:white;
  margin-right: 17em;
  padding-top: 20em;
}
img{
  height: 70px;
  margin-top: 150px;
}
</style>
