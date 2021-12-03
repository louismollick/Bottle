---
weight: 1
bookFlatSection: true
title: "Formative FeedBack"
---

## System Evaluated: Bridge
The system we tested was called "Bridge": an application that helps you transcribe music more efficiently.  
<a href="http://www.cim.mcgill.ca/~jer/courses/hci/project/2021/www.cs.mcgill.ca/~jchow16/hci/computer_prototype.html" target="_blank">Link to their Computer Prototype</a>
 
## Usability Testing
We performed a usability test with three different users, each with varying levels of musical background, as indicated in the “user population” section by the designers:
- User 1 has played Clarinet for 12 years, has transcribed music before
- User 2 has played Pipa for 16 years, has not transcribed music before
- User 3 has no musical background

You can find the raw results of the tests in the following documents:  
<a href="../pdfs/feedback/consent_form_participant_1.pdf" target="_blank">Consent Form - User 1</a>  
<a href="../pdfs/feedback/consent_form_participant_2.pdf" target="_blank">Consent Form - User 2</a>  
<a href="../pdfs/feedback/consent_form_participant_3.pdf" target="_blank">Consent Form - User 3</a>  

<a href="../pdfs/feedback/pretest_questionnaire.pdf" target="_blank">Pre-test Questionnaire</a>  
<a href="../pdfs/feedback/data_collection_sheet_user1.pdf" target="_blank">Data Collection Sheet - User 1</a>  
<a href="../pdfs/feedback/data_collection_sheet_user2.pdf" target="_blank">Data Collection Sheet - User 2</a>  
<a href="../pdfs/feedback/data_collection_sheet_user3.pdf" target="_blank">Data Collection Sheet - User 3</a>  
<a href="../pdfs/feedback/posttest_questionnaire.pdf" target="_blank">Post-test Questionnaire</a>

### Summary table of benchmark task completion
{{< details "Benchmark Task Summary" >}}
NOTE: Bugs or issues due to unimplemented features or limited implementations were not included in this summary, as they do not provide much insight. See the individual data-collection documents for full details.

| Task | Quantitative Summary | Qualitative Observation | Relevant User Quote |
|-----|-----|----|----|
| Select Song | 3/3 | - All of the users did not pay much attention to changing URL & clicked Go immediately<br> - Song selection was done by Wizard of Oz |
| Using voice commands, play song for about 20 seconds, then pause using voice commands. | 3/3 | - ⅔ of the users tried using mouse commands in addition to the voice commands<br> - Users did not know when “20 seconds” had passed during the song (due to prototype limitation) | <u>User 1:</u> “I’m supposed to play for about 20 seconds -- I’m not sure where I am in the song” |
| Change track playback speed to 1.75 | 3/3 | - Users all successfully performed the task.<br> - User 1 did not think that increasing the playback speed was a useful feature for transcription.<br> - User 1 wanted more precise options (0.8, 0.9) for decreasing playback speed.<br> - User 2 wished the playback speed were also voice-controllable. | <u>User 1:</u> “I’m not sure how I feel about being able to increase the playback speed, because that wouldn’t really help the transcription part.” <br> “Maybe have more range in [the playback speed option]. Because maybe with 0.75, the sound might be a bit different. So maybe have 0.9, 0.8 -- that would be more useful.”<br> <u>User 2:</u> “I also wanted to do the voice command to change the speed, because actually [...] I would have preferred all the functionality be controlled with the voice commands.” |
| Change rewind increment to 10s. Using voice command, play the song, rewind, and pause the song. | ⅔ (change increment) and ⅔ (rewind) | - User 2 failed to change the increment, as they could not find the option on-screen<br> - User 1 failed to use the “rewind” voice command, as they attempted to do it using mouse-controls, but clicked the increment dropdown again instead. |
| Change forward increment to 3s. Using voice command, play the song, skip forward, and pause the song.| ⅓ (change increment) and ⅔ (skip forward) | - Users 2 and 3 both failed to change the increment because they tried using a voice-command to change it. It appears they did not know the available voice commands.<br> - User 2 wished that the “Forward” voice command would accept an increment argument.<br> - User 1 failed to skip forward, because they thought that selecting 3s in the increment dropdown would also skip forward 3 seconds. | <u>User 2:</u> “If it is possible, I think it’s better to just recognize the time that I said” → in reference to her using the “Forward 10s” voice command, instead of changing the increment to 10s using the mouse & then saying the voice command “Forward” |
| Update the input/output device settings | 3/3 | - All users successfully found the dropdown on their first click.<br> - User 2 noted that the icon colors were not visible enough.<br> - User 3 did not find the icon to be intuitive enough to know that it contained the input/output settings.<br> - User 3 had a bug where clicking the “Settings” icon clicked on a Framer dropdown instead. | <u>User 2:</u> “I was trying to look where to click, and I thought it was just part of the decorations.”<br> <u>User 3:</u> “Some of the icons -- I’m not too sure about the input/output device… That might be straightforward to a music [producing] app user, but for me probably no.”
| Add loop | 3/3 | - All users found the “Create Loop” button easily.<br> - Users 1 and 3 needed examiner intervention, because they did not realize the loop was not created until the “Add Loop” button was clicked, and tried to find the remove loop button while the loop creation form was still open.<br> - User 1 remarked that the loops & voice commands would be convenient for them. | <u>User 3:</u> “And so now I need to remove the loop. [...] Oh, I have to click add… Oh, ok”<br> <u>User 1:</u> “I can definitely feel the loops is useful”<br>“I feel like with the voice commands, it goes a lot faster and it’s pretty convenient” |
| Remove loop | 3/3 | - Users 1 and 2 had trouble finding the X button, only found it after a few seconds. | |
| Add a Marker | 3/3 | - User 2 thought the marker was created before they clicked the “Add Marker” button. They clicked it after a few seconds.<br> - User 1 remarked they would only use the marker to show where they stopped transcribing between sessions. | <u>User 1:</u> “I’m not sure how I would use the markers -- mainly to indicate where I am in the transcription work. Let’s say I stopped at a certain point, then I’d use a marker.” |

