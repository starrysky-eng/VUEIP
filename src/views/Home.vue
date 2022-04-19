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
          <b-form-input class="content" v-model="ipCountNapt" />
          <span class="content">払出済グローバルIP</span><br />
          <span class="content pl-3">グローバルIP</span><br />
          <div v-for="item in form.Napt" :key="item.ip">
            <span class="content pl-3"
              >{{ item.ip }}
              <span v-if="form.Napt.length > 1" class="ml-3">
                <b-icon-dash-square
                  class="remoteIcon"
                  @click="removeNapt(item)"
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
          <b-form-input class="content" v-model="ipCountNat" />
          <span class="content">払出済グローバルIP</span><br />
          <span class="content pl-3">グローバルIP</span><br />
          <div v-for="item in form.Nat" :key="item">
            <span class="content pl-3"
              >{{ item.ip }}
              <span v-if="form.Nat.length > 1" class="ml-3">
                <b-icon-dash-square
                  class="remoteIcon"
                  @click="removeNat(item)"
                />
              </span>
              <span v-else /> </span
            ><br />
          </div>
        </b-form-group>
      </div>
    </div>
    <footer class="modal-footer justify-content-end btn-container">
      <router-link
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
      >
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
        Napt: [],
        Nat: [],
      },

      ipCountNapt: 0,
      ipCountNaptLenght: 0,
      ipCountNat: 0,
      ipCountNatLenght: 0,
      // 削除されたIP（Napt）
      delNapt: [],
      // 削除されたIP（Nat）
      delNat: [],
    };
  },
  async mounted() {
    // グローバルIP
    this.form.Napt = GlobalIpNaptNat.NAPT;
    this.form.Nat = GlobalIpNaptNat.NAT;
    // グローバルIP数
    this.ipCountNapt = GlobalIpNaptNat.NAPT.length;
    this.ipCountNaptLenght = GlobalIpNaptNat.NAPT.length;
    this.ipCountNat = GlobalIpNaptNat.NAT.length;
    this.ipCountNatLenght = GlobalIpNaptNat.NAT.length;
  },
  methods: {
    removeNapt(target) {
      let naptResult = this.form.Napt.splice(this.form.Napt.indexOf(target), 1);
      this.delNapt.push({ ip: naptResult[0].ip });
    },
    removeNat(target) {
      let natResult = this.form.Nat.splice(this.form.Nat.indexOf(target), 1);
      this.delNat.push({ ip: natResult[0].ip });
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

