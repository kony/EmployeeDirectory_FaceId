//actions.js file 
function AS_Button_ca75f5db46e4408db801629d40e18e0a(eventobject) {
    var self = this;
    this.faceIdCancelAction();
}

function AS_Button_de58ae5756604aa6af84213711d7af77(eventobject) {
    var self = this;
    var nav = new kony.mvc.Navigation("frmKnwldgFrmwrk");
    nav.navigate();
}

function AS_Button_df5c1e7270404c36a3f0c5b5e57f3b79(eventobject) {
    var self = this;
    this.navigateFlex(this, "100%");
    this.reanimateTheWidgetsInDetailsPage();
    this.view.forceLayout();
}

function AS_Button_f91a3a8eae824e549e779b00f6fe90de(eventobject) {
    var self = this;
    this.faceIdEnableAction();
}

function AS_FlexContainer_a14ae9a9309a43718587ebd67ff2015c(eventobject) {
    var self = this;
    this.view.faceid.verify();
}

function AS_FlexContainer_b83184b4130941619625d116530ff238(eventobject) {
    var self = this;
    this.invokeTouchID();
}

function AS_FlexContainer_d7ce472aa0b04378837e98cea2b1cce7(eventobject) {
    var self = this;
    this.onClickOfEmailFlex();
}

function AS_FlexContainer_df57e765a166459cb2e9e67d8f1f14c0(eventobject) {
    var self = this;
    kony.store.setItem("inputType", "social");
    this.invokeIdentityService("EmpDirectryAD");
}

function AS_FlexContainer_e0c3f52569d347ed857e7070f5a6177f(eventobject) {
    var self = this;
    this.onClickOfCallFlex(this.view.lblCallWorkValue.text);
}

function AS_FlexContainer_e4e858da869147289e400d81a4bf0a3c(eventobject) {
    var self = this;
    this.view.faceid.verify();
}

function AS_FlexContainer_f11375a8d3c74929807a3efee59ccb1b(eventobject) {
    var self = this;
    //alert();
}

function AS_FlexContainer_g7fc253933484d28a344db1af1f68c0e(eventobject) {
    var self = this;
    this.onClickOfCallFlex(this.view.lblCallMobileValue.text);
}

function AS_FlexContainer_i7ffa13263b341b2aa0d80216aef04e8(eventobject) {
    var self = this;
    kony.application.showLoadingScreen(null, "Loading...", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, false, true, {});
}

function AS_FlexContainer_jb92f436e84444a580f950508b184ada(eventobject) {
    var self = this;
    this.invokeTouchID();
}

function AS_UWI_a21f596ef1bf4a02970a9f0cb21b5c54(error) {
    var self = this;
    alert("onUnEnroll Failure");
}

function AS_UWI_a3bf0cc3d72f487ab186ca5a21519d4b() {
    var self = this;
    this.loginSuccessEvent();
}

function AS_UWI_a6567082484d451585af611329e2f06b() {
    var self = this;
    this.loginSuccessEvent();
}

function AS_UWI_a77c4873e0c7414b86ab7bc0e3f6ef8e(error) {
    var self = this;
    alert("onUnENroll Failed");
}

function AS_UWI_a9693e8ea977412e946d544bfd97cd22(error) {
    var self = this;
    this.faceIdInitFailed();
}

function AS_UWI_a9f4d76ba0ac45859af4b8bf79f0c60e(error) {
    var self = this;
    alert("onUnEnroll Failure");
}

function AS_UWI_aaa94c682f204c5b92a0d43c994b364b(error) {
    var self = this;
    this.faceIdInitFailed();
}

function AS_UWI_aaf3d0076a6e44db9a4bba9dc77ef999() {
    var self = this;
    this.faceIdInitSuccess();
}

function AS_UWI_abb052fe340e4fed96f6f45d893fcbb1() {
    var self = this;
    this.faceIdInitSuccess();
}

function AS_UWI_ad776700ad3e482694204bb243ef0842(error) {
    var self = this;
    alert("onUnEnroll Failure");
}

function AS_UWI_b01e4a14fa7746f6bae8d9e71745fb5d(error) {
    var self = this;
    this.faceIdInitFailed();
}

function AS_UWI_b0c8bd188e0a4090bd1fadf56fd2af81() {
    var self = this;
    alert("onUnEnroll Success");
}

