<template>
<div>
    <div id="app">
        <applicantSidebar/>
    </div>


    <div class="dashboard">
        <div class="first_section">
            <p>Dashboard</p>
        </div>

        <div class="date_section">
            <div class="date">
                <p>Current Application</p>
                <span>233</span>
                <div class="horizontal"></div>
                <div class="">
                    <p class="">Academy 2.0</p>
                </div>
            </div>

            <div class="t_app">
                <p>Total Application</p>
                <span>4253</span>
                <div class="horizontal2"></div>
                <div class="">
                    <p class=""> All entries so far</p>
                </div>
            </div>

            <div class="academy">
                <p>Academy's</p>
                <span>4</span>
                <div class="horizontal3"></div>
                <div class="">
                    <p class="">So far</p>
                </div>
            </div>
        </div>


        <div class="his_cr">
            <div class="hist">
                <h4>History</h4>
                <h5 class="update">Last Update 18.24.22/02/19</h5>
            </div>
            <h4 class="ca">Create Assessment</h4>
        </div>

        <div class="grid">
            <div class="grid_container">
                <div>Academy Batch 1</div>
                <div>15 students</div>
                <div>started 11/09/15</div>
                <div>Academy Batch 2</div>
                <div>15 students</div>
                <div>started 11/09/15</div>
                <div>Academy Batch 3</div>
                <div>15 students</div>
                <div>started 11/09/15</div>
            </div>

            <div class="create_tq">
                <p>Create test question for an incoming academy<br> student</p>
                <button>Create Assessment</button>
            </div>
            
        </div>
    </div>
</div>
</template>

<script>
import applicantSidebar from '@/components/applicantSidebar.vue'
// @ is an alias to /src


export default {
  name: 'adminDashboard',
  components: {
    applicantSidebar

  }
}
</script>

<style scoped>
span{
    margin-right: 90px;
}
h4 {
    text-align: left;
}
.dashboard {
    margin-left: 292px;
    margin-top: 107px;
    margin-bottom: 200px;
    padding-left: 47px;
}
.first_section p {
    font-family: 'Lato', sans-serif;
    /* font-style: normal; */
    /* font-weight: 300; */
    font-size: 35px;
    letter-spacing: -0.02em;
    color: #2B3C4E;
    /* margin-right: 2em; */
    margin-right: 540px;
    text-align: left;
}
.date_section {
    display: flex;
    margin-top: 61px;
    margin-bottom: 3em;
}
.t_app {
    margin-right: 8em;
}
.date {
    margin-right: 8em;
}
.date span {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    color: #2B3C4E;
    border-bottom: blue;
}
.t_app span {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    color: #2B3C4E;
}
.academy span {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    color: #2B3C4E;
}
.his_cr{
    display: flex;
}
.grid_container{
    display:grid;
    grid-template-columns: auto auto auto;
    grid-gap: 50px;
}
.grid{
    display: flex;
}
.create_tq{
    margin-left: 15em;
    margin-bottom: 80px;
}
.ca{
    margin-left: 20em;
}
button{
    background: #B1B1B1;
    border-radius: 4px;
    color:white;
    /* padding:3 2 2 3; */
    padding-top: 10px;
    padding-bottom: 11px;
    padding-right: 31px;
    padding-left: 38px;
}
/* .update{
    padding-top: 0px;
} */
.horizontal {
  width: 80%;
  height: 4px;
  background: #006df0;
  border-radius: 4px;
}
.horizontal2 {
  width: 80%;
  height: 4px;
  background: #00F026;
  border-radius: 4px;
}
.horizontal3 {
  width: 80%;
  height: 4px;
  background: #F09000;
  border-radius: 4px;
}
.date_section p{
    margin-right: 100px;
}

</style>