Other important critiques/comments:
- All users demonstrated a lack of knowledge of the voice commands. During the tests, they were confused by which commands needed to be done through mouse and which could be done with voice. They did not find the voice command drop down until we showed them after the tests were completed. All three users were surprised this dropdown existed.  
<u>User 1 (post-test questionnaire):</u> “Maybe have a tutorial option for first time users to explain how the app works (where we can find the voice commands are)”  
<u>User 3:</u> “It would be great if there was a pop-out to indicate where you can find these [voice] commands on your first use [of the application].”  

- All users demonstrated at least some kind of slight trouble when navigating through the application, and had trouble clicking elements or clicked elements which were unclickable instead (due to bugs or unclear buttons).  
<u>User 3:</u> “It would be nice if there was input feedback. Like, if you click something, there should be a visual effect. For example, when I click Create Loop sometimes I’m not sure whether my click was registered.”
{{< /details >}}


## Heuristic Evaluation
The evaluators completed the supply with Heuristic Evaluation sheets as they navigated on their own through the application. Usability issues were related to the specific Heuristic they were violating, from the list of Heuristics chosen in the Computer Prototype deliverable. Their severity was also noted, along with a short description of the issue:  
<a href="../pdfs/feedback/heuristic_eval_chenxi.pdf" target="_blank">Heuristic Evaluation - Chenxi</a>  
<a href="../pdfs/feedback/heuristic_eval_misha.pdf" target="_blank">Heuristic Evaluation - Misha</a>  
<a href="../pdfs/feedback/heuristic_eval_louis.pdf" target="_blank">Heuristic Evaluation - Louis</a>  

