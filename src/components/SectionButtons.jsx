function SectionButtons({ langs, setActiveLang, activeLang }) {
    //controllo per selezionare e deselezionare il linguaggio
    const handleButtonClick = (lang) => {
        if (activeLang && activeLang.id === lang.id) {
            setActiveLang(null);
        } else {
            setActiveLang(lang);
        }
    };

    return (
        <div className="d-flex justify-content-center flex-wrap">
            {langs.map((lang) => (
                <button
                    key={lang.id}
                    className={`btn m-2 ${activeLang && activeLang.id === lang.id ? "btn-warning" : "btn-primary"}`}
                    onClick={() => handleButtonClick(lang)}
                >
                    {lang.title}
                </button>
            ))}
        </div>
    );
}

export default SectionButtons;