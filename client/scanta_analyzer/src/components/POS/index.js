

export const POS = ({resp}) => {

    return(
        <div>
            <ul>POS Tagging Answers
                <li>Noun: {resp["Noun"]}%</li>
                <li>Verb: {resp["Verb"]}%</li>
                <li>Adverb: {resp["Adverb"]}%</li>
                <li>Adjective: {resp["Adjective"]}%</li>
            </ul>

        </div>
    )

}