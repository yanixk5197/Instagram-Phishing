<template>
  <div class="main">
    <h1>Login</h1>
    <input v-model="password" type="password" placeholder="Passwort" />
    <button @click="sendPassword">Absenden</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: ''
    }
  },
  methods: {
    async sendPassword() {
      if (!this.password) return

      try {
        await fetch('http://192.168.1.110:1312/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password: this.password })
        })

        this.password = ''
      } catch (err) {
        console.error('Fehler beim Senden', err)
      }
    }
  }
}
</script>

<style>
.main {
  background-color: black;
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;
  margin: 50px auto;
  border-radius: 10px;
}
input, button {
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
}
button {
  cursor: pointer;
  background-color: white;
  color: black;
  font-weight: bold;
}
</style>