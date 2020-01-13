<template>
<div class="hero">
    <div class="app">
        <applicantSidebar/>
    </div>

    <div class="createpage">
        <h1 class="compose">
            Create Application
        </h1>

        <div class="flex-inputs">
            <div class="choose-file">
                <input class="first-input" type="text" name="" id="" placeholder="+ Choose file">
            </div>
        <div class="text">
            <p>Link</p>
            <input class="second-input" type="text" name="" id="">
        </div>
        </div>
        <div class="second-content">
        <div>
            <p>Application closure date</p>
            <input type="text" name="" id="" placeholder="">
        </div>
        <div class="text2">
            <p>Batch ID</p>
            <input type="text" name="" id="">
        </div>
        </div>
        <div class="question-space">
            <h5>Instructions</h5>
            <input type="text" />
        </div>
            <button>Submit</button>
    </div>
</div>
</template>

<script>
import applicantSidebar from '@/components/applicantSidebar.vue'


export default {
  name: 'createApplication',
  components: {
    applicantSidebar

  }
}
</script>

<style scoped>
.compose{
    text-align: left;
}
button {
margin-top: 40px;
background: #2B3C4E;
border-radius: 4px;
width: 379px;
height: 50px;
margin-left: 250px;
color: white;
border: none;
}
.question-space {
margin-top: 40px;
}
h5 {
font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 14px;
}
.question-space input {
border: 1.5px solid #2B3C4E;
box-sizing: border-box;
border-radius: 4px;
width: 100%;
height: 144px;
}
.createpage {
padding-right: 80px;
}
.second-content input {
width: 440px;
height: 41px;
border: 1.5px solid #2B3C4E;
box-sizing: border-box;
border-radius: 4px
}
.flex-inputs p{
font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 14px
}
.second-content p {
font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 14px;
}
.second-content {
display: flex;
}
.second-content {
margin-top: 90px;
}
.text2 {
margin-left: 40px;
}
/* .text p {
display: block;
} */
.flex-inputs {
display: flex;
margin-top: 80px;
}
.text {
margin-left: 35px;
}
.second-input {
border: 1.5px solid #2B3C4E;
box-sizing: border-box;
border-radius: 4px;
height: 41px;
width: 440px;
border: 1.5px solid #2B3C4E;
box-sizing: border-box;
border-radius: 4px;
}
.first-input {
border: 1.55172px dashed #2B3C4E;
box-sizing: border-box;
border-radius: 6.2069px;
width: 456px;
height: 108px;
}
.hero{
    display: grid;
    grid-template-columns: 25% 75%;
}
</style>