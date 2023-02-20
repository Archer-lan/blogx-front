<script>
export default {
  name: 'TreeItem', // 在引用自身的时候是必须的
  props: {
    model: Object
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    isFolder() {
      return this.model.children && this.model.children.length
    }
  },
  methods: {
    toInner(){
        document.querySelector('#toc-nav'+this.model.id).scrollIntoView({
        behavior:'smooth',
        block:'center',
        inline:'nearest',
      });
    },
    toggle() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    },
    changeType() {
      if (!this.isFolder) {
        this.model.children = []
        this.isOpen = true
      }
    },
  }
}
</script>

<template>
  <li>
    <div
        :class="{ bold: isFolder }"
        @dblclick="changeType">
      <span @click="toInner">{{ model.text }}</span>
      <span v-if="isFolder" @click="toggle">[{{ isOpen ? '-' : '+' }}]</span>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <TreeItem
          class="item"
          v-for="model in model.children"
          :model="model">
      </TreeItem>
    </ul>
  </li>
</template>