export const handleErrorResponse = (error, message, statusCode = 500) => {
    console.error(message, error);
    return new Response(
        JSON.stringify({ success: false, message }),
        {
            status: statusCode,
            headers: { "Content-Type": "application/json" },
        }
    );
};
