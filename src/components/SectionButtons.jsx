function SectionButtons({ langs }) {
    return (
        <div className="d-flex justify-content-center flex-wrap" >
            {langs.map((lang) => (
                <button key={lang.id} className="btn btn-primary m-2">
                    {lang.title}
                </button>
            ))}
        </div>
    );
}

export default SectionButtons;