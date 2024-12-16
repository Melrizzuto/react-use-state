function SectionButtons({ langs, setActiveLang, activeLang }) {
    return (
        <div className="d-flex justify-content-center flex-wrap" >
            {langs.map((lang) => (
                <button key={lang.id} className={`btn m-2 ${activeLang.id === lang.id ? "btn-warning" : "btn-primary"
                    }`} onClick={() => setActiveLang(lang)}>
                    {lang.title}
                </button>
            ))}
        </div>
    );
}

export default SectionButtons;