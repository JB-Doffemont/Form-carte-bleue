// Composant racine
const ConstComponent = {
  // Data properties
  data() {
    return {
      numeroCarte: "",
      numeroCVC: "",
      numeroDate: "",
      theme: "",
      theme1: "",
      max: 16,
      theme2: "",
      carteTrue: "",
      CVCtrue: "",
      dateTrue: "",
      hideForm: true,
      showThank: false,
      name: "",
      prenom: "",
    };
  },
  watch: {
    // Validation du numero carte
    numeroCarte: function () {
      if (this.numeroCarte.toString().length === 16) {
        this.theme = "green"; //Selection de la classe green
        this.carteTrue = true;
      } else {
        this.theme = "red"; //Selection de la classe red
        this.carteTrue = false;
      }
    },
    // Validation du CVC
    numeroCVC: function () {
      if (this.numeroCVC.toString().length === 3) {
        this.theme1 = "green"; //Selection de la classe green
        this.CVCTrue = true;
      } else {
        this.theme1 = "red"; //Selection de la classe red
        this.CVCTrue = false;
      }
    },

    // Validation de la date d'expiration
    numeroDate: function () {
      const dateNow = new Date(); // CREATION DE LA CONST DATENOW POUR RECUPERER LA DATE DAUJOURDHUI
      const limiteDate = new Date(dateNow.getFullYear(), dateNow.getMonth(), 1); // creation de LIMITEDATE pour recuperer l'année le mois et le premier jour du mois
      //const limiteDate = new Date(new Date().getFullYear(),new Date().getMonth(),1) //AUTRE SOLUTION
      if (limiteDate <= Date.parse(this.numeroDate)) {
        this.theme2 = "green"; //Selection de la classe green
        console.log(this.numeroDate);
        this.dateTrue = true;
      } else {
        this.theme2 = "red"; //Selection de la classe red
        this.dateTrue = false;
      }
    },
  },
  methods: {
    clear() {
      //METHODE DE PREREMPLISSAGE ALT + ENTER
      this.numeroCarte = "1322154545645645";
      this.numeroCVC = "123";
      this.numeroDate = "2025-10-24";
      this.name = "Chort";
      this.prenom = "Yann-Loic";
    },
  },
};

// Création de l'app et montage
Vue.createApp(ConstComponent).mount("#root");
