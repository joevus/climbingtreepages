//Trying out organization for 'available' info.


//big branch
{
	brsAvailable: [ //med branches available on big branch
		{img: documentelement, brsAvailable: [
			{img: documentelement},
			{img: documentelement},
			{img: documentelement}
		]},
		{img: documentelement, brsAvailable: []},
		{img: documentelement, brsAvailable: []}
	]

}

medbrsImgAvailable[i] = document.createElement("img") //src = something
// Or
medbrsImgAvailable = [
	med1
	med2
	med3
	med4
	med5
	med6
	medb1
	medb2
];
//-"Av" suffix stands for Available
//Array of medium branches available
	//Each element is an object with properties:
	//img, brsAv, leavesAv
var medBrsAv = [];

//Arrays of small branches available for different medium branches
	//Each element is an object with properties:
	//img, leavesAv
var smlBrsAvMed1 = [];
var smlBrsAvMed2 = [];
var smlBrsAvMed3 = [];
var smlBrsAvMed4 = [];
var smlBrsAvMed5 = [];
var smlBrsAvMed6 = [];
var smlBrsAvMedb1 = [];
var smlBrsAvMedb2 = [];

//Object for each med branch
	//Each object can be saved as element of medBrsAv and has properties:
	//img (document element), brsAv (array of objects), leavesAv (array of objects: doc element, positions)
var med1Av = 
var med2Av =
var med3Av =
var med4Av = 
var med5Av =
var med6Av = 
var medb1Av = 
var medb2Av = 

