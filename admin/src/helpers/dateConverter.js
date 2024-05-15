export function convertToDateOnly(dateString) {
    // Create a new Date object from the input date string
    const date = new Date(dateString);

    // Extract the year, month, and day from the Date object
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
    const day = String(date.getUTCDate()).padStart(2, '0');

    // Construct the desired date format
    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
}
