<template>
    <div class="page h-full flex flex-col">
        <app-header />
        <main class="bg-pink-300 basis-full">
            <slot />
        </main>
        <app-footer />
    </div>
</template>