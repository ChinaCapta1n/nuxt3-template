<template>
    <header class="bg-rose-300 header">
        <div class="container mx-auto px-5">
            <ul class="flex items-center">
                <li class="mr-auto">
                    LOGO
                </li>
                <li class="mx-2.5">
                    <NuxtLink :to="localePath('/')" class="px-3 py-5 block">
                        {{ $t('navLinks.link1') }}
                    </NuxtLink>
                </li>
                <li class="mx-2.5">
                    <NuxtLink :to="localePath('/')" class="px-3 py-5 block">
                        {{ $t('navLinks.link2') }}
                    </NuxtLink>
                </li>
                <li class="mx-2.5">
                    <NuxtLink :to="localePath('/')" class="px-3 py-5 block">
                        {{ $t('navLinks.link3') }}
                    </NuxtLink>
                </li>
                <li class="mx-2.5">
                    <NuxtLink :to="localePath('/')" class="px-3 py-5 block">
                        {{ $t('navLinks.link4') }}
                    </NuxtLink>
                </li>

                <!-- lang switcher -->
                <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
                    {{ locale.name }}
                </NuxtLink>
            </ul>
        </div>
    </header>
</template>

<script setup>
import { computed } from 'vue';
const { locale, locales } = useI18n(); 

const availableLocales = computed(() => {
    return locales.value.filter(i => i.code !== locale.value);
})

</script>