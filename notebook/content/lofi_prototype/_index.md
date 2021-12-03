---
weight: 1
bookFlatSection: true
title: "LoFi Prototype"
---

# Lo-Fi Prototype

## 10+10 Method Sketching

### Round 1

In this first round of the 10+10 method, we were trying to explore the design space as much as possible, with 10 sketches of different types of possible interaction methods and layouts. 

{{< details "Sketches 1-10" >}}
##### Sketch #1
![Sketch #1](../images/sketching/round1/sketch1.jpg)
##### Sketch #2
![Sketch #2](../images/sketching/round1/sketch2.png)
##### Sketch #3
![Sketch #3](../images/sketching/round1/sketch3.jpg)
##### Sketch #4
![Sketch #4](../images/sketching/round1/sketch4.jpg)
##### Sketch #5
![Sketch #5](../images/sketching/round1/sketch5.png)
##### Sketch #6
![Sketch #6](../images/sketching/round1/sketch6.jpg)
##### Sketch #7
![Sketch #7](../images/sketching/round1/sketch7.png)
##### Sketch #8
![Sketch #8](../images/sketching/round1/sketch8.png)
##### Sketch #9
![Sketch #9](../images/sketching/round1/sketch9.png)
##### Sketch #10
![Sketch #10](../images/sketching/round1/sketch10.png)
{{< /details >}}

### Round 2

After analysing our sketches from round 1, we had a more clear idea of which concepts and features we needed to further explore and refine. These included the following:
- Front page
    - Theme: Bottles
    - “Say” button
    - “Listen” button
    - Bottle history
- After “Say” button pressed
    - Record clip
    - Delete clip
    - Playback
    - Add tags to clip
    - Final “Post” button
- After “Listen” button pressed
    - Have tag choice
- In Bottle history menu (not implemented in prototype)
    - Archive of clips posted by the user

From these guidelines, we explored several variations of the concepts and features we selected after round 1:

{{< details "Home screen sketches" >}}
<!-- ##### Homescreen #1 -->
<!-- ![Homescreen #1](/images/sketching/round2/homescreen/homescreen1.jpg) -->
##### Homescreen #1
![Homescreen #1](../images/sketching/round2/homescreen/home2.png)
##### Homescreen #2
![Homescreen #2](../images/sketching/round2/homescreen/home3.jpg)
{{< /details >}}


{{< details "\"Say\" screen sketches" >}}
##### Say #1
![Say #1](../images/sketching/round2/say/say1.png)
##### Say #2
![Say #2](../images/sketching/round2/say/say2.png)
##### Say #3
![Say #3](../images/sketching/round2/say/say3.jpg)
{{< /details >}}


{{< details "\"Listen\" screen sketches" >}}
##### Listen #1
![Say #1](../images/sketching/round2/listen/listen1.png)
##### Listen #2
![Say #2](../images/sketching/round2/listen/listen2.png)
##### Listen #3
![Say #3](../images/sketching/round2/listen/listen3.png)
{{< /details >}}

## Low-fidelity prototype(s)

As we analysed the sketches from round 2 of sketching, we hoped to organise them such that we would have three distinct prototypes. However, we realised that several of our ideas were quite similar in terms of functionality and only slightly differed in visuals, so we decided to merge these ideas, and planned to use them for our first prototype. The remaining ideas were to be used for the second prototype. 

We finally decided on two prototypes with a few small (but important) differences:
- Prototype 1:
    - Has fewer labels on screen, more icons
    - Press & hold to record button
    - The application returns home automatically after listening to a bottle

- Prototype 2:
    - Many more labels on screen, "Cancel", "Back", etc.
    - Has more of an emphasis on bottles as signifiers
    - Separate "Start Recording" and "Stop Recording" buttons
    - There is a button to go to the next bottle when listening to a bottle

In both prototypes, the bottle archive feature was not implemented because it is a secondary feature of the system. However, both still include an archive or "Bottle History" button.
Pictures of each prototype & descriptions of their functionality are included in the following drop-downs:

{{< details "Prototype 1" >}}

This prototype has a minimalistic design and aims to provide a simple and calming user experience, without any visual clutter.  
The home screen offers two simple buttons for “Say” and “Listen” features, and a third “Archive” button.
When the “Say” button is pressed, the user is able to post an audio clip by navigating through a series of steps. The first step is recording, and the press-and-hold method is used. Next, the user can then listen to the audio, delete it, or proceed to the next step, which is adding tags. A drop down menu which allows multiple selection is used to select tags to be added to the clip. The final step is to post the clip. Once the clip has been posted, the user automatically returns to the home screen.  
When the “Listen” button is pressed, the user is able to listen to an audio clip posted by another user, in two steps. First, the user is prompted to select one or more tags from a drop down menu, so that they can listen to a clip that fits their current mood. Next, an audio clip is presented to the user, which can be played and paused. Once the clip finishes playing, the user automatically returns to the home screen.  

##### Homescreen
![Prototype Homescreen](../images/prototypes/prototype_1/1.jpg)

{{< details "After tapping the bottle icon" >}}
![Prototype 1 - Say #1](../images/prototypes/prototype_1/2.jpg)
![Prototype 1 - Say #2](../images/prototypes/prototype_1/3.jpeg)
![Prototype 1 - Say #3](../images/prototypes/prototype_1/4.jpeg)
![Prototype 1 - Say #4](../images/prototypes/prototype_1/5.jpeg)

{{< /details >}}

{{< details "After tapping the net icon" >}}
![Prototype 1 - Listen #1](../images/prototypes/prototype_1/6.jpg)
![Prototype 2 - Listen #2](../images/prototypes/prototype_1/7.jpeg)
{{< /details >}}

{{< /details >}}

{{< details "Prototype 2" >}}

This prototype has a slightly more bright and cheerful design, and while it has the same features as the prototype 1, these features are implemented slightly differently.  
The home screen offers two buttons for “Say” and “Listen” features, and a tray for “Bottle History”.
When the user swipes up on the home screen, the “Bottle History” tray is pulled up from the bottom, and it displays all the clips previously posted by the user. Swiping down pushes the tray back down (not implemented in the prototype, as it is a secondary feature).  
When the “Say” button is pressed, the user is able to post an audio clip by navigating through a series of steps. The first step is recording. The start button is clicked to start recording, then the stop button is clicked to stop recording. Next, the user can then listen to the audio, delete it, or proceed to the next step, which is adding tags. A drop down menu which allows single selection is used to select a tag to be added to the clip. If the user wishes to add more tags, they can then click the “+” button and another drop down will appear. Once the user has added all the tags of their choice, they can press the “Send” button to post the clip. Once the clip has been posted, the user automatically returns to the home screen.  
When the “Listen” button is pressed, the user is able to listen to an audio clip posted by another user, in two steps. First, the user is prompted to select one or more tags from a checklist, so that they can listen to a clip that fits their current mood. Next, an audio clip is presented to the user, which can be played and paused. While the clip is playing, or after it finishes playing, the user can press the “Next bottle” button to listen to another clip which has the same tags. Alternatively, the user can press the “Back” button to change their selection of tags.  

##### Homescreen
![Prototype 2 Homescreen](../images/prototypes/prototype_2/a.jpg)

{{< details "I want to send out a bottle" >}}
![Prototype 2 - Say #1](../images/prototypes/prototype_2/b.jpeg)
![Prototype 2 - Say #2](../images/prototypes/prototype_2/c.jpg)
![Prototype 2 - Say #3](../images/prototypes/prototype_2/d.jpg)
![Prototype 2 - Say #4](../images/prototypes/prototype_2/e.jpeg)
{{< /details >}}

{{< details "I want to pick up a bottle" >}}
![Prototype 2 - Listen #1](../images/prototypes/prototype_2/f.jpeg)
![Prototype 2 - Listen #2](../images/prototypes/prototype_2/g.jpg)
{{< /details >}}

{{< /details >}}

## Usability goals

1. Ease-of-use :
    - Rationale: We want the user journey through the application to be as seamless as possible. Our target audience is already 
struggling emotionally: if the application were frustrating to use, this could worsen their mood. Hence, we want 
our system to be as easy to use as possible.
    - Usability goal: **Users should be able to complete all of the benchmark tasks without error**. 

2. Feeling heard :
    - Rationale: One of the main features of the application is the ability to send out an anonymous voice message to others, in
order to vent about ones day, or to just share a random thought. The goal of this  feature is to allow users to feel heard, without the pressure of needing to uphold an image.  
    - Usability goal: **All test users should indicate a higher-than-neutral response to "feeling heard" in the post-test questionnaire**. 

3. Feeling that their thoughts are accurately represented :
    - Rationale: When sending out a thought or message, nothing is more frustrating than when it doesn’t accurately reflect the real thoughts one has. This could worsen the user’s mood, which is against the goal of the system.
    - Usability goal: **At least one test user should use the redo message or playback buttons when performing the tests.**

4. Feeling less alone with their issues : 
    - Rationale: The other main feature of the application is the ability to hear other user's messages. The goal of this feature is 
to allow users to listen to the issues that others have, and to relate to their struggles. As a consequence, we hope 
that they feel less alone with their issues, or can gain perspective on the issues they're facing themselves.
    - Usability goal: **All test users should indicate a higher-than-neutral response to "feeling empathetic" in the post-test questionnaire**. 

## Benchmark tasks

| Benchmark task | Related usability goal |
| --- | --- |
| Record a bottle | 1, 2 |
| Listen to a recorded bottle before posting | 1, 2, 3 |
| Rerecord a bottle | 1, 3
| Discard a bottle before posting | 1, 3 |
| Add tags to a recorded bottle | 1, 3 |
| Post a recorded bottle | 1, 2 |
| Find a bottle that has certain tags | 1, 4 |
| Listen to another user's bottle | 1, 4 |
| Return to the homescreen after posting a clip (only in prototype 2) | 1 |

## Testing Materials

<a href="../pdfs/lofi/observer_briefing.pdf" target="_blank">Observer Briefing</a>  
<a href="../pdfs/lofi/user_introduction.pdf" target="_blank">User Introduction</a>  
<a href="../pdfs/lofi/pretest_questionnaire.pdf" target="_blank">Pre-test Questionnaire</a>  
<a href="../pdfs/lofi/test_script.pdf" target="_blank">Test script</a>  
<a href="../pdfs/lofi/data_collection_sheet.pdf" target="_blank">Data collection sheet</a>  
<a href="../pdfs/lofi/user_tasks.pdf" target="_blank">User tasks</a>  
<a href="../pdfs/lofi/posttest_questionnaire.pdf" target="_blank">Post-test Questionaire</a>  


## Test Results

### Results of pre/post test questionnaires

<a href="../pdfs/lofi/pretest_questionnaire_results.pdf" target="_blank">Pre-test Questionaire</a>  
<a href="../pdfs/lofi/posttest_questionnaire_results.pdf" target="_blank">Post-test Questionaire</a>  

### Results of tests

#### Original data collection sheets:  
<a href="../pdfs/lofi/user1_p1.pdf" target="_blank">User 1 (initials SS) - Prototype 1</a>  
<a href="../pdfs/lofi/user1_p2.pdf" target="_blank">User 1 (initials SS) - Prototype 2</a>  
<a href="../pdfs/lofi/user2_p1.pdf" target="_blank">User 2 (initials ML) - Prototype 1</a>  
<a href="../pdfs/lofi/user2_p2.pdf" target="_blank">User 2 (initials ML) - Prototype 2</a>  

#### Results User 1

| Prototype | Task | Accomplished | Observation |
| --- | --- | --- | --- |
| 1 | Record a bottle | Yes | User had trouble getting to the recording page. It seems that they didn’t understand what the icons on the main page were. Once they arrived at the recording page, they did record a clip, but did not speak while doing, so it was a blank clip. |
| | Listen to a recorded bottle before posting | No | |
| | Rerecord a bottle | Yes | The user didn’t do this in the intended way. After recording a clip, instead of the redo button, they pressed the back button to return to the home page, then came to the recording page to record again. |
| | Discard a bottle before posting | Yes | The user managed to do this by accident, by pressing the back button after recording a clip. They did not use the delete button. |
| | Add tags to a recorded bottle | No | Once the user had recorded a clip, they pressed the back button (consequently discarding the recording) and never arrived at this page. |
| | Post a recorded bottle | No | Once the user had recorded a clip, they pressed the back button (consequently discarding the recording) and never arrived at this page. |
| | Find a bottle that has certain tags | Yes | The user had trouble understanding how to get to this page. They selected one tag even though multiple selection was allowed. |
| | Listen to another user's bottle | No | The user got confused how to get to this page after choosing a tag. So they decided to press the back button. |
| | Return to the homescreen after posting a clip (only in prototype 2) | N/A | For this prototype, this happens automatically once a “Listen” or “Say” task has been completed. |
| 2 | Record a bottle | Yes | |
| | Listen to a recorded bottle before posting | No | |
| | Rerecord a bottle | No | |
| | Discard a bottle before posting | Yes | The user clicked on the redo button, which took them back to the recording page, and from there they pressed the back button to get to the main page. |
| | Add tags to a recorded bottle | Yes | At first, the user tried to proceed to posting the clip without adding tags. Observer had to point out that adding tags is mandatory. |
| | Post a recorded bottle | Yes | |
| | Find a bottle that has certain tags | Yes | |
| | Listen to another user's bottle | Yes | The user did not pause at any point although that option was there. |
| | Return to the homescreen after posting a clip (only in prototype 2) | Yes | |

#### Results User 2

| Prototype | Task | Accomplished | Observation |
| --- | --- | --- | --- |
| 1 | Record a bottle | Yes | User seemed a bit confused about how to get to the recording page, but once there, they didn’t have any problem with recording. |
| | Listen to a recorded bottle before posting | Yes | |
| | Rerecord a bottle | No | User was satisfied with initial recording and proceeded to post it. |
| | Discard a bottle before posting | Yes |  |
| | Add tags to a recorded bottle | Yes | User chose only one tag, despite multiple selection being allowed. |
| | Post a recorded bottle | Yes | |
| | Find a bottle that has certain tags | Yes | User chose only one tag, despite multiple selection being allowed.|
| | Listen to another user's bottle | Yes | The user did not pause at any point although that option was there. |
| | Return to the homescreen after posting a clip (only in prototype 2) | N/A | For this prototype, this happens automatically once a “Listen” or “Say” task has been completed. |
| 2 | Record a bottle | Yes | |
| | Listen to a recorded bottle before posting | Yes | |
| | Rerecord a bottle | No | User was satisfied with initial recording and proceeded to post it. |
| | Discard a bottle before posting | Yes | |
| | Add tags to a recorded bottle | Yes | User chose only one tag, despite multiple selection being allowed. |
| | Post a recorded bottle | Yes | |
| | Find a bottle that has certain tags | Yes | User chose only one tag, despite multiple selection being allowed.|
| | Listen to another user's bottle | Yes | The user did not pause at any point although that option was there. |
| | Return to the homescreen after posting a clip (only in prototype 2) | Yes | User reached for the back button, but then noticed the home button at the top left corner and pressed that instead. |

#### Video clip of User 1 tests

The following is a short exerpt from User 1's testing of prototype 2, where they go from the homescreen and "record a bottle":

<video width="320" height="240" controls="" name="video">
    <source src="../videos/user1prototype2.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

As shown in the video, we used the Wizard of Oz technique in multiple ways:
- when the user pressed a button to change screens, the Wizard of Oz operator changed the screen of the prototype.
- when the user recorded a message, we took a voice memo of the user using our own smartphone. If they tried to request "playback", we would have replayed this same voice memo.
- when the user requested to listen to a message (task "Listen to another user's bottle"), we had multiple recordings prepared to play, depending on the feeling they chose to listen to.  
The following is an example of the voice recording we played for the "Happy" feeling:  

<audio name="audio" controls="">
    <source src="../audio/happy.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>


### Conclusion

During the usability test sessions, we discovered some major design flaws in prototype 1 right away. The buttons on the homepage were confusing. These flaws were also echoed in the user's feedback in the post-test questionnaire.  
In fact, most of the buttons throughout the prototype caused confusion as it was not clear what the icons meant, and the lack of labels added to the confusion. This confusion prevented one user from finishing many of the tasks. The other user was able to finish all the tasks but did stumble a few times. Prototype 2 did not have this problem. It had clear labels for each of the buttons, so users were able to navigate fairly easily.  
When analysing the collected data, we made a few important observations. Firstly, when choosing tags for their own clips, or selecting tags for the clips they want to listen to, both the users always chose only one tag, in both of the prototypes, despite having the option to select multiple tags. Secondly, when opening a bottle, i.e., listening to an audio clip, none of the users paused the clips while they were playing, in either of the prototypes.  
Overall, we noticed that prototype 2 was easier to use for both the users and therefore provided a more favourable user experience.  