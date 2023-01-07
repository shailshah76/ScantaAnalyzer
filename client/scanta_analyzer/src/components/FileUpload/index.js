import { useState } from 'react';
import axios from 'axios';
import './style.css';
import { POS } from '../POS'

export const FileUpload = ({}) => {

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
            <form method="post" action="#" id="#" onSubmit={onSubmit}>
                <div class="form-group files">
                    <label>Upload Your File </label>
                    <input type="file" 
                    onChange = {onInputChange}
                    class="form-control" multiple=""/>
                </div>
                <button>Submit</button>
            </form>
            {response != null && <POS resp={response}/>}
        </div>
    )
};
