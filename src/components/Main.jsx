import { useState } from "react";
import SectionButtons from "./SectionButtons";
import SectionInfoCode from "./SectionInfoCode";
import languages from "../data/languages";

function Main() {
    const [activeLang, setActiveLang] = useState(languages[0])

    return (
        <main className="container d-flex justify-content-center flex-column my-4">
            <SectionButtons
                langs={languages}
                setActiveLang={setActiveLang}
                activeLang={activeLang}
            />
            <SectionInfoCode
                langs={languages}
                activeLang={activeLang} />
        </main>
    );
}

export default Main;