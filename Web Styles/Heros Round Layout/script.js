// source: https://www.leagueoflegends.com/en-us/champions/
const App = {
  data() {
    return {
      isFullscreen: false,
      activeIndex: 0,
      list: [
        {
          name: 'zed',
          role: 'assassin',
          difficulty: 'moderate',
        
          img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg',
          thumbImg: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt402d6da485218720/5db0601de9effa6ba5295fc5/RiotX_ChampionList_zed.jpg',
        },
        {
          name: 'yuumi',
          role: 'support',
          difficulty: 'low',

         

          img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yuumi_0.jpg',
          thumbImg: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta312e7cca0e594d1/5db0601d2140ec675d68f4c1/RiotX_ChampionList_yuumi.jpg',
        },

        {
          name: 'morgana',
          role: 'mage',
          difficulty: 'low',

          

          img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_0.jpg',

          thumbImg: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc81eece55f126d2d/5db05fe86af83b6d7032c904/RiotX_ChampionList_morgana.jpg',

        },

        {

          name: 'vex',
          role: 'mage',
          difficulty: 'low',

          
          img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vex_0.jpg',

          thumbImg: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltad313195d6b48daa/614e702764c8007a9bdec6b2/RiotX_ChampionList_vex.jpg',

        },

        {

          name: 'irelia',
          role: 'fighter',
          difficulty: 'moderate',

         

          img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg',

          thumbImg: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf5f2b8de93870aef/5db05fcea6470d6ab91ce59a/RiotX_ChampionList_irelia.jpg',

        },

        {

          name: 'yasuo',
          role: 'fighter',
          difficulty: 'high',

      

          img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg',

          thumbImg: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3a319fc884dc6880/5db0601c242f426df132f985/RiotX_ChampionList_yasuo.jpg',

        },

        {

          name: 'graves',
          role: 'marksman',
         difficulty: 'low',

          
          img: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt5796e3d258e95471/5e83cb29cfad926479634951/Graves_00_Base-Cigar.jpg',

          thumbImg: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt2e7cd286d7b6182e/5e9a59c245a2a97194a1d4c7/RiotX_ChampionList_graves-cigar.jpg',

        },

        {

          name: 'leona',
          role: 'tank',
          difficulty: 'moderate',

          
          img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leona_0.jpg',

          thumbImg: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8d46ada03ea1da8c/5db05fdf347d1c6baa57be31/RiotX_ChampionList_leona.jpg',

        },

      ],

    }

  },

  computed: {
    activeInfo() {
      if (!this.list.length) return null;
      return this.list[this.activeIndex];
    },
    itemPosition() {
      const len = this.list.length;
      return this.list.map((_, key) => {
        const deg = 360 / len * key - 90;
        const radius = '2rem';
        return `rotate(${deg}deg) translate(${radius}) rotate(${-deg}deg)`
      })
   }
  },

  methods: {
   toggleFullScreen() {
      const el = document.documentElement;
      if (!this.isFullscreen) {
        // ope
        if (el.requestFullscreen) {
         el.requestFullscreen();
        } else if (el.webkitRequestFullscreen) { /* Safari */
          el.webkitRequestFullscreen();
        } else if (el.msRequestFullscreen) { /* IE11 */
          el.msRequestFullscreen();
        }
      } else {
        // close
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
         document.msExitFullscreen();
        }
      }
      this.isFullscreen = !this.isFullscreen;
    }
  }
};
Vue.createApp(App).mount('#app');