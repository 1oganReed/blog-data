export async function onRequestGet(context) {
    try {
        const apiKey = context.env.API_KEY;

        const response = await fetch(
            "https://true-blogger-api.app/api/v1",
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            }
        );

        const data = await response.json();

        return Response.json(data, {
            status: response.status
        });

    } catch (error) {
        return Response.json(
            { error: "Unable to retrieve API data." },
            { status: 500 }
        );
    }
}