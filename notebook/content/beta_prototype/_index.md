---
weight: 1
bookFlatSection: true
title: "Beta Prototype"
---

## Introduction: Bottle 
The system we are designing is called Bottle. It is an anonymous audio-based venting platform to help social-media users express their thoughts and feelings without the pressures of maintaining their appearance or image. The idea is to mimic and recreate the experience of pouring your heart out in a letter, putting it in a bottle, and tossing it into the ocean for someone to find one day.

On this platform, users are able to record and share audio messages or “bottles” and anonymously share them with all other users of the system. On the other hand, users are also able to listen to bottles shared by other random users.

## Design Evolution
In the previous deliverable, we created the alpha prototype for Bottle. It was an iPhone/Android application, built using React Native with the Expo development framework. Based on the peer feedback we received and our team’s own insights, observations and testing, we improved our design in the beta prototype, as described in the table below.  

|   | Issues identified | Design evolution ideas |
|---|---|---|
| 1 | The “bottle” metaphor was not emphasized enough. | - Added home screen background to depict a beach/sea/ocean.<br>- Added bottle buttons icons<br>- Added bottle images elsewhere throughout the app<br>- Changed to a consistent color scheme, instead of white everywhere, to match the home screen.<br>These changes help us emphasize our bottle metaphor, this can help users get familiar with the concept of our system which can also help to avoid some confusion when using the system. The changes in the aesthetics also address the “aesthetic and minimalist design” heuristics. |
| 2 | Recorded Bottle kept playing on a loop while selecting tags. It was “too annoying”. | - Bug fixed. |
| 3 | The volume was too low while playing back a Bottle. | - Bug fixed. |
| 4 | The labels for the two buttons on the home page were too lengthy and seemed repetitive. | - Changed labels for the two buttons on home page<br>&emsp;- “I want to send out a bottle” -> "Send out a bottle"<br>&emsp;- “I want to pick up a bottle” -> "Pick up a bottle"<br>We used more concise language in the labels, which makes the labels easier to read. This helps us achieve the ease-of-use usability goal. |
| 5 | On the Bottle recording page, it was unclear if the user must  “Tap to start recording/Tap to stop recording” or “Press and hold to record”. | - Changed the labels for the start and stop recording buttons<br>&emsp;- “Start Recording” -> “Tap to start recording”<br>&emsp;- “Stop Recording” -> “Tap to stop recording”<br>“Press and hold to record” is very common among voice messaging, users would easily get confused. This change made the labels clearer and can help with the “recognition rather than recall” heuristics.|


## Prototype Evolution

In this deliverable, we continued to update and improve our alpha system, which was a fully functioning iPhone/Android application, built using React Native (with the Expo development framework). The beta system still contains all the features from the alpha system, and additionally comes with some bug fixes and updated visual elements. See the above section “Design Evolution” for more details.

<style>
    .row {
        display: flex;
    }

    .column {
        padding: 5px;
    }
</style>

<div class="row">
    <div class="column">
        <img src="../images/beta/1.png">
    </div>
    <div class="column">
        <img src="../images/beta/2.png">
    </div>
</div>
<div class="row">
    <div class="column">
        <img src="../images/beta/3.png">
    </div>
    <div class="column">
        <img src="../images/beta/4.png">
    </div>
</div>

For information on how to install and use the beta prototype, see the “User Manual” in the section below. 

## Refinement of user manual or installation guide

In terms of content, we added an “Installation Guide” section to the beginning of the user manual. In our last deliverable, this was a separate document, but based on the peer feedback we received, we decided to combine the two documents for the sake of users’ convenience. Some of the steps which contained multiple instructions were broken down into smaller, simpler steps. Lastly, the photos in the user manual were updated to match the updated design of our beta prototype, and annotations were added to the photos. 

<a href="../pdfs/beta/user_manual.pdf" target="_blank">User Manual (includes installation guide)</a> 