import useFetchStudios from "../hooks/StudioHook";

const StudioList = () => {
    const { data } = useFetchStudios();

    return (
        <div>
            <div className="row mb-2">
                <h1>
                    List of Studios
                </h1>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((s) => (
                        <tr key={s.studioItemId}>
                            <td>{s.name}</td>
                            <td>{s.description}</td>
                            <td>{s.price}</td>
                            <td>{s.studioItemType}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>   
    )
}

export default StudioList;