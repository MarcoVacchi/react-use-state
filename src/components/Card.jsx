function Card({ click }) {
    console.log(click)
    return (
        <>
            <div className="container mt-5 border border-black">
                <div>{click ? click.title : 'NESSUN LINGUAGGIO SELEZIONATO'}</div>
                <div>{click ? click.description : ''}</div>
            </div>
        </>
    )
}

export default Card