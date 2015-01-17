var submitClicked = document.getElementById('submit_btn');
var currentClimber = getEligible();

function getEligible() {
var name = document.getElementById('inName').value;
var age = document.getElementById('inAge').value;
var harness = document.getElementById('inHarness').value;
var rope = document.getElementById('inRope').value;
var device = document.getElementById('inDevice').value;
var carabiner = document.getElementById('inCarabiner').value;
var climber = new Climber (name, age, harness, rope, device, carabiner);
console.log(climber.name);
console.log(climber.age);
console.log(climber.harness);
console.log(climber.rope);
console.log(climber.device);
console.log(climber.carabiner);
return climber;
}

submitClicked.addEventListener('click', getEligible, false);

//Each climber must be 18 or older and have all 4 pieces of equipment to proceed. Mechanisms for input will be text boxes. Eventually the 4 data from the 4 pieces of equipment will need to somehow be converted to boolean values to proceed.

function Climber(name, age, harness, rope, device, carabiner) {
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
  };
  this.hasGear = function() {
    if (this.harness && this.rope && this.device && this.carabiner)
      return true;
  };
}


//Each climber must demonstrate 5 important steps of visual/physical inspection to proceed to final section. Five check boxes.


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

if (goodToGo){
  proceed();
else{
  course101();
}
}


