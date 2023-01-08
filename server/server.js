const express = require('express');

const multer = require('multer');
const upload = multer({ dest: "uploads/" });

const pos = require('pos');

const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());

app.post("/upload", upload.single("file"), uploadFiles);

function uploadFiles(req, res) {
    console.log(req.body);
    console.log(req.file);
    // res.json({ message: "Successfully uploaded files" });
    res.json(fileParser(req.file.path));

}

function getPOS(posList, fileContent){

    // Processing the Data

    var words = new pos.Lexer().lex(fileContent);

    const noOfWords = words.length;

    var tags = new pos.Tagger()
    .tag(words)

    const posWords = tags.map( (tag) => {
        if(posList.includes(tag[1]))
            return tag[0];
    }).filter((item) => item != undefined)

    const posPercent = ((posWords.length)/noOfWords * 100).toFixed(2);
    // console.log("Noun Percentage = " + posPercent);

    return posPercent;

}

function fileParser (filePath) {


    //Read the File
    let content = fs.readFileSync(filePath, 'binary');  

    // pos tagging ->

    // NN, NNP, NNPS, NNS -> Nouns
    // RB, RBR, RBS, WRB -> Adverb
    // start with VB -> Verb
    // PP$, PRP, WP -> Pronoun

    const nounTag = ["NN", "NNP", "NNPS", "NNS"];
    const adverbTag = ["RB", "RBR", "RBS", "WRB"];
    const verbTag = ["VB", "VBD", "VBG", "VBN", "VBP", "VBZ"];
    const adjectiveTag = ["JJ", "JJS", "JJR"];

    const nouns = getPOS(nounTag, content);
    const adverbs = getPOS(adverbTag, content);
    const verbs = getPOS(verbTag, content);
    const adjectives = getPOS(adjectiveTag, content);

    console.log("Noun Percentage = " + nouns);
    console.log("Adverb Percentage = " + adverbs);
    console.log("Verb Percentage = " + verbs);
    console.log("Adjective Percentage = " + adjectives);

    const response = {
        'Noun': nouns, 
        'Adverb': adverbs, 
        'Verb': verbs, 
        'Adjective': adjectives
    };

    // Remove File
    fs.unlinkSync(filePath, () => {
        console.log("File Removed");
    });

    return response;
}

app.listen(8000, () => {
    console.log("Server running on port 8000!");
})