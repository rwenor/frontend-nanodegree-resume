/*
This is empty on purpose! Your code to build the resume will go here.
 */

function myPrepend(where, temp, tag, data) {
  for (var i = 0; i < tag.length; i++) {
    temp = temp.replace(tag[i], data[i]);
  }
  where.prepend(temp);
}

function myHtml(obj, level) {
//
  var s = "";

  for (var property in obj) {
      if (obj.hasOwnProperty(property)) {
        //console.log("  ".repeat(level) + property +":", obj[property]);
        s += this[property].replace("%data%", obj[property]);
        console.log(s);
      }
  }
  return s;
}



function objIter(obj, level) {

  if (level > 10) {
    return;
  }

  for (var property in obj) {
      if (obj.hasOwnProperty(property)) {
        console.log("  ".repeat(level) + property +":", obj[property]);

        //if (obj[property] )
        if (obj[property] !== null && typeof obj[property] === 'object') {
          objIter(obj[property], level + 1);
        }
      }
  }
}

var bio = {
  "name": "Rolf Eriksen",
  "roll": "Konsulent",
  "skils": ["Data", "Sykkel", "Seiling"],

  work: {
    position: ""
  },
	"education": {
		"schools": [{
			"name": "Uacity",
			"city": "Internett",
      "degree": "Web developer"
		}, {
			"name": "UiO",
			"city": "Oslo",
      "degree": "Master"
		}]
	}

};

//$("#main").append("Rolf Eriksen");
myPrepend($("#header"), HTMLheaderRole, ["%data%"], [bio.roll]);
myPrepend($("#header"), HTMLheaderName, ["%data%"], [bio.name]);

for (var i in bio.education.schools) {
  console.log(bio.education.schools[i].name);

  s = myHtml( {
    "HTMLschoolStart": "",
    "HTMLschoolName": bio.education.schools[i].name,
    "HTMLschoolDegree": bio.education.schools[i].degree,
    "HTMLschoolLocation": bio.education.schools[i].city
  }, 0);
  $("#education").append(s);
}

$(document).click(function(loc) { // your code goes here
  logClicks(loc.clientX, loc.clientY);
});



//objIter(bio, 0);




// for (var property in bio) {
//     if (bio.hasOwnProperty(property)) {
//       console.log(property +":", bio[property]);
//         // do stuff
//     }
// }
