<template>
    <div>
        <div class="app">
            <applicantSidebar/>
        </div>

        <div class="first_sec">
            <h1 class="assess">Assessment History</h1>
        </div>

        <table>
  <tr>
    <th>Batch</th>
    <th>Date Composed</th>
    <th>No of Questions</th>
    <th>Time Allocated</th>
    <th>Status</th>
  </tr>
  <tr>
    <td>Batch 1</td>
    <td>12/07/94</td>
    <td>30</td>
    <td>30 mins</td>
    <td>Taken</td>
  </tr>
  <tr>
    <td>Batch 1</td>
    <td>12/07/94</td>
    <td>30</td>
    <td>30 mins</td>
    <td>Taken</td>
  </tr>
  <tr>
    <td>Batch 1</td>
    <td>12/07/94</td>
    <td>30</td>
    <td>30 mins</td>
    <td>Taken</td>
  </tr>
  
</table>


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
.assess{
    margin-right: 500px;
}
table{
    margin-left: 270px;
    border-collapse: collapse;
    width:70%;
}
td, th{
    padding:10px;
}

</style>