function AS_UWI_b1c16c530a6f45a8bdde68c3294f04c1(error) {
    var self = this;
    this.faceIdInitFailed();
}

function AS_UWI_b2d5e77d601e4f4dad5dfdd9277e283e() {
    var self = this;
    alert("onUnEnroll Success");
}

function AS_UWI_b71ee341057b449db476200d623815e0(error) {
    var self = this;
    this.faceIdInitFailed();
}

function AS_UWI_b74d42d46bda48c7bd7ed5be7f62c23b() {
    var self = this;
    this.faceIdInitSuccess();
}

function AS_UWI_bafdd061265d4c4c963307d0235785e8(error) {
    var self = this;
    this.faceIdEnrollFailure();
}

function AS_UWI_bc1b0dda136146d5b3a2a1886bf48f63(error) {
    var self = this;
    Kony.print("Verify Failed");
}

function AS_UWI_c06bece1287a4aada6003a2c9bb31597() {
    var self = this;
    this.loginSuccessEvent();
}

function AS_UWI_c530f3fd28d94cf09991df44b69a774d() {
    var self = this;
    this.faceIdEnrollSuccess();
}

function AS_UWI_c81a45896f284c399d15ea81b725883e(error) {
    var self = this;
    this.faceIdInitFailed();
}

function AS_UWI_c8299cdb06ea41bcae846281259cd481(error) {
    var self = this;
    this.faceIdEnrollFailure();
}

function AS_UWI_c9fc9b2254f749208520a1d7c0875c93() {
    var self = this;
    alert("onUnEnroll Success");
}

function AS_UWI_cabb495f2fab405daedb0cd6dead9351() {
    var self = this;
    this.faceIdEnrollSuccess();
}

function AS_UWI_cd2ecd36aeaa40ad9c821f234ebd89bd(error) {
    var self = this;
    Kony.print("Verify Failed");
}

function AS_UWI_d0597689359544be8b59c79f1c1064d7() {
    var self = this;
    this.loginSuccessEvent();
}

function AS_UWI_d3363773d4834c9eb76e2e8a313b4d57(error) {
    var self = this;
    Kony.print("Verify Failed");
}

function AS_UWI_d391ef3788884573909d6fd9d8fc7893(error) {
    var self = this;
    alert("onUnEnroll Failure");
}

function AS_UWI_d5d415779c1745b9b44521dbbf5e6eb5() {
    var self = this;
    this.faceIdEnrollSuccess();
}

function AS_UWI_d6de9ffb3a544dc2be43de8e828a079a() {
    var self = this;
    this.faceIdInitSuccess();
}

function AS_UWI_d887786d414143ee834ee97f34d86387(error) {
    var self = this;
    Kony.print("Verify Failed");
}

function AS_UWI_df883ab2beae48a7a72b24e2d7821a03() {
    var self = this;
    this.loginSuccessEvent();
}

function AS_UWI_e02cb11ce82842b5a5478deb15f386a6() {
    var self = this;
    this.faceIdInitSuccess();
}

function AS_UWI_e28776fdfb374d5ea4736e8b109823cf() {
    var self = this;
    this.faceIdEnrollSuccess();
}

function AS_UWI_e4a2cf8feb854cb2b64d29acd4265991() {
    var self = this;
    alert("onUnEnroll Success");
}

function AS_UWI_e5f446ee72a9471d85d464d2aefdf6ec() {
    var self = this;
    this.loginSuccessEvent();
}

function AS_UWI_e6569280a4ba4be39ec0c33f5086d42a() {
    var self = this;
    this.faceIdInitSuccess();
}

function AS_UWI_e67b793079bd4ec59440868b59116940() {
    var self = this;
    this.faceIdEnrollSuccess();
}

function AS_UWI_e7461cc781b84dfbbf57c4535de61ed6() {
    var self = this;
    this.loginSuccessEvent();
}

function AS_UWI_e88115e31a3740df8e11abda4ef92767() {
    var self = this;
    alert("onUnEnroll Success");
}

function AS_UWI_eb66023a1dbf4ab188f1cf8b26c168f2() {
    var self = this;
    this.faceIdEnrollSuccess();
}

function AS_UWI_ebc4c2c21e50475b9cb475700a9323e4(error) {
    var self = this;
    Kony.print("Verify Failed");
}

