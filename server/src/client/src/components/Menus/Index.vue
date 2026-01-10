<template>
  <div>
    <h1>Get All Menu</h1>
    <p><button @click="navigateTo('/menu/create')">สร้างเมนูใหม่</button></p>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
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