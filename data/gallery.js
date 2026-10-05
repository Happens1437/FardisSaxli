/*
 * გალერეის მონაცემები / Gallery data
 *
 * Each category has a list of photo IDs. The IDs are the original file names
 * from the old Wix site (fardissaxli.com), so for now images load from Wix's CDN.
 *
 * To move to self-hosted images later: run tools/download-images.ps1, then set
 * IMAGE_SOURCE = 'local' below. Nothing else needs to change.
 *
 * To add a photo: append its file name to the category's `photos` list
 * (and put the file in images/gallery/<slug>/ when using 'local').
 */
window.IMAGE_SOURCE = 'wix'; // 'wix' | 'local'

window.GALLERY = [
  {
    slug: 'fardebi',
    title: 'ფარდები',
    tagline: 'კლასიკური და თანამედროვე სტილი',
    description: 'ინდივიდუალურად შეკერილი ფარდები ნებისმიერი ინტერიერისთვის — ათასობით ფერისა და ფაქტურის არჩევანით.',
    cover: 0,
    photos: [
      '17c722_28f644cadf05462e94a2ec27c9419f55~mv2.jpeg', '17c722_a63cc572b4f94318b1cd101d987b8326~mv2.jpeg',
      '17c722_4c990ec8c23b4863a96a1a3e2f50e1fb~mv2.jpg', '17c722_3a0f20f6f99a4f5e86ae10b5ac51cee6~mv2.jpg',
      '17c722_b708eb2f068d45ff9f52f8328fc17470~mv2.jpg', '17c722_61a21ca8a1c5431ebb679da9ec93c637~mv2.jpg',
      '17c722_77c1a4d2c2c54b3d86dd7e7433cbc93d~mv2.jpg', '17c722_d6b8d2dde87c4ae0bc4738071a5e9eca~mv2.jpg',
      '17c722_dcef71d716af44eb9f40a73a0a58f8aa~mv2.jpg', '17c722_aeaddcf2b4934827a3855b85c8c48d4b~mv2.jpg',
      '17c722_fcd265aa18d24ad19cd947c954df299e~mv2.jpg', '17c722_975d079578744c31b313ac760f2c820b~mv2.jpg',
      '17c722_8b2c1b761c9a4609b577a1be44a3af5e~mv2.jpg', '17c722_edd66f0174c54220846d36a255bb4bfe~mv2.jpg',
      '17c722_ca85aff143c54810b056acb08a592227~mv2.jpg', '17c722_0e23a431cd8f4aec913e9518c51af1d8~mv2.jpg',
      '17c722_0049521167bf4bef83c4404857b8c0de~mv2.jpg', '17c722_bdf6453b24fb4d42b1859d36a75464fe~mv2.jpg',
      '17c722_c89b1808b5cf4658ade3dbce4ad84161~mv2.jpg', '17c722_6f256be16dd24fc69c21634320563dc7~mv2.jpg',
      '17c722_69b5e4465ca54f22ac02523a0a035185~mv2.jpg', '17c722_906c72cdc4304615ba0b7b53a0b0d3a6~mv2.jpg',
      '17c722_82da4f4db10d4376acdcd55ba050247d~mv2.jpg', '17c722_6cf6d4c1d25b44c7b415e20078875cfa~mv2.jpg',
      '17c722_b58e844c596045ccaa1ad6d44fe884d9~mv2.jpg', '17c722_eabb0bd72dbe4ee48b5ac8b901b23be4~mv2.jpg',
      '17c722_ee0bd5b55b874fbaa368fe4f2f08cf1f~mv2.jpg', '17c722_5a80572b4e7e490fbbd37826929c170f~mv2.jpg',
      '17c722_68331a0543534c678e6ef61969063bd2~mv2.jpg', '17c722_b5b5dbe1a7104a0a9d0eaec13c83ddf9~mv2.jpg',
      '17c722_424d3fb60caf4f95919869e8004781aa~mv2.jpg', '17c722_f8403970f2ba499aa9e35ef57bc4e51d~mv2.jpg',
      '17c722_be6bea43d56742c9baf42f49f24392db~mv2.jpg', '17c722_a53791e0f4b94b46b4bf9887ef7c25ab~mv2.jpg',
      '17c722_ddd8a35fc00a45cd8d6037229f86d7f5~mv2.jpg', '17c722_9cd2d4aaa88449c3a82426d4e3fb50b3~mv2.jpg',
      '17c722_000792b2b62541659d0a1b7d9a914b81~mv2.jpg', '17c722_67dc6ceb830c4624b205363f537bacb1~mv2.jpg',
      '17c722_8feec76db1ea45b7bc79d4cffda307d7~mv2.jpg', '17c722_bf592ea80c3840fc85c4be89b6ac8d2c~mv2.jpg',
      '17c722_4e94b826e6ca4de6a93b571a3a7e1b21~mv2.jpg', '17c722_c23645848c6d4f729d4729a60e1e397a~mv2.jpg',
      '17c722_9e069f37461d4eb4bf047a6c9c30a42e~mv2.jpg', '17c722_7e39ef182a0b4c12825b9d83833b264b~mv2.jpg',
      '17c722_fb2c3ac36fe5476aaa9a4bf4c4ecd64a~mv2.jpg', '17c722_fb0e14b6d158437099ab840d6d58a166~mv2.jpg',
      '17c722_c5badff94e5b405f8ba04bf18c7f2cd0~mv2.jpg', '17c722_fee15343c9d8464e82711c2e49f9ef2c~mv2.jpg',
      '17c722_c7025132d6e44efe85ab257407b52997~mv2.jpg', '17c722_1123ee841b194afeb0aba45440fdff7c~mv2.jpg',
      '17c722_147e6d492c0d4aafad58b153bdcd8051~mv2.jpg', '17c722_b05d2b10e7fb42ad8fbf62a6f6c45685~mv2.jpg',
      '17c722_8b90e1c422e04fca9fc94862b2e5d9f5~mv2.jpg', '17c722_7d84a2dc9bd04faeb3d494ffffe64648~mv2.jpg',
      '17c722_864e935a5e79440c8d1345e7b0f4cea3~mv2.jpg', '17c722_8050afa55fd14a4eada8b9160bc5444a~mv2.jpg',
      '17c722_2d7aa6adccdd40db95d9ae9c76207387~mv2_d_3456_2304_s_2.jpg', '17c722_9f9139af73cc491dbf9b9aa400d73f9a~mv2_d_3456_2304_s_2.jpg',
      '17c722_24c9901b8fff4ddd858d7e76388948ad.jpg', '17c722_5d64db921e06427facc245575aae6922.jpg',
      '17c722_d8aa43e52e0549beae656bdf3acf398e.jpg', '17c722_7dd937d70e9d44e29d177f3e7310306c.jpg',
      '17c722_3fed5f14779648bf9d6ddfaf5acd56f9.jpg', '17c722_684b546163eb4dc4a6fc8c3756b15462.jpg',
      '17c722_bdb27dabfcc04550851312be0b448f54.jpg', '17c722_9718ceef4a564684a61e92fcdab7823e.jpg',
      '17c722_9262103c91534baf939c5c205b3c8e00.jpg', '17c722_2757d6aec3264527a38009f11b1b3be2.jpg',
      '17c722_bde5c23c4ffc4fcca60b418caba55ae5.jpg', '17c722_1c48e336105c4f519aa1b8d2da0c44ef.jpg',
      '17c722_2cfe26809325434daffb333d8f37aabb.jpg', '17c722_606058f3673840f2a7d9e800ef461294.jpg',
      '17c722_a03f7dfe09c4486ab2c0bd92bb80050b.jpg', '17c722_1ee3d9c198d849cab49aa6cf5a1f04c8.jpg',
      '17c722_e51584aac28143abb1f597c5c8354551.jpg', '17c722_dda088a7c66b46a2ae1c9ebb3445cb84.jpg',
      '17c722_aba5f59f050f42198ef95ee0ac5e10ca.jpg', '17c722_100cc02221a245838c5c7c5c23d56748.jpg',
      '17c722_5e2df9dd40b0414e8fb2b19e9fcdf0a8.jpg', '17c722_5de421a5515a458386d7b1dbf45f0ded.jpg',
      '17c722_c174b77bf13647ac98d23aa4d03b5f61.jpg', '17c722_dc877e62bfef4ae5a726412df6e46841.jpg',
      '17c722_ebd91f2d10d5451b9025dadda6fe61fb.jpg', '17c722_3a1d00f056f2482fa287bd399b02c6f4.jpg',
      '17c722_1d5aea17d69943749f7031a5466c1f9d.jpg', '17c722_b7c559b585994f31b30fe70596dffa51.jpg',
      '17c722_e71aca31041f4d20b1606dfbfd5ade3f.jpg', '17c722_307c4ef1bb204011924636601d1416b9.jpg',
      '17c722_f9b5c0fa585c4042bd565db65d0be320.jpg', '17c722_c7b1df70a682455c97e588c323d44f2d.jpg',
      '17c722_39aee5c69cc641fdbff212ec5043ff8b.jpg', '17c722_ef76e80ec18b46beaee8c8211eb43b9a.jpg',
      '17c722_823ffa59c15740b4ba1d3fd432eeac4c.jpg', '17c722_8efd8ebd3b714bd7afe553a88f3d1392.jpg',
      '17c722_1e1e72a0d0e241febc3376dc0de14f8d.jpg', '17c722_58632c8b9bbf4efdb65d3ad2842d994f.jpg',
      '17c722_20484cc757914ba885683abe245bd617.jpg', '17c722_04ad463de0cd4a6983d65cbb8b75f5b5.jpg',
      '17c722_7a15451a2b914bd2a238d754e7473d29.jpg', '17c722_294dc14c8eee412581761ae7c9ba0504.jpg',
      '17c722_b5b09540bca54b72a779babcdb4fe7ae.jpg', '17c722_93af9ba798a4437fac99521dff0949b7.jpg',
      '17c722_d7884696832742338ff259d5531306b7.jpg', '17c722_6d155a98ce114bd1acb66a2836529443.jpg',
      '17c722_e6518962136b4944957ff7f81ba4688b.jpg', '17c722_0007da75adc64fa5bf23e87d47599715.jpg',
      '17c722_d06ddbd9e09243469876c3c6c7b57bf9.jpg', '17c722_38ac539488294c27b73c2bab995e3c0c.jpg',
      '17c722_99a301fd1a5a446e85e5d97b17866b97.jpg', '17c722_432f1ce8b01e44cdb97d48ab67f7e41b.jpg',
      '17c722_3970b3819a3042c3b0a39cc317b355a3.jpg', '17c722_9bffea308aff4e48aef360abe269ca1c.jpg',
      '17c722_ad778fcd5bff46bfbc9ddba8aba9bc0d.jpg', '17c722_1390036de474401aabd7d00770f07cec.jpg',
      '17c722_bd3e2b0d700045cfb4d339d40533b9ed.jpg', '17c722_d4053145a10b4cd1b47a584116e8edfc.jpg',
      '17c722_341ec83da023405fb7caca7b7b72bf63.jpg', '17c722_21e20c8098ea4d0cb8304c8d90191791.jpg',
      '17c722_44c076aec7e14e30beaad99cdbc8030e.jpg', '17c722_f5b57065e3814f939d6d9764b3666876.jpg',
      '17c722_ad1cf4864acf44aa8f0ec3fead3beafa.jpg', '17c722_5e100a202708442ba84e9b8f594210b9.jpg'
    ]
  },
  {
    slug: 'gadasafareblebi',
    title: 'გადასაფარებლები',
    tagline: 'კომფორტი თქვენი საძინებლისთვის',
    description: 'ინდივიდუალური გადასაფარებლები, რომლებიც ზუსტად ეხამება თქვენი ოთახის დიზაინს და ფარდებს.',
    cover: 0,
    photos: [
      '17c722_5c2bad2f6f504517bc284ef04ad4e202~mv2.jpg', '17c722_7667cce5ce8e4101b4b3ab0ab72d8c8f~mv2.jpg',
      '17c722_8337f4ba3f6b4b9baeb595461bdf3a02~mv2.jpg', '17c722_d81a27a970964cb5abf17f484a9c10a8~mv2.jpg',
      '17c722_539095db15704d1baee36555b4861bea~mv2.jpg', '17c722_4e1704ed70a54373ade1c074213d17c7~mv2.jpg',
      '17c722_4ef55dbd2a4c44e1921a712e2a8bbb7b~mv2.jpg', '17c722_54025354f1a74a129b90726f147c15ef~mv2.jpg',
      '17c722_e2bd1edabeec4615b412fcc9ec22f4ba~mv2.jpg', '17c722_dfc656f1856b4bf0b0708cf5bc7ca9d9~mv2.jpg',
      '17c722_1a8538d8c61a4e768cc430d5d3add90a~mv2.jpg', '17c722_bdfef1015f3949f8bca1dfc0517884af~mv2.jpg',
      '17c722_af4cb2c6318f44769347dbcb9c3caa5f~mv2.jpg', '17c722_1a58adb33bd34659975af2767abaf1f2~mv2.jpg',
      '17c722_25bee1e8fc314c51a01bd944d4f25800~mv2.jpg', '17c722_3ebfab04f183452389774905c8b6826a~mv2.jpg',
      '17c722_1557d412ad56483295f1fdbf3cc45b02~mv2.jpg', '17c722_f1130a00caf14f5e8363ca85c26e5f9c~mv2.jpg',
      '17c722_c64d82ecc6da495c83df4dab0753f170~mv2.jpg', '17c722_998e7bd752e64a0ab98592ca058cb210~mv2.jpg',
      '17c722_3cf8d82403044bf8bfe26e522b9dc8a5~mv2.jpg', '17c722_cabbe69875114df08cec7ef8275a9978~mv2.jpg',
      '17c722_eab7af820cf44ecc970bc5f41f1b7ef2~mv2.jpg', '17c722_6f9e21a7bb1c49ed9226d28ffd6ffc4e~mv2.jpg',
      '17c722_dde2219ffc6f42969f4ae4e31f078cea.jpg', '17c722_aa346a035be948bfb1fce1d52f10574c.jpg',
      '17c722_f8688e65675343e88e8028a9d7c5e7b8.jpg', '17c722_7a205f1e05d54bbb872f24190d202f24.jpg',
      '17c722_4c8c924c80394ada9fb40ab48336a0f7.jpg', '17c722_e21266b541e94ba09ca85e040538ea7d.jpg',
      '17c722_5ee6a0a93caa44eeab3fadeb109b6bc5.jpg', '17c722_39b7c59749ea4c2b80965b5c9466c1f9.jpg',
      '17c722_6f91d810da4a46e292d3d83a93f743e0.jpg', '17c722_9ad07b9a94ce45c2afab99af42423651.jpg',
      '17c722_d707ac4bec5a4f22ae5628e42089cacf.jpg', '17c722_a95bad121a5c4a1ba256971a3f6ecacb.jpg',
      '17c722_f468805bd4294effb070000bb01ad070.jpg'
    ]
  },
  {
    slug: 'jaluzebi',
    title: 'ჟალუზები',
    tagline: 'პრაქტიკული და ელეგანტური',
    description: 'თანამედროვე მექანიზმები და მაღალი ხარისხის მასალები სინათლის იდეალური კონტროლისთვის.',
    cover: 0,
    photos: [
      '17c722_38f170f6ffcb4773b159c920588779b4~mv2.jpeg', '17c722_74bf1045db974c0a80ab09b3f2a4a49d~mv2.jpg',
      '17c722_36756369aa3e43c4a21e2da55c038391~mv2.jpg', '17c722_a3ae5dfdcf2a49b78100ab8039c652e2~mv2.jpg',
      '17c722_900a95dd37c34eadb8f0551b79484012~mv2.jpg', '17c722_c23463d02e6a44eba76a5824b2ba9f3b~mv2.jpg',
      '17c722_b40d273c43b2473ea67ac8802ee4bab9~mv2.jpg', '17c722_5dc7362842a44ca5a5b729ee2e4e5eb9~mv2.jpg',
      '17c722_8d1801779f644245a4ae6c9f3047988c~mv2.jpg', '17c722_d4008b7de51946d4a840304db525c0a5~mv2.jpg',
      '17c722_93fcf0dcfd354fd5be5d0c25e98050b8~mv2.jpg', '17c722_e97cd6f2ab2e4891aa6776d4f717e5ea~mv2.jpg',
      '17c722_224846c1d51940ae99ac9c22ed18772e~mv2.jpg', '17c722_67d1c0023c8741fa905a7bb9c78ded83~mv2.jpg',
      '17c722_6c78417376124a7cbed48a8d4467afc8~mv2.jpeg', '17c722_a8cb5326141549d0bb90719c146ec824~mv2.jpg',
      '17c722_7286af76431e460a9c73fb1a99e66c6a~mv2.jpg', '17c722_b6019aa188944361b7b3ca260598d347~mv2.jpg',
      '17c722_818177252077440486d46b05a7d95919~mv2.jpg', '17c722_3a392778ce504a98ab9061bef9c3ac80~mv2.jpg',
      '17c722_f117029c0dc2487eb528ce50cc856272~mv2.jpg', '17c722_3fde118797f34ea7921ffb2e91ef0f6c~mv2.jpg',
      '17c722_7737a26538774572b3f8415ef3e8634f~mv2.jpg', '17c722_12349b2114964d779169f7f8545a0f9e~mv2.jpg',
      '17c722_d819b3e1b5844f67924dd3a8dae3ff44~mv2.jpg', '17c722_e02faab030ed46b2a46c66688ef3fe99~mv2.jpg',
      '17c722_77f9119d57ef4ce8b8e76d66bed4e294~mv2.jpg', '17c722_f43b4449f113411f8946dd9c7d4a41e0.jpg',
      '17c722_b188bb9d9b3041ebac54cf1dd1a48143.jpg', '17c722_a28a1176ef3e454187704f040e3585b6.jpg',
      '17c722_cf7773ca765a4607af4d467c319e84e2.jpg', '17c722_4874f240b3f948a596c518942c98374c.jpg',
      '17c722_360301228ec6495c87c9949134c5d7ef.jpg', '17c722_b76f56355d0e4f08b8694d63040f00db.jpg',
      '17c722_57c2ded3e24f40199d08dec163b7a643.jpg', '17c722_e93d9751b24c4d65a387f587f73f21aa.jpg',
      '17c722_3d7ba1c5cef94457b7773ae85d192807.jpg', '17c722_330f33f381a94c10aa388e7f670879da.jpg',
      '17c722_3c1f5e25b8b242b89ce610bd0edf104b.jpg', '17c722_1d7394e789ad405fb2c69ae1f95ad9a0.jpg'
    ]
  },
  {
    slug: 'balishebi',
    title: 'ბალიშები',
    tagline: 'დეკორატიული აქცენტები',
    description: 'დეკორატიული ბალიშები, შეკერილი იმავე ქსოვილებისგან, რაც თქვენი ფარდები და გადასაფარებლები.',
    cover: 0,
    photos: [
      '17c722_5d92bceca2084d6fafe7535b103216f7~mv2.jpg', '17c722_8050afa55fd14a4eada8b9160bc5444a~mv2.jpg',
      '17c722_0b32f7779a04488aa9a25fc8a74e104b~mv2.jpg', '17c722_aed3553660fb4dbbbe8c33db1be5fcc9~mv2.jpg',
      '17c722_72152d14931a48fd97d57618ca31d90c~mv2.jpg', '17c722_c6c4bff02e44422ca5f165aadc876463~mv2.jpg',
      '17c722_c04d4d7fffbf47cc8dd62905b7aab570~mv2.jpg', '17c722_0049521167bf4bef83c4404857b8c0de~mv2.jpg',
      '17c722_f6b71248abc044388b3cf0f5634c870b~mv2.jpg', '17c722_5d28067919ee40e092162bf8a1bd7890~mv2.jpg',
      '17c722_cef442aa90be4607b4d2f39deef587b0~mv2.jpg', '17c722_61250327f149432693aa8cb5e5e279b7.jpg',
      '17c722_39a31403d1674f5fac6120b5383ed7bb.jpg', '17c722_56bcbc49f0704b70acf748a50119aece.jpg',
      '17c722_334d3ea2b7254e92847be39959786aab.jpg', '17c722_72c6c935f7ca43e5b280b4fc6bb5669c.jpg',
      '17c722_6e6425a242d24bebae63795265f0fe07.jpg', '17c722_5bd3bc811a104b2db47eb62baeea01fd.jpg',
      '17c722_eaf0dd7eb5514c179c40e6ade2225a8c.jpg', '17c722_9198cb4a985146afa2cacf74c60263e0.jpg',
      '17c722_ed308c25009b445b8bcef06568ce39dc.jpg', '17c722_f29ef50dd57e4c379150d319008cb2ca.jpg',
      '17c722_318ae322092f404095731dc95660db95.jpg', '17c722_09b650c0cf6c4ebba1148f197824b3f2.jpg',
      '17c722_6265cd88b7b843458863600a812382d1.jpg', '17c722_7e56088eb99c49178c91722f36acab55.jpg',
      '17c722_9fbf007b0c024a2ebacb64dbf86889fa.jpg', '17c722_4090056f2b6e488ca9fa1c4cb63f52aa.jpg',
      '17c722_ea09b5b5acda4f678e8146f2f9968b7e.jpg'
    ]
  },
  {
    slug: 'aqsesuarebi',
    title: 'აქსესუარები',
    tagline: 'დეტალები, რომლებიც ქმნიან სრულყოფილებას',
    description: 'ფოჩები, სამაგრები და დეკორატიული აქსესუარები, რომლებიც ფარდებს დასრულებულ იერს სძენს.',
    cover: 0,
    photos: [
      '17c722_2d70797db615468d951f39b68b0f7a3e~mv2.jpg', '17c722_de0d81db02ea4af39d7c74edfa54ee23~mv2.jpg',
      '17c722_b010929b8aaf43cfa829595f3adfd4c2~mv2.jpg', '17c722_544a7fdbd6e94af895fc20ed4c254369~mv2.jpg',
      '17c722_7807cb73bc9e48eb989c96505b6edc4c~mv2.jpg', '17c722_da40a6f786684f6d8d4aa27260730e51.jpg',
      '17c722_e315d694009e4cae88c308d1ae28e803.jpg', '17c722_892cc297e3b24dad9211408bd643546c.jpg',
      '17c722_2dc951906fd44311af82131106f16731.jpg', '17c722_414a5ed438a14718a18f45d228c3c5bc.jpg',
      '17c722_07d6dee1a43c458e8dec6c0ec0578221.jpg', '17c722_577f2b41465345098eb03f11888d4d25.jpg',
      '17c722_6ec998968d454fc88f3ce31a1a1de96a.jpg', '17c722_af0811d98c10416889097beecf86f338.jpg',
      '17c722_b10362df7feb46ab9ddd48e7ca2f4736.jpg', '17c722_7098c751a61e44f796a8a60bcfb520d6.jpg',
      '17c722_315a4e69a1b5443da0f333bd9d43e275.jpg', '17c722_78f4525817764174a770ed2208a6561b.jpg',
      '17c722_7359c48506db45edaa86d0fa72195cbd.jpg', '17c722_f241ec5da9b54821a6dd1e19a7242041.jpg',
      '17c722_97316369aa004c70a163712b0dc482d1.jpg', '17c722_09e5d320fd8240f6ab91feb2633ce818.jpg',
      '17c722_69a31bd7e8d24de9b9c5efcf4c64c730.jpg', '17c722_2ba79d841ef149c09461a7c40f8e585c.jpg',
      '17c722_690397e463f24e76b7eb6c16d931c826.jpg', '17c722_606b1d1f62a448c09abe06823e506efe.jpg'
    ]
  },
  {
    slug: 'karnizebi',
    title: 'კარნიზები',
    tagline: 'ევროპული ხარისხი',
    description: 'მაღალი ხარისხის ევროპული კარნიზები — კლასიკურიდან მინიმალისტურამდე, მონტაჟით.',
    cover: 0,
    photos: [
      '17c722_9bb49bc636244f6c884cdd9f9540242d~mv2.jpg', '17c722_2c35ad5be9494d21b51c43e2de14b1ea~mv2.jpg',
      '17c722_9288afc502a04ee088aceea00f6c7827~mv2.jpg', '17c722_a1dc82c9ff7046d9b0e015d6d6a962e3~mv2.jpg',
      '17c722_4dfe079cbc1e486cbaa953c6fb593fa5.jpg', '17c722_e09940096d7c433caf711d9d104d457b.jpg',
      '17c722_265a06f0c28145568ca60a5731edf234.jpg', '17c722_67f83d8db9624865a1673368b6c6769c.jpg',
      '17c722_75b6cafba2b145f6b9225cae5da02997.jpg', '17c722_2c8eca3e9a8348848f22182c3826fde9.jpg'
    ]
  }
];

