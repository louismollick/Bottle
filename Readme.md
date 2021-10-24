# Bottle
## ECSE424 Group 11 - Fall 2021

#### Notebook: 
http://www.cim.mcgill.ca/~jer/courses/hci/project/2021/www.cs.mcgill.ca/~lmolli/hci/notebook/

#### Team members:
- Chenxi Li
- Misha Jehangir 
- Louis Mollick

### Getting started
- `git clone <this repo>`
- `cd Bottle`
- `npm i`
- `npm start`
- This should open a control panel on http://localhost:19002/ -- lots of options, but you should eventually see a QR code in bottom left.
- Now on your smartphone, go download the "Expo Go" application (iOS and Android): https://expo.dev/client
- Once the app is downloaded, open your smartphone's camera and scan the QR code. It should prompt you to open a link in Expo Go.
- Use the app, glhf

### Todo (as of 19/10/2021)
- ListenTagSelect:
    - make checkbox list of different feelings, save in component state.
    - pass state "Listen" screen through the navigation.navigate('Listen', < put state here >) when the user clicks "Next" button.
- Listen:
    - receive tags from previous screen (useEffect hook) & store in component state.
    - add audio files to app, load the correct one into component depending on tag
    - play/pause button
    - nextBottle button does a little animation & either plays the same recording again, or says "No more bottles for those tags" and sends user back to the tag selection screen.
- Say:
    - Figure out how to request microphone permissions on phone
    - When "Start recording" is pressed, start the recording, display "Stop recording" button and remove back button
    - When "Stop recording" is pressed, display "Cancel", "Redo", "Next" and "Play back" buttons.
    - "Cancel" button should send back to home & wipe the stack (exactly like "Home" button on Listen screen)
    - "Redo" should discard the stored recording, display "Start recording" button
    - "Play back" should play the temporary recording, and have same Play/Pause functionality as Listen screen
    - "Next" does navigation.navigate('SayTagSelect') -- though doens't need to do anything else really rn
- SayTagSelect:
    - Have one dropdown/select=checkbox list of different feelings "Select feelings..."
    - Have button "Add another feeling" that adds another dropdown/select=checkbox component under it, up to 5-ish
    - Doesn't need to save to state right now


