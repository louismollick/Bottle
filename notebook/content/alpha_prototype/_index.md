---
weight: 1
bookFlatSection: true
title: "Alpha Prototype"
---

## Introduction: Bottle
The system we are designing is called Bottle. It is an anonymous audio-based venting platform to help social-media users express their thoughts and feelings without the pressures of maintaining their appearance or image. The idea is to mimic and recreate the experience of pouring your heart out in a letter, putting it in a bottle, and tossing it into the ocean for someone to find one day.

On this platform, users are able to record and share audio messages or “bottles” and anonymously share them with all other users of the system. On the other hand, users are also able to listen to bottles shared by other random users.
 
## Design Evolution

In the previous deliverable, we created a computer prototype using Framer and received formative feedback from the evaluation team. We improved our design based on the test results and feedback we received. 

|   | Lessons from peer feedback and test results | Design evolution ideas |
|---|---|---|
| 1 | The system should provide users with positive feedback. | - After the “Start Recording” button is pressed, the record icon changes color to indicate that recording is in progress.<br>- Added bottle sent confirmation after the user tries to send out a bottle.<br>- Information about the bottle is displayed when it is playing. (i.e., the tags of the bottle).<br>These changes inform users of the outcome of their previous action and would keep users informed about the system’s state, thus we can improve the “visibility of system status”. |
| 2 | The design should be consistent throughout. | - A “Home” button is added to the recording page.<br>- The “Back” button on the listen tag selection page is replaced with a “Home” button.<br>Previously, our design did not include a “Home” on the recording page which is inconsistent with the UI of the bottle pickup page. Also, the users can back out of the recording process and return to the home page by pressing the “Home” button. We also replaced the back button on the listen tag selection page with a “Home” button, because the “Back” button brings the user back to the home page. These changes help with the “consistency and standards” and “user control and freedom” heuristics.|
| 3 | The system should be easy to use. | - The text size is increased.<br>- The “Play/Pause” buttons are placed more towards the center of the screen.<br>Larger text size makes the labels easier to read and placing the buttons more towards the center makes it easier for the users to press no matter how they hold their phones. These changes help us achieve the ease-of-use usability goal. |
| 4 | The “back” button on the listen page does not take the user back to the previous bottle, there is no way to listen to a previous bottle again. | - A “Prev Bottle” button is added.<br>- A “Home” button is added.<br>The “Prev Bottle” button takes the user back to the previous bottle in case the user wants to listen to it again. The “Home” button takes the user back to the home page so that the user can send out a bottle or listen to different bottles, and this change keeps the action of returning to the homepage consistent throughout the entire system following the heuristic “consistency and standards”. |

## Prototype Evolution

Our previous computer prototype on Framer had many limitations, which did not allow users to use the main audio message recording/playback functionality of the application. 
In this deliverable, we created a fully functioning iPhone / Android application using React Native (with the Expo development framework). It allows for the main recording/playback functionality, and the layout of the buttons & other usability issues have been addressed (see the previous Design Evolution section).  

![Home](../images/alpha/home.png)
![Say](../images/alpha/say.png)
![Listen](../images/alpha/listen.png)

To get started with the application, please see the Installation guide below.

## Refinement of user manual or installation guide

We've revised the user manual in order to include the new functionality we've added to the alpha prototype. Based on the feedback received from the previous deliverable, we also added clearer numberings to the steps, a table of contents, and some more images showing the application.  
<a href="../pdfs/alpha/user_manual.pdf" target="_blank">User Manual</a>  

We've also revised the installation guide to link to our new application (which runs on the Expo Go app), which can be run on iOS and Android devices. Please follow the installation guide instructions, and if you get stuck or encounter an issue, please feel free to contact us using the email on the front page.  
<a href="../pdfs/alpha/installation_guide.pdf" target="_blank">Installation Guide</a> 