<template>
  <button
    @click="onClick"
    @dblclick="onDoubleClick"
    :class="[
      't-button',
      't-button--' + color,
      't-button--' + size,
      {
        't-button--rounded': rounded
      }
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "t-button",
  props: {
    color: {
      type: String,
      default: "blue",
      validator(x) {
        return ["blue", "green", "red"].indexOf(x) !== -1;
      }
    },
    rounded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: "default",
      validator(x) {
        return ["small", "default", "large"].indexOf(x) !== -1;
      }
    }
  },

  methods: {
    onClick(event) {
      this.$emit("click", event);
    },

    onDoubleClick(event) {
      this.$emit("dblclick", event);
    }
  }
};
</script>

<style scoped>
.t-button {
  display: inline-block;
  outline: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #ffffff;
  font-weight: 500;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  user-select: none;
  cursor: pointer;
}

/* --> COLORS <-- */

.t-button--blue {
  background-color: #0194ef;
}

.t-button--green {
  background-color: #1bb934;
}

.t-button--red {
  background-color: #e1112c;
}

/* --> SIZES <-- */

.t-button--small {
  padding: 8px 10px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 12px;
}

.t-button--default {
  padding: 12px 14px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 16px;
}

.t-button--large {
  padding: 16px 18px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 20px;
}

.t-button--rounded {
  border-radius: 60px;
}
</style>
