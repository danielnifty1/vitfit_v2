<script setup lang="ts">
import { User } from '../assets/types/user';


defineProps<{
    user:User;
}>()
</script>
<template>
<div>
    {{ user.id }}
</div>
</template>