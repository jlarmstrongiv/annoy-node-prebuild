import Annoy from "../dist";

console.log(Annoy);
const a = new Annoy(10, 1);
console.log(a);

// const testData = [
//   -6.903006076812744, -11.624200820922852, 8.446203231811523, 2.680304765701294,
//   -7.568600177764893, 3.8000104427337646, -7.501142501831055, 5.408326625823975,
//   -5.034547805786133, -4.980441093444824, -11.357402801513672,
//   3.804211378097534, -0.13205528259277344, -0.2708680033683777,
//   1.5351711511611938, 5.038718223571777, -9.131332397460938, -4.690464019775391,
//   -0.8619194030761719, -7.9242119789123535, -9.485664367675781,
//   -4.391584396362305, -12.227622985839844, -3.0559282302856445,
//   -4.094529151916504, 3.064758539199829, 5.105234622955322, 1.9376486539840698,
//   2.198087215423584, -6.008357048034668, 2.8211710453033447,
//   -0.35606908798217773, 3.3635318279266357, -0.7263599038124084,
//   7.111448287963867, -10.298386573791504, 1.9136724472045898,
//   10.708721160888672, -4.857423305511475, -4.3391618728637695,
//   -4.246777534484863, 4.660648345947266, 2.151285171508789, -11.588946342468262,
//   -4.466168403625488, -2.968263626098633, 5.658212661743164, 6.306525707244873,
//   12.44094467163086, 2.643242597579956, -0.7117047905921936,
//   0.35139989852905273, -3.501573324203491, -1.9531424045562744,
//   10.962600708007812, 3.828578472137451, -1.8478667736053467, 5.720901966094971,
//   -0.2560429573059082, 3.7798001766204834, -3.975351572036743,
//   -0.7915812134742737, -7.6481733322143555, 6.558084487915039,
//   -3.989487886428833, 1.979867935180664, 6.650915145874023, 2.83858585357666,
//   -7.669672012329102, 2.4050827026367188, -8.428245544433594,
//   -4.287520408630371, -0.6269352436065674, 4.660304546356201,
//   0.7208502292633057, -9.409788131713867, -5.328435897827148,
//   0.15810754895210266, -12.330693244934082, -2.7087180614471436,
//   -0.10542088747024536, 9.091336250305176, -0.9335429668426514,
//   4.3124589920043945, 7.185200214385986, 1.7041778564453125, 4.829943656921387,
//   5.0991973876953125, -0.8666331768035889, -4.557303428649902,
//   -1.8329256772994995, -10.643648147583008, -3.409152030944824,
//   4.665709018707275, 5.624189376831055, 9.245153427124023, -6.608527660369873,
//   -0.48714786767959595, 5.3001556396484375, -1.9138965606689453,
// ];

// const buf = new Float64Array(testData);
// console.log(buf);
// const a = new AnnoyIndex(200, 1);

// for (let i = 0; i < 100; i++) {
//   a.addItem(i, buf);
// }
// a.build(10);

// console.log(a.get_nns_by_item(2, 10));

// a.save("c:\\users\\alex\\desktop\\test.ann");
