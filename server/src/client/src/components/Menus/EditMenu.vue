<template>
  <div>
    <h1>Edit Menu</h1>
    <p>Menu ID: {{ menuId }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuId: null
    }
  },
  created () {
    // ดึงค่า menuId จาก URL
    this.menuId = this.$route.params.menuId
  }
}
</script>
<style scoped>
.menu-container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* จัดกึ่งกลางแนวตั้ง */
  align-items: center;    /* จัดกึ่งกลางแนวนอน */
  min-height: 80vh;       /* กำหนดความสูงให้เกือบเต็มหน้าจอเพื่อให้เห็นผลการจัดกึ่งกลาง */
  text-align: center;
}

h1 {
  color: #2c3e50;
  margin-bottom: 20px;
}
</style>