## Prioritized Usability Issue Table
In the following table, we’ve summarized and prioritized all of the usability issues discovered from both the usability testing and the heuristic evaluation:
| Priority | Usability Issue | Reasoning |
|-----|-----|-----|
| High | Lack of knowledge of voice-commands, and which commands can be done through mouse-commands only. | This is the main appeal of the application and its main functionality, which the users could not fully appreciate during the tests. |
| High | Awkward and unclear placement of rewind and forward increment buttons in UI, inside the rewind/skip buttons. <br> (+ voice-command issue made users think they could change increment with voice) | Users click on the center of the rewind button, thinking that it will rewind the song, but instead it opens up the menu for selecting the rewind increment. |
| High | No option to cancel creation of a loop or marker | A user is forced to finish creating a loop or marker once they have started to create one, and only then can they delete it. These steps are unnecessary if, say, the user accidentally clicks on the create button and wants to cancel it immediately. |
| High | No option to change the song being transcribed, after one clicks “Go” with a entered song URL. | A user would need to restart the application if they wanted to change the song. |
| Medium | Unclear/unnoticeable button labels<br>Examples: “Go” button in Song Select, “Add Loop/Marker”, delete loop “X” button, the color of the “Input/Output” button, “Info” button to get the list of voice commands. | Users missed parts of the application or needed assistance because of the clarity of these buttons. |
| Medium | Lack of button click & hover feedback. | Difficulties navigating the application due to this issue. |
| Medium | Lack of time stamps | It is important for the user to know where they are in the song, especially when adding markers or loops. | 
| Medium | No option to edit the loop once it is created. | A user would to need to delete it and recreate on in order to change the color or title of the loop. | 
| Low | Inappropriate icon used for delete actions | Conventionally, a trash can icon is used for delete buttons, and “x” is used for cancel/close buttons. |
| Low | Lack of more precise options (0.8, 0.9) for decreasing playback speed. | Requested from User 1, because 0.75 speed could distort the sound, or be too slow. |
| Low | Lack of color options for markers | Since color options are available for loops, it makes sense to have color options for markers as well, so that the user can easily distinguish between different markers. |
| Low | Lack of some voice commands<br>Examples: change increment, change playback speed | These shortcuts were requested from User 2, since they preferred voice controls to mouse controls. However, the main voice commands are already in the app, so low priority. | 
| Low | Lack of volume buttons | Since all other voice commands are also doable via button-clicks, it makes sense to also allow volume control via button-clicks too. |
| Low | Lack of replay button | Having a replay button would add convenience for the user. Replay buttons are usually available in apps that play any kind of audio/video content. | 
| Low | No indication of what song is contained in a copy & pasted URL. | When a URL is pasted into the text box in the introduction page, there is no feedback to show which song was registered by the system, before they press “Go”. |

## Test Plan Critique
Problems with the prototype implementation: 
- Due to limitations of Figma for implementing audio features, none of the voice commands were implemented, and the testing procedure relied on Wizard of Oz techniques. This limitation was addressed in the provided prototype manual, however, since voice commands were the core element that brought the most value to the user, without a proper implementation of those, the users were unable to truly appreciate the prototype. The usability goal “#2 Ease of Use” was unable to be adequately tested.

- After creating and deleting loops and markers, the user was required to click on a “Done Task” button before being able to continue with any other tasks. This unnecessary step confused the users and required the examiners to intervene. We assume this was due to an implementation limitation -- however it would have been best to indicate it in the test plan.

- After pressing the play button, the pause button had to be pressed before being able to press any other buttons, i.e, the user was not allowed to use any feature of the app via button-press while the music was playing. This limitation was not mentioned in the manual.


Modifications to original test plan and testing materials:

- Added a consent form, because it was not included in the test plan (see Usability Testing section).

- Added a User Briefing document, modifying the designer teams’ LoFi prototype version, since they did not include one in the test plan:  
<a href="../pdfs/feedback/user_briefing.pdf" target="_blank">User Briefing Document</a>  
This helped explain the product easier, and provided the user with more specific testing guidelines than those from the original test plan (ex: try by yourself but ask questions if stuck, vocalize your thoughts, be as honest as possible).

- Despite adding the guideline to “vocalize your thoughts” in the User Briefing, we noticed that none of the users were able to think of any comments to say during the test. As a consequence, we decided to ask the users to explain their thoughts and opinions about the application after the tests (see Data Collection Sheets in Usability Testing section).

- Made a separate data collection sheet for each tested user, since the test materials only contained a data collection table (see Usability Testing section).

