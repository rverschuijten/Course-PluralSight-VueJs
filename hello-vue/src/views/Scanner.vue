<template>
  <div>
    
    <h1>Scanner</h1>
      
      <v-row>
        <v-container v-if="detecteds.length > 0">
          <ol>
            <li v-for="item in detecteds" :key="item.codeResult.code">
              {{item.codeResult.code}}
            </li>
          </ol>
        </v-container>
      </v-row>
    <v-row>
    <v-col>
      <p>{{activeTypes}}</p>
      <v-quagga :onDetected="logIt" 
        :readerSize="readerSize" 
        :readerTypes="activeTypes"></v-quagga>
    </v-col>
    <v-col>
        <v-checkbox v-for="rtype in readertypes" v-model="activeTypes" :value="rtype" :label="rtype" :key="rtype">{{rtype}}
        </v-checkbox>
    </v-col>
  </v-row>


  </div>
</template>

<script>
//import VueQuagga from 'vue-quaggajs';

   
export default {
  name: 'VueBarcodeTest',
  data: function() {
    return {
      readerSize: {
        width: 640,
        height: 480
      }, 
      readertypes: ['code_128_reader',

'code_39_reader',
'code_39_vin_reader',
 'codabar_reader', 'ean_reader'
    ,
    'ean_8_reader','upc_reader','upc_e_reader','i2of5_reader','2of5_reader',
'code_93_reader'],
 activeTypes:[    'ean_reader'  ],
    detecteds: [],
      app: undefined, 
    }
  },
  mounted: function() { 
    //this.app = App;
  },
  methods: {
    logIt: function(data) {
      /*eslint no-console: ["error", { allow: ["warn", "error"] }] */

      //console.log('detected', data);
      this.detecteds.push(data);
    },

  }
}
</script>