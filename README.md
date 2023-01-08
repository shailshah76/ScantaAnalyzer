## Start the Application

1. Clone the repo from github.
2. Move the folder ScantaAnalyzer/client/scanta_analyzer/ and run the command 'npm install', to install all the dependencies
3. Similarly move to ScantaAnalyzer/server/ and run the command 'npm install', to install all the dependencies
4. Start the frontend server using npm start command in client/scanta_analyzer
5. Start the backend server using npm start command in server/

The app is now started and can be tested, by uploading a .txt file. 

<u>Note:</u> The processing may take some time at the server (backend), so the response may take time to arrive. Currently there is no processing indicator in the app. 



#### <b>POS Tagging technique</b>

I have used 'pos' library to tag various parts of speech. It returns a list with 2 entries containing the type of pos and the word.
I mapped all the Nouns, Adverbs, Verbs, Adjectives and then counted the no.of words of each type to calculate the percentage in the txt file.