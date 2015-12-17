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
	{file: "sm1-medb1", cssClass: "sm1_medb1"},
	{file: "sm1-medb2", cssClass: "sm1_medb2"},
	{file: "sm2-medb1", cssClass: "sm2_medb1"},
	{file: "sm2-medb2", cssClass: "sm2_medb2"},
	{file: "sm3-medb1", cssClass: "sm3_medb1"},
	{file: "sm3-medb2", cssClass: "sm3_medb2"},
	{file: "sm4-medb1", cssClass: "sm4_medb1"},
	{file: "sm4-medb2", cssClass: "sm4_medb2"},
	{file: "sm5-medb1", cssClass: "sm5_medb1"},
	{file: "sm5-medb2", cssClass: "sm5_medb2"},
	{file: "sm1-med4", cssClass: "sm1_med4"},
	{file: "sm1-med1", cssClass: "sm1_med1"},
	{file: "sm1-med2", cssClass: "sm1_med2"},
	{file: "sm1-med3", cssClass: "sm1_med3"},
	{file: "sm1-med5", cssClass: "sm1_med5"},
	{file: "sm1-med6", cssClass: "sm1_med6"},
	{file: "sm2-med4", cssClass: "sm2_med4"},
	{file: "sm2-med1", cssClass: "sm2_med1"},
	{file: "sm2-med2", cssClass: "sm2_med2"},
	{file: "sm2-med3", cssClass: "sm2_med3"},
	{file: "sm2-med5", cssClass: "sm2_med5"},
	{file: "sm2-med6", cssClass: "sm2_med6"},
	{file: "sm3-med4", cssClass: "sm3_med4"},
	{file: "sm3-med1", cssClass: "sm3_med1"},
	{file: "sm3-med2", cssClass: "sm3_med2"},
	{file: "sm3-med3", cssClass: "sm3_med3"},
	{file: "sm3-med5", cssClass: "sm3_med5"},
	{file: "sm3-med6", cssClass: "sm3_med6"},
	{file: "sm4-med4", cssClass: "sm4_med4"},
	{file: "sm4-med1", cssClass: "sm4_med1"},
	{file: "sm4-med2", cssClass: "sm4_med2"}, 
	{file: "sm4-med3", cssClass: "sm4_med3"},
	{file: "sm4-med5", cssClass: "sm4_med5"},
	{file: "sm4-med6", cssClass: "sm4_med6"},
	{file: "sm5-med4", cssClass: "sm5_med4"},
	{file: "sm5-med1", cssClass: "sm5_med1"},
	{file: "sm5-med2", cssClass: "sm5_med2"},
	{file: "sm5-med3", cssClass: "sm5_med3"},
	{file: "sm5-med5", cssClass: "sm5_med5"},
	{file: "sm5-med6", cssClass: "sm5_med6"}
];
//****NEXT STEP****
//Change file names of images to something that makes more sense:
//sm1-sm5 for each medium branch. Then use search for substrings
//or regex to assign each image to corresponding "available" arrays
//and objects. See available.js.
//document elements of images with class and srcs to boot.
var branchImgEles = [];

//Availabes
var bigBrAv = {};
var medBrsAv = [];

for(var i = 0; i < branchImgs.length; i++) {
	var img = document.createElement("img");
	img.src = "img/branches/" + branchImgs[i].file + ".png";
	// Add css class branch, and the class in cssClass for specific positioning
	//correct way to use jquery to select element stored in variable?
	$(img).addClass("branch " + branchImgs[i].cssClass);
	//append to body
	$(img).appendTo("body");
	branchImgEles[i] = img;
	
	if(branchImgs[i].file.search(/big/) != -1) {
		bigBrAv.img = img;
	}
	if(branchImgs[i].file.search(/med/) != -1 && branchImgs[i].file.search(/sm/) === -1) {
		//Put medb1 and medb2 in index 6 and 7
		if(branchImgs[i].file.search(/medb/) != -1){
			var iNew = findINew('medb', i) + 6;
			// var strLoc = branchImgs[i].file.search(/medb/) + 4;
			// var iNew = parseInt((branchImgs[i].file.substr(strLoc, 1)));
			// Make medBrsAv[iNew] and object, avoid writing over it.
			if(medBrsAv[iNew] ===undefined) {medBrsAv[iNew] = {};}
			medBrsAv[iNew].img = img;
		} else {
			var iNew = findINew('med', i);
			if(medBrsAv[iNew] ===undefined) {medBrsAv[iNew] = {};}
			medBrsAv[iNew].img = img;
		}
	//for sm branches
	} else if (branchImgs[i].file.search(/med/) != -1 && branchImgs[i].file.search(/sm/) != -1) {
		//find index of medium branch this small branch is on
		//	-iNewM stands for iNew for medium branch
		if(branchImgs[i].file.search(/medb/) != -1) { var iNewM = findINew('medb', i) + 6;}
		else {var iNewM = findINew('med', i);}
		//Insert this small branch into brsAv array of its parent in medBrsAv
		//	-First find index where this small branch should go.
		var iNewS = findINew('sm', i);
		//	-Next put it in the brsAv array of its parent
		console.log("iNewM " + iNewM);
		console.log("iNewS " + iNewS);
		console.log("medBrsAv[iNewM] " + medBrsAv[iNewM]);
		// Make medBrsAv[iNewM] and object, avoid writing over it.
		if(medBrsAv[iNewM] === undefined) {medBrsAv[iNewM] = {};}
		// Make medBrsAv[iNew].brsAv an array, avoid writing over it.
		if(medBrsAv[iNewM].brsAv === undefined) {medBrsAv[iNewM].brsAv = [];}
		// Make medBrsAv[iNew].brsAv[iNewS] an object, avoid writing over it.
		if(medBrsAv[iNewM].brsAv[iNewS] === undefined) {medBrsAv[iNewM].brsAv[iNewS] = {};}
		medBrsAv[iNewM].brsAv[iNewS].img = img;
	}


}

function findINew(str, curI) {
	//str: a string (examples: /med/, /medb/, /sm/)
	//curI: is current i, also nod to Madame Curie
	//Returns integer immediately after the regx in branchImgs[i].file
	var strLoc = branchImgs[curI].file.search(str) + str.length;
	var newI = parseInt(branchImgs[curI].file.substr(strLoc, 1)) - 1;
	return newI;
}
// var testImg = document.createElement("img");
// testImg.src = "img/branches/" + branchImgs[0].file + ".png";
// document.body.appendChild(testImg);