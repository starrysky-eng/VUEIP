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
          <span class="content" style="color: red">追加{{result - length}}個</span><br />
          <span class="content">払出済グローバルIP</span><br />
          <span class="content pl-3">グローバルIP</span><br />
          <!-- <div v-for="item in form.Napt" :key="item">
            <span class="content pl-3"
              >{{ item }}
              <span v-if="form.Napt.length > 1" class="ml-3">
                <b-icon-dash-square
                  class="remoteIcon"
                  @click="removeNapt(item)"
                />
              </span>
              <span v-else /> </span
            ><br />
          </div> -->
        </b-form-group>
<br>
<br>
        <!--NAT用グローバルIP-->
        <b-form-group class="col-8" label="NAT用グローバルIP">
          <span class="content">現在 1個/ 上限 12個</span><br />
          <span class="content">グローバルIP数</span><br />
          <span class="content">払出済グローバルIP</span><br />
          <span class="content pl-3">グローバルIP</span><br />
          <!-- <div v-for="item in form.Nat" :key="item">
            <span class="content pl-3"
              >{{ item }}
              <span v-if="form.Nat.length > 1" class="ml-3">
                <b-icon-dash-square
                  class="remoteIcon"
                  @click="removeNat(item)"
                />
              </span>
              <span v-else /> </span
            ><br />
          </div> -->
        </b-form-group>
      </div>
    </div>
    <footer class="modal-footer justify-content-end btn-container">
      <!-- <b-button variant="primary" @click="update">変更</b-button> -->
      <router-link :to="{name: 'Confirm',params:{result: ipCountNapt,length: ipCountNaptLenght}}" tag="b-button" @click="update">変更</router-link>
      <b-button variant="outline-primary" @click="cancel">キャンセル</b-button>
    </footer>
  </div>
</template>

<script>
export default {
  props:{
    result: Number,
    length: Number,
    Napt: Array
  }
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