- Made a separate user tasks document to list the benchmark tasks with bullet-points, so the user could see them while testing. This document was missing from the test plan. The tasks were only written in the data collection table, so they were not presentable to the user:  
<a href="../pdfs/feedback/user_task_list.pdf" target="_blank">User Task List</a>  

- Made several modifications to the benchmark tasks
    - Rephrased several tasks to add clarity.

    - Removed the “restart a song” task as this feature was not implemented in the prototype.

    - The original tasks did not specify which tasks should be done through voice commands, so we specified this where needed, i.e. any tasks that involved “play” or “pause” features, as these were the only voice commands we could perform Wizard of Oz techniques for during the tests. We thought this was important to include, as the core value proposition this application adds over existing products is the ease-of-use due to voice commands while transcribing. Had we not included these instructions, the users would have performed all the tasks without voice commands. 

- Used Wizard of Oz to perform the “Select song” task, by asking the user to search for their chosen song during the setup, in order to provide it to the examiners to play/pause during the testing. The user is not able to choose a song manually in the prototype due to its limitations, so this step would have been good to include in the Test plan.


Other critiques of the test plan:
- Although this is potentially more of a design problem: the user should have been informed of the voice command list. This knowledge was a prerequisite to performing the other benchmark tasks: so it should have been included in the test plan, since it was not made obvious in the design (perhaps due to a limitation). This could have been done by adding a task to look at the voice command dropdown, or by including this in the user’s briefing.  
Ideally, the test plan should have included some tables to guide us through the evaluation process. 


## Design Critique

#### Problem: Song selection process is unclear.

Solution: On the introduction page, add a “Select a song” label before the “Copy paste song url” instruction.

<br>

#### Problem: Lack of knowledge of voice-commands, and which commands can be done through mouse-commands only.

Solution: 
- Present the list of available voice commands on the user’s first session. This could be in the form of a list on the introduction page, or a pop-up on the main page. 

- Add some labels/tool-tip signifiers to show which mouse-UI correspond to which voice commands. Ex: when you hover over the play/pause button, it shows a tool-tip saying “You can say ‘Play’ instead of clicking this button.”

<br>

#### Problem: The “increment” and “rewind/skip” commands are similar and confusing. UI is unclear, whether voice commands or mouse can be used.

Solutions:
- Have the “Forward” and “Rewind” voice commands accept arguments. Ex: “Go forward 10 seconds”.

- The “change increment” button dropdown should be placed separately from the rewind/skip forward buttons in the UI, such that the user can click the “rewind” and “skip” buttons without clicking the dropdown.

<br>

#### Problem: Unclear/unnoticeable button labels

Solutions:
- “Go” button in Song Select
    - Have the application show a preview of the inputted URL song & the button label say “Continue with X song by Y author”
        - Allows to double check that the URL is the same as the one requested
        - Makes the user more conscious of what the button does with respect to the URL box

- “Add Loop/Marker”
    - Have the whole “Add Loop”/”Add Marker” forms appear in modals, which block the entire screen (dimmed background). 
        - This way, users know that they need to press the button to dismiss the modal and complete the Loop/Marker creation.
        - Also add a cancel or “X” for the modals to allow the user to dismiss the modal without having to complete creation. 

- Delete loop “X” button
    - The separation between each Loop in the list should be made more clear. This will allow the user to see that the “Delete” button corresponds to that Loop, in particular (have rectangle-border on Loop list-item).
    - The trashcan icon is more conventional than X.

- The color of the “Input/Output”, “Voice Commands” and “Help” buttons
    - Use darker colors, such as black.

<br>

#### Problem: Lack of button click & hover feedback.

Solution: On hover, apply either a color change in the button, or have it increase in size.  
On click, apply a different color change in the button.

<br>

#### Problem: Lack of timestamps

Solution: Add timestamps below the audio player

<br>

#### Recommendations for commands (voice and mouse-click):
- Allow user to change playback speed through voice command (currently only allowed by mouse-click)
- Allow user to change volume through mouse-click (currently only allowed by voice command)
- Add voice commands for adding a maker, similar to the ones for adding a loop. 
- Allow user to replay/restart a song, with both voice command and mouse-click
