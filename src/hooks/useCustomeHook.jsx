import { useEffect, useState } from "react";

const useCustomHook = (Json) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
        try {
        // Simula la obtención de datos de forma asíncrona
            const response = await new Promise((resolve) => setTimeout(() => resolve(Json), 1500));

            setData(response);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
        };

        fetchData();
    }, [Json]);

    return { data, loading, error };
};

export default useCustomHook;
