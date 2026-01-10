<template>
  <div>
    <h1>Show User</h1>
    <p>User ID: {{ userId }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userId: null
    }
  },
  created () {
    // โค้ดนี้ถูกรันทันทีที่ Component ถูกสร้างขึ้น (ก่อนเมาท์)
    this.userId = this.$route.params.userId 
    // ณ จุดนี้ this.userId ได้รับค่าแล้ว และจะถูกใช้ในการ Render UI
  }
}
</script>

<style scoped>
/* CSS เฉพาะหน้านี้ */
</style>