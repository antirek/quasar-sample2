<template>
  <q-card class="position-relative full-width" style="height:70vh;">
    <q-item>
      <q-item-section>
        <div class="text-h5">{{ header }}</div>
      </q-item-section>
      <q-item-section side>
        <q-card-actions vertical class="justify-around">
          <q-btn round icon="add" dense />
        </q-card-actions>
      </q-item-section>
    </q-item>

    <q-toolbar>
      <q-input rounded outlined dense
        class="full-width"
        bg-color="white"
        v-model="filterText"
        placeholder="Фильтр по имени или номеру">
        <template v-slot:append>
          <q-icon v-if="filterText !== ''" name="close" @click="filterText = ''" class="cursor-pointer" />
          <q-icon v-if="filterText === ''" name="search" />
        </template>
      </q-input>
    </q-toolbar>

    <q-scroll-area style="height: 50vh;">
      <q-list>
        <q-item
          bordered
          separator
          v-for="(item) in filteredItems"
          :key="item.id"
          clickable
          @click="onItem(item)"
          active-class="active-item"
        >
          {{ item.text  }}
        </q-item>
      </q-list>
    </q-scroll-area>

    <q-card-section class="absolute-bottom q-pa-none">
      <q-separator ></q-separator>
      <q-card-actions>
        <q-btn flat icon="event" />
        <q-btn flat color="primary">
          Action
        </q-btn>
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    header: String,
    items: Array,
    onItemClick: Function
  },
  data () {
    return {
      filterText: '',
      currentItem: {}
    }
  },
  methods: {
    onItem (item) {
      this.currentItem = item
      if (this.onItemClick) {
        this.onItemClick(item)
      }
    }
  },
  computed: {
    filteredItems () {
      // const items = [...this.items]
      return this.items.filter(item => item.text.includes(this.filterText))
    }
  }
}
</script>

<style lang="sass" scoped>

.active-item
  color: white
  background: #F2C037

</style>
