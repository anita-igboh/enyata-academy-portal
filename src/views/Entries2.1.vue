<template>
<div>
    <div class="app">
        <applicantSidebar/>
    </div>

    <div>
      <table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>DOB-Age</th>
    <th>Address</th>
    <th>University</th>
    <th>CGPA</th>
    <th>Test Scores</th>
  </tr>
  <tr>
    <td>Ify Chinke</td>
    <td>ify@enyata.com</td>
    <td>12/09/19-22</td>
    <td>3 Sabo Ave, Yaba, Lagos</td>
    <td>University of Nigeria</td>
    <td>5.0</td>
    <td>15</td>
  </tr>
  <tr>
   <td>Ify Chinke</td>
    <td>ify@enyata.com</td>
    <td>12/09/19-22</td>
    <td>3 Sabo Ave, Yaba, Lagos</td>
    <td>University of Nigeria</td>
    <td>5.0</td>
    <td>20</td> 
  </tr>
  <tr>
    <td>Ify Chinke</td>
    <td>ify@enyata.com</td>
    <td>12/09/19-22</td>
    <td>3 Sabo Ave, Yaba, Lagos</td>
    <td>University of Nigeria</td>
    <td>5.0</td>
    <td>19</td>
  </tr>
  
</table>
    </div>
</div>

</template>

<script>
import applicantSidebar from '@/components/applicantSidebar.vue'

export default {
  name: 'Entries2.1',
  components: {
    applicantSidebar

  }
}
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
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