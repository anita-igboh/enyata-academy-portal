<template>
<div>
    <div class="app">
        <applicantSidebar/>
    </div>

    <div class="entries2">
        <h4>Entries Batch 2</h4>
        <p>Comprises of all that applied for batch 2</p>
    </div>

    <div class="ent_table">
        
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

</style>