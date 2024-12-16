function SectionInfoCode({ activeLang }) {
    return (
        <div className="card p-4 mx-auto">
            {activeLang ? (
                <>
                    <h3>{activeLang.title}</h3>
                    <p>{activeLang.description}</p>
                </>
            ) : (
                <h3>Nessun linguaggio selezionato</h3>
            )}
        </div>
    );
}
export default SectionInfoCode;