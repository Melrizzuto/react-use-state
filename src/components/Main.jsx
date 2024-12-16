import SectionButtons from "./SectionButtons";
import SectionInfoCode from "./SectionInfoCode";
import languages from "../data/languages";

function Main() {

    return (
        <main className="container d-flex justify-content-center flex-column my-4">
            <SectionButtons
                langs={languages}
            />
            <SectionInfoCode langs={languages} />
        </main>
    );
}

export default Main;