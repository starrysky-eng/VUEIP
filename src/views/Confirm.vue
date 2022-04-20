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
          <span class="content" style="color: red"
            >追加{{ resultData.ipCountNapt - resultData.ipCountNaptLenght }}個 </span
          ><br />
          <span class="content">払出済グローバルIP</span><br />
          <span class="content pl-3">グローバルIP</span><br />
          <div
            v-for="(item,index) in resultData.delNapt"
            :key="index"
            style="color: red"
          >
            <span class="content pl-3"
              >{{ item.ip }}
              <br />
            </span>
          </div>
          <div v-for="(item,index) in resultData.Napt" :key="index">
            <span class="content pl-3"
              >{{ item.ip }}
              <br />
            </span>
          </div>
        </b-form-group>
        <br />
        <br />
        <!--NAT用グローバルIP-->
        <b-form-group class="col-8" label="NAT用グローバルIP">
          <span class="content">現在 1個/ 上限 12個</span><br />
          <span class="content">グローバルIP数</span><br />
          <span class="content" style="color: red"
            >追加{{ resultData.ipCountNat - resultData.ipCountNatLenght }}個 </span
          ><br />
          <span class="content">払出済グローバルIP</span><br />
          <span class="content pl-3">グローバルIP</span><br />
          <div
            v-for="(item,index) in resultData.delNat"
            :key="index"
            style="color: red"
          >
            <span class="content pl-3"
              >{{ item.ip }}
              <br />
            </span>
          </div>
          <div v-for="(item,index) in resultData.Nat" :key="index">
            <span class="content pl-3"
              >{{ item.ip }}
              <br />
            </span>
          </div>
        </b-form-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    resultData: Object
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
