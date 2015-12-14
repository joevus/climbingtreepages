var branchImgs = [
	{file: "big", cssClass: "big"},
	{file: "med1", cssClass: "med1"},
	{file: "med2", cssClass: "med2"},
	{file: "med3", cssClass: "med3"},
	{file: "med4", cssClass: "med4"},
	{file: "med5", cssClass: "med5"},
	{file: "med6", cssClass: "med6"},
	{file: "medb1", cssClass: "medb1"},
	{file: "medb2", cssClass: "medb2"},
	{file: "sma1-medb1", cssClass: "sma1_medb1"},
	{file: "sma1-medb2", cssClass: "sma1_medb2"},
	{file: "sma2-medb1", cssClass: "sma2_medb1"},
	{file: "sma2-medb2", cssClass: "sma2_medb2"},
	{file: "sma3-medb1", cssClass: "sma3_medb1"},
	{file: "sma3-medb2", cssClass: "sma3_medb2"},
	{file: "sma4-medb1", cssClass: "sma4_medb1"},
	{file: "sma4-medb2", cssClass: "sma4_medb2"},
	{file: "sma5-medb1", cssClass: "sma5_medb1"},
	{file: "sma5-medb2", cssClass: "sma5_medb2"},
	{file: "smb1-med1 copy", cssClass: "smb1_med1_copy"},
	{file: "smb1-med1", cssClass: "smb1_med1"},
	{file: "smb1-med2", cssClass: "smb1_med2"},
	{file: "smb1-med3", cssClass: "smb1_med3"},
	{file: "smb1-med5", cssClass: "smb1_med5"},
	{file: "smb1-med6", cssClass: "smb1_med6"},
	{file: "smb2-med1 copy", cssClass: "smb2_med1_copy"},
	{file: "smb2-med1", cssClass: "smb2_med1"},
	{file: "smb2-med2", cssClass: "smb2_med2"},
	{file: "smb2-med3", cssClass: "smb2_med3"},
	{file: "smb2-med5", cssClass: "smb2_med5"},
	{file: "smb2-med6", cssClass: "smb2_med6"},
	{file: "smb3-med1 copy", cssClass: "smb3_med1_copy"},
	{file: "smb3-med1", cssClass: "smb3_med1"},
	{file: "smb3-med2", cssClass: "smb3_med2"},
	{file: "smb3-med3", cssClass: "smb3_med3"},
	{file: "smb3-med5", cssClass: "smb3_med5"},
	{file: "smb3-med6", cssClass: "smb3_med6"},
	{file: "smb4-med1 copy", cssClass: "smb4_med1_copy"},
	{file: "smb4-med1", cssClass: "smb4_med1"},
	{file: "smb4-med2", cssClass: "smb4_med2"}, 
	{file: "smb4-med3", cssClass: "smb4_med3"},
	{file: "smb4-med5", cssClass: "smb4_med5"},
	{file: "smb4-med6", cssClass: "smb4_med6"},
	{file: "smb5-med1 copy", cssClass: "smb5_med1_copy"},
	{file: "smb5-med1", cssClass: "smb5_med1"},
	{file: "smb5-med2", cssClass: "smb5_med2"},
	{file: "smb5-med3", cssClass: "smb5_med3"},
	{file: "smb5-med5", cssClass: "smb5_med5"},
	{file: "smb5-med6", cssClass: "smb5_med6"}
];

for(var i = 0; i < branchImgs.length; i++) {
	var img = document.createElement("img");
	img.src = "img/branches/" + branchImgs[i].file + ".png";
	// Add css class branch, and the class in cssClass for specific positioning
	//correct way to use jquery to select element stored in variable?
	$(img).addClass("branch " + branchImgs[i].cssClass);
	//append to body
	$(img).appendTo("body");
	console.log("loop working, on i = " + i);
}
// var testImg = document.createElement("img");
// testImg.src = "img/branches/" + branchImgs[0].file + ".png";
// document.body.appendChild(testImg);