<template>
  <div class="modal-content">
    <div>
      <div>
        <!--MS通し番号-->
        <b-form-group class="col-8" label="MS通し番号">
          <span class="content">MS 4</span>
        </b-form-group>

        <!--NAPT用グローバルIP-->
        <b-form-group class="col-8" label="NAPT用グローバルIP">
          <span class="content">現在 1個/ 上限 12個</span><br />
          <span class="content">グローバルIP数</span><br />
          <b-form-input class="content" v-model="form.ipCountNapt" />
          <span class="content">払出済グローバルIP</span><br />
          <span class="content pl-3">グローバルIP</span><br />
          <div v-for="(item,index) in form.Napt" :key="index">
            <span class="content pl-3"
              >{{ item.ip }}
              <span v-if="form.Napt.length > 1" class="ml-3">
                <b-icon-dash-square
                  class="remoteIcon"
                  @click="removeNapt(index)"
                />
              </span>
              <span v-else /> </span
            ><br />
          </div>
        </b-form-group>
        <br />
        <br />
        <!--NAT用グローバルIP-->
        <b-form-group class="col-8" label="NAT用グローバルIP">
          <span class="content">現在 1個/ 上限 12個</span><br />
          <span class="content">グローバルIP数</span><br />
          <b-form-input class="content" v-model="form.ipCountNat" />
          <span class="content">払出済グローバルIP</span><br />
          <span class="content pl-3">グローバルIP</span><br />
          <div v-for="(item,index) in form.Nat" :key="index">
            <span class="content pl-3"
              >{{ item.ip }}
              <span v-if="form.Nat.length > 1" class="ml-3">
                <b-icon-dash-square
                  class="remoteIcon"
                  @click="removeNat(index)"
                />
              </span>
              <span v-else /> </span
            ><br />
          </div>
        </b-form-group>
      </div>
    </div>
    <footer class="modal-footer justify-content-end btn-container">
      <!-- <router-link
        :to="{
          name: 'Confirm',
          params: {
            addNapt: ipCountNapt,
            naptLength: ipCountNaptLenght,
            napt: form.Napt,
            naptDeletedArray: delNapt,

            addNat: ipCountNat,
            natLength: ipCountNatLenght,
            nat: form.Nat,
            natDeletedArray: delNat,
          },
        }"
        tag="b-button"
        >変更</router-link
      > -->
      <b-button variant="primary" @click="update">変更</b-button>
      <b-button variant="outline-primary" @click="cancel">キャンセル</b-button>
    </footer>
  </div>
</template>

<script>
const GlobalIpNaptNat = {
  NAPT: [
    { ip: "44.124.186.05/32" },
    { ip: "44.124.186.06/32" },
    { ip: "246.124.186.05/32" },
  ],
  NAT: [
    { ip: "44.124.186.05/32" },
    { ip: "44.124.186.06/32" },
    { ip: "246.124.186.05/32" },
  ],
};

export default {
  name: "MSGlobalIpModify",
  data() {
    return {
      form: {
        ipCountNapt: 0,
        ipCountNaptLenght: 0,
        Napt: [],
        ipCountNat: 0,
        ipCountNatLenght: 0,
        Nat: [],
        delNapt: [],
        delNat: [],
      },
    };
  },
  async mounted() {
    // グローバルIP
    this.form.Napt = GlobalIpNaptNat.NAPT;
    this.form.Nat = GlobalIpNaptNat.NAT;
    // グローバルIP数
    this.form.ipCountNapt = GlobalIpNaptNat.NAPT.length;
    this.form.ipCountNaptLenght = GlobalIpNaptNat.NAPT.length;
    this.form.ipCountNat = GlobalIpNaptNat.NAT.length;
    this.form.ipCountNatLenght = GlobalIpNaptNat.NAT.length;
  },
  methods: {
    removeNapt(index) {
      let naptResult = this.form.Napt.splice(index, 1);
      this.form.delNapt.push({ ip: naptResult[0].ip });
    },
    removeNat(index) {
      let natResult = this.form.Nat.splice(index, 1);
      this.form.delNat.push({ ip: natResult[0].ip });
    },
    cancel() {},
    update() {
      this.$router.push({
        name: "Confirm",
        params: {
          resultData: this.form
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .multicloud-modal {
    .vfm__content {
      width: 900px;
    }
  }

  .pagination {
    padding-right: 1em;
  }

  //項目欄固定なし
  .b-table-sticky-header > .table.b-table > thead > tr > th {
    position: static;
  }
}
.content {
  margin-left: 1em;
}
</style>

