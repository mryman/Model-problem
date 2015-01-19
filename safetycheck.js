var submitClicked = document.getElementById("submit_btn");

var currentClimber = [];


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

currentClimber.push(climber);

  for (i=0; i < currentClimber.length; i++){
    if (currentClimber[i].isAdult() === false) {
        referOther();
    }
    else if ((currentClimber[i].hasGear() === true) && (currentClimber[i].allInspect() === true) && (currentClimber[i].allComms() === true)){
        welcome();
    }
    else {
      takeClass();
    }
  }

  function referOther() {
    var msg = document.getElementById('questionaire');
    var itemContent = msg.innerHTML;
    msg.innerHTML = '<p class=>The minimum age for our gym is 18. Please contact our local partner gym at this link to inquire about youth programs: </p>' + '<br>' + '<a href=\"http://www.verticalworld.com\">Vertical World' +  '</a>';
  }

  function welcome() {
    var msg = document.getElementById('questionaire');
    var itemContent = msg.innerHTML;
    msg.innerHTML = '<p>Congratulations and Welcome!  Please proceed to our front desk and contact a staff member to complete your safety check in person and get your membership card.' +'</p>';
  }

  function takeClass() {
    var msg = document.getElementById('questionaire');
    var itemContent = msg.innerHTML;
    msg.innerHTML = '<p>We encourage you to check out details for our Intro to Indoor Climbing course, available on our About Us page at the link above' +'</p>';
  }

}

submitClicked.addEventListener('click', getInfo, false);

//Each climber must be 18 or older and have all 4 pieces of equipment to proceed.

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



