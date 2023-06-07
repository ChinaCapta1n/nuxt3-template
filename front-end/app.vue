<template>
  <Html>
    <Body>
      <NuxtLayout>
        <NuxtPage></NuxtPage>
      </NuxtLayout>
    </Body>
  </Html>
</template>
<script setup>
const app = useAppConfig();

useHead({
  title: app.name,
  titleTemplate: '%s - Nuxt 3 template',
})
</script>