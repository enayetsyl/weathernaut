export function convertTimestampToDateTime(timestamp) {
  const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
  const hours = ('0' + date.getHours()).slice(-2); // Add leading zero if needed
  const minutes = ('0' + date.getMinutes()).slice(-2); // Add leading zero if needed
  const seconds = ('0' + date.getSeconds()).slice(-2); // Add leading zero if needed
  return `${hours}:${minutes}:${seconds}`;
}

// Example usage:
const timestamp = 1711965961;
const dateTime = convertTimestampToDateTime(timestamp);
console.log("Converted Date and Time:", dateTime);