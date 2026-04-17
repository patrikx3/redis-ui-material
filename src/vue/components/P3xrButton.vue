<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const props = withDefaults(defineProps<{
    label?: string
    icon?: string
    raised?: boolean
    color?: string
    disabled?: boolean
    tooltipPlacement?: 'top' | 'bottom' | 'left' | 'right'
    breakpoint?: number
}>(), {
    label: '',
    raised: false,
    color: 'inherit',
    disabled: false,
    tooltipPlacement: 'top',
    breakpoint: 720,
})

const emit = defineEmits<{ click: [e: MouseEvent] }>()

const { width: displayWidth } = useDisplay()
const isWide = computed(() => displayWidth.value >= props.breakpoint)
</script>

<template>
    <!-- Wide: icon + text -->
    <v-btn v-if="isWide"
        :variant="raised ? 'flat' : 'text'"
        :color="color"
        :disabled="disabled"
        @click="emit('click', $event)"
        style="gap: 3px;"
    >
        <v-icon v-if="icon">{{ icon }}</v-icon>
        <span>{{ label }}</span>
    </v-btn>

    <!-- Narrow + raised: small contained button with tooltip -->
    <v-tooltip v-else-if="raised" :text="label" :location="tooltipPlacement">
        <template #activator="{ props: tp }">
            <v-btn v-bind="tp"
                :color="color === 'inherit' ? 'primary' : color"
                :disabled="disabled"
                variant="flat"
                size="small"
                @click="emit('click', $event)"
                style="border-radius: 4px; box-shadow: none; min-width: 40px; width: 40px; height: 36px; padding: 0;"
            >
                <v-icon v-if="icon">{{ icon }}</v-icon>
            </v-btn>
        </template>
    </v-tooltip>

    <!-- Narrow + flat: icon-only button with tooltip -->
    <v-tooltip v-else :text="label" :location="tooltipPlacement">
        <template #activator="{ props: tp }">
            <v-btn v-bind="tp"
                :color="color"
                :disabled="disabled"
                variant="text"
                icon
                size="small"
                @click="emit('click', $event)"
                style="border-radius: 4px; margin: 0;"
            >
                <v-icon v-if="icon">{{ icon }}</v-icon>
            </v-btn>
        </template>
    </v-tooltip>
</template>
