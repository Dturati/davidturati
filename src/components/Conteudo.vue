<template>
  <div class="conteudo">
      <div class="text" v-for="item in assuntos" :key="item.id">
          <div class="text_in">
            <div><span>{{ item.text }}</span></div>
            <div class="div_icons">
              <div><a target="_blank" href="https://www.youtube.com/channel/UCwOmVvw_qEfGSmAfBXyKixw"><i class="icon fab fa-youtube fa-2x"></i></a></div>
              <div><a target="_blank" href="https://www.instagram.com/davidturati/"><i class="fab fa-instagram fa-2x"></i></a></div>
            </div>
          </div>
          <div class="div_footer">
            <span> {{item.date}} </span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    msg: String
  },

  data () {
    return {
      assuntos: [
        { id: 0, date: '2/11/2021', text: 'Clouses em Python', icon: '<i class="fab fa-youtube"></i>' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .conteudo {
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height: 100%;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  .text {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 50%;
    height: 100px;
    background-color: silver;
    color: black;
    cursor: pointer;
    margin: 5px;
    padding-left: 10px;
  }

  .text:hover {
    box-shadow: 0 0 11px rgba(33,33,33,.2);
  }

  .icon {
    color: red !important;
  }

  .text_in {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 80%;
  }

  .text_in span {
    font-size: 24px;
  }

  .div_icons {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .div_icons div {
    margin-left: 5px;
  }

  .div_footer {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 10%;
  }

  .div_footer span {
    font-size: 13px;
  }

</style>
