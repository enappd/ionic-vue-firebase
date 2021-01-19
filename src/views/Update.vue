<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title >Update User</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">

      <ion-row>
          <ion-col>
            <ion-input type="email" v-model="usersData.username" placeholder="Enter Username"  class="input" padding-horizontal></ion-input>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-input type="password" v-model="usersData.password" placeholder="Enter Password"  class="input"
              padding-horizontal></ion-input>
          </ion-col>
      </ion-row>


      <div class="container">
        <ion-button @click="updateOperation()">Update Data</ion-button>
      </div>


    </ion-content>
  </ion-page>
</template>

  <script lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCol, IonInput, IonRow, IonImg, IonButton, IonRouter, } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  import firebaseService from '../firebase-service';
  export default defineComponent({
    data() {
      return  { usersData: {}}
    },
    props: ['id'],
    name: 'Update',
    setup() {
      const router = useRouter();
      return {router};
    },
    created() {
        firebaseService().findIdForDoc('Users', this.id).then((user) => {
        this.usersData = user;
    })
    },
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
      IonButton,
      IonRow,
      IonCol,
      IonInput
    },
    methods: {
      async updateOperation() {
        // console.log(this.usersData);
        const updated = await firebaseService().updateOperation('Users', this.usersData);
        this.router.push('/read');
      },
    }
  });
  </script>

<style scoped>
.container {
  flex: 1;
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  margin-top: 12px;
}
</style>