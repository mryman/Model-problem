# Model-problem

Model a pre-climb safety check

Problem statement:

Indoor climbing gyms have proliferated at a rapid pace in the last two decades. Often times, potential new clients find a website with information about a gym in their area and show up unprepared for the basic safety check.  The safety check is a mandatory step before people can participate in climbing activities at the gym.

We are going to model a safety check, carried out by a climber and belayer prior to beginning a climb. The check uses a sequence of visual/physical equipment inspection steps and a call-and-response series of verbal communications that has been standardized in the activity of rock climbing for decades.

The climber wears a harness, ties into a rope, inspects his own harness and knot, inspects the belayer's equipment, issues verbal calls, and waits for verbal responses before proceeding.

The belayer wears a harness, loads the rope into a belay device, connects the belay device and rope to his harness with a locking carabiner, inspects all of his equipment, inspects the climber's harness and knot, waits for verbal calls, and issues verbal responses to calls from the climber when prompted.

Anyone wishing to participate at a climbing gym must demonstrate a baseline of knowledge for all of the above, in both roles as climber and belayer.  A simple questionaire could help inform a potential customer as to whether they possess the basic skills required or if they should instead consider signing up for a class to acquire those skills.

To model this with code, we will collect data from our user to test their knowledge of three main components of the safety check: Eligibility, Physical/Visual Inspection Sequence, Verbal Communications. Collecting all of their input into a data set and storing it via object constructor function then allows us to run the data through some logic and present the user with one of three applicable replies:

1. To keep this model simple, we are requiring our users to be over the age of 18.  If they are not, our first logical comparison calls a function that will prompt them to contact a partner business that offers youth programs and supplies a link to the partner's website.

2. If they are at least 18 years old, have the proper equipment, and are able to demonstrate that they possess the minimum required skills, they will be prompted to contact a staff member at the check in desk and proceed.

3. If they can not meet the requirements, they will be encouraged to seek more information about participating in a basic skills course to reach the gain the required skills and knowledge.

Alex and I worked together on this project and our strengths complemented each other well.  While I did the "driving" for dealing with most of the javascript, she did the "driving" for most of the CSS.  We each contributed to the HTML for over all structure and discussed features and overall flow issues as we encountered them.  While the display is fairly plain and simple, I am very happy with the end results.  Areas of needed improvment include:  DOM manipulation techniques rather than use of innerHTML properties for our outputs, better data validation techniques to allow users to express the text inputs with reasonable answers that the code will reject in its present state, breaking the questionaire into more discrete components with logic for appropriate output at each stage, and better asthetic styling of the output display.

![Structural Class Model](struc_class_model.jpg)