/* Partner logos for the home-page slider (from fardissaxli.com/partners). */
window.PARTNERS = [
  '17c722_54968c670a1b41bcbacccfd12a0a7b85.png', '17c722_16946d17b7fd4819bf7372b1ee9f55d0.png',
  '17c722_eeecf0b8952e489d974ba597ce41fc9e.jpg', '17c722_a9bf757b59404fa1925401b9f533f4eb.jpg',
  '17c722_70d75cb10ff444b7825ee4950e0c9dbb.jpg', '17c722_05062911a37a4dfeaec80905c8f81c8c.jpg',
  '17c722_6344a4c9272e4bd5a2bf1218fb196755.jpg', '17c722_e6c91f002a6f489bb5d10d648d77ac48.jpg',
  '17c722_bf3d60c6788542b68a49d614a486bf26.jpg', '17c722_75922feb439042cfb0d9bece7ccf11dd.jpg',
  '17c722_c722305801dc4e1fb1dad6c962d2bf31.png', '17c722_6b45f8a515314ee68c343fb7eed4a55f.jpg',
  '17c722_bd370c81d4ad41f29037f048cc5bd1df.jpg', '17c722_d9656e5326b248e197862ff56e580805.jpg',
  '17c722_071b5f895bc24f9b9cbc91e9d17618b2.jpg', '17c722_62e38a886e874d89ab944527ee82b272.jpg',
  '17c722_9b8947ffff0f4a48ae6afc3893ea4015.jpg', '17c722_0873960605d84670b98da791055578c4.jpg',
  '17c722_f22c2e4ed62b433c8fc4e4d0cbebf046.jpg', '17c722_d67d4c6ef5c748c2910e57d4e44626c4.png',
  '17c722_dc2e5a5d43f04f48941bdd32b4cfedba.png', '17c722_bef1806e339f403d811cfb4ce52dfc83.jpg',
  '17c722_a786bc83f1f94051b416053ba55620d8.jpg', '17c722_d22e91f22c1f4741b080ab45d2628acc.jpg',
  '17c722_63ae5df3c3c44113969e32195691cdd5.png', '17c722_e568e3b1421446e0af899d5df8111ae8.png',
  '17c722_91fc10802d28472f9917384ae972252a.jpg', '17c722_21264fa85a8b4651b235904a4561a8f8.gif',
  '17c722_c4a4693b1abc4f6a9a860c35eec271ec.jpg', '17c722_2662e0fc9739452587141ad9c3d0878e~mv2.jpg',
  '17c722_ca4388020884485988171ad716e8f29a~mv2.png', '17c722_22975ba122ca4dd6bd7c7059b0c4beca~mv2_d_2880_1920_s_2.png',
  '17c722_0dad3b5df6ea4bf49ddd9b171674e1a6~mv2.gif'
];

/*
 * Builds an image URL for a photo. `size` is the longest side in pixels.
 * 'wix'   → resized on the fly by Wix's CDN
 * 'local' → images/<folder>/<size-bucket>/<file>, produced by tools/download-images.ps1
 */
window.imageUrl = function (file, size, folder) {
  if (window.IMAGE_SOURCE === 'local') {
    return 'images/' + folder + '/' + (size > 800 ? 'large' : 'thumb') + '/' + file;
  }
  return 'https://static.wixstatic.com/media/' + file + '/v1/fit/w_' + size + ',h_' + size + ',q_85,enc_auto/' + file;
};
