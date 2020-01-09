<template>
    <div>
        <div class="app">
        <applicantSidebar/>
    </div>

    <div class="first_sec">
        <img src="../assets/Group 4.8 (1).png" id="same" alt="enyata_logo">
        <div class="f_s_txt">
            <p>enyata</p>
            <p>Applicant Log In</p>
        </div>
        <div class="">
            <form>
                <label for="username"></label>
            </form>
        </div>
    </div>
    </div>
    
</template>

<script>
import applicantSidebar from '@/components/applicantSidebar.vue'

export default {
  name: 'assessmentHistory',
  components: {
    applicantSidebar

  }
}
</script>

<style scoped>
</style>