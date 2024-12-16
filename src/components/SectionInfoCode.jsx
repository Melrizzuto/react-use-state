function SectionInfoCode({ langs }) {
    return (
        <div className="card mt-4 mx-auto p-3">
            <h2>{langs.title}</h2>
            <p>{langs.description}</p>
        </div>
    );
}

export default SectionInfoCode;