<template>
  <div class="user__settings">
    <h3>{{ currentUser.name }}</h3>
    <div class="user__settings-change">
      <span><strong>Name</strong></span>
      <Input
        @inputValue="onChangeInput"
        v-bind:value="name"
        @input="name = $event.target.value"
        id="name"
        class-name="user__settings-input"
        placeholder="Enter your new name"
      />
      <Button
        id="name"
        @click="onChangeSetting"
        v-bind:button-style="buttonProps"
        children="Change"
      />
    </div>
    <div class="user__settings-change">
      <span><strong>Email</strong></span>
      <Input
        @inputValue="onChangeInput"
        v-bind:value="email"
        @input="email = $event.target.value"
        id="email"
        class-name="user__settings-input"
        placeholder="Enter your new email"
      />
      <Button
        id="email"
        @click="onChangeSetting"
        v-bind:button-style="buttonProps"
        children="Change"
      />
    </div>
    <div class="user__settings-change">
      <span><strong>Phone</strong></span>
      <Input
        @inputValue="onChangeInput"
        v-bind:value="phone"
        @input="phone = $event.target.value"
        id="phone"
        class-name="user__settings-input"
        placeholder="Enter your new phone"
      />
      <Button
        id="phone"
        @click="onChangeSetting"
        v-bind:button-style="buttonProps"
        children="Change"
      />
    </div>
    <Button
      @click="closeSettings"
      children="Close"
      v-bind:button-style="{ ...buttonProps, background: '215, 0 , 0' }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Input from '@/shared/ui/Input/Input.vue';
import Button from '@/shared/ui/Button/Button.vue';
import { store, userStore, usersTodoStore } from '@/app/store.ts';
import { User } from '@/shared/users/users.ts';

export default defineComponent({
  components: { Input, Button },
  data() {
    return {
      buttonProps: {
        width: '25%',
        height: '2em',
        background: '0, 128, 128',
      },
      currentUser: userStore.users.find(
        (user) => user.name === store.activeUser,
      ) as User,
      name: '',
      email: '',
      phone: '',
    };
  },
  methods: {
    onChangeInput(value: string, id: string) {
      switch (id) {
        case 'name':
          this.name = value;
          break;
        case 'email':
          this.email = value;
          break;
        case 'phone':
          this.phone = value;
          break;
      }
    },
    onChangeSetting(event: MouseEvent) {
      const target = event.target as HTMLButtonElement;
      switch (target.id) {
        case 'name':
          //@ts-ignore
          this.currentUser.name = this.name;
          let user = usersTodoStore.find(
            (user) => user.name === store.activeUser,
          ) as unknown as User;
          user.name = this.name;
          store.activeUser = this.name;
          break;
        case 'email':
          this.currentUser.email = this.email;
          break;
        case 'phone':
          this.currentUser.phone = this.phone;
      }
    },
    closeSettings() {
      store.isSettings = false;
    },
  },
});
</script>

<style scoped>
.user__settings {
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.user__settings-change {
  display: flex;
  justify-content: space-between;
  padding: 2em;
  align-items: center;
  width: 80%;
}

.user__settings-input {
  height: 2.5em;
  border: 1px solid teal;
  border-radius: 0.5em;
  padding: 0 1em;
  width: 60%;
}

@media (max-width: 600px), screen {
  .user__settings-change {
    width: 100%;
    font-size: 0.75em;
  }
  .user__settings-input {
    height: 4em;
    font-size: 0.5em;
  }
}
@media (max-width: 360px), screen {
}
</style>
