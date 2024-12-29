type ObjectDisplayProps = {
    wish: Record<string, any>;
};

function Wish({ wish }: ObjectDisplayProps) {
    return (
        <div>
            URL: <a href={wish.externalUrl} target="_blank" rel="noopener noreferrer">{wish.externalUrl}</a> <br />
            Notes: {wish.notes}<br/>
            Quantity: {wish.qtyRequested}
        </div>
    );
}

export default Wish;