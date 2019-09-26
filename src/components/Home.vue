<template>
  <div>
    <v-container fluid>
      <div id="intro" class="text-xs-center">
        <img src="../../static/android-chrome-192x192.png" alt="LOGO">
        <h1>Fr. Conceicao Rodrigues Memorial Debate 2019</h1>
      </div>
      <v-divider class="my-2"></v-divider>
      <h1 class="text-xs-center mb-2">Teams</h1>
      <v-data-table :headers="theaders" :items="teams" hide-actions class="elevation-1">
        <template slot="items" slot-scope="props">
          <td class="text-xs-center">{{ props.item.teamcode }}</td>
          <td class="text-xs-center">{{ props.item.tincharge }}</td>
          <td class="text-xs-center">{{ props.item.contact }}</td>
        </template>
      </v-data-table>
      <h1 class="text-xs-center my-2">Rooms</h1>
      <v-data-table :headers="rheaders" :items="rooms" hide-actions class="elevation-1">
        <template slot="items" slot-scope="props">
          <td class="text-xs-center">{{ props.item.floor }}</td>
          <td class="text-xs-center">{{ props.item.room }}</td>
          <td class="text-xs-center">{{ props.item.rincharge }}</td>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      theaders: [
        {
          text: 'Team Code',
          align: 'center',
          sortable: true,
          value: 'teamcode',
        },
        { text: 'Team In-charge', value: 'tincharge', align: 'center' },
        { text: 'Contact', value: 'contact', align: 'center' },
      ],
      rheaders: [
        {
          text: 'Floor',
          align: 'center',
          sortable: true,
          value: 'floor',
        },
        { text: 'Room', value: 'room', align: 'center' },
        { text: 'Room In-charge', value: 'rincharge', align: 'center' },
      ],
      rooms: [
        {
          value: false,
          floor: '5',
          room: 'Seminar Hall',
          rincharge: 'Ninad',
        },
        {
          value: false,
          floor: '5',
          room: '506',
          rincharge: 'Sakshi',
        },
        {
          value: false,
          floor: '5',
          room: '511',
          rincharge: 'Anu',
        },
        {
          value: false,
          floor: '4',
          room: '410',
          rincharge: 'Prisha',
        },
        {
          value: false,
          floor: '4',
          room: '411',
          rincharge: 'Joshua',
        },
        {
          value: false,
          floor: '6',
          room: '602',
          rincharge: 'Ridhi',
        },
        {
          value: false,
          floor: '6',
          room: '609',
          rincharge: 'Felin',
        },
        {
          value: false,
          floor: '6',
          room: '611',
          rincharge: 'Clafacio',
        },
      ],
      teams: [
        {
          value: false,
          teamcode: 'CMD01',
          tincharge: 'Varun Singh',
          contact: '8879396310',
        },
        {
          value: false,
          teamcode: 'CMD02',
          tincharge: 'Nash Vaz',
          contact: '8411038070',
        },
        {
          value: false,
          teamcode: 'CMD03',
          tincharge: 'Harshal Khedekar',
          contact: '9967967820',
        },
        {
          value: false,
          teamcode: 'CMD04',
          tincharge: 'Aaron Dsa',
          contact: '9082523526',
        },
        {
          value: false,
          teamcode: 'CMD05',
          tincharge: 'Rachit Dhond',
          contact: '7506006056',
        },
        {
          value: false,
          teamcode: 'CMD06',
          tincharge: 'Deril',
          contact: '7045722214',
        },
        {
          value: false,
          teamcode: 'CMD07',
          tincharge: 'Nitin Chaube',
          contact: '7021027955',
        },
        {
          value: false,
          teamcode: 'CMD08',
          tincharge: 'Cyril',
          contact: '7264816003',
        },
        {
          value: false,
          teamcode: 'CMD09',
          tincharge: 'Joash Soans',
          contact: '8551080819',
        },
        {
          value: false,
          teamcode: 'CMD10',
          tincharge: 'Jyoti',
          contact: '7718989985',
        },
        {
          value: false,
          teamcode: 'CMD11',
          tincharge: 'Nirav Sthalekar',
          contact: '9987686588',
        },
        {
          value: false,
          teamcode: 'CMD12',
          tincharge: 'Aayush Yadav',
          contact: '7506676638',
        },
        {
          value: false,
          teamcode: 'CMD13',
          tincharge: 'Jigisha Kulkarni',
          contact: '9503055930',
        },
        {
          value: false,
          teamcode: 'CMD14',
          tincharge: 'Erhard',
          contact: '8169449693',
        },
        {
          value: false,
          teamcode: 'CMD15',
          tincharge: 'Divesh Kanchan',
          contact: '9326518577',
        },
        {
          value: false,
          teamcode: 'CMD16',
          tincharge: 'ROHIT',
          contact: '9987361159',
        },
        {
          value: false,
          teamcode: 'CMD17',
          tincharge: 'Avish',
          contact: '8451983600',
        },
        {
          value: false,
          teamcode: 'CMD18',
          tincharge: 'Atharva Haldankar',
          contact: '9820045135',
        },
        {
          value: false,
          teamcode: 'CMD19',
          tincharge: 'Mahesh Desai',
          contact: '8452937720',
        },
        {
          value: false,
          teamcode: 'CMD20',
          tincharge: 'Shubham Bhate',
          contact: '9167452235',
        },
        {
          value: false,
          teamcode: 'CMD21',
          tincharge: 'Kartik',
          contact: '7303111089',
        },
        {
          value: false,
          teamcode: 'CMD22',
          tincharge: 'Asiayal Rodrigues',
          contact: '7738989724',
        },
        {
          value: false,
          teamcode: 'CMD23',
          tincharge: 'Nikita Carassco',
          contact: '9167320781',
        },
        {
          value: false,
          teamcode: 'CMD24',
          tincharge: 'Raj Colaco',
          contact: '9673179079',
        },
        {
          value: false,
          teamcode: 'CMD25',
          tincharge: 'Saylee',
          contact: '9869487213',
        },
        {
          value: false,
          teamcode: 'CMD26',
          tincharge: 'Akshay ',
          contact: '9029077760',
        },
        {
          value: false,
          teamcode: 'CMD27',
          tincharge: 'Priyam Haldankar',
          contact: '9820284976',
        },
        {
          value: false,
          teamcode: 'CMD28',
          tincharge: 'Omkar Vedak',
          contact: '9920940132',
        },
        {
          value: false,
          teamcode: 'CMD29',
          tincharge: 'LOKESH GENEKAL',
          contact: '9920342460',
        },
        {
          value: false,
          teamcode: 'CMD30',
          tincharge: 'TRISTAN',
          contact: '8424986506',
        },
        {
          value: false,
          teamcode: 'CMD31',
          tincharge: 'Karan Shah',
          contact: '8655578935',
        },
        {
          value: false,
          teamcode: 'CMD32',
          tincharge: 'Tijo Thomas',
          contact: '9594302176',
        },
      ],
    };
  },
};
</script>

<style scoped>
.intro {
  margin: 0 auto;
}
</style>
