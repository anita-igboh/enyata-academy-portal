<template>
<div>
    <div class="app">
        <applicantSidebar/>
    </div>

    <div class="entries2">
        <h4>Entries - Batch 2</h4>
        <p>Comprises of all that applied for batch 2</p>
    </div>

    <div class="ent_table">
        <table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>DOB-Age</th>
    <th>Address</th>
    <th>University</th>
    <th>CGPA</th>
  </tr>
  <tr>
    <td>Ify Chinke</td>
    <td>ify@enyata.com</td>
    <td>12/09/19-22</td>
    <td>3 Sabo Ave, Yaba, Lagos</td>
    <td>University of Nigeria</td>
    <td>5.0</td>
  </tr>
  <tr>
   <td>Ify Chinke</td>
    <td>ify@enyata.com</td>
    <td>12/09/19-22</td>
    <td>3 Sabo Ave, Yaba, Lagos</td>
    <td>University of Nigeria</td>
    <td>5.0</td> 
  </tr>
  <tr>
    <td>Ify Chinke</td>
    <td>ify@enyata.com</td>
    <td>12/09/19-22</td>
    <td>3 Sabo Ave, Yaba, Lagos</td>
    <td>University of Nigeria</td>
    <td>5.0</td>
  </tr>
  
</table>

    </div>
</div>
</template>

<script>
import applicantSidebar from '@/components/applicantSidebar.vue'


export default {
  name: 'Entries2',
  components: {
    applicantSidebar

  }
}
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  /* width: 80%; */
  align-items: left;
  
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>