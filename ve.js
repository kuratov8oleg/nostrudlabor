function formatUTCHour12(d, p) {
    const options = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'UTC',
        timeZoneName: 'short'
    };
    
    return d.toLocaleString(p, options);
}

// Example usage:
const date = new Date();
const formattedTime = formatUTCHour12(date, 'en-US');
console.log(formattedTime); // Example output: "4:30 PM GMT"
