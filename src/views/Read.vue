<template>
  <ion-page>
     <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title >View Users</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item v-for="(item, index) in usersList" :key="index">
           {{ item.username }} 
           <ion-button slot="end" @click="updateOperation(item, index)">update</ion-button>
           <ion-button slot="end" @click="deleteOperation(item, index)">Delete</ion-button>
        </ion-item>
      </ion-list>
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,} from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import firebaseService from '../firebase-service';

export default defineComponent({
  data() {
      return  { usersList: [] }
  },
  name: 'Read',
  setup() {
    const router = useRouter();
      return {router};
  },
  created() {
    const usersList = firebaseService().readOperation('Users');
    usersList.then((data: any) => {
      this.usersList = data;
    })
  },
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
  },
  methods: {
    async updateOperation(item: any, index: any) {
      const data: any = await firebaseService().findIdForDoc('Users', item.username);
      console.log('Data', data);
      
      this.$router.push({name: 'Update', params: {id: data.username}})
    },
    deleteOperation(item: any, index: any) {
      console.log(item);
      this.usersList.splice(index, 1);
      firebaseService().deleteOperation('Users', item.username);
    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>