function AS_UWI_edb621d999774af6a8181aeed4131f74() {
    var self = this;
    this.faceIdEnrollSuccess();
}

function AS_UWI_edcae07dba2249409f165d8bca2bef8d(error) {
    var self = this;
    alert("onUnEnroll Failure");
}

function AS_UWI_edd77b479ac04b5383de64a411ca2652() {
    var self = this;
    alert("onUnEnroll Success");
}

function AS_UWI_f0abe19ec3814565b7f5fb63d6872d57(error) {
    var self = this;
    this.faceIdEnrollFailure();
}

function AS_UWI_f1180c2ac06b442b82e26be11047702d() {
    var self = this;
    alert("onUnEnroll Success");
}

function AS_UWI_f1dca2d3ece64db1b2831714041fba10(error) {
    var self = this;
    alert("onUnEnroll Failure");
}

function AS_UWI_f5a3946c37a84be78dde946bde3127bc(error) {
    var self = this;
    Kony.print("Verify Failed");
}

function AS_UWI_f67d16a40c1244b88a68b88a4a41261f() {
    var self = this;
    this.faceIdEnrollSuccess();
}

function AS_UWI_f9b55578eee34c56b7ac530a1486a384(error) {
    var self = this;
    this.faceIdInitFailed();
}

function AS_UWI_f9c5065046be4259b7f440a9b781d191() {
    var self = this;
    this.loginSuccessEvent();
}

function AS_UWI_fad18299caed48ff88ee7cab577eb008(error) {
    var self = this;
    this.faceIdEnrollFailure();
}

function AS_UWI_fcc66dd137894d93a9f0df42a71cb264(error) {
    var self = this;
    this.faceIdEnrollFailure();
}

function AS_UWI_g69135d0e55a4405bb168ea57c8ca0e1(error) {
    var self = this;
    alert("onUnEnroll Failure");
}

function AS_UWI_g7b52726bce74c5c81fa9c62c0621b9e() {
    var self = this;
    this.faceIdInitSuccess();
}

function AS_UWI_g9bafa4d55c642debd451aaea11dde35(error) {
    var self = this;
    this.faceIdInitFailed();
}

function AS_UWI_gfea1c2eca3142d4bc81a50a1a6cacd4() {
    var self = this;
    this.faceIdInitSuccess();
}

function AS_UWI_h09653117a4040d9ad76a8714c8268d2() {
    var self = this;
    this.faceIdInitSuccess();
}

function AS_UWI_h2fd06d92f184d04ae5dca1847cd56b7(error) {
    var self = this;
    this.faceIdEnrollFailure();
}

function AS_UWI_hbdcd7a039a2492c89fe52e4f388eb8e(error) {
    var self = this;
    Kony.print("Verify Failed");
}

function AS_UWI_hd6cd130c95f449b978c791902f06b77(error) {
    var self = this;
    this.faceIdEnrollFailure();
}

function AS_UWI_hddb1b58a5384360b8a6e11353ab3efb(error) {
    var self = this;
    this.faceIdEnrollFailure();
}

function AS_UWI_i1694788a49c45278cc5ee794b4d25ae() {
    var self = this;
    this.faceIdEnrollSuccess();
}

function AS_UWI_i2699c38778a4b86b9754aee1bf419d9(error) {
    var self = this;
    Kony.print("Verify Failed");
}

function AS_UWI_i3aa471522414f4bb7ba8ef207ada068(error) {
    var self = this;
    Kony.print("Verify Failed");
}

function AS_UWI_i5f0dd98bfaa408db828ac904d09ce8e(error) {
    var self = this;
    this.faceIdEnrollFailure();
}

function AS_UWI_i7aaa403db014a2396c7062f70c0f7b1() {
    var self = this;
    alert("onUnEnroll Success");
}

function AS_UWI_ia7b00dce2ef4901a8051d25f0fd041d() {
    var self = this;
    alert("onUnEnroll Success");
}

function AS_UWI_jcc85f8d9c7942ba829831980d1edc57() {
    var self = this;
    this.loginSuccessEvent();
}

function AS_UWI_jd78012e5d0c4c80af1c0ed0f729ad92(error) {
    var self = this;
    alert("onUnEnroll Failure");
}

function AS_UWI_jead9100c95f47b39aa2a5296e3a885c(error) {
    var self = this;
    this.faceIdInitFailed();
}