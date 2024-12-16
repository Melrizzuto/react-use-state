function SectionInfoCode({ activeLang }) {
    return (
        <div className="card mt-4 mx-auto p-3">
            <h2>{activeLang.title}</h2>
            <p>{activeLang.description}</p>
        </div>
    );
}

export default SectionInfoCode;