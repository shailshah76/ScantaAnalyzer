import { useState } from 'react';
import * as React from 'react';
import axios from 'axios';
import { POS } from '../POS'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import { Card } from '@mui/material';

export const FileUpload = () => {

    const [file, setFile] = useState();
    const [response, setResponse] = useState(null);

    const onInputChange = (e) => {
        console.log(e.target.files);
        setFile(e.target.files[0]);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append('file', file);

        axios.post('//localhost:8000/upload', data)
            .then((res) => {
                console.log("Success");
                console.log(res.data);
                setResponse(res.data);
            })
            .catch((e) => {
                console.error("Error", e);
            })

    }

    return (
        <div>
            <br/>
            <Typography variant="h3" gutterBottom>
                Part-Of-Speech Tagging
            </Typography>
            <Typography variant="h6" gutterBottom>
                This app takes in an input text file from the User and sends the file to server for POS analysis.<br/>
                The Server processes the file and tags nouns, adjectives, verbs etc using 'pos' library.<br/>
                After tagging the various parts of speech, the server calculates the percentage of each pos, <br/>
                by dividing the count of particular pos by the total no.of words. <br/>
                The server then sends the response back to the client and the client displays it in the browser.<br/>
            </Typography>
            <form method="post" action="#" id="#" onSubmit={onSubmit}>
                <Card variant="outlined" style={{
                            borderRadius: 5,
                            backgroundColor: "#E7AB79",
                            fontSize: "18px"
                        }}>
                    <React.Fragment>
                        <CardContent>
                            <Typography variant="h4" component="div">
                                Kindly upload the Text File for Part-of-Speech(POS) analysis
                            </Typography>
                            <br/>
                            <Button
                                variant="contained"
                                component="label"
                                style={{
                                    borderRadius: 10,
                                    backgroundColor: "#4C3A51",
                                    fontSize: "15px"
                                }}
                                >
                                    Upload File
                                <input
                                    type="file"
                                    hidden
                                    onChange = {onInputChange}
                                />
                            </Button>
                        </CardContent>
                    </React.Fragment>
                </Card>
                <br/>
                <Button type="submit" variant="contained" style={{
                        borderRadius: 10,
                        backgroundColor: "#4C3A51",
                        fontSize: "20px"
                    }}>Submit
                </Button>
            </form><br/>
            {response != null && <POS resp={response}/>}
        </div>
    )
};
