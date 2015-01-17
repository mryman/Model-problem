var submitClicked = document.getElementById('submit_btn');
var currentClimber = getInfo();

function getInfo() {
var name = document.getElementById('inName').value;
var age = document.getElementById('inAge').value;
var harness = document.getElementById('inHarness').value;
var rope = document.getElementById('inRope').value;
var device = document.getElementById('inDevice').value;
var carabiner = document.getElementById('inCarabiner').value;
var harnessFit = document.getElementById('inOwnHarness').value;
var partnerHarnessFit = document.getElementById('inPartnerHarness').value;
var dblBack = document.getElementById('inOwnDblBack').value;
var partnerDblBack = document.getElementById('inPartnerDblBack').value;
var knotTied = document.getElementById('inOwnKnot').value;
var deviceLoad = document.getElementById('inOwnDevice').value;
var carabinerLock = document.getElementById('inLockCarabiner').value;
var belayCall = document.getElementById('inOnBelay').value;
var belayReply = document.getElementById('inBelayOn').value;
var climbCall = document.getElementById('inClimbing').value;
var climbReply = document.getElementById('inClimbOn').value;

var climber = new Climber (name, age, harness, rope, device, carabiner, harnessFit, partnerHarnessFit, dblBack, partnerDblBack, knotTied, deviceLoad, carabinerLock, belayCall, belayReply, climbCall, climbReply);
console.log(belayCall);

document.body.onload = addElement;
return climber;


//elJoin.innerHTML = "<button class=\"submit\" id=\"join_btn\">Join</button>"
  function addElement() {
   var elFeedback = document.createElement("button");
    var newContent = document.createTextNode("Feedback");
    elFeedback.appendChild(newContent); //add the text node to the newly created div.

    // add the newly created element and its content into the DOM
    var currentBtn = document.getElementById("submit_btn");
    document.body.insertBefore(elFeedback, currentBtn);
  }

}
submitClicked.addEventListener('click', getInfo, false);



/*
function evaluate(){
  if (!currentClimber.isAdult ) {
    console.log("referOther()");
  }
  else if ((currentClimber.hasGear == true) && (currentClimber.allInspect == true) && (currentClimber.allComms == true)){
    console.log("welcome()");
  }
  else {
    console.log("takeClass()");
  }
 }
*/
//Each climber must be 18 or older and have all 4 pieces of equipment to proceed. Mechanisms for input will be text boxes. Eventually the 4 data from the 4 pieces of equipment will need to somehow be converted to boolean values to proceed.

function Climber(name, age, harness, rope, device, carabiner, harnessFit, partnerHarnessFit, dblBack, partnerDblBack, knotTied, deviceLoad, carabinerLock, belayCall, belayReply, climbCall, climbReply) {
  this.name = name;
  this.age = age;
  this.harness = harness;
  this.rope = rope;
  this.device = device;
  this.carabiner = carabiner;
  this.isAdult = function() {
    if (age >= 18){
      return true;
    }
    else {
      return false;
    }
  };
  this.hasGear = function() {
    if (this.harness && this.rope && this.device && this.carabiner){
      return true;
    }
    else {
      return false;
    }
  };
  this.harnessFit = harnessFit;
  this.partnerHarnessFit = partnerHarnessFit;
  this.dblBack = dblBack;
  this.partnerDblBack = partnerDblBack;
  this.knotTied = knotTied;
  this.deviceLoad = deviceLoad;
  this.carabinerLock = carabiner;
  this.allInspect = function() {
    if ((harnessFit == "y") && (partnerHarnessFit == "y") && (dblBack == "y") && (partnerDblBack == "y") && (knotTied == "y") && (deviceLoad == "y") && (carabinerLock == "y")) {
      return true;
    }
    else {
      return false;
    }
  };
  this.belayCall = belayCall;
  this.belayReply = belayReply;
  this.climbCall = climbCall;
  this.climbReply = climbReply;
  this.allComms = function() {
    if ((belayCall == "on belay") && (belayReply == "belay on") && (climbCall == "climbing") && (climbReply == "climb on")) {
      return true;
    }
    else {
      return false;
    }
  };
}




/*Each climber must demonstrate 5 important steps of visual/physical inspection to proceed to final section. Five check boxes.


function Inspection(harnessFit, harnessBuckle, knotTied, deviceLoad, carabinerLock) {
  this.harnessFit = harnessFit;
  this.harnessBuckle = harnessBuckle;
  this.knotTied = knotTied;
  this.deviceLoad = deviceLoad;
  this.carabinerLock = carabiner;
}


//Each climber must know the correct call and response sequence for safe communications to complete the safety check. 4 text boxes.

function Comms(belayCall, belayReply, climbCall, climbReply) {
  this.belayCall = belayCall;
  this.belayReply = belayReply;
  this.climbCall = climbCall;
  this.climbReply = climbReply;
}


var goodToGo = false;

/*if (goodToGo){
  proceed();
else{
  course101();
}
}
*/

