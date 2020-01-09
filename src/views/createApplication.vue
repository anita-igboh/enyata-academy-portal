<template>
<div>
    <div class="app">
        <applicantSidebar/>
    </div>

    <div class="create_hero">
        <div class="create">
            <h2>Create Application</h2>
        </div>

        <div class="create_app_form">
            <div class="grid">
                <div class="choose">
                    <p>Choose file</p>
                </div>
                <div>
                    2 
                </div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </div>
            <button>Submit</button>
        </div>
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
.grid{
    display: grid;
    grid-template-columns:  auto auto;
    grid-gap: 3px;
}
</style>