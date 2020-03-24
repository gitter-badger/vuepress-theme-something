export default {
  data() {
    return {
      isMobile:  false
    }
  },
  computed: {
    // isMobile() {
    //   return navigator.userAgent.search(/(iPhone|iPad)/i) != -1;
    // }
  },
  mounted() {
    this.isMobile = navigator.userAgent.search(/(iPhone|iPad)/i) != -1;
  }
}